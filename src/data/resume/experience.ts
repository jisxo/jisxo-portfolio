import { Experience } from './types';

export const experienceData: Experience[] = [
    {
        company: '씨에스리 (CSLEE)',
        role: 'AI엔지니어링사업부 / 프리랜서',
        period: '2025.04 - 2025.10',
        summary: '대기업 통신사 보안 관제 솔루션 운영 및 AI 필터링 고도화',
        bullets: [
            '에어플로우 센서 기반 이벤트 구동 파이프라인 재설계로 운영 장애율 0% 달성',
            '룰 기반 탐지에 AI 예측 모델을 결합한 오탐 필터링 체계 고도화'
        ]
    },
    {
        company: '씨에스리 (CSLEE)',
        role: 'AI엔지니어링사업부 선임 / 데이터 엔지니어',
        period: '2021.03 - 2025.02',
        summary: '대규모 보안 로그 통합 및 비정형 텍스트 기반 이상징후 탐지 시스템 구축',
        bullets: [
            '이기종 보안 로그 표준화 및 ETL 파이프라인 구축 (정합성 100% 달성)',
            '아마존 글로벌 광고 운영 자동화 RPA 구축으로 업무 공수 98% 절감'
        ],
        skills: ['Python', 'Apache Airflow', 'GNN', 'NLP', 'Docker', 'RPA']
    },
    {
        company: '씨에스리 (CSLEE)',
        role: '빅데이터 교육 기술 조교',
        period: '2020.08 - 2020.12',
        summary: '공공 빅데이터 청년 인턴십 확대운영 기술 지원',
        bullets: [
            '기획/분석/시각화 교육과정 실습 지원',
            '기술적 질의응답'
        ],
        skills: ['R', 'Python', 'Q-GIS', 'SQL']
    },
    {
        company: '경찰청',
        role: '치안빅데이터정책담당관실 / 인턴',
        period: '2019.09 - 2020.02',
        summary: '치안 데이터 분석 과제 발굴 및 분석 수행'
    },
    {
        company: '패스트캠퍼스',
        role: '빅데이터 교육 기술 조교',
        period: '2018.11 - 2018.12, 2019.03',
        summary: '데이터 분석 교육 과정 기술 지원'
    }
];
