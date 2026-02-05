'use client';

import { Container, Title, Text, SimpleGrid, Card, Group, Badge, ThemeIcon, rem } from '@mantine/core';
import { IconDatabase, IconServer, IconChartBar, IconDeviceDesktop } from '@tabler/icons-react';
import classes from './Skills.module.css';

import { skillCategories } from '@/data/resume/skills';

export function Skills() {
    const skillsData = skillCategories;
    const cards = skillsData.map((category) => (
        <Card key={category.title} shadow="sm" radius="md" withBorder className={classes.card} padding="xl">
            <Group justify="space-between" mb="xs">
                <Text fz="lg" fw={700} className={classes.cardTitle} c="light-dark(var(--mantine-color-black), var(--mantine-color-white))">
                    {category.title}
                </Text>
                <ThemeIcon variant="light" color={category.color} size="lg" radius="md">
                    <category.icon style={{ width: rem(20), height: rem(20) }} stroke={1.5} />
                </ThemeIcon>
            </Group>

            <Group gap={8} mt="md">
                {category.skills.map((skill) => (
                    <Badge key={skill} variant="light" color={category.color} size="lg" radius="sm">
                        {skill}
                    </Badge>
                ))}
            </Group>
        </Card>
    ));

    return (
        <Container size="lg" py="xl" mt={50}>
            <Title order={2} ta="center" mb="lg">
                Technical Skills
            </Title>
            <Text c="dimmed" ta="center" mb={50} maw={600} mx="auto">
                데이터 엔지니어링부터 웹 개발까지, 넓고 깊은 경험을 보유하고 있습니다.
            </Text>

            <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
                {cards}
            </SimpleGrid>
        </Container>
    );
}
