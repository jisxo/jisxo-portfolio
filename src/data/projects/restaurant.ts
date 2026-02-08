import { Project } from './types';

export const restaurantProject: Project = {
    title: '실시간 F&B 트렌드 분석 및 맛집 랭킹 플랫폼 \'HIPP\'',
    duration: '2022.11 - 2023.05, 2023.12-2024.01',
    role: '데이터 엔지니어 (Full-Stack)',
    description: '단순 평점 데이터를 넘어 네이버 데이터랩 검색량과 리뷰 생성 속도를 실시간으로 분석하여, 현재 가장 핫한 장소를 발굴하는 데이터 기반 트렌드 랭킹 서비스입니다.',
    image: '/images/thumbnails/restaurant_dw.png',
    images: [
        { src: '/images/hipp_fe.png', caption: '트렌드 랭킹 대시보드 UI' },
        { src: '/images/hipp_architecture.png', caption: 'Airflow 기반 하이브리드 수집 시스템 아키텍처' },
        { src: '/images/hipp_db_desc.png', caption: '데이터 통합 DB 인터페이스 명세서' }
    ],
    domain: 'Data Engineering, Crawling',
    tags: ['Trend Analysis', 'Python', 'Django', 'Docker', 'Apache Airflow', 'PostgreSQL', 'Web Crawling (Selenium/BS4)'],
    star: {
        situation: `**정적 데이터의 한계:** 기존 지도 플랫폼(네이버/카카오)의 '평점순' 필터는 누적된 과거 데이터에 의존하여, 막 떠오르는 **'현재의 핫플레이스'**를 반영하지 못하는 한계가 있었습니다.
**비효율적인 트렌드 파악:** 마케터나 블로거들이 트렌드를 파악하기 위해 일일이 키워드 검색량을 조회해야 하는 번거로움을 해결하고, **'실시간 유행(Viral)'**을 정량화하여 보여주는 시스템이 필요했습니다.`,
        action: `✅ **3단계 트렌드 스코어링 알고리즘 개발**
- **화제성(50%)**: 네이버 데이터랩 API 연동, 전주 대비 **검색량 급상승 추이** 분석으로 입소문 포착
- **활성도(30%)**: 최근 1개월 내 신규 리뷰 생성 속도를 정량화하여 실제 방문 활성도 검증
- **평판(20%)**: 2개 플랫폼(네이버/카카오) 평점을 **앙상블**하여 최소 품질 필터링 적용

✅ **이원화된 데이터 수집 체계(Hybrid Pipeline) 구축**
- 일 단위(Daily) 크롤링 파이프라인으로 매일 변동하는 트렌드 지표 수집 자동화
- API 쿼터 내 효율 극대화: 검색량 급상승 키워드를 우선 수집하는 우선순위 기반 스케줄링

✅ **웹 서비스 전주기 개발(Full-Stack)**
- **Batch Processing**: Airflow로 매일 아침 랭킹 알고리즘을 수행하여 DB를 갱신하는 자동화 파이프라인 운영
- **Dashboard**: 사용자가 지정한 지역(성수, 홍대 등)의 랭킹을 시각화하는 웹 서비스 구현 (Django)`,
        result: `데이터 가치 창출: 파편화된 리뷰와 검색 데이터를 결합하여, 단순 정보가 아닌 '유행'이라는 동적 인사이트를 도출하는 데이터 프로덕트 완성.`
    },
    contributions: [
        '서울시 공공 API 및 2개 지도 플랫폼(Naver/Kakao) 크롤러 시스템 구축',
        '이기종 데이터(API/크롤링) 통합을 위한 데이터 정규화 및 마트 모델링 설계',
        'Selenium 메모리 누수 방지 및 대규모 수집 안정성을 위한 프로세스 최적화'
    ]
};
