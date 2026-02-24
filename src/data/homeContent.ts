import { IconDatabase, IconServer, IconChartBar, IconDeviceDesktop } from '@tabler/icons-react';
import type { SkillCategory } from './resume/skills';

export const homeSummary = `데이터 수집부터 배치 추론, 최종 AI 결과물 적재까지 End-to-End 파이프라인을 완결성 있게 구현하는 ML 데이터 엔지니어입니다.

Airflow를 기반으로 데이터 사이언티스트가 개발한 추론모델을 폐쇄망 운영 환경에 통합하여 ML 파이프라인을 구축해 왔습니다. 특히 대용량 데이터 전처리 및 모델 로드 시 발생하는 OOM 리스크를 청킹 기법으로 선제 방어하는 최적화에 강점이 있습니다. 엄격한 예외 케이스 통제로 데이터 정합성을 지켜내며, 최근 Docker와 MinIO를 활용해 클라우드 네이티브 환경으로 역량을 넓히고 있습니다.`;

export const homeHeroData = {
    titleHighlight: 'End-to-End 파이프라인 엔지니어',
    description: `Python과 Airflow를 활용해 데이터 추출부터 전처리, ML 배치 추론, AI 결과 적재까지 이어지는 End-to-End 파이프라인을 구축합니다. 데이터 사이언티스트의 모델을 폐쇄망 프로덕션에 안정적으로 통합하고, 대용량 처리 시 발생하는 OOM 리스크를 청킹 기법으로 선제 방어해 무중단 환경을 만듭니다. 
    최근 Docker와 MinIO를 통해 클라우드 기반의 데이터 생애주기 설계로 역량을 넓히고 있습니다.`,
    subDescription: '단순한 데이터의 이동을 넘어, 치열한 운영 트러블슈팅과 꼼꼼한 스키마 검증을 통해 ML 모델이 100% 신뢰할 수 있는 데이터 정합성을 창출합니다.'
};

export const homeSkillCategories: SkillCategory[] = [
    {
        title: 'Data Pipeline & Orchestration',
        icon: IconDatabase,
        color: 'blue',
        techStack: ['Python', 'SQL', 'Apache Airflow', 'PySpark', 'Regex'],
        descriptions: [
            'ETL 파이프라인 구축 및 운영 자동화',
            '비정형 로그 데이터 파싱 및 정규표현식 기반 정제'
        ]
    },
    {
        title: 'Data Serving & API',
        icon: IconDeviceDesktop,
        color: 'orange',
        techStack: ['Django REST Framework', 'FastAPI', 'Swagger'],
        descriptions: [
            'ML 모델 배치 추론 결과 서빙을 위한 REST API 설계',
            '데이터 스키마 검증 및 예외 처리',
            '프론트엔드 연동을 위한 API 명세서 관리'
        ]
    },
    {
        title: 'Database & Search',
        icon: IconDatabase,
        color: 'cyan',
        techStack: ['PostgreSQL', 'ElasticSearch'],
        descriptions: [
            '이기종 데이터 통합 및 효율적 적재 모델링'
        ]
    },
    {
        title: 'MLOps & Infrastructure',
        icon: IconServer,
        color: 'teal',
        techStack: ['Docker', 'Triton (Operation)', 'Linux(Ubuntu)', 'AWS S3 / MinIO (Boto3)'],
        descriptions: [
            '폐쇄망 내 모델 로드 및 프로덕션 환경 통합',
            'OOM 리스크 선제 방어 (Chunking 기법 활용)',
            '클라우드 네이티브 환경 인프라 구축'
        ]
    },
    {
        title: 'Data Science & AI',
        icon: IconChartBar,
        color: 'grape',
        techStack: ['Pandas', 'NumPy', 'TensorFlow', 'NLP'],
        descriptions: [
            '데이터 사이언티스트 연구 코드의 프로덕션화',
            'NLP 기반 비정형 텍스트 전처리 및 임베딩',
            '모델 성능 최적화를 위한 데이터 파이프라인 고도화'
        ]
    },
    {
        title: "What's Next?",
        icon: IconDeviceDesktop,
        color: 'yellow',
        techStack: ['NVIDIA Triton', 'Kubernetes']
    }
];
