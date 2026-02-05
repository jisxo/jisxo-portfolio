import { Project } from './types';

export const telecomProject: Project = {
    title: '대기업 통신사, 대용량 보안 로그 처리 로직 최적화 및 AI 데이터셋 구축',
    duration: '2025.04 - 2025.10',
    role: '데이터 엔지니어 (ETL / 데이터 표준화)',
    description: '통신사의 대용량 보안 로그 처리 속도를 개선하기 위해 청크 단위 배치 로직을 적용하고, 이상징후 탐지 AI 모델을 위한 학습 데이터셋을 구축한 프로젝트.',
    image: '/images/thumbnails/telecom_log.png',
    tags: ['Python', 'Docker', 'Apache Airflow', 'OpenSearch', 'Linux', 'Data Standardization', 'Data Labeling', 'Splunk'],
    star: {
        situation: '통신사 특성상 하루에도 수백만 건의 보안 로그가 발생하는데, 특히 DRM 문서 검사 로직이 비효율적이어서 데이터 처리에 2시간 이상 소요되는 지연 이슈가 발생했습니다. 또한, AI 탐지 모델 고도화를 위한 양질의 학습 데이터가 부족한 상황이었습니다.',
        action: '처리 속도 개선을 위해 기존의 일괄 처리 방식을 1,000개 단위의 청크 기반 분할 처리 로직으로 변경하여 메모리 부하를 줄이고 속도를 최적화했습니다. 동시에 비정형 문서 데이터를 AI가 학습할 수 있도록 TF-IDF 알고리즘을 적용해 벡터화하고, 핵심 키워드를 추출하여 정교한 라벨링 데이터셋을 구축했습니다.',
        result: '이를 통해 DRM 로그 처리 시간을 획기적으로 단축하여 데이터 병목 현상을 해결했으며, Splunk 대시보드 개선 및 양질의 학습 데이터셋 공급 체계를 완성하여 보안 관제 효율성을 높이고 AI 분석을 위한 핵심 기반을 마련했습니다.'
    },
    contributions: [
        'DRM 문서 검사 로직 최적화 (Chunk 단위 분할 처리)',
        '대용량 로그 처리 지연 시간 단축 및 메모리 부하 절감',
        'AI 학습용 TF-IDF 기반 비정형 텍스트 벡터화 및 라벨링'
    ]
};
