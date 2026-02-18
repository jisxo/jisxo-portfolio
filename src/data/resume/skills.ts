import { IconDatabase, IconServer, IconChartBar, IconDeviceDesktop } from '@tabler/icons-react';

export interface SkillCategory {
    title: string;
    icon?: any;
    color?: string;
    techStack: string[]; // For Badges (Languages, Tools)
    descriptions?: string[]; // For Bullet points (Core competencies)
}

export const skillCategories: SkillCategory[] = [
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
