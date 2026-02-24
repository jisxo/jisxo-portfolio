# 03_datalake_layout

## Data Lake Layout (MinIO / S3-compatible)

Hidden Spot은 크롤링 기반 파이프라인의 **재처리(reprocess)**와 **라인리지(lineage)**를 위해 오브젝트 스토리지를 데이터 레이크로 사용합니다. 레이크는 처리 단계에 따라 **Bronze / Silver / Gold / Artifacts** 레이어로 분리하며, 모든 산출물은 동일한 `run_id`로 추적됩니다.

<!-- 내부: 개인 프로젝트(공개 데이터 크롤링). 토큰/URL 등 민감 설정은 문서에서 제외 -->

---

## Layer Definition (1-page)

| Layer | 목적 | 포맷 예시 | 핵심 포인트 |
|---|---|---|---|
| **Bronze** | 원본 보존 (재수집 없이 재처리 가능) | `html.gz`, `json` | raw HTML/메타를 그대로 저장 |
| **Silver** | 정규화/품질검증 이후의 구조화 데이터 | `jsonl` | 분석/LLM 입력에 적합한 형태로 정리 |
| **Gold** | 최종 분석 결과 + 라인리지 메타 | `json` | 결과와 함께 run_id/수집일/스냅샷 메타 포함 |
| **Artifacts** | 프롬프트/청크/해시/중간 산출물 | `json`, `txt` 등 | LLM 파이프라인 재현성/디버깅 지원 |

---

## Path Conventions (as implemented in README)

> 공통 규칙: 모든 레이어 경로에 `run_id`를 포함하여 한 실행(run)의 산출물을 묶어서 추적합니다.

### Bronze (raw)
- `bronze/naver_map/store_id={store_id}/collected_at={ISO}/run_id={run_id}/reviews.html.gz`
- `bronze/naver_map/store_id={store_id}/collected_at={ISO}/run_id={run_id}/store_meta.json`

### Silver (normalized reviews)
- `silver/reviews/store_id={store_id}/dt={YYYY-MM-DD}/run_id={run_id}/reviews.jsonl`

### Gold (final analysis)
- `gold/analysis/store_id={store_id}/dt={YYYY-MM-DD}/run_id={run_id}/analysis.json`

### Artifacts (LLM reproducibility)
- `artifacts/.../run_id={run_id}/...`  
  (예: prompt, chunk, hash index 등 실행 재현에 필요한 중간 결과)

---

## Why this layout (면접 방어 포인트)

- **Reprocess-friendly**: Bronze에 원본을 보존해 파싱/요약 로직이 바뀌어도 재수집 없이 재처리가 가능합니다.
- **Traceability**: `run_id`로 Bronze/Silver/Gold/Artifacts를 연결해 “한 번의 실행” 단위로 실패 구간/원인 추적이 가능합니다.
- **Separation of concerns**: Serving DB(PostgreSQL)에는 조회/검색에 필요한 결과를 upsert하고, Lake에는 원본/중간/최종 산출물을 보관합니다.

---

## Quick Snapshot (directory view)

```text
bronze/
  naver_map/store_id=.../collected_at=.../run_id=.../reviews.html.gz
  naver_map/store_id=.../collected_at=.../run_id=.../store_meta.json
silver/
  reviews/store_id=.../dt=YYYY-MM-DD/run_id=.../reviews.jsonl
gold/
  analysis/store_id=.../dt=YYYY-MM-DD/run_id=.../analysis.json
artifacts/
  .../run_id=.../(prompts|chunks|hashes|indexes|...)
```
