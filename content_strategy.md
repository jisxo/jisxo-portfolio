# Portfolio Content Strategy & Generation Prompts


이 문서는 개발자/데이터 엔지니어 포트폴리오 웹사이트의 각 섹션에 필요한 정보와, 이를 효과적으로 생성하기 위한 프롬프트 가이드를 제공합니다.

> **💡 수정 방법**: 이 파일의 내용을 수정하려면, 채팅창에 "Headline을 '...'로 바꿔줘" 또는 "Project 1의 Tech Stack에 'Kubernetes' 추가해줘"와 같이 구체적으로 요청해주시면 제가 바로 반영해 드립니다.


## 1. Landing Page (Home)
**위치**: `src/app/page.tsx`, `src/components/Hero.tsx`, `src/components/Skills.tsx`

메인 페이지는 방문자(채용 담당자)를 3초 안에 사로잡아야 합니다.

### 필요 정보 (Checklist)
- [x] **Headline (한 줄 소개)**: "Python과 Airflow로 멈추지 않는 데이터 파이프라인을 설계합니다."
- [x] **Short Bio (간단 소개)**: 비효율적인 반복 업무를 기술로 혁신하는 4년 차 데이터 엔지니어입니다. Python과 Docker, Airflow를 주무기로 견고한 데이터 파이프라인을 구축하고, 로그 분석부터 NLP 기반의 이상징후 탐지까지 폭넓은 데이터 문제를 해결해왔습니다. 현재는 데이터 엔지니어링을 넘어, 안정적인 서비스 운영을 위한 인프라 고도화와 풀스택 개발에 관심을 두고 끊임없이 성장하고 있습니다.
- [x] **Tech Stack (기술 스택)**:
    - **Languages**: Python, SQL, Shell Script
    - **Data Engineering**: Apache Airflow, Spark, Kafka (Concept), ETL Pipelines
    - **Infrastructure & DevOps**: Docker, Linux, CI/CD (Basic)
    - **Web & Others**: React, Next.js, RPA (UiPath/Custom)
- [x] **Links**: Email (jisxo@kakao.com), GitHub (Updating...), Blog (Updating...)
- [x] **Call to Action**: "프로젝트 포트폴리오 보기", "이력서 다운로드"

### 🤖 Content Generation Prompts

#### 1) 강렬한 헤드라인 생성
> "나는 [N]년차 [직무: 예) 데이터 엔지니어]이고, 주로 [핵심 기술: 예) Spark, AWS]를 다룹니다. 내 강점은 [강점: 예) 대용량 트래픽 처리 및 비용 최적화]입니다. 포트폴리오 메인 화면에 들어갈 임팩트 있는 영문/국문 헤드라인을 5가지 버전으로 만들어줘."

#### 2) 기술 스택 분류
> "나는 [Python, Java, Spark, Kafka, AWS, Docker, React, Next.js, Terraform]을 사용할 줄 알아. 이 기술들을 'Data Engineering', 'DevOps', 'Web Development' 같은 카테고리로 묶어서 보기 좋게 정리해줘."

---

## 2. Projects Page
**위치**: `src/app/projects/page.tsx`, `src/components/ProjectCard.tsx`

개발자의 실력을 증명하는 가장 중요한 섹션입니다.

### 필요 정보 (Checklist)
- [ ] **Project Title**: 명확한 프로젝트 이름.
- [ ] **One-Liner (요약)**: 프로젝트를 한 줄로 설명.
- [ ] **Thumbnail Image**: 프로젝트 스크린샷 또는 아키텍처 다이어그램 (데이터 직군은 다이어그램 추천).
- [ ] **Tech Tags**: 사용된 핵심 기술 (최대 5개).
- [ ] **Description (상세 설명)**: **STAR 기법** (Situation, Task, Action, Result) 적용.
    - 어떤 문제를 해결했는지?
    - 나의 기여도는?
    - **정량적 결과** (속도 50% 향상, 비용 30% 절감 등).
- [ ] **Links**: GitHub Repo, Live Demo (배포된 경우), 기술 블로그 포스팅 링크.

### 🤖 Content Generation Prompts

