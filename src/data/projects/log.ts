import { Project } from './types';

export const logProject: Project = {
    title: '대기업 제조사, 보안 로그 분석 및 이상징후 탐지 파이프라인 구축',
    duration: '2021.06 - 2021.11',
    role: '데이터 엔지니어 (수집/전처리/EDA)',
    description: '외부 발송 메일 로그의 수집·전처리 과정을 100% 자동화하고, EDA를 통해 내부 탐지 모델의 기초를 마련한 데이터 엔지니어링 프로젝트.',
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
        'Python 기반 전처리 모듈 개발 및 100% 자동화',
        '시간/부서/키워드별 다차원 탐색적 분석(EDA) 수행',
        '통계적 근거 중심의 보안 이상징후 탐지 룰 수립'
    ]
};
