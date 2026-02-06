'use client';

import { Container, Title, Text, Timeline, ThemeIcon, Card, Group, Badge, Stack } from '@mantine/core';
import { IconBriefcase, IconSchool } from '@tabler/icons-react';
import { resumeData } from '@/data/resume';

export function AboutSection() {
    const { summary, experience, education, certifications } = resumeData;

    return (
        <Container size="lg" py="xl" id="about">
            <Title order={1} mb="lg">About Me</Title>

            <Text size="lg" mb="xl" lh={1.8} style={{ whiteSpace: 'pre-line' }}>
                {summary}
            </Text>

            <Title order={2} mb="lg" mt={50}>Experience & Education</Title>

            <div style={{ maxWidth: 800 }}>
                <Timeline active={experience.length + education.length} bulletSize={32} lineWidth={2}>
                    {experience.map((item, idx) => (
                        <Timeline.Item key={idx} bullet={<IconBriefcase size={18} />} title={`${item.company} - ${item.role}`}>
                            <Text c="dimmed" size="sm">{item.period}</Text>
                            <Text size="sm" mt={4}>
                                {item.summary}
                            </Text>
                            {item.bullets && (
                                <Stack gap={2} mt={4}>
                                    {item.bullets.map((b, bIdx) => (
                                        <Text key={bIdx} size="xs" c="dimmed">
                                            • {b}
                                        </Text>
                                    ))}
                                </Stack>
                            )}
                            {item.skills && (
                                <Group gap={6} mt={8}>
                                    {item.skills.map(skill => (
                                        <Badge key={skill} size="xs" variant="default">{skill}</Badge>
                                    ))}
                                </Group>
                            )}
                        </Timeline.Item>
                    ))}

                    {education.map((item, idx) => (
                        <Timeline.Item key={idx} bullet={<IconSchool size={18} />} title={item.school}>
                            <Text c="dimmed" size="sm">{item.period}</Text>
                            <Text size="sm" mt={2}>{item.degree}</Text>
                        </Timeline.Item>
                    ))}
                </Timeline>
            </div>
            {certifications && certifications.length > 0 && (
                <>
                    <Title order={2} mb="lg" mt={50}>Certifications</Title>
                    <Group gap="md">
                        {certifications.map((cert, idx) => (
                            <Card key={idx} withBorder padding="md" radius="md" style={{ flex: '1 1 250px' }}>
                                <Group justify="space-between" mb={5} wrap="nowrap">
                                    <Text fw={700} size="sm">{cert.name}</Text>
                                    <Badge variant="light" size="xs">{cert.date}</Badge>
                                </Group>
                                {cert.issuer && <Text size="xs" c="dimmed">{cert.issuer}</Text>}
                            </Card>
                        ))}
                    </Group>
                </>
            )}

        </Container>
    );
}
