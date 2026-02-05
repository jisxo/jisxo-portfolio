'use client';

import { Container, Title, Text, Timeline, ThemeIcon, Card, Group, Badge } from '@mantine/core';
import { IconBriefcase, IconSchool } from '@tabler/icons-react';
import { resumeData } from '@/data/resume';

export function AboutSection() {
    const { summary, experience, education } = resumeData;

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
                                <Text size="xs" mt={4} c="dimmed">
                                    {item.bullets.map(b => `• ${b}`).join(' ')}
                                </Text>
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
            {/* Certifications removed for now as per plan */}

        </Container>
    );
}
