import { IconDatabase, IconServer, IconChartBar, IconDeviceDesktop } from '@tabler/icons-react';

export interface SkillCategory {
    title: string;
    icon?: any; // Tabler icons are functions/components
    color?: string;
    skills: string[];
}

export const skillCategories: SkillCategory[] = [
    {
        title: 'Data Engineering',
        icon: IconDatabase,
        color: 'blue',
        skills: ['Python', 'SQL', 'Apache Airflow', 'ETL Pipelines', 'Data Modeling'],
    },
    {
        title: 'DevOps & Infra',
        icon: IconServer,
        color: 'teal',
        skills: ['Docker', 'Linux', 'GitHub', 'GitLab', 'CI/CD'],
    },
    {
        title: 'Web Development',
        icon: IconDeviceDesktop,
        color: 'orange',
        skills: ['Django', 'React.js', 'Vue.js', 'JavaScript', 'HTML/CSS'],
    },
    {
        title: 'Database & Security',
        icon: IconDatabase,
        color: 'cyan',
        skills: ['PostgreSQL', 'ElasticSearch', 'Splunk', 'Logpresso'],
    },
    {
        title: 'Data Science & AI',
        icon: IconChartBar,
        color: 'grape',
        skills: ['Tensorflow', 'Pandas', 'NumPy', 'EDA'],
    },
];
