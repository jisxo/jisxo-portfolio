import { Text, Title } from '@mantine/core';
import Link from 'next/link';
import type { ReactNode } from 'react';
import ReactMarkdown from 'react-markdown';
import type { Components } from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { AutoPrintOnMount } from '@/components/AutoPrintOnMount';
import { PDF_PROJECT_ORDER, portfolioModalProjects, type PortfolioModalProject } from '@/data/portfolio_modal_projects';
import { readEvidenceMarkdown } from '@/lib/evidence';
import classes from './portfolio-submit.module.css';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

interface PageProps {
    searchParams: Promise<Record<string, string | string[] | undefined>>;
}

const PROFILE_SUMMARY = [
    '대용량 로그·비정형 데이터를 수집·정제·표준화하는 ETL/ELT 파이프라인을 설계·운영해 왔습니다.',
	'JSON 분할 처리 기반 OOM 완화, 재처리(upsert) 중심 운영 안정화로 데이터 품질과 처리 신뢰성을 확보했습니다.',
	'FastAPI + Redis(RQ) 기반 비동기 작업, MinIO 데이터 레이크(Bronze/Silver/Gold/Artifacts)로 ML 워크로드를 위한 데이터 준비·제공 경로를 구성했습니다.'
];

const CORE_CAPABILITIES = [
    '이기종 로그를 단일 스키마로 표준화하고 조인/검색 목적에 맞춰 저장소(OpenSearch/RDB) 분리',
    '대용량 JSON 처리 시 레코드 단위 Chunking으로 메모리 병목(OOM) 완화',
	'배치 재처리 시 upsert 정책과 유니크 키 기준으로 중복 적재 방지',
	'비동기 작업 큐(Redis + RQ)로 크롤링/분석 파이프라인을 job 기반으로 운영',
	'MinIO 데이터 레이크 레이어(Bronze/Silver/Gold/Artifacts)로 원본 보존·재현성·라인리지 확보',
	'(개인 프로젝트) 이벤트 시간/워터마크/멱등 개념을 스트리밍 설계 관점에서 검증 및 문서화'
];

const PROJECT_INDEX_LINES = [
    '그룹사 통합 보안 데이터 플랫폼 — 표준 스키마 통합 + JSON Chunk(OOM) + upsert 재처리 | ETL, Schema, Chunking, OpenSearch, RDB',
    '통신사 보안 로그 파이프라인 안정화 — 실행 조건 정리 + 센서 기반 운영 + 키/라벨링 규칙 정렬 | Airflow, Sensor, Key Policy, Labeling, Reliability',
    '코인스트림 (Personal, In Progress) — 이벤트 시간 윈도우 + 워터마크 + 멱등 적재 설계 | Kafka, Spark, Event-time, Watermark, Idempotency',
    'Hidden Spot (Personal) — MinIO 레이크 + 비동기 Job + API 서빙 | FastAPI, Redis RQ, MinIO, Postgres(pgvector), ELT',
    '공간-브랜드 그래프 추천 PoC — 테이블→노드/엣지 + 임베딩 학습 입력 구성(서빙 제외) | Graph, Embedding, Data Prep, PoC, Memory',
] as const;

const TOTAL_PAGES = 5;
const PAGE_PROJECT_IDS = ['security_platform', 'telecom_pipeline', 'crypto_stream', 'graph_reco_poc', 'hidden_spot'] as const;
const PERSONAL_PROJECT_IDS = new Set(['crypto_stream', 'hidden_spot']);

const FULL_OVERVIEW_COUNTS = { background: 3, objective: 3, outcome: 3 };
const HALF_OVERVIEW_COUNTS = { background: 2, objective: 2, outcome: 2 };

interface ProjectEvidenceDocument {
    title: string;
    slug: string;
    markdown: string;
}

function pickFirst(value: string | string[] | undefined): string | undefined {
    if (Array.isArray(value)) return value[0];
    return value;
}

function normalizeSentence(text: string): string {
    return text
        .replace(/End-to-End/gi, '수집-적재-가공-제공')
        .replace(/고도화|혁신|탁월/g, '')
        .replace(/\b(?:100|0)%\b/g, '점검 가능')
        .replace(/개발/g, '구성')
        .replace(/구축/g, '구성')
        .replace(/\s+/g, ' ')
        .trim();
}

function pickLines(items: string[], limit: number): string[] {
    return items.map(normalizeSentence).filter(Boolean).slice(0, limit);
}

function renderBullets(items: string[], limit: number, extraClassName?: string) {
    const lines = pickLines(items, limit);
    const className = extraClassName ? `${classes.bullets} ${extraClassName}` : classes.bullets;
    return (
        <ul className={className}>
            {lines.map((item, index) => (
                <li key={`${index}-${item}`}>{item}</li>
            ))}
        </ul>
    );
}

