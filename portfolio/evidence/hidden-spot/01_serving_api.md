# 01_serving_api

## Hidden Spot Serving API (FastAPI + Pydantic)

### Endpoint Contract
| Method | Endpoint | Purpose | Input Model | Output Model |
|---|---|---|---|---|
| GET | `/health` | 서비스 상태 확인 | - | 상태 객체 |
| POST | `/jobs` | 비동기 처리 작업 생성 | `JobCreateRequest` | `JobCreateResponse` (202) |
| GET | `/jobs/{job_id}` | 작업 상태/결과 조회 | path param | 스냅샷 dict (response_model 미지정) |
| GET | `/search/smart` | 확장 검색 조회 | query params | 검색 결과 객체 |
| GET | `/api/v1/restaurants` | 레스토랑 목록 조회 | query params | 목록 배열 |

### Request / Response Examples

#### POST `/jobs` Request (`JobCreateRequest`)
```json
{
  "url": "https://example.com/place/anon-001"
}
```

#### POST `/jobs` Response 202 (`JobCreateResponse`)
```json
{
  "job_id": "run_anon_001",
  "run_id": "run_anon_001",
  "store_id": "store_anon_001",
  "status": "queued"
}
```

#### GET `/jobs/{job_id}` Response 200 (snapshot payload)
```json
{
  "store_id": "store_anon_001",
  "collected_at": "2026-02-24T01:02:03Z",
  "run_id": "run_anon_001",
  "url": "https://example.com/place/anon-001",
  "bronze_path": "s3://bucket-bronze/anon/meta.json",
  "silver_path": "s3://bucket-silver/anon/reviews.jsonl",
  "gold_path": "s3://bucket-gold/anon/analysis.json",
  "status": "completed",
  "progress": 100,
  "error_reason": null,
  "error_type": null,
  "error_stage": null,
  "evidence_paths_json": [],
  "created_at": "2026-02-24T01:02:03Z",
  "updated_at": "2026-02-24T01:05:10Z",
  "queue_status": "finished",
  "state": "completed",
  "evidence_paths": [],
  "minio_paths": [
    "s3://bucket-bronze/anon/meta.json",
    "s3://bucket-silver/anon/reviews.jsonl",
    "s3://bucket-gold/anon/analysis.json"
  ],
  "analysis_record_ids": [
    "run_anon_001"
  ],
  "analysis_id": "run_anon_001"
}
```

#### GET `/jobs/{job_id}` Response 404
```json
{
  "error": "job not found",
  "message": "job not found"
}
```

### API Notes
- `JobCreateRequest`는 `url` 또는 `source_url` 중 하나가 필요하다.
- `GET /jobs/{job_id}`는 `response_model`이 없으며 DB 스냅샷 dict를 그대로 반환한다.
- `state`, `queue_status`, `evidence_paths`는 조회 시점에 계산/정규화되어 추가된다.

### Docs
- TODO: add screenshot (`/docs`)

---
대외비 보호를 위해 식별 정보는 제거했으며, 구조와 원칙을 익명화하여 설명합니다.
