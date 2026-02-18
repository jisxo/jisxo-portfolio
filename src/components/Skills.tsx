'use client';

import { Container, Title, Text, SimpleGrid, Card, Group, Badge, ThemeIcon, rem, Stack } from '@mantine/core';
import { IconDatabase, IconServer, IconChartBar, IconDeviceDesktop } from '@tabler/icons-react';
import classes from './Skills.module.css';

import { skillCategories } from '@/data/resume/skills';

export function Skills() {
    const skillsData = skillCategories;
    const cards = skillsData.map((category) => (
        <Card key={category.title} shadow="sm" radius="md" withBorder className={classes.card} padding="lg">
            <Group justify="space-between" mb="md">
                <Text fz="lg" fw={700} className={classes.cardTitle} c="light-dark(var(--mantine-color-black), var(--mantine-color-white))">
                    {category.title}
                </Text>
                <ThemeIcon variant="light" color={category.color} size="lg" radius="md">
                    <category.icon style={{ width: rem(20), height: rem(20) }} stroke={1.5} />
                </ThemeIcon>
            </Group>

            <Stack gap="md">
                {/* Tech Stack (Badges) - Top */}
                <div>
                    <Text size="xs" c="dimmed" fw={700} mb="xs" tt="uppercase">Tech Stack</Text>
                    <Group gap={6}>
                        {category.techStack.map((skill) => (
                            <Badge key={skill} variant="light" color={category.color} size="md" radius="sm">
                                {skill}
                            </Badge>
                        ))}
                    </Group>
                </div>

                {/* Core Competencies (List) - Bottom */}
                {category.descriptions && category.descriptions.length > 0 && (
                    <div>
                        <Text size="xs" c="dimmed" fw={700} mb="xs" tt="uppercase">Core Competencies</Text>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                            {category.descriptions.map((desc, index) => (
                                <Text key={index} size="sm" c="dimmed" style={{ lineHeight: 1.4 }}>
                                    • {desc}
                                </Text>
                            ))}
                        </div>
                    </div>
                )}
            </Stack>
        </Card>
    ));

    return (
        <Container size="lg" py="xl" mt={50}>
            <Title order={2} ta="center" mb="lg">
                Technical Skills & Competencies
            </Title>
            <Text c="dimmed" ta="center" mb={50} maw={600} mx="auto">
                기술 스택과 이를 활용한 핵심 역량을 정리했습니다.
            </Text>

            <SimpleGrid cols={{ base: 1, md: 1 }} spacing="lg">
                {cards}
            </SimpleGrid>
        </Container>
    );
}
