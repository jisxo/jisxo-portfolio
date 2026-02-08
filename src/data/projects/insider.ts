import { Project } from './types';

export const insiderProject: Project = {
    title: '기업 핵심 기술 보호를 위한 내부자 위협 탐지 시스템',
    duration: '2021.12 - 2022.02',
    role: '데이터 엔지니어 (Airflow/NLP)',
    description: "사내 메신저 및 이메일 비정형 텍스트에서 기술 유출 징후를 문맥 기반으로 포착하는 Airflow 분석 시스템",
    overview: {
        background: "방대한 비정형 메신저 데이터를 수동으로 모니터링하는 데 한계가 있었고, 대용량 텍스트 처리 시 서버 메모리 병목 현상이 자주 발생했습니다.",
        objective: "단순 키워드 매칭을 넘어 사용자 행위의 문맥(Context)을 이해하고, 대규모 텍스트 벡터화 과정의 안정성을 확보하여 실시간 위협 탐지 체계를 구축하고자 했습니다.",
        outcome: "분석 프로세스를 100% 자동화하여 운영 리소스를 최소화하였으며, JSON 분할 처리 기법으로 대용량 데이터 환경에서도 안정적인 분석 성능을 확보했습니다."
    },
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
