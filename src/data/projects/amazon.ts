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
    domain: 'E-commerce & Digital Marketing Automation',
    tags: ['Python', 'Docker', 'Apache Airflow', 'Django', 'Amazon API'],
    star: {
        situation: `글로벌 마켓(미국, 일본 등 10개국)의 아마존 광고 캠페인을 소수 인원이 관리해야 했으며, 단순 반복적인 규칙 기반 업무가 **월 150시간 이상** 소요되어 생산성 저하와 휴먼 에러의 위험이 컸습니다.`,
        action: `**Amazon Advertising API** 기반의 백엔드 로직을 구현하여 데이터를 직접 제어하고, **Apache Airflow**를 활용해 24시간 자동 입찰 및 키워드 관리 파이프라인을 구축했습니다.
또한 **Django** 기반의 대시보드를 개발하여 RPA 실행 결과와 성과 지표를 한눈에 모니터링할 수 있는 체계를 마련했습니다.`,
        result: `월 150시간의 수작업 소요 시간을 **2.5시간으로 98.3% 단축**하는 성과를 거두었습니다.
심야 및 공휴일에도 가동되는 **24/7 자동화 체제**를 통해 광고 운영의 일관성을 확보하고, 담당자가 전략적 의사결정에 집중할 수 있는 환경을 조성했습니다.`
    },
    contributions: [
        'Amazon Advertising API 연동 백엔드 로직 구현',
        'Docker 컨테이너 기반 Airflow 배치 스케줄링 구축',
        '5가지 핵심 입찰/키워드 관리 자동화 알고리즘 개발'
    ]
};
