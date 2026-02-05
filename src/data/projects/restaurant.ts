import { Project } from './types';

export const restaurantProject: Project = {
    title: '공공·웹 데이터 기반의 음식점 랭킹 산출 및 상권 분석 시스템',
    duration: '2022.11 - 2023.01, 2023.11-2024.02',
    role: '데이터 엔지니어',
    description: '상권 분석 컨설팅 및 데이터 판매 신규 비즈니스를 위해, 파편화된 이기종 데이터를 통합하여 고품질의 랭킹 지표를 산출하는 데이터 웨어하우스 구축 프로젝트.',
    image: '/images/thumbnails/restaurant_dw.png',
    images: [
        { src: '/images/hipp_fe.png', caption: '상권 분석 웹 서비스 화면' },
        { src: '/images/hipp_architecture.png', caption: '상권 분석 시스템 아키텍처' },
        { src: '/images/hipp_db_desc.png', caption: 'DB 인터페이스 명세서 (PostgreSQL)' }
    ],
    tags: ['Python', 'Docker', 'Apache Airflow', 'PostgreSQL', 'Web Crawling (Selenium/BS4)', 'Git'],
    star: {
        situation: "서울시 상권 분석 및 입지 컨설팅을 위한 핵심 데이터(매출, 유동인구, 평점 등)를 확보하여, 이를 '판매 가능한 데이터 상품'으로 자산화하는 것이 목표였음. 하지만 유의미한 데이터가 공공 API와 포털 사이트로 파편화되어 있고, 데이터 간 결합 기준이 없어 신뢰도 높은 상권 분석 지표 산출이 불가능한 상황.",
        action: "데이터 파이프라인 구축: 서울시 공공데이터와 포털 크롤러를 개발하여 일일/주간 단위로 데이터를 수집·적재하는 자동화 시스템 구현. DB 모델링 및 최적화: 수집된 Raw Data를 분석 목적에 맞게 정규화하여 데이터 마트로 재설계하고, 상세한 'DB 인터페이스 정의서'를 작성하여 데이터 활용도를 높임.",
        result: "데이터 자산화 및 수익 모델 창출: 흩어져 있던 서울시 전역의 데이터를 표준화된 DB로 통합하여, '상권 데이터 판매' 및 '입지 분석 리포트' 등 신규 비즈니스 모델의 기술적 토대 마련. 실시간 랭킹 산출 성능 확보: 최적화된 데이터 마트 구축을 통해 수천만 건의 데이터 연산 부하를 최소화하고, 실시간 랭킹 산출 및 대시보드 조회가 가능한 분석 환경 완성."
    },
    contributions: [
        '서울시 공공 API 및 포털 사이트 크롤러 시스템 구축',
        '이기종 데이터 정규화 및 데이터 마트 모델링 설계',
        '수천만 건 대규모 연산 부하 최소화를 위한 DB 최적화'
    ]
};
