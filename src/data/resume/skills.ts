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
        title: 'Data Architecture & Pipeline',
        icon: IconDatabase,
        color: 'blue',
        techStack: ['Python, SQL, Apache Airflow'],
        descriptions: [
            'ETL/ELT 설계, DAG 의존성 관리',
            '대용량 JSON 분할 처리'
        ]
    },
    {
        title: 'Data Storage & Query',
        icon: IconChartBar,
        color: 'cyan',
        techStack: ['PostgreSQL', 'Opensearch'],
        descriptions: [
            'MinIO, AWS S3 연동'
        ]
    },
    {
        title: 'API & Serving',
        icon: IconDeviceDesktop,
        color: 'orange',
        techStack: ['Django REST Framework, FastAPI'],
        descriptions: [
            'Swagger 기반 API 명세'
        ]
    },
    {
        title: 'Infrastructure',
        icon: IconServer,
        color: 'teal',
        techStack: ['Docker', 'Linux'],
    },
];
