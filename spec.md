# Jeong Ji-seo (Data Engineer)

> **"From Manual Chaos to Automated Order."**
> 수동 업무의 혼돈을 자동화의 질서로 바꾸는 4년 차 데이터 엔지니어 정지서입니다.

---

## 1. About Me

비효율적인 반복 업무를 기술로 혁신하는 데이터 엔지니어입니다. **Python**과 **Airflow**, **Docker**를 주무기로 견고한 데이터 파이프라인을 구축하고, 대용량 로그 분석부터 NLP 기반의 이상징후 탐지까지 폭넓은 데이터 문제를 해결해왔습니다.

업무에서는 복잡한 비정형 데이터를 정제해 가치를 발굴하는 **'냉철한 엔지니어'**이지만, 일상에서는 **[숨겨진 맛집 데이터를 발굴하고 공유하는 미식가]**로서 동료들과 소통하는 것을 즐깁니다. 수천 줄의 로그 뒤에 숨은 '사람의 의도'를 읽어내듯, 기술 너머의 비즈니스와 동료를 먼저 생각합니다.

* **Email**: jisxo@kakao.com
* **Role**: Data Engineer, Analytics Engineer
* **Domain Interest**: Security, Commerce, Fintech

---

## 2. Technical Skills

| Category | Skills |
| :--- | :--- |
| **Data Engineering** | **Python**, **Apache Airflow**, **Splunk**, Pandas, NumPy, Logpresso |
| **DevOps & Infra** | **Docker**, Linux, Git/GitHub |
| **Web & API** | Amazon SP-API, Amazon ADs-API, Django |
| **Analysis & AI** | NLP (TF-IDF, Vectorization), Anomaly Detection, SQL |

---

## 3. Work Experience

**씨에스리 (CSLEE)** | *Data Engineer / Senior Associate* | 2021.03 ~ 2025.10
* **L사 통신사 (Freelance)**: 보안 솔루션 운영 및 로그 처리 최적화 (2025.04 ~ 2025.10)
* **L사 제조사 (SI)**: 내부정보 유출 방지 및 이상징후 탐지 시스템 구축 (2021 ~ 2022)
* **신지모루 (SI)**: Amazon 글로벌 광고 자동화 RPA 구축 (2023)
* **기타**: 서울시, 유통사 데이터 분석 및 RPA 프로젝트 다수 수행

---

## 4. Key Projects

### 🚀 글로벌 10개국 Amazon 광고 입찰(Bidding) 자동화 RPA
* **Role**: PL (Project Leader) & Main Developer
* **Keywords**: Python, Amazon SP-API, Optimization Algorithm, Automation
* **Description**:
    * **[Situation]** 10개국 마켓의 수천 개 키워드 입찰가를 담당자가 매일 수동으로 관리하여 일 3시간 이상 소요 및 휴먼 에러 발생.
    * **[Action]** Amazon SP-API 및 ADs-API를 연동하여 ACoS(광고 효율) 기반 입찰가 조정 및 신규 키워드 발굴(Mining) 프로세스를 **100% 자동화**.
    * **[Result]** 일일 반복 업무 시간을 **150시간 → 2.5시간(98% 단축)**으로 줄임.

### 🛡️ L사 제조 핵심 기술 유출 방지를 위한 비정형 파이프라인 구축
* **Role**: Data Engineer (Airflow 파이프라인 설계 및 구축)
* **Keywords**: Apache Airflow, NLP, JSON Partitioning, Context Analysis
* **Description**:
    * **[Situation]** 퇴사 예정자의 기술 유출 징후를 포착하기 위해 사내 메신저·이메일 등 대용량 비정형 텍스트를 분석해야 했으나, 자동화 체계가 없고 벡터화 처리 시 **성능 병목(Bottleneck)** 발생.
    * **[Action]** **Apache Airflow**를 Zero-base에서 도입하여 전처리-학습 파이프라인을 구축하고, 거대한 JSON 데이터를 **분할(Partitioning)** 처리하여 메모리 이슈 해결. '전후 2문장 문맥' 기반의 정교한 데이터셋 구축.
    * **[Result]** 복잡한 텍스트 처리 워크플로우를 **100% 자동화**하고, 데이터 지연(Lag) 없는 실시간에 가까운 탐지 체계 완성.

### 🔒 L사 보안 로그 통합 및 데이터 무결성 확보
* **Role**: Data Engineer (ETL 개발)
* **Keywords**: Python, ETL, Data Deduplication, Regex Parsing
* **Description**:
    * **[Situation]** 5종 이상의 이기종 보안 장비 로그 수집 시 네트워크 이슈로 인한 **데이터 중복(Doubling)** 및 포맷 불일치 발생.
    * **[Action]** 로그별 Unique Key 기반의 **중복 제거(De-duplication) 로직** 개발 및 정규표현식(Regex)을 활용한 **통합 스키마 표준화** 수행.
    * **[Result]** 원천 데이터와 적재 데이터 간 **정합성 100%** 달성 및 오탐 최소화.

### ⚡ L사 통신사 대용량 로그 처리 최적화 (Freelance)
* **Role**: Data Engineer & Operator
* **Keywords**: Splunk, Performance Tuning, Chunk Processing, TF-IDF
* **Description**:
    * **[Situation]** 일 수백만 건의 DRM 로그 처리 로직 비효율로 **2시간 이상의 지연** 발생 및 AI 학습 데이터 부재.
    * **[Action]** 일괄 처리 방식을 **1,000개 단위 청크(Chunk) 분할 처리**로 변경하여 속도 최적화 및 **TF-IDF 기반**의 AI 학습용 라벨링 데이터셋 구축.
    * **[Result]** 데이터 병목 현상을 해결하여 처리 속도를 획기적으로 단축하고, AI 분석을 위한 데이터 기반 마련.

---

## 5. Education

* **동덕여자대학교** | 정보통계학과 (2014.03 ~ 2018.02)
* **해성국제컨벤션고등학교** | (2011.03 ~ 2014.02)

---

## 6. Core Competencies

1.  **Pipeline Engineering**: Airflow를 활용해 복잡한 의존성을 가진 배치를 설계하고, 'Zero-base'에서 안정적인 운영 환경을 구축할 수 있습니다.
2.  **Troubleshooting**: 대용량 데이터 처리 시 발생하는 성능 이슈(Memory, Latency)를 파티셔닝, 청킹 등의 기법으로 직접 해결합니다.
3.  **Data Quality Control**: 단순 수집을 넘어, 중복 제거 및 표준화를 통해 분석가와 모델이 바로 사용할 수 있는 'Clean Data'를 공급합니다.