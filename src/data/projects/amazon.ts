import { Project } from './types';

export const amazonProject: Project = {
    title: '아마존 글로벌 광고 비딩 및 키워드 관리 RPA 시스템 구축',
    duration: '2023.04 - 2023.10',
    role: '풀스택 개발자',
    description: 'Python과 Airflow를 활용해 아마존 10개국 광고 운영 프로세스를 자동화하여, 월 150시간의 수동 업무를 2.5시간으로 98% 단축한 RPA 프로젝트.',
    image: '/images/thumbnails/amazon_rpa.png',
    images: [
        { src: '/images/rpa_fe.png', caption: 'RPA 운영/관리 대시보드 (Django)' },
        { src: '/images/rpa_architecture.png', caption: 'RPA 시스템 아키텍처 (Docker & Airflow)' },
        { src: '/images/rpa_batch_schedule.png', caption: 'Airflow 배치 스케줄링 및 모니터링' }
    ],
    tags: ['Python', 'Docker', 'Apache Airflow', 'Django', 'Amazon API'],
    star: {
        situation: '스마트폰 액세서리 브랜드의 아마존 셀러 광고 업무를 담당하며, 미국/일본 등 글로벌 10개국 마켓의 광고 캠페인을 1명이 관리해야 했습니다. 단순 규칙 기반의 반복 업무(클릭/입력)가 월 150시간 이상 소요되었으며, 노동집약적 업무로 인한 휴먼 에러 위험이 높았습니다.',
        action: 'Docker 컨테이너 환경에서 Apache Airflow를 활용하여 안정적인 배치 스케줄링 파이프라인을 구축했습니다. 기존 UI 클릭 방식 대신 Amazon Advertising API 기반의 백엔드 로직을 구현하여 데이터를 직접 제어하고, 5가지 핵심 입찰/키워드 관리 알고리즘을 개발했습니다. 또한 Django 기반 대시보드를 구축하여 RPA 실행 결과를 모니터링할 수 있게 했습니다.',
        result: '이를 통해 월 150시간의 업무를 2.5시간으로 98% 단축하고, 공휴일/심야 시간에도 중단 없는 24시간 광고 입찰 관리가 가능해졌습니다. 사람의 개입 없는 일관성 있는 광고 운영 체제를 확립하여 담당자의 생산성을 극대화했습니다.'
    },
    contributions: [
        'Amazon Advertising API 연동 백엔드 로직 구현',
        'Docker 컨테이너 기반 Airflow 배치 스케줄링 구축',
        '5가지 핵심 입찰/키워드 관리 자동화 알고리즘 개발'
    ]
};
