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
                p={30}
                className="resume-container"
                bg="white"
                onClick={(e) => e.stopPropagation()}
                style={{
                    width: '210mm',
                    minHeight: '297mm', // A4 height
                    margin: '0 auto',
                    color: '#000', // Force black text for print/readability
                    boxSizing: 'border-box',
                    cursor: 'auto'
                }}
            >
                {/* Header */}
                <Group justify="space-between" align="flex-start" mb="md">
                    <div>
                        <Title order={1} fz={28} fw={900} style={{ letterSpacing: '-0.5px' }}>{personal.name}</Title>
                        <Text fz="md" fw={600} c="blue.8" mt={0}>{personal.role}</Text>
                    </div>
                    <Stack gap={0} align="flex-end">
                        <Group gap={6}>
                            <IconPhone size={12} color="#666" />
                            <Text fz={11} c="dimmed">{personal.phone}</Text>
                        </Group>
                        <Group gap={6}>
                            <IconBrandGithub size={12} color="#666" />
                            <Text fz={11} c="dimmed" component="a" href={`https://github.com/${personal.github}`}>
                                github.com/{personal.github}
                            </Text>
                        </Group>
                        <Group gap={6}>
                            <IconMail size={12} color="#666" />
                            <Text fz={11} c="dimmed" component="a" href={`mailto:${personal.email}`}>
                                {personal.email}
                            </Text>
                        </Group>
                        <Group gap={6}>
                            <IconWorld size={12} color="#666" />
                            <Text fz={11} c="dimmed" component="a" href={personal.portfolioUrl.startsWith('http') ? personal.portfolioUrl : `https://${personal.portfolioUrl}`}>
                                {personal.portfolioUrl.replace(/^https?:\/\//, '')}
                            </Text>
                        </Group>
                    </Stack>
                </Group>

                <Divider mb="md" color="gray.1" />

                {/* Summary */}
                <SectionTitle title="Summary" />
                <Text fz={11} lh={1.4} mb="md" c="dark.9" style={{ whiteSpace: 'pre-line' }}>
                    {summary}
                </Text>

                {/* Skills */}
                <SectionTitle title="Technical Skills" />
                <Grid mb="md" gutter={2}>
                    {skills.map((skillCat, idx) => (
                        <React.Fragment key={idx}>
                            <Grid.Col span={3}><Text fz={11} fw={700}>{skillCat.title}</Text></Grid.Col>
                            <Grid.Col span={9}><Text fz={11}>{skillCat.skills.join(', ')}</Text></Grid.Col>
                        </React.Fragment>
                    ))}
                </Grid>

                {/* Work Experience */}
                <SectionTitle title="Work Experience" />
                <Stack gap="md" mb="md">
                    {experience.map((exp, idx) => (
                        <ExperienceItem
                            key={idx}
                            company={exp.company}
                            role={exp.role}
                            period={exp.period}
                            summary={exp.summary}
                        >
                            {exp.bullets && (
                                <List fz={11} spacing={1} withPadding listStyleType="disc">
                                    {exp.bullets.map((bullet, bIdx) => (
                                        <List.Item key={bIdx}>{bullet}</List.Item>
                                    ))}
                                </List>
                            )}
                        </ExperienceItem>
                    ))}
                </Stack>

                {/* Projects */}
                <div className="page-break" />
                <SectionTitle title="Key Projects" />
                <Stack gap="md" mb="md">
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

                {/* Education & Certs */}
                <Grid gutter="xl">
                    <Grid.Col span={6}>
                        <SectionTitle title="Education" />
                        {education.map((edu, idx) => (
                            <Box key={idx} mb={4}>
                                <Group justify="space-between" align="baseline">
                                    <Text fw={700} fz={11}>{edu.school}</Text>
                                    <Text fz={10} c="dimmed">{edu.period}</Text>
                                </Group>
                                <Text fz={11}>{edu.degree}</Text>
                            </Box>
                        ))}
                    </Grid.Col>
                    <Grid.Col span={6}>
                        <SectionTitle title="Certifications" />
                        <Stack gap={2}>
                            {certifications.map((cert, idx) => (
                                <Group key={idx} justify="space-between" align="baseline">
                                    <Box>
                                        <Text fw={700} fz={11}>{cert.name}</Text>
                                        {cert.issuer && <Text fz={9} c="dimmed" lh={1}>{cert.issuer}</Text>}
                                    </Box>
                                    <Text fz={10} c="dimmed">{cert.date}</Text>
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
        <Box mb={6}>
            <Text fz={10} fw={800} tt="uppercase" c="blue.8" mb={1} style={{ letterSpacing: '0.5px' }}>{title}</Text>
            <Divider color="blue.1" size="xs" />
        </Box>
    );
}

function ExperienceItem({ company, role, period, summary, children }: any) {
    return (
        <Box>
            <Group justify="space-between" mb={0}>
                <Text fw={700} fz="sm">{company}</Text>
                <Text fz={10} c="dimmed">{period}</Text>
            </Group>
            <Text fz={11} fw={600} mb={1} c="dark.7">{role}</Text>
            <Text fz={11} lh={1.3} mb={children ? 1 : 0}>{summary}</Text>
            {children}
        </Box>
    );
}

function ProjectItem({ title, role, desc, period, contributions }: any) {
    return (
        <Box>
            <Group justify="space-between" mb={0} align="flex-start">
                <Text fw={700} fz={11} style={{ flex: 1 }}>{title}</Text>
                {period && <Text fz={9} c="dimmed" fw={500}>{period}</Text>}
            </Group>
            <Text fz={9} c="dimmed" fw={600} mb={2}>{role}</Text>

            <Text fz={11} lh={1.3} mb={contributions ? 2 : 0}>{desc}</Text>

            {contributions && contributions.length > 0 && (
                <List fz={10} spacing={0} withPadding style={{ color: 'var(--mantine-color-gray-7)' }}>
                    {contributions.map((item: string, idx: number) => (
                        <List.Item key={idx}>{item}</List.Item>
                    ))}
                </List>
            )}
        </Box>
    );
}
