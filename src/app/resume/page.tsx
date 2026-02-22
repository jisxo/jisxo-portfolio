'use client';

import React from 'react';

import { Title, Text, Group, Stack, Divider, Button, Box, List, Paper, Grid } from '@mantine/core';
import { IconPrinter } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';
import { resumeData } from '@/data/resume';
import { securityPlatformPhasedProject } from '@/data/projects/security_platform_phased';
import { cryptoStreamingProject } from '@/data/projects/crypto_streaming';
import { hiddenSpotMinioProject } from '@/data/projects/hidden_spot_minio';
import { retailGnnProject } from '@/data/projects/retail_gnn';

function cleanResumeText(text: string) {
    return text
        .replace(/\s*\(([^)]*[A-Za-z][^)]*)\)/g, ' $1')
        .replace(/\s{2,}/g, ' ')
        .trim();
}

export default function ResumePage() {
    const router = useRouter();
    const { personal, summary, experience, skills, education, certifications } = resumeData;
    const sectionSpacing = 34;
    const resumeProjects = [
        {
            displayTitle: '그룹사 통합 보안 데이터 플랫폼',
            role: securityPlatformPhasedProject.role,
            period: securityPlatformPhasedProject.duration,
            bullets: [
                '수작업 관제 프로세스를 자동화하는 ETL 파이프라인 설계',
                '대용량 비정형 로그 처리 시 JSON 분할 처리로 메모리 병목 해결',
                '5종 이상 이기종 보안 로그를 단일 스키마로 표준화',
                '로그 파싱·정규화 구조 설계로 데이터 정합성 기준 수립',
                '통합 데이터 기반 탐지 룰 개선을 위한 분석 구조 마련',
            ],
        },
        {
            displayTitle: '코인스트림 — 실시간 암호화폐 데이터 스트리밍 파이프라인',
            role: cryptoStreamingProject.role,
            period: cryptoStreamingProject.duration,
            bullets: [
                'Kafka 기반 시세·체결 데이터 스트리밍 파이프라인 구성',
                'Spark Streaming을 활용한 이벤트 시간 기준 집계 구조 구현',
                '워터마크 적용으로 지연 도착 데이터 처리',
                '멱등성 기반 중복 제거 로직 설계 및 결과 저장 구조 분리',
            ],
        },
        {
            displayTitle: 'Hidden Spot — 데이터 레이크 기반 리뷰 분석 서비스',
            role: hiddenSpotMinioProject.role,
            period: hiddenSpotMinioProject.duration,
            bullets: [
                'MinIO 기반 원본 우선 저장 구조 설계',
                '수집·정제·요약 단계를 분리한 ELT 파이프라인 구성',
                'Schema-on-Read 방식 적용으로 스키마 변경 대응 및 재처리 비용 최소화',
                '분석 결과를 API로 제공하는 서빙 구조 구현',
            ],
        },
        {
            displayTitle: '공간-브랜드 그래프 기반 추천 PoC',
            role: retailGnnProject.role,
            period: retailGnnProject.duration,
            bullets: [
                '단일 테이블 데이터를 노드·엣지 구조로 변환',
                '그래프 임베딩 학습 입력 데이터 구성 및 학습 수행',
                '학습 중 메모리 초과 발생 시 데이터 분할 학습으로 대응',
            ],
        },
    ];
    const summaryLines = summary
        .split('\n')
        .map((line) => line.trim())
        .filter(Boolean);

    const handlePrint = (e: React.MouseEvent) => {
        e.stopPropagation();
        window.print();
    };

    const handleBackgroundClick = () => {
        router.push('/');
    };

    return (
        <Box
            bg="gray.0"
            py="xl"
            className="resume-wrapper"
            style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'zoom-out' }}
            onClick={handleBackgroundClick}
        >
            {/* Print Button - Hidden when printing */}
            <Group mb="lg" className="no-print" onClick={(e) => e.stopPropagation()}>
                <Button
                    leftSection={<IconPrinter size={20} />}
                    onClick={handlePrint}
                    variant="filled"
                    color="dark"
                    size="md"
                    radius="md"
                >
                    PDF로 저장하기 / 인쇄
                </Button>
                <Button
                    component="a"
                    href="/"
                    variant="default"
                    size="md"
                    radius="md"
                >
                    포트폴리오로 돌아가기
                </Button>
            </Group>

            {/* A4 Resume Container */}
            <Paper
                shadow="md"
                pt={48}
                pb={32}
                px={48}
                className="resume-container"
                bg="white"
                onClick={(e) => e.stopPropagation()}
                style={{
                    width: '210mm',
                    minHeight: '297mm', // A4 height
                    margin: '0 auto',
                    color: '#000',
                    boxSizing: 'border-box',
                    cursor: 'auto'
                }}
            >
                {/* Header */}
                <Box mb={sectionSpacing}>
                    <Title order={1} fz="19pt" fw={800} style={{ letterSpacing: '-0.3px' }}>
                        {cleanResumeText(personal.name)}
                    </Title>
                    <Text fz="11.5pt" fw={600} c="dark.8" mb={8}>{personal.role}</Text>
                    <Group gap={14} wrap="wrap">
                        <Text fz="10.8pt" c="dark.7">{personal.phone}</Text>
                        <Text fz="10.8pt" c="dark.7" component="a" href={`mailto:${personal.email}`}>{personal.email}</Text>
                        <Text fz="10.8pt" c="dark.7" component="a" href={`https://github.com/${personal.github}`}>github.com/{personal.github}</Text>
                        <Text fz="10.8pt" c="dark.7" component="a" href={personal.portfolioUrl.startsWith('http') ? personal.portfolioUrl : `https://${personal.portfolioUrl}`}>
                            {personal.portfolioUrl.replace(/^https?:\/\//, '')}
                        </Text>
                    </Group>
                </Box>

                {/* Summary */}
                <Box mb={sectionSpacing} className="resume-section">
                    <SectionTitle title="Summary" />
                    <List fz="10.8pt" spacing={3} withPadding listStyleType="disc">
                        {summaryLines.map((line, idx) => (
                            <List.Item key={idx} style={{ lineHeight: 1.25 }}>{line}</List.Item>
                        ))}
                    </List>
                </Box>

                {/* Skills */}
                <Box mb={sectionSpacing} className="resume-section">
                    <SectionTitle title="Technical Skills" />
                    <Grid gutter="xs">
                        {skills.map((skillCat, idx) => (
                            <React.Fragment key={idx}>
                                <Grid.Col span={4}>
                                    <Text fz="10.8pt" fw={600}>{skillCat.title}</Text>
                                </Grid.Col>
                                <Grid.Col span={8}>
                                    <List fz="10.8pt" spacing={1} withPadding listStyleType="disc">
                                        {skillCat.techStack.map((item) => (
                                            <List.Item key={item} style={{ lineHeight: 1.25 }}>
                                                {cleanResumeText(item)}
                                            </List.Item>
                                        ))}
                                        {skillCat.descriptions?.map((desc) => (
                                            <List.Item key={desc} style={{ lineHeight: 1.25 }}>
                                                {cleanResumeText(desc)}
                                            </List.Item>
                                        ))}
                                    </List>
                                </Grid.Col>
                            </React.Fragment>
                        ))}
                    </Grid>
                </Box>

                {/* Work Experience */}
                <Box mb={sectionSpacing} className="resume-section">
                    <SectionTitle title="Work Experience" />
                    <Stack gap={14}>
                        {experience.map((exp, idx) => (
                            <ExperienceItem
                                key={idx}
                                company={exp.company}
                                role={exp.role}
                                period={exp.period}
                                bullets={exp.bullets && exp.bullets.length > 0 ? exp.bullets : [exp.summary]}
                            />
                        ))}
                    </Stack>
                </Box>

                {/* Education & Certs */}
                <Box mb={30} className="resume-section">
                    <Grid gutter={40}>
                        <Grid.Col span={6}>
                            <SectionTitle title="Education" />
                            {education.map((edu, idx) => (
                                <Box key={idx} mb="sm">
                                    <Text fw={700} fz="10.8pt" mb={2}>{cleanResumeText(edu.school)}</Text>
                                    <Text fz="10.8pt" c="dimmed" mb={2}>{edu.period}</Text>
                                    <Text fz="10.8pt" lh={1.25}>
                                        {edu.degree ? cleanResumeText(edu.degree) : ''}
                                    </Text>
                                </Box>
                            ))}
                        </Grid.Col>
                        <Grid.Col span={6}>
                            <SectionTitle title="Certifications" />
                            <Stack gap={6}>
                                {certifications.map((cert, idx) => (
                                    <Box key={idx}>
                                        <Text fw={700} fz="10.8pt">{cleanResumeText(cert.name)}</Text>
                                        {cert.issuer && (
                                            <Text fz="10.8pt" c="dimmed" lh={1.25}>
                                                {cleanResumeText(cert.issuer)}
                                            </Text>
                                        )}
                                        <Text fz="10.8pt" c="dimmed">{cert.date}</Text>
                                    </Box>
                                ))}
                            </Stack>
                        </Grid.Col>
                    </Grid>
                </Box>

                {/* Projects */}
                <Box mb={sectionSpacing}>
                    <SectionTitle title="Projects" />
                    <Stack gap={16}>
                        {resumeProjects.map((item, index) => (
                            <ProjectItem
                                key={index}
                                title={`${index + 1}. ${item.displayTitle}`}
                                role={item.role}
                                period={item.period}
                                contributions={item.bullets}
                            />
                        ))}
                    </Stack>
                </Box>
            </Paper>
        </Box>
    );
}

