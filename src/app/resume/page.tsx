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
                p={40}
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
                <Group justify="space-between" align="flex-start" mb="lg">
                    <div>
                        <Title order={1} size={32} fw={900} style={{ letterSpacing: '-0.5px' }}>{personal.name}</Title>
                        <Text size="lg" fw={600} c="blue.8" mt={2}>{personal.role}</Text>
                    </div>
                    <Stack gap={2} align="flex-end">
                        <Group gap={8}>
                            <IconPhone size={14} color="#666" />
                            <Text size="xs" c="dimmed">{personal.phone}</Text>
                        </Group>
                        <Group gap={8}>
                            <IconBrandGithub size={14} color="#666" />
                            <Text size="xs" c="dimmed" component="a" href={`https://github.com/${personal.github}`}>
                                github.com/{personal.github}
                            </Text>
                        </Group>
                        <Group gap={8}>
                            <IconMail size={14} color="#666" />
                            <Text size="xs" c="dimmed" component="a" href={`mailto:${personal.email}`}>
                                {personal.email}
                            </Text>
                        </Group>
                        <Group gap={8}>
                            <IconWorld size={14} color="#666" />
                            <Text size="xs" c="dimmed" component="a" href={personal.portfolioUrl.startsWith('http') ? personal.portfolioUrl : `https://${personal.portfolioUrl}`}>
                                {personal.portfolioUrl.replace(/^https?:\/\//, '')}
                            </Text>
                        </Group>
                    </Stack>
                </Group>

                <Divider mb="lg" color="gray.2" />

                {/* Summary */}
                <SectionTitle title="Summary" />
                <Text size="xs" lh={1.5} mb="lg" c="dark.9" style={{ whiteSpace: 'pre-line' }}>
                    {summary}
                </Text>

                {/* Skills */}
                <SectionTitle title="Technical Skills" />
                <Grid mb="lg" gutter="xs">
                    {skills.map((skillCat, idx) => (
                        <React.Fragment key={idx}>
                            <Grid.Col span={3}><Text size="xs" fw={700}>{skillCat.title}</Text></Grid.Col>
                            <Grid.Col span={9}><Text size="xs">{skillCat.skills.join(', ')}</Text></Grid.Col>
                        </React.Fragment>
                    ))}
                </Grid>

                {/* Work Experience */}
                <SectionTitle title="Work Experience" />
                <Stack gap="lg" mb="lg">
                    {experience.map((exp, idx) => (
                        <ExperienceItem
                            key={idx}
                            company={exp.company}
                            role={exp.role}
                            period={exp.period}
                            summary={exp.summary}
                        >
                            {exp.bullets && (
                                <List size="xs" spacing={2} withPadding listStyleType="disc">
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
                <Stack gap="lg" mb="lg">
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

                {/* Education */}
                <SectionTitle title="Education" />
                {education.map((edu, idx) => (
                    <Group key={idx} justify="space-between" align="flex-start" mb={4}>
                        <div>
                            <Text fw={700} size="xs">{edu.school}</Text>
                            <Text size="xs">{edu.degree}</Text>
                        </div>
                        <Text size="xs" c="dimmed">{edu.period}</Text>
                    </Group>
                ))}

                {/* Certifications */}
                <Box mt="lg">
                    <SectionTitle title="Certifications" />
                    <Stack gap={4}>
                        {certifications.map((cert, idx) => (
                            <Group key={idx} justify="space-between" align="flex-start">
                                <div>
                                    <Text fw={700} size="xs">{cert.name}</Text>
                                    {cert.issuer && <Text fz={10} c="dimmed">{cert.issuer}</Text>}
                                </div>
                                <Text size="xs" c="dimmed">{cert.date}</Text>
                            </Group>
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
        <Box mb="sm">
            <Text size="xs" fw={800} tt="uppercase" c="blue.8" mb={2} style={{ letterSpacing: '0.5px' }}>{title}</Text>
            <Divider color="blue.1" size="xs" />
        </Box>
    );
}

function ExperienceItem({ company, role, period, summary, children }: any) {
    return (
        <Box>
            <Group justify="space-between" mb={1}>
                <Text fw={700} size="sm">{company}</Text>
                <Text size="xs" c="dimmed">{period}</Text>
            </Group>
            <Text size="xs" fw={600} mb={2} c="dark.7">{role}</Text>
            <Text size="xs" lh={1.4} mb={children ? 2 : 0}>{summary}</Text>
            {children}
        </Box>
    );
}

function ProjectItem({ title, role, desc, period, contributions }: any) {
    return (
        <Box>
            <Group justify="space-between" mb={1} align="flex-start">
                <Text fw={700} size="xs" style={{ flex: 1 }}>{title}</Text>
                {period && <Text fz={10} c="dimmed" fw={500}>{period}</Text>}
            </Group>
            <Group gap={8} mb={2}>
                <Text fz={10} c="dimmed" fw={600} bg="gray.1" px={4} py={0.5} style={{ borderRadius: 2 }}>{role}</Text>
            </Group>

            <Text size="xs" lh={1.3} mb={contributions ? 4 : 0}>{desc}</Text>

            {contributions && contributions.length > 0 && (
                <List spacing={1} withPadding style={{ color: 'var(--mantine-color-gray-7)', fontSize: '10px' }}>
                    {contributions.map((item: string, idx: number) => (
                        <List.Item key={idx} fz={10}>{item}</List.Item>
                    ))}
                </List>
            )}
        </Box>
    );
}
