import { Experience } from './types';

export const experienceData: Experience[] = [
    {
        company: '씨에스리 (CSLEE)',
        role: 'AI엔지니어링사업부 / 프리랜서',
        period: '2025.04 - 2025.10',
        summary: 'SecuXper AI 솔루션 운영 및 유지보수'
    },
    {
        company: '씨에스리 (CSLEE)',
        role: 'AI엔지니어링사업부 선임 / Data Engineer',
        period: '2021.03 - 2025.02',
        summary: '보안 및 유통 도메인 데이터 파이프라인 개발 및 Isolation Forest 기반 이상징후 탐지 솔루션 구축',
        bullets: [
            '수작업 제로화 및 데이터 파이프라인 100% 자동화 달성',
            '대용량 데이터 처리 병목 현상 및 중복 적재 이슈 기술적 해결'
        ],
        skills: ['Python', 'Airflow', 'RPA', 'Automation']
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
        summary: '치안 데이터 분석 과제 발굴 및 분석 수행',
        bullets: [
            '치안고객만족도조사 VOC 분석',
            '치안 데이터 분석 보조 및 시각화'
        ],
        skills: ['R']
    },
    {
        company: '패스트캠퍼스',
        role: '빅데이터 교육 기술 조교',
        period: '2018.11 - 2018.12, 2019.03',
        summary: '데이터 분석 교육 과정 기술 지원',
        bullets: [
            'R, SQL, 데이터 전처리 등 다수의 CAMP 및 기업교육 조교'
        ],
        skills: ['R', 'SQL']
    }
];
