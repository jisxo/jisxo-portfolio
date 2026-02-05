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
        period: '2021.03 - 2025.02 (4년)',
        summary: '보안 관제 도메인에 특화된 데이터 엔지니어링 및 이상징후 탐지 파이프라인 구축',
        bullets: [
            'Process Automation: 수작업 제로화 및 데이터 파이프라인 100% 자동화 달성',
            'Problem Solving: 대용량 데이터 처리 병목 현상 및 중복 적재 이슈 기술적 해결'
        ],
        skills: ['Python', 'Airflow', 'RPA']
    },
    {
        company: '경찰청 치안빅데이터정책담당관실',
        role: '인턴',
        period: '2019.09 - 2020.02',
        summary: '치안 데이터 분석 및 시각화'
    }
];
