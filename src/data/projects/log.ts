import { Project } from './types';

export const logProject: Project = {
    title: '전사 통합 보안 모니터링 및 이상탐지 자동화',
    duration: '2021.06 - 2021.11',
    role: '데이터 엔지니어 (수집/전처리/EDA)',
    description: '외부 발송 메일 로그 등 보안 로그 수집의 수작업을 제로화하고, 대용량 로그 분석을 통해 보안 관제 고도화의 기초가 되는 탐지 룰과 자동화 체계를 수립한 프로젝트입니다.',
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