function buildProjectMap(): Map<string, PortfolioModalProject> {
    const byId = new Map(portfolioModalProjects.map((project) => [project.id, project]));
    const orderedEntries = PDF_PROJECT_ORDER.flatMap((id) => {
        const project = byId.get(id);
        return project ? [[id, project] as [string, PortfolioModalProject]] : [];
    });
    return new Map(orderedEntries);
}

async function loadProjectEvidenceDocuments(project: PortfolioModalProject): Promise<ProjectEvidenceDocument[]> {
    const evidence = project.evidence ?? [];
    if (evidence.length === 0) return [];

    const docs = await Promise.all(
        evidence.map(async (item) => {
            const markdown = await readEvidenceMarkdown(item.slug);
            return {
                title: item.title,
                slug: item.slug,
                markdown: markdown ?? `> Evidence 문서를 불러오지 못했습니다. (slug: ${item.slug})`
            };
        })
    );

    return docs;
}

const evidenceMarkdownComponents: Components = {
    table: ({ children }) => (
        <div className={classes.evidenceTableWrap}>
            <table className={classes.evidenceTable}>{children}</table>
        </div>
    ),
    th: ({ children }) => <th className={classes.evidenceTh}>{children}</th>,
    td: ({ children }) => <td className={classes.evidenceTd}>{children}</td>,
    code: ({ className, children }) => {
        const raw = String(children ?? '').replace(/\n$/, '');
        const isInlineCode = !className && !raw.includes('\n');

        if (isInlineCode) {
            return <code className={classes.evidenceInlineCode}>{raw}</code>;
        }

        return (
            <pre className={classes.evidencePre}>
                <code>{raw}</code>
            </pre>
        );
    },
    pre: ({ children }) => <>{children}</>,
};

function formatProjectPeriod(project: PortfolioModalProject): string {
    const rawPeriod = (project.period || '-').trim();
    if (PERSONAL_PROJECT_IDS.has(project.id) || rawPeriod.includes('개인')) {
        return 'YYYY.MM–Present (Personal)';
    }
    return rawPeriod.replace(/\s*-\s*/g, '–');
}

function formatKeywords(keywords: string[]): string {
    const normalized = Array.from(new Set(keywords.map(normalizeSentence).filter(Boolean)));
    if (normalized.length === 0) return '-';
    const count = normalized.length >= 5 ? 5 : Math.min(4, normalized.length);
    return normalized.slice(0, count).join(' · ');
}

function renderProjectHeader(project: PortfolioModalProject) {
    const keywords = formatKeywords(project.keywords);
    const title = normalizeSentence(project.title);
    const role = normalizeSentence(project.role || '-');
    const period = normalizeSentence(formatProjectPeriod(project));
    return (
        <div className={classes.projectHeader}>
            <p className={`${classes.projectTitleLine} ${classes.sectionHeading}`}>
                <strong>{title}</strong>
            </p>
            <p className={classes.projectMetaLine}>
                <span><strong>Role</strong> {role}</span>
                <span><strong>Period</strong> {period}</span>
                <span><strong>Keywords</strong> {keywords}</span>
            </p>
        </div>
    );
}

function renderSheetHeader() {
    return (
        <div className={classes.pageHeader}>
            <span className={classes.docHeaderTitle}>Portfolio Submission</span>
            <span className={classes.docHeaderIdentity}>정지서 | ML Data Engineer</span>
        </div>
    );
}

function renderSheetFooter(pageNumber: number) {
    return (
        <footer className={classes.pageFooter}>
            <span className={classes.footerPage}>Page {pageNumber} / {TOTAL_PAGES}</span>
            <span className={classes.footerIdentity}>정지서 | ML Data Engineer</span>
        </footer>
    );
}

function renderOverview(project: PortfolioModalProject, counts: { background: number; objective: number; outcome: number }) {
    return (
        <div className={classes.overviewGrid}>
            <section className={classes.overviewItem}>
                <p className={classes.overviewLabel}>Background</p>
                <div className={classes.overviewBody}>
                    {renderBullets(project.overview.background, counts.background, classes.overviewBullets)}
                </div>
            </section>
            <section className={classes.overviewItem}>
                <p className={classes.overviewLabel}>Objective</p>
                <div className={classes.overviewBody}>
                    {renderBullets(project.overview.objective, counts.objective, classes.overviewBullets)}
                </div>
            </section>
            <section className={classes.overviewItem}>
                <p className={classes.overviewLabel}>Outcome</p>
                <div className={classes.overviewBody}>
                    {renderBullets(project.overview.outcome, counts.outcome, classes.overviewBullets)}
                </div>
            </section>
        </div>
    );
}

