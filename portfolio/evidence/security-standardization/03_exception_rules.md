# 03_exception_rules

> 대외비 보호를 위해 식별 정보는 제거했으며, 구조와 원칙을 익명화하여 설명합니다.

## Exception Handling Rules (Mail / Attachment)

| Case | Symptom | Handling | Re-run behavior |
|---|---|---|---|
| 첨부 파일명 슬롯(10개) 초과 | Mail 메타에 첨부 파일명이 최대 10개까지만 저장됨 | Mail 테이블은 UI/메타 목적(최대 10개)으로 유지하고, 분석은 Attachment 테이블을 기준으로 수행 | Upsert (Attachment unique: `attachment_id`) |
| 압축파일 내부 문서 확장 | Mail 메타에서는 압축파일 1건으로 저장됨 | 분석 단계에서 압축 내부 파일을 모두 추출하여 개별 Attachment 레코드로 확장 | Upsert (Attachment unique: `attachment_id`) |
| OCR 텍스트 누락/제한 | OCR 텍스트가 없거나, 최대 1000자 제한 존재 | OCR 텍스트는 최대 1000자 저장(정책). 필요 시 `ocr_text_len`로 보조 | Upsert (Attachment unique: `attachment_id`) |
| 중복 재유입 | 동일 `mail_id` / `attachment_id`가 재유입 가능 | 유니크 기준으로 upsert하여 중복 적재 방지 | Upsert (Mail unique: `mail_id`, Attachment unique: `attachment_id`) |
| 첨부 식별자/파일명 정규화 | `attachment_id`가 `난수_문서명` 형태여서 파일명/확장자 처리 필요 | `file_name_norm`, `file_type` 등으로 정규화하여 후속 처리(분석/검색) 일관성 확보 | Upsert (Attachment unique: `attachment_id`) |

## Notes
- 재처리 정책은 **upsert**이며, 중복 방지 기준은 **Mail=`mail_id`, Attachment=`attachment_id`** 입니다.
- Mail 테이블의 첨부 파일명 컬럼(attachment_filename1~10)은 메타 정보(최대 10개)이며, 분석은 Attachment를 기준으로 수행합니다.