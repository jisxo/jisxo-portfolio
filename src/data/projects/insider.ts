import { Project } from './types';

export const insiderProject: Project = {
    title: '대기업 제조사, 핵심 기술 자산 보호를 위한 내부자 위협 탐지 및 데이터 파이프라인 구축',
    duration: '2021.12 - 2022.02',
    role: '데이터 엔지니어 (Airflow/NLP)',
    description: '제조업 핵심 공정 기술 자산을 보호하기 위해, 사내 메신저·이메일 등 비정형 텍스트에서 내부자 위협을 조기에 포착하는 Airflow 파이프라인을 구축.',
    image: '/images/thumbnails/insider_threat.png',
    tags: ['Python', 'Docker', 'Apache Airflow', 'NLP', 'ETL Pipeline', 'Performance Optimization'],
    star: {
        situation: '내부자 위협이 높아짐에 따라, 사내 메신저와 이메일 등 방대한 비정형 데이터를 분석해 이상 행위를 사전에 탐지해야 했습니다. 하지만 기존 시스템은 자동화가 되어 있지 않았고, 대용량 텍스트 벡터화 처리 시 성능 병목이 발생했습니다.',
        action: "Apache Airflow를 도입하여 전 과정을 자동화 파이프라인으로 구축했습니다. 이 과정에서 AI 모델 학습을 위한 대용량 텍스트 벡터화 수행 시 메모리 초과 및 속도 저하가 발생하자, 대용량 JSON 데이터를 작은 단위로 쪼개어 처리하는 파일 분할 기법을 적용해 병목 현상을 기술적으로 해결했습니다. 또한 사용자 행위 기반의 이상징후 패턴 탐지를 위해 단순 키워드가 아닌 '문맥'을 포함한 문장 학습데이터셋을 구축하여 탐지 정교성을 높였습니다.",
        result: '이를 통해 텍스트 분석 범위를 확장하고 복잡한 워크플로우 운영을 100% 자동화했으며, 매일 발생하는 수만 건의 대화 데이터를 지연 없이 처리하여 기술 유출 시도를 선제적으로 방어하는 보안 관제 체계를 완성했습니다.'
    },
    contributions: [
        'Apache Airflow 기반 비정형 텍스트 분석 파이프라인 자동화',
        '대용량 JSON 파일 분할 처리 기법 적용 (메모리 병목 해결)',
        '사용자 행위 문맥 분석을 위한 텍스트 학습 데이터셋 구축'
    ]
};