function renderLimitations(project: PortfolioModalProject, limit: number) {
    return (
        <div className={classes.limitationsBox}>
            {renderBullets(project.limitations, limit, classes.limitationsList)}
        </div>
    );
}

function renderEvidence(docs: ProjectEvidenceDocument[]) {
    if (docs.length === 0) {
        return <p className={classes.evidenceEmpty}>-</p>;
    }

    return (
        <div className={classes.evidenceList}>
            {docs.map((doc) => (
                <article key={doc.slug} className={classes.evidenceItem}>
                    <p className={classes.evidenceTitle}>{normalizeSentence(doc.title)}</p>
                    <div className={classes.evidenceMarkdown}>
                        <ReactMarkdown remarkPlugins={[remarkGfm]} components={evidenceMarkdownComponents}>
                            {doc.markdown}
                        </ReactMarkdown>
                    </div>
                </article>
            ))}
        </div>
    );
}

function renderProjectBlock(title: string, content: ReactNode, blockClassName?: string) {
    const className = blockClassName ? `${classes.projectBlock} ${blockClassName}` : classes.projectBlock;
    return (
        <section className={className}>
            <h3 className={`${classes.blockTitle} ${classes.sectionHeading}`}>{title}</h3>
            <div className={classes.blockBody}>{content}</div>
        </section>
    );
}

interface ProjectTemplateOptions {
    overviewCounts: { background: number; objective: number; outcome: number };
    rulesLimit: number;
    limitationsLimit: number;
    designLimit?: number;
    qualityLimit?: number;
    evidenceDocs?: ProjectEvidenceDocument[];
    className?: string;
}

function renderProjectSection(project: PortfolioModalProject, options: ProjectTemplateOptions) {
    const className = options.className ? `${classes.projectSection} ${options.className}` : classes.projectSection;
    return (
        <section className={className}>
            {renderProjectHeader(project)}
            <div className={classes.projectBlocks}>
                {renderProjectBlock('Overview', renderOverview(project, options.overviewCounts))}
                {typeof options.designLimit === 'number'
                    ? renderProjectBlock('Design', renderBullets(project.design, options.designLimit))
                    : null}
                {renderProjectBlock('Rules', renderBullets(project.rules, options.rulesLimit))}
                {typeof options.qualityLimit === 'number'
                    ? renderProjectBlock('Quality & Reprocess', renderBullets(project.quality_reprocess, options.qualityLimit))
                    : null}
                {options.evidenceDocs && options.evidenceDocs.length > 0
                    ? renderProjectBlock('Evidence', renderEvidence(options.evidenceDocs))
                    : null}
                {renderProjectBlock('Limitations', renderLimitations(project, options.limitationsLimit), classes.limitationsBlock)}
            </div>
        </section>
    );
}

