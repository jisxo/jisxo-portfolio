export interface PersonalInfo {
    name: string;
    role: string;
    phone: string;
    email: string;
    github: string;
    portfolioUrl: string;
}

export interface Experience {
    company: string;
    role: string;
    period: string;
    summary: string;
    bullets?: string[];
    skills?: string[];
}

export interface Education {
    school: string;
    degree: string;
    period: string;
}

export interface SkillCategory {
    title: string;
    skills: string[];
}

export interface ResumeData {
    personal: PersonalInfo;
    summary: string;
    experience: Experience[];
    education: Education[];
    skills: SkillCategory[];
}
