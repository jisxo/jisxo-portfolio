import { Project, StarContent } from './projects/types';
import { cryptoStreamingProject } from './projects/crypto_streaming';
import { securityPlatformPhasedProject } from './projects/security_platform_phased';
import { telecomProject } from './projects/telecom';
import { hiddenSpotMinioProject } from './projects/hidden_spot_minio';
import { retailGnnProject } from './projects/retail_gnn';

export type { Project, StarContent };

export const projects: Project[] = [
    cryptoStreamingProject,
    securityPlatformPhasedProject,
    telecomProject,
    hiddenSpotMinioProject,
    retailGnnProject
];
