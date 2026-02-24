import { promises as fs } from 'node:fs';
import path from 'node:path';

export const EVIDENCE_FILE_MAP: Record<string, string> = {
    'canonical-schema-v1': 'security-standardization/01_schema.md',
    'parsing-normalization-pipeline': 'security-standardization/02_pipeline.md',
    'exception-handling-rules': 'security-standardization/03_exception_rules.md',
    'oom-mitigation-record-level-json-chunking': 'security-standardization/04_oom_chunking.md',
    'hidden-spot-serving-api': 'hidden-spot/01_serving_api.md',
    'hidden-spot-async-jobs': 'hidden-spot/02_async_jobs.md',
    'hidden-spot-datalake-layout': 'hidden-spot/03_datalake_layout.md',
};

export function resolveEvidencePath(slug: string): string | null {
    const relativePath = EVIDENCE_FILE_MAP[slug];
    if (!relativePath) return null;

    return path.join(
        process.cwd(),
        'portfolio',
        'evidence',
        relativePath,
    );
}

export async function readEvidenceMarkdown(slug: string): Promise<string | null> {
    const filePath = resolveEvidencePath(slug);
    if (!filePath) return null;

    try {
        return await fs.readFile(filePath, 'utf8');
    } catch {
        return null;
    }
}
