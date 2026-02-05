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
    const { personal, summary, experience, skills, education } = resumeData;

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
                p={50}
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
                <Group justify="space-between" align="flex-start" mb="xl">
                    <div>
                        <Title order={1} size={36} fw={900} style={{ letterSpacing: '-0.5px' }}>{personal.name}</Title>
                        <Text size="xl" fw={600} c="blue.8" mt={4}>{personal.role}</Text>
                    </div>
                    <Stack gap={4} align="flex-end">
                        <Group gap={8}>
                            <IconPhone size={16} color="#666" />
                            <Text size="sm" c="dimmed">{personal.phone}</Text>
                        </Group>
                        <Group gap={8}>
                            <IconBrandGithub size={16} color="#666" />
                            <Text size="sm" c="dimmed" component="a" href={`https://github.com/${personal.github}`}>
                                github.com/{personal.github}
                            </Text>
                        </Group>
                        <Group gap={8}>
                            <IconMail size={16} color="#666" />
                            <Text size="sm" c="dimmed" component="a" href={`mailto:${personal.email}`}>
                                {personal.email}
                            </Text>
                        </Group>
                        <Group gap={8}>
                            <IconWorld size={16} color="#666" />
                            <Text size="sm" c="dimmed" component="a" href={personal.portfolioUrl.startsWith('http') ? personal.portfolioUrl : `https://${personal.portfolioUrl}`}>
                                {personal.portfolioUrl.replace(/^https?:\/\//, '')}
                            </Text>
                        </Group>
                    </Stack>
                </Group>

                <Divider mb="xl" color="gray.3" />

                {/* Summary */}
                <SectionTitle title="Summary" />
                <Text size="sm" lh={1.6} mb="xl" c="dark.9" style={{ whiteSpace: 'pre-line' }}>
                    {summary}
                </Text>

                {/* Skills */}
                <SectionTitle title="Technical Skills" />
                <Grid mb="xl">
                    {skills.map((skillCat, idx) => (
                        <React.Fragment key={idx}>
                            <Grid.Col span={3}><Text size="sm" fw={700}>{skillCat.title}</Text></Grid.Col>
                            <Grid.Col span={9}><Text size="sm">{skillCat.skills.join(', ')}</Text></Grid.Col>
                        </React.Fragment>
                    ))}
                </Grid>

                {/* Work Experience */}
                <SectionTitle title="Work Experience" />
                <Stack gap="xl" mb="xl">
                    {experience.map((exp, idx) => (
                        <ExperienceItem
                            key={idx}
                            company={exp.company}
                            role={exp.role}
                            period={exp.period}
                            summary={exp.summary}
                        >
                            {exp.bullets && (
                                <List size="sm" spacing={4} withPadding listStyleType="disc">
                                    {exp.bullets.map((bullet, bIdx) => (
                                        <List.Item key={bIdx}>{bullet}</List.Item>
                                    ))}
                                </List>
                            )}
                            {exp.skills && (
                                <Group gap={8} mt="xs">
                                    {exp.skills.map((skill, sIdx) => (
                                        <Badge key={sIdx} size="xs" variant="outline" color="gray">{skill}</Badge>
                                    ))}
                                </Group>
                            )}
                        </ExperienceItem>
                    ))}
                </Stack>

                {/* Projects */}
                <div className="page-break" />
                <SectionTitle title="Key Projects" />
                <Stack gap="xl" mb="xl">
                    {projects.map((project, index) => (
                        <ProjectItem
                            key={index}
                            title={`${index + 1}. ${project.title}`}
                            role={project.role}
                            desc={project.description}
                            tags={project.tags}
                            period={project.duration}
                            contributions={project.contributions}
                        />
                    ))}
                </Stack>

                {/* Education */}
                <SectionTitle title="Education" />
                {education.map((edu, idx) => (
                    <Group key={idx} justify="space-between" align="flex-start" mb={idx === education.length - 1 ? 0 : 'xs'}>
                        <div>
                            <Text fw={700} size="sm">{edu.school}</Text>
                            <Text size="sm">{edu.degree}</Text>
                        </div>
                        <Text size="sm" c="dimmed">{edu.period}</Text>
                    </Group>
                ))}
            </Paper>
        </Box>
    );
}

// Helper Components
function SectionTitle({ title }: { title: string }) {
    return (
        <Box mb="md">
            <Text size="md" fw={800} tt="uppercase" c="blue.8" mb={4} style={{ letterSpacing: '1px' }}>{title}</Text>
            <Divider color="blue.2" size="sm" />
        </Box>
    );
}

function ExperienceItem({ company, role, period, summary, children }: any) {
    return (
        <Box>
            <Group justify="space-between" mb={2}>
                <Text fw={700} size="md">{company}</Text>
                <Text size="sm" c="dimmed">{period}</Text>
            </Group>
            <Text size="sm" fw={600} mb={4} c="dark.7">{role}</Text>
            <Text size="sm" lh={1.5} mb={children ? 4 : 0}>{summary}</Text>
            {children}
        </Box>
    );
}

function ProjectItem({ title, role, desc, tags, period, contributions }: any) {
    return (
        <Box>
            <Group justify="space-between" mb={2} align="flex-start">
                <Text fw={700} size="sm" style={{ flex: 1 }}>{title}</Text>
                {period && <Text size="xs" c="dimmed" fw={500}>{period}</Text>}
            </Group>
            <Group gap={8} mb={4}>
                <Text size="xs" c="dimmed" fw={600} bg="gray.1" px={6} py={1} style={{ borderRadius: 4 }}>{role}</Text>
            </Group>

            <Text size="sm" lh={1.4} mb={contributions ? 8 : 0}>{desc}</Text>

            {contributions && contributions.length > 0 && (
                <List size="xs" spacing={2} withPadding mb={8} style={{ color: 'var(--mantine-color-gray-7)' }}>
                    {contributions.map((item: string, idx: number) => (
                        <List.Item key={idx}>{item}</List.Item>
                    ))}
                </List>
            )}

            {tags && tags.length > 0 && (
                <Text size="xs" c="dimmed" style={{ fontStyle: 'italic' }}>
                    Toolkit: {tags.join(', ')}
                </Text>
            )}
        </Box>
    );
}
