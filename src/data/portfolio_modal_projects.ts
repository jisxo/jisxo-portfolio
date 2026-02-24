import { Project } from './projects/types';
import rawData from './portfolio_modal_projects.json';

export type ProjectLayout = 'full' | 'half';

export interface PortfolioModalProject {
    id: string;
    title: string;
    role: string;
    period: string;
    image: string;
    domain: string;
    summary: string;
    layout: ProjectLayout;
    keywords: string[];
    overview: {
        background: string[];
        objective: string[];
        outcome: string[];
    };
    design: string[];
    rules: string[];
    quality_reprocess: string[];
    limitations: string[];
    evidence?: {
        title: string;
        slug: string;
    }[];
}

const data = rawData as { projects: PortfolioModalProject[] };

export const portfolioModalProjects: PortfolioModalProject[] = data.projects;

export const WEB_PROJECT_ORDER = [
    'crypto_stream',
    'security_platform',
    'telecom_pipeline',
    'hidden_spot',
    'graph_reco_poc'
] as const;

export const PDF_PROJECT_ORDER = [
    'security_platform',
    'telecom_pipeline',
    'crypto_stream',
    'graph_reco_poc',
    'hidden_spot'
] as const;

function toWebProject(project: PortfolioModalProject): Project {
    return {
        title: project.title,
        description: project.summary,
        overview: project.overview,
        image: project.image,
        domain: project.domain,
        tags: project.keywords,
        role: project.role === '-' ? undefined : project.role,
        duration: project.period === '-' ? undefined : project.period,
        contributions: project.design,
        evidence: project.evidence,
    };
}

const byId = new Map(portfolioModalProjects.map((project) => [project.id, project]));

export const webProjects: Project[] = WEB_PROJECT_ORDER
    .map((id) => byId.get(id))
    .filter((project): project is PortfolioModalProject => Boolean(project))
    .map(toWebProject);

export const pdfProjects: PortfolioModalProject[] = PDF_PROJECT_ORDER
    .map((id) => byId.get(id))
    .filter((project): project is PortfolioModalProject => Boolean(project));