#### 1) 프로젝트 설명 (STAR 기법변환)
> "내가 한 프로젝트는 [프로젝트명]이야. [기술 스택]을 썼고, [문제 상황]을 해결하기 위해 만들었어. 결과적으로 [결과]를 얻었어. 이 내용을 채용 담당자가 매력을 느낄 수 있도록 STAR 기법을 사용하여, 수치를 강조한 3문장짜리 영어/한국어 설명으로 바꿔줘."

#### 2) 프로젝트 이미지 생성 (DALL-E / Midjourney 용)
> "데이터 파이프라인 아키텍처 다이어그램 이미지가 필요해. '현대적이고 미니멀한 스타일, 다크 모드, 파란색 네온 엑센트, 서버와 데이터베이스 아이콘이 연결된 추상적인 테크 이미지'를 그려줘."

---

## 3. About / Experience Page
**위치**: `src/app/about/page.tsx`

단순한 이력 나열보다 '성장 과정'과 '직무 전문성'을 보여줘야 합니다.

### 필요 정보 (Checklist)
- [x] **Work Timeline**:
    - **씨에스리 (CSLEE)** (2025.04 ~ 2025.10) | AI엔지니어링사업부 / 프리랜서
        - SecuXper AI 솔루션 운영 및 유지보수
    - **씨에스리 (CSLEE)** (2021.03 ~ 2025.02) | AI엔지니어링사업부 선임 / Data Engineer
        - **L사 보안 로그 분석 및 지능화 시스템 구축**: 이기종 로그 통합 및 이상징후 탐지 파이프라인 구축 
        - **유통사 데이터 분석 및 컨설팅**: 공공/유통 데이터 분석 및 인사이트 도출
        - **신지모루 RPA 개발**: 반복 업무 자동화 RPA 개발
    - **경찰청** (2019.09 ~ 2020.02) | 치안빅데이터정책담당관실 인턴
        - 치안 데이터 분석 보조 및 시각화
    - **패스트캠퍼스 / 씨에스리** (2018 ~ 2020) | 빅데이터 교육 기술 조교
        - 수강생 기술 멘토링 및 실습 환경 지원

- [x] **Education**:
    - **동덕여자대학교 정보통계학과** (2014.03 ~ 2018.02)
    - **해성국제컨벤션고등학교** (2011.03 ~ 2014.02)

- [x] **Key Achievements (Highlight)**:
    - **Process Automation**: 수작업 제로화 및 데이터 파이프라인 100% 자동화 달성.
    - **Problem Solving**: 대용량 데이터 처리 병목 현상 및 중복 적재 이슈 기술적 해결.
    - **Domain Expertise**: 보안 관제 도메인에 특화된 데이터 엔지니어링 및 이상징후 탐지 경험.

### 🤖 Content Generation Prompts

#### 1) 경력 기술서 다듬기
> "나는 [기간] 동안 [회사명]에서 [직무]로 일했어. 주로 한 일은 [A, B, C]야. 이 경력을 포트폴리오 타임라인에 넣을 건데, 단순한 업무 나열이 아니라 '성취'와 '해결 능력'이 돋보이는 3개의 불렛 포인트로 작성해줘. 가능하다면 수치를 포함해서 신뢰도를 높여줘."

#### 2) 자기소개 (Intro) 작성
> "나는 데이터를 통해 세상을 이해하는 것을 좋아하는 개발자야. [취미나 관심사]도 가지고 있어. 개발자로서의 전문성과 인간적인 매력이 동시에 드러나는 따뜻하면서도 프로페셔널한 톤의 300자 자기소개를 써줘."

---

## 4. 메타데이터 (SEO)
**위치**: `src/app/layout.tsx`, 각 페이지 `metadata` 객체

검색 엔진과 SNS 공유를 위해 필요합니다.

### 필요 정보
- [ ] **Title**: `정지서 | Data Engineer & Developer Portfolio`
- [ ] **Description**: 데이터 흐름을 설계하는 Data Engineer 정지서. 견고한 Pipeline 구축부터 시스템 Optimization까지, 비효율을 개선하고 안정적인 데이터 환경을 만든 기술 기록을 소개합니다.
- [ ] **Open Graph Image**: 카톡/슬랙 공유 시 나올 썸네일 (1200x630px).


