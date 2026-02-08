import { Project } from './types';

export const logProject: Project = {
    title: '지능형 보안 로그 분석 체계 기반 보안 관제 자동화 (제조사)',
    duration: '2021.06 - 2021.11',
    role: '데이터 엔지니어 (수집/전처리/통계 분석)',
    description: "보안 로그 수집·전처리를 100% 자동화하고, 통계 분석과 AI 모델을 결합한 하이브리드 탐지 체계를 구축하여 실무적인 보안 사고 선제 대응 파이프라인을 완성한 프로젝트입니다.",
    overview: {
        background: "초기 보안 관제는 수천 건의 외부 메일 로그를 담당자가 직접 룰 기반으로 사후 분석하는 비효율적인 구조였으며, 정량적인 탐지 기준이 부족해 과도한 수동 업무가 수반되었습니다.",
        objective: "로그 수집 및 전처리를 100% 자동화하는 신규 분석 체계를 구축하고, 통계 분석과 AI 모델을 결합해 매일 확인해야 하는 이상징후 건수를 실질적으로 줄이는 데 집중했습니다.",
        outcome: "보안 관제의 기술적 토대를 마련하였으며, 룰 + AI 하이브리드 탐지 체계를 통해 보안 사고를 사전에 방어할 수 있는 실용적인 데이터 파이프라인을 완성했습니다."
    },
    image: '/images/thumbnails/log_analysis.png',
    domain: 'Enterprise Information Security',
    tags: ['Python', 'Pandas', 'ETL Pipeline', 'Docker', 'Apache Airflow', 'Data Analysis (EDA)', 'Anomaly Detection'],
    star: {
        situation: `매일 발생하는 대량의 외부 발송 메일 로그를 분석하여 이상 행위 징후를 포착해야 했으나, 정제된 데이터 수집 체계가 없어 **수동 분석에 의존**하는 비효율이 존재했습니다.`,
        action: `**Python 기반의 전처리 모듈**을 직접 개발하여 기존 시스템과 연동함으로써 데이터 수집부터 가공까지의 전 과정을 **100% 자동화**했습니다.
또한 시간/부서/키워드별 **다차원 EDA**를 수행하여 이상징후 탐지 룰 설정을 위한 통계적 근거를 확보했습니다.`,
        result: `수동 데이터 추출 공수를 최소화하여 분석 효율을 극대화했으며, 통계적 근거 기반의 **정량적 탐지 룰(Rule)**을 도출하여 보안 관제 고도화의 핵심 기반을 완성했습니다.`
    },
    contributions: [
        'Python 기반 전처리 모듈 개발 및 수집-가공 전과정 100% 자동화',
        '다차원 EDA 기반의 정량적 보안 이상탐지 룰(Rule) 수립'
    ]
};
