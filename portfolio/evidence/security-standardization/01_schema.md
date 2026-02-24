# 01_schema

## Mail Table (Canonical - selected columns)
| 컬럼 | 타입 | 설명 |
|---|---|---|
| mail_id | string | 메일 단위 식별자 |
| event_time | timestamp | 표준 이벤트 시각(ISO8601) |
| sender_hash | string | 발신자 식별값 익명화 해시 |
| subject | string | 메일 제목 |
| attachment_filename1 ~ attachment_filename10 | string/null | 첨부 파일명 슬롯(고정 10개, UI/메타용)
| schema_version | string | 스키마 버전 고정값 |
| dept | string | 부서 |
| manager_id | string | 직속상사 식별자 |

## Attachment Table (Canonical - selected columns)
| 컬럼 | 타입 | 설명 |
|---|---|---|
| mail_id (FK) | string | Mail Table 조인 키 |
| attachment_id | string | 원천 고유 첨부 ID (전역 유니크) |
| file_name_norm | string | 정규화된 파일명 |
| file_type | string | 파일 형식 |
| ocr_text | string | OCR 본문(최대 1000자 저장) |
| ocr_text_len | int/null | OCR 원문 길이(선택) |

## Join / Policy
- Join key = `mail_id`
- Merge cardinality = `MAIL 1:N ATTACHMENT`
- Re-run = upsert (Mail unique: `mail_id`, Attachment unique: `attachment_id`)

## 운영 원칙
- Mail 메타는 UI/메타 목적(최대 10개 파일명)이며, 분석은 Attachment를 Source of Truth로 사용한다.
- 첨부가 10개를 초과하면 Mail 메타 컬럼에는 모두 저장되지 않을 수 있으며 초과분은 Attachment에서 관리한다.
- 압축파일은 메일 메타에서는 첨부 1건으로 취급하되, 분석 단계에서는 내부 파일 전체를 추출해 Attachment 레코드로 확장한다.

## Example Records (Synthetic)
### Mail (sample)
```json
{
  "mail_id": "mail_20250224_9f13a",
  "event_time": "2025-02-24T10:15:32+09:00",
  "sender_hash": "u_042_hash_8c1a",
  "subject": "사외 발송 메일 제목(마스킹)",
  "attachment_filename1": "a81f2_report.pdf",
  "attachment_filename2": "b771c_docs.zip",
  "attachment_filename3": null,
  "attachment_filename4": null,
  "attachment_filename5": null,
  "attachment_filename6": null,
  "attachment_filename7": null,
  "attachment_filename8": null,
  "attachment_filename9": null,
  "attachment_filename10": null,
  "schema_version": "v1",
  "dept": "dept_07",
  "manager_id": "mgr_008"
}
```

### Attachment (sample) — normal document
```json
{
  "mail_id": "mail_20250224_9f13a",
  "attachment_id": "att_a81f2_report.pdf",
  "file_name_norm": "report.pdf",
  "file_type": "application/pdf",
  "ocr_text": "…(마스킹; OCR 텍스트는 최대 1000자 저장)…",
  "ocr_text_len": 742
}
```

### 첨부 (예시) — 압축파일 내부 문서 확장
> 메일 메타에서는 압축파일 1건으로 저장되지만, 분석 단계에서는 압축 내부 파일을 개별 Attachment 레코드로 확장합니다.
```json
[
  {
    "mail_id": "mail_20250224_9f13a",
    "attachment_id": "att_b771c_docs.zip::doc_01",
    "file_name_norm": "doc_01.docx",
    "file_type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "ocr_text": "…(마스킹; OCR 텍스트는 최대 1000자 저장)…",
    "ocr_text_len": 615
  },
  {
    "mail_id": "mail_20250224_9f13a",
    "attachment_id": "att_b771c_docs.zip::sheet_01",
    "file_name_norm": "sheet_01.xlsx",
    "file_type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    "ocr_text": "…(마스킹; OCR 텍스트는 최대 1000자 저장)…",
    "ocr_text_len": 488
  },
  {
    "mail_id": "mail_20250224_9f13a",
    "attachment_id": "att_b771c_docs.zip::note_01",
    "file_name_norm": "note_01.hwp",
    "file_type": "application/x-hwp",
    "ocr_text": "…(마스킹; OCR 텍스트는 최대 1000자 저장)…",
    "ocr_text_len": 301
  }
]
```
---
대외비 보호를 위해 식별 정보는 제거했으며, 구조와 원칙을 익명화하여 설명합니다.