## 5. My Projects (Fill this out)
프로젝트 정보를 아래 형식에 맞춰 작성해주시면, 코드로 바로 변환해드립니다. 필요한 만큼 복사해서 사용하세요.

### Project 1
- **Title**: L사, 보안 로그 분석 및 이상징후 탐지 파이프라인 구축
- **Summary (One-Liner)**: 사외 발송 메일 로그의 수집·전처리 과정을 100% 자동화하고, EDA를 통해 내부 유출 탐지 모델의 기초를 마련한 데이터 엔지니어링 프로젝트.
- **Tech Tags**: Python, Pandas, ETL Pipeline, Data Analysis (EDA), Anomaly Detection
- **Description (STAR)**:
  - **Situation/Task**: 매일 발생하는 대량의 사외 발송 메일 로그를 분석하여 정보 유출 징후를 포착해야 했으나, 정제된 데이터 수집 체계가 없어 수동 분석에 의존하는 비효율이 존재했습니다.
  - **Action**: Python 기반의 전처리 모듈을 직접 개발하여 기존 배치 솔루션과 연동시킴으로써 데이터 수집부터 가공까지의 전 과정을 100% 자동화하고, 시간/부서/키워드별 다차원 EDA를 수행하여 이상징후 탐지 룰(Rule) 설정을 위한 통계적 근거를 확보했습니다.
  - **Result**: 이를 통해 수동 데이터 추출에 소요되던 공수를 Zero화하여 분석 효율을 극대화했으며, 통계적 근거 기반의 정량적 탐지 룰(Rule)을 도출하여 보안 관제 고도화의 핵심 기반을 완성했습니다.

### Project 2
- **Title**: L사, 이기종 보안 로그 통합 및 이상징후 탐지 파이프라인 구축
- **Summary (One-Liner)**: 5종 이상의 이기종 보안 로그를 통합하는 ETL 파이프라인을 구축하고, 데이터 중복(Doubling) 문제를 기술적으로 해결하여 무결성 100%를 달성한 프로젝트.
- **Tech Tags**: Python, ETL Pipeline, Splunk, Data Standardization, Anomaly Detection
- **Description (STAR)**:
  - **Situation/Task**: DLP, 외부메일 등 5종 이상의 이기종 보안 로그를 통합 분석해야 했으나, 장비마다 상이한 로그 포맷과 데이터 전송 과정에서 발생하는 '데이터 중복 적재(Doubling)' 이슈로 인해 분석 신뢰도가 심각하게 훼손된 상황이었습니다.
  - **Action**: 로그별 Unique Key를 기준으로 중복을 제거하는 Python 기반 전처리 로직을 개발하여 데이터 정합성을 확보하고, 통합 스키마 설계 및 정규표현식(Regex) 파싱 모듈을 통해 비정형 로그를 표준 포맷으로 자동 변환하는 파이프라인을 구축했습니다. 또한, 부서별 업무 특성을 분석하여 탐지 임계치(Threshold)를 최적화했습니다.
  - **Result**: 이를 통해 원천 데이터와 적재 데이터 간의 **정합성(Integrity) 100%**를 달성했으며, 오탐(False Positive)을 최소화하여 관제 업무 효율을 높이고 향후 신규 장비 추가 시 즉시 대응 가능한 확장성 있는 데이터 구조를 완성했습니다.

