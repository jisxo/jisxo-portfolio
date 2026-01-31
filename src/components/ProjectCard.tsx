'use client';

import { Card, Image, Text, Badge, Button, Group, Modal, Stack, Title, List, ThemeIcon } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconBrandGithub, IconExternalLink, IconListCheck, IconBolt, IconTrophy } from '@tabler/icons-react';
import classes from './ProjectCard.module.css';

interface StarContent {
    situation: string;
    action: string;
    result: string;
}

interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
    images?: { src: string; caption?: string }[]; // Support for multiple images with captions
    tags: string[];
    githubUrl?: string;
    demoUrl?: string;
    star?: StarContent;
}

export function ProjectCard({ title, description, image, images, tags, githubUrl, demoUrl, star }: ProjectCardProps) {
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <>
            <Modal opened={opened} onClose={close} title={title} size="xl" centered>
                {/* Display multiple images if available, otherwise single image */}
                {images && images.length > 0 ? (
                    <Stack gap="xl" mb="xl">
                        {images.map((img, index) => (
                            <div key={index}>
                                <Image
                                    src={img.src}
                                    alt={img.caption || `${title} - Image ${index + 1}`}
                                    radius="md"
                                    fit="contain"
                                    h="auto"
                                    mah={400} // Restrict max height as requested
                                />
                                {img.caption && (
                                    <Text size="sm" c="dimmed" ta="center" mt="xs">
                                        {img.caption}
                                    </Text>
                                )}
                            </div>
                        ))}
                    </Stack>
                ) : (
                    <Image src={image} height={300} alt={title} radius="md" mb="md" fit="contain" bg="gray.1" />
                )}

                <Text size="lg" fw={700} mb="xs">Project Overview</Text>
                <Text mb="lg">{description}</Text>

                {star && (
                    <Stack gap="md" mb="xl">
                        <div>
                            <Group gap="xs" mb={4}>
                                <ThemeIcon color="orange" size="sm" variant="light"><IconListCheck size={14} /></ThemeIcon>
                                <Text fw={700} size="sm">Situation & Task</Text>
                            </Group>
                            <Text size="sm">{star.situation}</Text>
                        </div>

                        <div>
                            <Group gap="xs" mb={4}>
                                <ThemeIcon color="blue" size="sm" variant="light"><IconBolt size={14} /></ThemeIcon>
                                <Text fw={700} size="sm">Action</Text>
                            </Group>
                            <Text size="sm">{star.action}</Text>
                        </div>

                        <div>
                            <Group gap="xs" mb={4}>
                                <ThemeIcon color="teal" size="sm" variant="light"><IconTrophy size={14} /></ThemeIcon>
                                <Text fw={700} size="sm">Result</Text>
                            </Group>
                            <Text size="sm">{star.result}</Text>
                        </div>
                    </Stack>
                )}

                <Group>
                    {tags.map((tag) => (
                        <Badge key={tag} color="blue" variant="light">
                            {tag}
                        </Badge>
                    ))}
                </Group>

                <Group mt="xl" justify="flex-end">
                    {githubUrl && (
                        <Button component="a" href={githubUrl} target="_blank" leftSection={<IconBrandGithub size={18} />} variant="default">
                            GitHub
                        </Button>
                    )}
                    {demoUrl && (
                        <Button component="a" href={demoUrl} target="_blank" leftSection={<IconExternalLink size={18} />}>
                            Live Demo
                        </Button>
                    )}
                </Group>
            </Modal>

            <Card shadow="sm" padding="lg" radius="md" withBorder className={classes.card}>
                <Card.Section>
                    <Image
                        src={image}
                        height={160}
                        alt={title}
                        fallbackSrc="https://placehold.co/600x400?text=Project+Image"
                    />
                </Card.Section>

                <Group justify="space-between" mt="md" mb="xs">
                    <Text fw={500}>{title}</Text>
                </Group>

                <Text size="sm" c="dimmed" lineClamp={3}>
                    {description}
                </Text>

                <Group gap={5} mt="md" mb="md">
                    {tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} color="blue" variant="light">
                            {tag}
                        </Badge>
                    ))}
                    {tags.length > 3 && <Badge variant="outline">+{tags.length - 3}</Badge>}
                </Group>

                <Group mt="auto">
                    <Button
                        onClick={open}
                        variant="light"
                        color="blue"
                        fullWidth
                        radius="md"
                    >
                        View Details
                    </Button>
                </Group>
            </Card>
        </>
    );
}
