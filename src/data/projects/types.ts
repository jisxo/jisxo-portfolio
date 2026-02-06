export interface StarContent {
    situation: string;
    action: string;
    result: string;
}

export interface Project {
    title: string;
    description: string;
    image: string;
    domain?: string;
    images?: { src: string; caption?: string }[];
    tags: string[];
    duration?: string;
    star?: StarContent;
    role?: string;
    contributions?: string[];
}