// Helper Components
function SectionTitle({ title }: { title: string }) {
    return (
        <Box mb={10}>
            <Text fz="13pt" fw={700} c="dark.9" mb={5}>{title}</Text>
            <Divider color="gray.3" size="xs" />
        </Box>
    );
}

function ExperienceItem({ company, role, period, bullets }: {
    company: string;
    role: string;
    period: string;
    bullets: string[];
}) {
    return (
        <Box style={{ breakInside: 'avoid', pageBreakInside: 'avoid' }}>
            <Text fw={700} fz="11pt" style={{ letterSpacing: '-0.2px' }}>{company}</Text>
            <Text fz="10.8pt" c="dimmed" mb={4}>{role} | {period}</Text>
            <List fz="10.8pt" spacing={2} withPadding listStyleType="disc">
                {bullets.map((bullet, idx) => (
                    <List.Item key={idx} style={{ lineHeight: 1.25 }}>{cleanResumeText(bullet)}</List.Item>
                ))}
            </List>
        </Box>
    );
}

function ProjectItem({ title, role, period, contributions }: {
    title: string;
    role?: string;
    period?: string;
    contributions?: string[];
}) {
    return (
        <Box style={{ breakInside: 'avoid', pageBreakInside: 'avoid' }}>
            <Text fw={700} fz="11pt" style={{ letterSpacing: '-0.2px' }}>{title}</Text>
            <Text fz="10.8pt" c="dimmed" mb={4}>
                {role || '데이터 엔지니어'} | {period || '기간 미기재'}
            </Text>

            {contributions && contributions.length > 0 && (
                <List fz="10.8pt" spacing={2} withPadding style={{ color: 'var(--mantine-color-gray-8)' }}>
                    {contributions.map((item: string, idx: number) => (
                        <List.Item key={idx} style={{ lineHeight: 1.25 }}>{cleanResumeText(item)}</List.Item>
                    ))}
                </List>
            )}
        </Box>
    );
}
