import { Project } from './types';

export const telecomProject: Project = {
    title: '대기업 통신사, Airflow 파이프라인 이벤트 기반 재설계 및 AI 모델 학습데이터셋 구축',
    duration: '2025.04 - 2025.10',
    role: `데이터 엔지니어 
    (ETL / 파이프라인 최적화 / 데이터 라벨링)`,
    description: '배치 작업 간의 불안정한 시간 기반 의존성을 Event-Driven 아키텍처로 재설계하여 스케줄링 경합 문제를 원천 차단하고, AI 모델 고도화를 위한 고품질 학습 데이터셋을 축적한 프로젝트.',
    image: '/images/thumbnails/telecom_log.png',
    domain: 'AI Security, Anomaly Detection',
    tags: ['Apache Airflow', 'Python', 'ExternalTaskSensor', 'Docker', 'Linux', 'OpenSearch', 'Data Labeling'],
    star: {
        situation: `매일 새벽 대용량 로그를 처리하는 기존 파이프라인이 단순 시간차(time.sleep)에 의존하는 방식으로 설계되어 있어, 데이터 적재 지연 시 후행 작업이 실패하는 스케줄링 경합이 간헐적으로 발생했습니다.
향후 이상탐지 모델 고도화가 예정되어 있었으나, 이를 위한 정답 데이터셋이 부재하여 성능 개선에 한계가 있었습니다.`,
        action: `파이프라인 안정성을 위해 불확실한 대기 방식을 제거하고, 선행 DAG의 완료 상태를 감지하여 후행 작업을 트리거하는 Airflow Sensor 기반의 Event-Driven 아키텍처로 재설계하여 논리적 정합성을 확보했습니다.
동시에 현업 전문가와의 정밀한 교차 검증을 통해 정탐 데이터를 엄격히 선별하고, 이를 체계적으로 축적하여 신뢰도 높은 학습 데이터셋을 구축했습니다.`,
        result: `이를 통해 스케줄링 경합에 의한 배치 실패를 0건으로 기록하며 파이프라인 가용성을 100%로 끌어올렸습니다.
더불어 휘발되던 운영 데이터를 재학습 가능한 핵심 자산으로 전환하여, 지속적인 AI 모델 성능 고도화를 위한 프로세스를 수립했습니다.`
    },
    contributions: [
        'Airflow Sensor 기반 Event-Driven 파이프라인 재설계',
        '스케줄링 경합 해결 및 배치 운영 안정화',
        '운영 데이터의 학습 자산화 및 데이터셋 구축 체계 수립'
    ]
};
