'use client';

import { Container, Title, Text, SimpleGrid } from '@mantine/core';
import { ProjectCard } from '@/components/ProjectCard';
import { projects } from '@/data/projects';

export function ProjectsSection() {
    return (
        <Container size="lg" py="xl" id="projects">
            <Title order={1} mb="sm">My Projects</Title>
            <Text c="dimmed" mb={50}>
                데이터 엔지니어링 및 파이프라인 구축 프로젝트 경험입니다. (카드를 클릭하면 상세 내용을 볼 수 있습니다)
            </Text>

            <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="xl">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </SimpleGrid>
        </Container>
    );
}