### Project 3
- **Title**: L사, 핵심 기술 유출 방지를 위한 이직 징후 탐지 및 비정형 데이터 파이프라인 구축
- **Summary (One-Liner)**: 배터리 핵심 기술 유출을 막기 위해, 메신저·이메일 등 비정형 텍스트에서 이직 징후를 조기에 포착하는 Airflow 파이프라인을 구축하여 사전 대응 체계를 마련.
- **Tech Tags**: Apache Airflow, Python, NLP, ETL Pipeline, Performance Optimization
- **Description (STAR)**:
  - **Situation/Task**: 퇴사 예정자에 의한 핵심 기술 유출 위험이 높아짐에 따라, 사내 메신저(Teams)와 이메일 등 방대한 비정형 데이터를 분석해 이직 징후를 사전에 차단해야 했습니다. 하지만 기존 시스템은 자동화가 되어 있지 않았고, 대용량 텍스트 벡터화 처리 시 **성능 병목(Bottleneck)**이 발생했습니다.
  - **Action**: Apache Airflow를 도입하여 전 과정을 자동화 파이프라인으로 구축했습니다. 이 과정에서 AI 모델 학습을 위한 대용량 텍스트 벡터화(Vectorization) 수행 시 메모리 초과 및 속도 저하가 발생하자, 거대한 JSON 데이터를 작은 단위로 쪼개어 처리하는 파일 분할(Partitioning) 기법을 적용해 병목 현상을 기술적으로 해결했습니다. 또한 이직 징후 탐지를 위해 단순 키워드가 아닌 **'전후 2문장 문맥(Context)'**을 포함한 문장 학습데이터셋을 구축하여 탐지 정교성을 높였습니다.
  - **Result**: 이를 통해 텍스트 분석 범위를 확장하고 복잡한 워크플로우 운영을 100% 자동화했으며, 매일 발생하는 수만 건의 대화 데이터를 지연(Lag) 없이 처리하여 기술 유출 시도를 선제적으로 방어하는 보안 관제 체계를 완성했습니다.

### Project 4
- **Title**: L사, 통신사 대용량 보안 로그 처리 로직 최적화 및 AI 데이터셋 구축
- **Summary (One-Liner)**: 통신사의 대용량 보안 로그 처리 속도를 개선하기 위해 청크(Chunk) 단위 배치 로직을 적용하고, 이상징후 탐지 AI 모델을 위한 학습 데이터셋(TF-IDF)을 구축한 프로젝트.
- **Tech Tags**: Python, Performance Optimization, Data Labeling, Splunk
- **Description (STAR)**:
  - **Situation/Task**: 통신사 특성상 하루에도 수백만 건의 보안 로그가 발생하는데, 특히 DRM 문서 검사 로직이 비효율적이어서 데이터 처리에 2시간 이상 소요되는 지연(Latency) 이슈가 발생했습니다. 또한, AI 탐지 모델 고도화를 위한 양질의 학습 데이터가 부족한 상황이었습니다.
  - **Action**: 처리 속도 개선을 위해 기존의 일괄 처리 방식을 1,000개 단위의 청크(Chunk) 기반 분할 처리 로직으로 변경하여 메모리 부하를 줄이고 속도를 최적화했습니다. 동시에 비정형 문서 데이터를 AI가 학습할 수 있도록 TF-IDF(단어 빈도-역문서 빈도) 알고리즘을 적용해 벡터화하고, 핵심 키워드를 추출하여 정교한 라벨링 데이터셋을 구축했습니다.
  - **Result**: 이를 통해 DRM 로그 처리 시간을 획기적으로 단축하여 데이터 병목 현상을 해결했으며, Splunk 대시보드 개선 및 양질의 학습 데이터셋 공급 체계를 완성하여 보안 관제 효율성을 높이고 AI 분석을 위한 핵심 기반을 마련했습니다.

