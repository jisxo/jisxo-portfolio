export interface StarContent {
    situation: string;
    action: string;
    result: string;
}

export interface Project {
    title: string;
    description: string;
    overview?: {
        background: string; // 프로젝트 배경 및 개요
        objective: string;  // 해결하려는 문제/목표
        outcome: string;    // 최종 결과 및 비즈니스 성과
    };
    image: string;
    domain?: string;
    images?: { src: string; caption?: string }[];
    tags: string[];
    duration?: string;
    star?: StarContent;
    role?: string;
    contributions?: string[];
}
