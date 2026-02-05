export const siteConfig = {
    name: '정지서 | Jiseo Jeong',
    role: 'Data Engineer',
    title: '정지서 | Data Engineer & Developer Portfolio',
    description: '데이터 흐름을 설계하는 Data Engineer 정지서. 견고한 Pipeline 구축부터 시스템 Optimization까지, 비효율을 개선하고 안정적인 데이터 환경을 만든 기술 기록을 소개합니다.',
    url: 'https://jisxo-portfolio.netlify.app',
    ogImage: '/og-image.jpg',
    github: 'https://github.com/jisxo',
    linkedin: 'https://linkedin.com', // Placeholder
    email: process.env.NEXT_PUBLIC_USER_EMAIL || 'email@example.com',
};

export const navLinks = [
    { link: '/', label: 'Home' },
    { link: '#projects', label: 'Projects' },
    { link: '#about', label: 'About' },
    { link: '/resume', label: 'Resume' },
];

export const socialLinks = [
    { label: 'GitHub', link: siteConfig.github, icon: 'github' },
    { label: 'LinkedIn', link: siteConfig.linkedin, icon: 'linkedin' },
];
