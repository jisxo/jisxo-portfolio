import { Project, StarContent } from './projects/types';
import { cryptoStreamingProject } from './projects/crypto_streaming';
import { retailGnnProject } from './projects/retail_gnn';
import { securityPlatformPhasedProject } from './projects/security_platform_phased';
import { telecomProject } from './projects/telecom';
import { hiddenSpotMinioProject } from './projects/hidden_spot_minio';

export type { Project, StarContent };

export const projects: Project[] = [
    cryptoStreamingProject,
    telecomProject,
    securityPlatformPhasedProject,
    retailGnnProject,
    hiddenSpotMinioProject
];
