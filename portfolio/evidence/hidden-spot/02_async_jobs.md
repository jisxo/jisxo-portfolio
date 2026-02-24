# 02_async_jobs

## Async Job Flow (Redis + RQ)

Hidden Spot은 크롤링/파싱/분석(LLM) 등 요청 처리 시간이 길어질 수 있는 작업을 HTTP 요청-응답 흐름에서 분리하기 위해 **Redis + RQ(Worker/Queue)** 기반 비동기 구조를 사용했습니다. API는 작업을 생성하고(`POST /jobs`), 상태를 조회(`GET /jobs/{job_id}`)하는 방식으로 설계했습니다.

<!-- 내부: apps/* 기준으로 코드 확인 완료. backend/ 레거시 제외. -->

---

## Confirmed Implementation (Code-backed)

### 1) Job enqueue (API)
- `POST /jobs`는 `create_job`에서 `_enqueue_job`를 호출하여 **RQ enqueue**를 수행합니다.
- enqueue 타깃 함수는 문자열로 지정된 **`apps.worker.tasks.process_job`** 입니다.
- enqueue 시 `job_id = run_id`로 지정되며, 응답의 `job_id`는 `rq_job.id`를 사용합니다.  
  → 현재 구현에서는 **`job_id == run_id`** 로 동작합니다.

### 2) Job status source (DB + Redis)
- `GET /jobs/{job_id}`는 먼저 **PostgreSQL**에서 `run_id = job_id`로 **`store_snapshots`**를 조회합니다.
- 동시에 Redis에서 **RQ 상태(`Job.fetch`)**도 조회하여 응답용 `state`를 계산합니다.
- 초기 상태 `queued`는 **API가 enqueue 전에** `store_snapshots`에 먼저 저장합니다(예: progress=0).

### 3) Worker status progression
Worker는 작업 진행 중 `store_snapshots`를 UPDATE하며 아래 단계로 상태를 갱신합니다.

- `crawling → crawled → parsing → parsed → analyzing → embedding → completed`
- 실패 시: `failed`

---

## High-level Flow

### Text Flow (print/PDF friendly)
```text
1) Client -> POST /jobs
2) API: store_snapshots에 queued 기록(run_id 생성/저장) + RQ enqueue (job_id=run_id)
3) Client <- job_id(=run_id)
4) Worker: apps.worker.tasks.process_job 실행
5) Worker: 단계별로 store_snapshots 상태 갱신 + 산출물 저장(Postgres/MinIO)
6) Client -> GET /jobs/{job_id}: DB snapshot + Redis RQ 상태를 함께 조회하여 상태 응답
```

### Diagram
```mermaid id="qm7trn"
flowchart LR
  A[Client] --> B[POST /jobs<br/>FastAPI create_job]
  B --> C[(Postgres store_snapshots<br/>queued 기록)]
  B --> D[enqueue<br/>RQ Queue (Redis)<br/>task=apps.worker.tasks.process_job]
  D --> E[Worker<br/>python -m apps.worker.worker]
  E --> C2[(Postgres store_snapshots<br/>stage/status 업데이트)]
  E --> F[(MinIO<br/>bronze/silver/gold/artifacts)]
  E --> G[(Postgres<br/>analysis/reviews/embeddings/stores)]
  A --> H[GET /jobs/{job_id}]
  H --> C2
  H --> I[Redis RQ Job.fetch]
```

---

## Queue / Worker Runtime

- **Queue name**: `RQ_QUEUE` 환경변수 (기본값: `hidden_spot`)
- **Redis URL**: `REDIS_URL` (기본값: `redis://localhost:6379/0`)
- **Worker entry**: Docker에서 `python -m apps.worker.worker`
  - 실행 코드에서 `worker.work(with_scheduler=True)`로 동작

---

## Storage & Outputs (as implemented)

- **PostgreSQL**: `store_snapshots`(상태/진행), `analysis`, `reviews`, `embeddings`, `stores` 등
- **MinIO Data Lake**: `bronze / silver / gold / artifacts` 레이어 사용  
  (경로/prefix는 환경에 따라 다르며, 문서에서는 개념 레벨로만 표기)

---

## Interview Defense (면접 방어 포인트)

- **job_id = run_id**: API와 Worker, Data Lake/DB 산출물을 단일 식별자로 연결해 추적성을 높임.
- **DB + Redis 이중 조회**: DB는 서비스 상태의 Source of Truth(`store_snapshots`), Redis는 큐 런타임 상태(RQ)를 보조적으로 활용.
- **단계별 상태 갱신**: `crawling → parsing → analyzing → embedding → completed/failed`로 진행률을 명시해 운영/디버깅 가능.