export default async function PortfolioSubmitPage({ searchParams }: PageProps) {
    const params = await searchParams;
    const shouldAutoPrint = pickFirst(params.print) === '1';
    const projectById = buildProjectMap();
    const missingIds = PAGE_PROJECT_IDS.filter((id) => !projectById.has(id));

    if (missingIds.length > 0) {
        return (
            <main className={classes.page}>
                <div className={classes.wrap}>
                    <section className={classes.sheet}>
                        <Title order={2}>Portfolio Submission</Title>
                        <Text size="sm" c="red.6" mt={8}>
                            프로젝트 데이터가 누락되었습니다: {missingIds.join(', ')}
                        </Text>
                    </section>
                </div>
            </main>
        );
    }

    const security = projectById.get('security_platform')!;
    const telecom = projectById.get('telecom_pipeline')!;
    const crypto = projectById.get('crypto_stream')!;
    const graph = projectById.get('graph_reco_poc')!;
    const hiddenSpot = projectById.get('hidden_spot')!;
    const projectEvidenceMap = new Map<string, ProjectEvidenceDocument[]>(
        await Promise.all(
            PAGE_PROJECT_IDS.map(async (id) => {
                const project = projectById.get(id);
                if (!project) return [id, [] as ProjectEvidenceDocument[]] as [string, ProjectEvidenceDocument[]];
                const docs = await loadProjectEvidenceDocuments(project);
                return [id, docs] as [string, ProjectEvidenceDocument[]];
            })
        )
    );

    return (
        <main className={classes.page}>
            <AutoPrintOnMount enabled={shouldAutoPrint} />

            <div className={classes.wrap}>
                <section className={`${classes.headerCard} ${classes.screenOnly}`}>
                    <Title order={2}>포트폴리오 제출용 5페이지 Flatten</Title>
                    <Text size="sm" c="dimmed" mt={6}>
                        카드/모달 정보를 인라인 섹션으로 고정해 A4 5페이지 단면 출력에 맞춰 구성했습니다.
                    </Text>
                    <div className={classes.actions}>
                        <Link className={classes.actionBtn} href="/portfolio-submit?print=1">
                            출력하기 / PDF 저장
                        </Link>
                        <Link className={classes.actionBtn} href="/portfolio">
                            포트폴리오 미리보기로 돌아가기
                        </Link>
                    </div>
                </section>

                <section className={classes.sheet}>
                    {renderSheetHeader()}
                    <div className={classes.sheetBody}>
                        <h2 className={classes.pageTitle}>Page 1. Profile Summary & Project Index</h2>
                        <section className={classes.block}>
                            <h3 className={`${classes.blockTitle} ${classes.sectionHeading}`}>Profile Summary</h3>
                            <div className={classes.blockBody}>
                                {renderBullets(PROFILE_SUMMARY, 3)}
                            </div>
                        </section>

                        <section className={classes.block}>
                            <h3 className={`${classes.blockTitle} ${classes.sectionHeading}`}>Core Capabilities</h3>
                            <div className={classes.blockBody}>
                                {renderBullets(CORE_CAPABILITIES, 6)}
                            </div>
                        </section>

                        <section className={classes.block}>
                            <h3 className={`${classes.blockTitle} ${classes.sectionHeading}`}>Project Index</h3>
                            <div className={classes.blockBody}>
                                <ul className={classes.bullets}>
                                    {PROJECT_INDEX_LINES.map((line, index) => (
                                        <li key={`index-line-${index}`}>{index + 1}. {line}</li>
                                    ))}
                                </ul>
                            </div>
                        </section>
                    </div>
                    {renderSheetFooter(1)}
                </section>

                <section className={classes.sheet}>
                    {renderSheetHeader()}
                    <div className={classes.sheetBody}>
                        <h2 className={classes.pageTitle}>Page 2. 그룹사 통합 보안 데이터 플랫폼</h2>
                        {renderProjectSection(security, {
                            overviewCounts: FULL_OVERVIEW_COUNTS,
                            designLimit: 8,
                            rulesLimit: 5,
                            qualityLimit: 4,
                            evidenceDocs: projectEvidenceMap.get('security_platform'),
                            limitationsLimit: 2
                        })}
                    </div>
                    {renderSheetFooter(2)}
                </section>

                <section className={classes.sheet}>
                    {renderSheetHeader()}
                    <div className={classes.sheetBody}>
                        <h2 className={classes.pageTitle}>Page 3. 통신사 보안 로그 파이프라인 안정화</h2>
                        {renderProjectSection(telecom, {
                            overviewCounts: FULL_OVERVIEW_COUNTS,
                            designLimit: 8,
                            rulesLimit: 5,
                            qualityLimit: 4,
                            evidenceDocs: projectEvidenceMap.get('telecom_pipeline'),
                            limitationsLimit: 2
                        })}
                    </div>
                    {renderSheetFooter(3)}
                </section>

                <section className={`${classes.sheet} ${classes.halfPageSheet}`}>
                    {renderSheetHeader()}
                    <div className={`${classes.sheetBody} ${classes.halfBody}`}>
                        <h2 className={classes.pageTitle}>Page 4. 코인스트림 + 그래프 추천 PoC</h2>
                        <div className={classes.halfGrid}>
                            <section className={classes.halfSection}>
                                {renderProjectSection(crypto, {
                                    overviewCounts: HALF_OVERVIEW_COUNTS,
                                    rulesLimit: 4,
                                    evidenceDocs: projectEvidenceMap.get('crypto_stream'),
                                    limitationsLimit: 2,
                                    className: classes.halfProjectSection
                                })}
                            </section>
                            <section className={classes.halfSection}>
                                {renderProjectSection(graph, {
                                    overviewCounts: HALF_OVERVIEW_COUNTS,
                                    rulesLimit: 4,
                                    evidenceDocs: projectEvidenceMap.get('graph_reco_poc'),
                                    limitationsLimit: 2,
                                    className: classes.halfProjectSection
                                })}
                            </section>
                        </div>
                    </div>
                    {renderSheetFooter(4)}
                </section>

                <section className={classes.sheet}>
                    {renderSheetHeader()}
                    <div className={classes.sheetBody}>
                        <h2 className={classes.pageTitle}>Page 5. Hidden Spot</h2>
                        {renderProjectSection(hiddenSpot, {
                            overviewCounts: FULL_OVERVIEW_COUNTS,
                            designLimit: 8,
                            rulesLimit: 5,
                            qualityLimit: 4,
                            evidenceDocs: projectEvidenceMap.get('hidden_spot'),
                            limitationsLimit: 2
                        })}
                    </div>
                    {renderSheetFooter(5)}
                </section>
            </div>
        </main>
    );
}
