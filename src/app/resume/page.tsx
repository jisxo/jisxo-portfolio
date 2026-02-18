'use client';

import React from 'react';

import { Container, Title, Text, Group, Stack, Badge, Divider, Button, Box, ThemeIcon, List, Paper, Grid } from '@mantine/core';
import { IconMail, IconBrandGithub, IconWorld, IconPrinter, IconPhone, IconMapPin, IconBrandLinkedin } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';
import { projects } from '@/data/projects';
import { resumeData } from '@/data/resume';
import classes from './resume.module.css';

export default function ResumePage() {
    const router = useRouter();
    const { personal, summary, experience, skills, education, certifications } = resumeData;

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
                pt={80} // 80px Top
                pb={40} // 40px Bottom
                px={80} // 80px Sides
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
                {/* Header - Compact Row */}
                <Group justify="space-between" align="flex-end" mb={30}>
                    <div>
                        <Title order={1} fz={26} fw={900} style={{ letterSpacing: '-0.5px' }}>{personal.name}</Title>
                        <Text fz={12} fw={700} c="blue.8" tt="uppercase" style={{ letterSpacing: '1px' }}>{personal.role}</Text>
                    </div>
                    <Group gap="xl" wrap="nowrap">
                        <Stack gap={2} align="flex-end" style={{ borderRight: '1px solid var(--mantine-color-gray-2)', paddingRight: '15px' }}>
                            <Text fz={9} c="dimmed">{personal.phone}</Text>
                            <Text fz={9} c="dimmed" component="a" href={`mailto:${personal.email}`}>{personal.email}</Text>
                        </Stack>
                        <Stack gap={2} align="flex-end">
                            <Text fz={9} c="dimmed" component="a" href={`https://github.com/${personal.github}`}>github.com/{personal.github}</Text>
                            <Text fz={9} c="dimmed" component="a" href={personal.portfolioUrl.startsWith('http') ? personal.portfolioUrl : `https://${personal.portfolioUrl}`}>
                                {personal.portfolioUrl.replace(/^https?:\/\//, '')}
                            </Text>
                        </Stack>
                    </Group>
                </Group>

                {/* Summary */}
                <Box mb={32}>
                    <SectionTitle title="Summary" />
                    <Text fz={12} lh={1.7} c="dark.9" style={{ whiteSpace: 'pre-line' }}>
                        {summary}
                    </Text>
                </Box>

                {/* Skills */}
                <Box mb={32}>
                    <SectionTitle title="Technical Skills" />
                    <Grid gutter="xs">
                        {skills.map((skillCat, idx) => (
                            <React.Fragment key={idx}>
                                <Grid.Col span={3}>
                                    <Text fz={12} fw={700}>{skillCat.title}</Text>
                                </Grid.Col>
                                <Grid.Col span={9}>
                                    <Text fz={12} fw={600} mb={4}>{skillCat.techStack.join(', ')}</Text>
                                    {skillCat.descriptions && skillCat.descriptions.length > 0 && (
                                        <List fz={11} c="dimmed" spacing={0} icon="•" style={{ lineHeight: 1.3 }}>
                                            {skillCat.descriptions.map((desc, i) => (
                                                <List.Item key={i}>{desc}</List.Item>
                                            ))}
                                        </List>
                                    )}
                                </Grid.Col>
                            </React.Fragment>
                        ))}
                    </Grid>
                </Box>

                {/* Work Experience */}
                <Box mb={32}>
                    <SectionTitle title="Work Experience" />
                    <Stack gap={22}>
                        {experience.map((exp, idx) => (
                            <ExperienceItem
                                key={idx}
                                company={exp.company}
                                role={exp.role}
                                period={exp.period}
                                summary={exp.summary}
                            >
                                {exp.bullets && (
                                    <List fz={12} spacing={3} withPadding listStyleType="disc">
                                        {exp.bullets.map((bullet, bIdx) => (
                                            <List.Item key={bIdx} style={{ lineHeight: 1.4 }}>{bullet}</List.Item>
                                        ))}
                                    </List>
                                )}
                            </ExperienceItem>
                        ))}
                    </Stack>
                </Box>

                {/* Projects */}
                <div className="page-break" />
                <Box mb={40}>
                    <SectionTitle title="Key Projects" />
                    <Stack gap={30}>
                        {projects.map((project, index) => (
                            <ProjectItem
                                key={index}
                                title={`${index + 1}. ${project.title}`}
                                role={project.role}
                                desc={project.description}
                                period={project.duration}
                                contributions={project.contributions}
                            />
                        ))}
                    </Stack>
                </Box>

                {/* Education & Certs - Bottom Row */}
                <Grid gutter={50}>
                    <Grid.Col span={6}>
                        <SectionTitle title="Education" />
                        {education.map((edu, idx) => (
                            <Box key={idx} mb="sm">
                                <Text fw={700} fz={12} mb={2}>{edu.school}</Text>
                                <Text fz={11} c="dimmed" mb={2}>{edu.period}</Text>
                                <Text fz={12}>{edu.degree}</Text>
                            </Box>
                        ))}
                    </Grid.Col>
                    <Grid.Col span={6}>
                        <SectionTitle title="Certifications" />
                        <Stack gap="xs">
                            {certifications.map((cert, idx) => (
                                <Group key={idx} justify="space-between" align="baseline">
                                    <Box>
                                        <Text fw={700} fz={12}>{cert.name}</Text>
                                        {cert.issuer && <Text fz={11} c="dimmed" lh={1.4}>{cert.issuer}</Text>}
                                    </Box>
                                    <Text fz={11} c="dimmed">{cert.date}</Text>
                                </Group>
                            ))}
                        </Stack>
                    </Grid.Col>
                </Grid>
            </Paper>
        </Box>
    );
}

// Helper Components
function SectionTitle({ title }: { title: string }) {
    return (
        <Box mb={15}>
            <Text fz={10} fw={800} tt="uppercase" c="blue.8" mb={6} style={{ letterSpacing: '1px' }}>{title}</Text>
            <Divider color="blue.1" size="xs" />
        </Box>
    );
}

function ExperienceItem({ company, role, period, summary, children }: any) {
    return (
        <Box style={{ breakInside: 'avoid', pageBreakInside: 'avoid' }}>
            <Group justify="space-between" mb={4}>
                <Text fw={800} fz={14} style={{ letterSpacing: '-0.3px' }}>{company}</Text>
                <Text fz={12} c="dimmed" fw={500}>{period}</Text>
            </Group>
            <Text fz={14} fw={700} mb={6} c="dark.7">{role}</Text>
            <Text fz={12} lh={1.4} mb={children ? 8 : 0} c="dark.8">{summary}</Text>
            {children}
        </Box>
    );
}

function ProjectItem({ title, role, desc, period, contributions }: any) {
    return (
        <Box style={{ breakInside: 'avoid', pageBreakInside: 'avoid' }}>
            <Group justify="space-between" mb={8} align="flex-start">
                <Text fw={800} fz={15} style={{ flex: 1, letterSpacing: '-0.2px' }}>{title}</Text>
                {period && <Text fz={11} c="dimmed" fw={500}>{period}</Text>}
            </Group>
            <Text fz={12} c="blue.7" fw={700} mb={10} tt="uppercase" style={{ letterSpacing: '0.5px' }}>{role}</Text>

            <Text fz={12} lh={1.6} mb={contributions ? 12 : 0} c="dark.8">{desc}</Text>

            {contributions && contributions.length > 0 && (
                <List fz={12} spacing={6} withPadding style={{ color: 'var(--mantine-color-gray-8)' }}>
                    {contributions.map((item: string, idx: number) => (
                        <List.Item key={idx} style={{ lineHeight: 1.5 }}>{item}</List.Item>
                    ))}
                </List>
            )}
        </Box>
    );
}
