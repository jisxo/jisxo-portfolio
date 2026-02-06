import { Project } from './types';

export const insiderProject: Project = {
    title: '대기업 제조사, 핵심 기술 자산 보호를 위한 내부자 위협 탐지 및 데이터 파이프라인 구축',
    duration: '2021.12 - 2022.02',
    role: '데이터 엔지니어 (Airflow/NLP)',
    description: '제조업 핵심 공정 기술 자산을 보호하기 위해, 사내 메신저·이메일 등 비정형 텍스트에서 내부자 위협을 조기에 포착하는 Airflow 파이프라인을 구축.',
    image: '/images/thumbnails/insider_threat.png',
    domain: 'Enterprise Security & Insider Threat Detection',
    tags: ['Python', 'Docker', 'Apache Airflow', 'NLP', 'ETL Pipeline', 'Performance Optimization'],
    star: {
        situation: `사내 메신저와 이메일 등 방대한 비정형 데이터를 분석해 내부자 위협(Insider Threat)을 사전에 탐지해야 했으나, 기존의 수동 분석 방식으로는 **실시간 대응**이 불가능했으며 대용량 텍스트 처리 시 심각한 성능 병목이 발생했습니다.`,
        action: `**Apache Airflow**를 도입하여 전 과정을 자동화 파이프라인으로 구축했습니다. 대용량 텍스트 벡터화 시 발생하는 메모리 초과 문제를 해결하기 위해 **JSON 파일 분할 처리 기법**을 적용하여 안정성을 확보했습니다.
또한 단순 키워드 매칭을 넘어 **문맥(Context) 기반의 이상징후**를 포착할 수 있도록 고품질의 텍스트 학습 데이터셋을 체계적으로 구축했습니다.`,
        result: `비정형 데이터 분석 워크플로우를 **100% 자동화**하여 운영 리소스를 최소화했습니다.
지연 없는 실시간 처리 체계를 완성함으로써, 기술 유출 시도를 선제적으로 방어하고 기업 평판 및 핵심 자산을 보호하는 **강력한 보안 관제 체계**를 확립했습니다.`
    },
    contributions: [
        'Apache Airflow 기반 비정형 텍스트 분석 파이프라인 자동화',
        '대용량 JSON 파일 분할 처리 기법 적용 (메모리 병목 해결)',
        '사용자 행위 문맥 분석을 위한 텍스트 학습 데이터셋 구축'
    ]
};
