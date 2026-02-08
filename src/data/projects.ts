import { Project, StarContent } from './projects/types';
import { telecomProject } from './projects/telecom';
import { retailGnnProject } from './projects/retail_gnn';
import { restaurantProject } from './projects/restaurant';
import { amazonProject } from './projects/amazon';
import { integrationProject } from './projects/integration';
import { insiderProject } from './projects/insider';
import { logProject } from './projects/log';

export type { Project, StarContent };

// 모듈화된 프로젝트 데이터를 최신순으로 배열합니다.
// 순서를 변경하려면 아래 배열의 순서만 바꾸면 됩니다.
export const projects: Project[] = [
    telecomProject,     // 1. 통신사 (운영/안정성)
    amazonProject,      // 2. 아마존 (자동화/성과)
    retailGnnProject,   // 3. 리테일 GNN (기술/미래)
    restaurantProject,
    integrationProject,
    insiderProject,
    logProject
];
