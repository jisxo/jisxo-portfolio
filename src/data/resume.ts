import { personalInfo, resumeSummary, heroData } from './resume/about';
import { experienceData } from './resume/experience';
import { skillCategories } from './resume/skills';
import { educationData } from './resume/education';
import { certificationData } from './resume/certifications';
import { PersonalInfo, Experience, SkillCategory, Education, Certification } from './resume/types';

export type { PersonalInfo, Experience, SkillCategory, Education, Certification };

export const resumeData = {
    personal: personalInfo,
    summary: resumeSummary,
    hero: heroData,
    experience: experienceData,
    skills: skillCategories,
    education: educationData,
    certifications: certificationData
};
