import { PersonalInfo } from './types';

export const personalInfo: PersonalInfo = {
    name: '정지서 (Jiseo Jeong)',
    role: 'Data Engineer',
    phone: process.env.NEXT_PUBLIC_USER_PHONE || '010-0000-0000',
    email: process.env.NEXT_PUBLIC_USER_EMAIL || 'email@example.com',
    github: 'jisxo', // Username
    portfolioUrl: process.env.NEXT_PUBLIC_USER_PORTFOLIO_URL || 'portfolio-url.com'
};

export const resumeSummary = `"데이터의 흐름을 설계하고 가치를 만드는 데이터 엔지니어"
복잡한 데이터 속에서 의미를 발견하고, 이를 안정적인 파이프라인으로 구축하는 과정에 열정을 느낍니다. Python과 Airflow를 활용해 수천만 건의 보안 로그를 처리하는 시스템을 구축했으며, 비효율적인 반복 업무를 자동화(RPA)하여 동료들의 시간을 아껴주는 일에서 보람을 느낍니다. 기술 너머의 비즈니스 목표를 이해하고, 차가운 데이터 뒤에 있는 사람의 의도를 읽어내려 노력합니다.`;

export const heroData = {
    titleHighlight: '데이터 파이프라인',
    description: '비효율적인 반복 업무를 기술로 혁신하는 4년 차 데이터 엔지니어입니다. Python과 Docker, Airflow를 주무기로 견고한 데이터 파이프라인을 구축하고, 로그 분석부터 NLP 기반의 이상징후 탐지까지 폭넓은 데이터 문제를 해결해왔습니다.',
    subDescription: '현재는 데이터 엔지니어링을 넘어, 안정적인 서비스 운영을 위한 인프라 고도화와 풀스택 개발에 관심을 두고 끊임없이 성장하고 있습니다.'
};