### Project 5
- **Title**: 아마존 글로벌 광고 비딩 및 키워드 관리 RPA 시스템 구축
- **Summary (One-Liner)**: Python과 Airflow를 활용해 아마존 10개국 광고 운영 프로세스를 자동화하여, 월 150시간의 수동 업무를 2.5시간으로 83% 단축한 RPA 프로젝트
- **Tech Tags**: Python, Docker, Apache Airflow, Django, Amazon API (SP-API/ADS-API)
- **Description (STAR)**:
  - **Situation/Task**: 
    - 스마트폰 액세서리 브랜드 '신지모루'의 아마존 셀러 광고 업무를 담당
    - 미국, 일본 등 글로벌 10개국 마켓의 광고 캠페인을 1명의 담당자가 관리해야 하는 인력의 한계가 있었음
    - 단순 규칙 기반의 PC 반복 업무(클릭, 입력 등)가 월 150시간 이상 소요되었으며, 노동집약적이고 불규칙한 업무 빈도로 인해 휴먼 에러 발생 가능성이 높았음
  - **Action**: 
    - 아키텍처 설계: Docker 컨테이너 환경에서 Apache Airflow를 활용하여 안정적인 배치(Batch) 스케줄링 및 RPA 파이프라인을 구축
    - API 기반 자동화: 기존의 UI 클릭 방식이 아닌, Amazon Advertising API와 SP-API를 활용한 RESTful 통신으로 데이터를 직접 수집하고 입찰(Bid)을 조정하는 백엔드 로직 구현
    - 핵심 시나리오 구현: 단순 반복 업무를 5가지 핵심 알고리즘(OOB 예산 관리, ACoS 최적화, BA 키워드 관리, 신규 AdGroup 추가, 키워드 업데이트)으로 시나리오화하여 개발
    - 관리 시스템 개발: Django 프레임워크 기반의 웹 대시보드를 구축하여 RPA 실행 결과 모니터링 및 배치 관리가 가능하도록 함
  - **Result**: 
    - 업무 효율 83% 향상: 월 150시간 이상 소요되던 업무 시간을 2시간 30분으로 대폭 단축
    - 생산성 극대화: 공휴일이나 심야 시간에도 중단 없는 24시간 광고 입찰 관리가 가능해졌으며, 담당자의 주간 여유 시간을 확보
    - 데이터 정확도 개선: 사람의 주관이나 실수(Human Error)가 개입되지 않는 일관성 있는 광고 운영 체제를 확립

### Project 6
- **Title**: 서울시 유휴 공간 입점 최적화를 위한 상권 분석 및 음식점 랭킹 솔루션 개발
- **Summary (One-Liner) (요약)**: 공공데이터와 크롤링 데이터를 통합한 서울시 상권 분석 DW를 구축하고, Docker 기반의 개발 환경 표준화를 통해 팀 협업 생산성을 높인 데이터 엔지니어링 프로젝트
- **Tech Tags**:  Python, PostgreSQL, Docker, Web Crawling (Selenium/BS4), Git
-  **Description (STAR)**: **STAR 기법** (Situation, Task, Action, Result) 적용.
  - **Situation/Task**: 
    - 공간 중개 플랫폼의 유휴 공간에 적합한 음식점을 추천하기 위해 객관적인 데이터(매출, 유동인구, 평점 등)가 필요했으나, 데이터가 여러 플랫폼(서울시, 네이버, 카카오)에 파편화되어 있어 통합 분석이 불가능했음.
    - 팀원 간 로컬 개발 환경(OS, 라이브러리 버전) 불일치로 인해 코드 실행 오류가 빈번하여 불필요한 트러블슈팅 비용이 발생함.
  - **Action**: 
    - 데이터 파이프라인 구축: 서울시 공공데이터(인허가, 대중교통) API와 포털(네이버/카카오) 크롤링 봇을 개발하여 일일/주간 단위로 데이터를 수집·적재하는 자동화 시스템 구현. (일 최대 10만 건 API 호출 처리)
    - DB 모델링 및 최적화: 수집된 Raw Data를 분석 목적에 맞게 정규화하여 Master 및 Mart 테이블로 재설계하고, 상세한 **'DB 인터페이스 정의서(v1.0)'**를 작성하여 데이터 활용도를 높임.
    - 개발 환경 표준화: Docker를 도입하여 컨테이너 기반의 동일한 개발 환경을 배포하고, **'개발 환경설정 가이드(v1.5)'**를 직접 제작하여 신규 입사자의 온보딩 과정을 시스템화함.  
  - **Result**: 
    - 데이터 자산화: 서울시 전체 음식점 및 상권 데이터를 통합 관리하는 중앙화된 DB를 구축하여, '입점 제안' 및 '데이터 판매' 등 신규 비즈니스 모델 창출의 기반 마련.
    - 협업 효율성 증대: Docker 도입 및 문서화(가이드)를 통해 개발 환경 세팅 시간을 50% 이상 단축하고, 환경 차이로 인한 버그(Environment-specific bugs)를 100% 제거.
    - 데이터 신뢰도 확보: 명확한 DB 정의서와 표준 용어 사전 도입으로 개발팀과 분석가 간의 커뮤니케이션 미스 비용 절감.