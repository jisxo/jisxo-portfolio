import { Project } from './types';

export const integrationProject: Project = {
    title: '제조업 보안 로그 통합 및 전사 데이터 표준화 플랫폼 구축',
    duration: '2022.03 - 2022.09',
    role: '데이터 엔지니어 (ETL 구축)',
    description: '이기종 보안 장비에서 발생하는 방대한 로그를 단일 체계로 통합 분석하기 위해, 데이터 정규화와 중복 제거 로직이 핵심인 고해상도 ETL 파이프라인을 구축한 프로젝트입니다.',
    image: '/images/thumbnails/data_integration.png',
    domain: 'Enterprise Security & IT Operations',
    tags: ['Python', 'ETL Pipeline', 'Log Analysis Platform', 'Docker', 'Apache Airflow', 'Data Standardization', 'Anomaly Detection'],
    star: {
        situation: `출력물 보안 솔루션(DLP), 외부 메일 등 5종 이상의 이기종 보안 로그를 통합 분석해야 했으나, 장비마다 상이한 로그 포맷과 데이터 전송 과정에서 발생하는 **데이터 중복 적재** 이슈로 인해 분석 신뢰도가 심각하게 훼손된 상황이었습니다.`,
        action: `로그별 Key 값을 기준으로 중복을 제거하는 **전처리 로직**을 개발하여 데이터 정합성을 확보하고, 통합 스키마 설계 및 정규표현식 활용 파싱 모듈을 통해 비정형 로그를 표준 포맷으로 자동 변환하는 **ETL 파이프라인**을 구축했습니다.`,
        result: `이를 통해 원천 데이터와 적재 데이터 간의 **정합성 100%**를 달성했으며, 오탐을 최소화하여 이상탐지 모니터링 업무 효율을 높이고 향후 신규 장비 추가 시 즉시 대응 가능한 **확장성 있는 데이터 구조**를 완성했습니다.`
    },
    contributions: [
        '이기종 보안 로그 통합 스키마 설계 및 데이터 통합',
        '정규표현식 활용 비정형 로그 표준 포맷 변환 파이프라인',
        '로그별 고유 키 기반 중복 제거 로직 구현 (정합성 100%)'
    ]
};
