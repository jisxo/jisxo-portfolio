'use client';

import { Card, Image, Text, Badge, Button, Group, Modal, Stack, Title, List, ThemeIcon, Box, Divider, Paper, SimpleGrid, Center } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconBrandGithub, IconExternalLink, IconListCheck, IconBolt, IconTrophy, IconUser, IconCalendar, IconApps, IconNetwork, IconArrowDown } from '@tabler/icons-react';
import classes from './ProjectCard.module.css';

interface StarContent {
    situation: string;
    action: string;
    result: string;
}

interface ProjectCardProps {
    title: string;
    description: string;
    overview?: {
        background: string;
        objective: string;
        outcome: string;
    };
    image: string;
    domain?: string;
    role?: string;
    images?: { src: string; caption?: string }[];
    tags: string[];
    githubUrl?: string;
    demoUrl?: string;
    star?: StarContent;
    duration?: string;
    contributions?: string[];
}

// Helper to render bold text from markdown-like syntax (**text**)
const renderTextWithHighlights = (text: string) => {
    return text.split(/(\*\*.*?\*\*)/).map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
            return <Text key={i} span fw={800} c="blue.6" style={{ wordBreak: 'keep-all' }}>{part.slice(2, -2)}</Text>;
        }
        return part;
    });
};

export function ProjectCard({ title, description, overview, image, domain, role, images, tags, githubUrl, demoUrl, star, duration, contributions }: ProjectCardProps) {
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <>
            <Modal
                opened={opened}
                onClose={close}
                title={<Text fw={900} size="xl" variant="gradient" gradient={{ from: 'blue', to: 'cyan', deg: 90 }}>{title}</Text>}
                size="xl"
                centered
                padding="xl"
                radius="lg"
            >
                <Paper shadow="sm" radius="md" mb="xl" style={{ overflow: 'hidden' }}>
                    <Image src={image} height={420} alt={title} fit="cover" bg="#101113" />
                </Paper>

                {/* Quick Info Grid - Redesigned to 2x2 for better text handling */}
                <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg" mb="xl">
                    <Paper withBorder p="md" radius="md" bg="var(--mantine-color-default-hover)" style={{ borderStyle: 'dashed' }}>
                        <Stack gap="xs">
                            <Group gap="xs">
                                <ThemeIcon variant="light" color="indigo" size="sm" radius="sm"><IconUser size={14} /></ThemeIcon>
                                <Text size="xs" fw={700} c="dimmed" style={{ textTransform: 'uppercase', letterSpacing: '0.5px' }}>Role</Text>
                            </Group>
                            <Text size="sm" fw={800} lh={1.5} style={{ whiteSpace: 'pre-line', wordBreak: 'keep-all' }}>{role || 'Developer'}</Text>
                        </Stack>
                    </Paper>

                    <Paper withBorder p="md" radius="md" bg="var(--mantine-color-default-hover)" style={{ borderStyle: 'dashed' }}>
                        <Stack gap="xs">
                            <Group gap="xs">
                                <ThemeIcon variant="light" color="blue" size="sm" radius="sm"><IconNetwork size={14} /></ThemeIcon>
                                <Text size="xs" fw={700} c="dimmed" style={{ textTransform: 'uppercase', letterSpacing: '0.5px' }}>Domain</Text>
                            </Group>
                            <Text size="sm" fw={800} lh={1.5} style={{ whiteSpace: 'pre-line', wordBreak: 'keep-all' }}>{domain || 'IT / Tech'}</Text>
                        </Stack>
                    </Paper>

                    <Paper withBorder p="md" radius="md" bg="var(--mantine-color-default-hover)" style={{ borderStyle: 'dashed' }}>
                        <Stack gap="xs">
                            <Group gap="xs">
                                <ThemeIcon variant="light" color="teal" size="sm" radius="sm"><IconCalendar size={14} /></ThemeIcon>
                                <Text size="xs" fw={700} c="dimmed" style={{ textTransform: 'uppercase', letterSpacing: '0.5px' }}>Duration</Text>
                            </Group>
                            <Text size="sm" fw={800} lh={1.5} style={{ whiteSpace: 'pre-line', wordBreak: 'keep-all' }}>{duration || '-'}</Text>
                        </Stack>
                    </Paper>

                    <Paper withBorder p="md" radius="md" bg="var(--mantine-color-default-hover)" style={{ borderStyle: 'dashed' }}>
                        <Stack gap="xs">
                            <Group gap="xs">
                                <ThemeIcon variant="light" color="grape" size="sm" radius="sm"><IconApps size={14} /></ThemeIcon>
                                <Text size="xs" fw={700} c="dimmed" style={{ textTransform: 'uppercase', letterSpacing: '0.5px' }}>Tech Stack</Text>
                            </Group>
                            <Group gap={4} wrap="wrap">
                                {tags.map((tag) => (
                                    <Badge key={tag} size="xs" variant="light" color="grape" radius="xs" style={{ textTransform: 'none' }}>
                                        {tag}
                                    </Badge>
                                ))}
                            </Group>
                        </Stack>
                    </Paper>
                </SimpleGrid>

                <Box mb="xl">
                    <Text size="xl" fw={800} mb="xs" style={{ letterSpacing: '-0.5px' }}>Project Overview</Text>
                    {overview ? (
                        <Stack gap="md">
                            <Box>
                                <Text component="div" size="xs" fw={800} c="dimmed" mb={2} style={{ textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                    <div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'var(--mantine-color-blue-6)' }}></div>
                                    Project Context
                                </Text>
                                <Text size="md" lh={1.6} style={{ wordBreak: 'keep-all' }}>{overview.background}</Text>
                            </Box>
                            <Box>
                                <Text component="div" size="xs" fw={800} c="dimmed" mb={2} style={{ textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                    <div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'var(--mantine-color-blue-6)' }}></div>
                                    Key Objective
                                </Text>
                                <Text size="md" lh={1.6} style={{ wordBreak: 'keep-all' }}>{overview.objective}</Text>
                            </Box>
                            <Box>
                                <Text component="div" size="xs" fw={800} c="dimmed" mb={2} style={{ textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                    <div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'var(--mantine-color-blue-6)' }}></div>
                                    Outcome & Impact
                                </Text>
                                <Text size="md" lh={1.6} style={{ wordBreak: 'keep-all' }}>{overview.outcome}</Text>
                            </Box>
                        </Stack>
                    ) : (
                        <Text size="md" lh={1.7} style={{ wordBreak: 'keep-all' }}>{description}</Text>
                    )}
                </Box>


                {contributions && contributions.length > 0 && (
                    <Paper mb="xl" p="lg" radius="md" withBorder style={{ backgroundColor: 'transparent', borderStyle: 'solid', borderColor: 'var(--mantine-color-default-border)' }}>
                        <Title order={4} mb="md" c="blue.7" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <IconBolt size={20} /> Major Contributions
                        </Title>
                        <List
                            spacing="xs"
                            size="sm"
                            icon={
                                <ThemeIcon color="blue" size={8} radius="xl" />
                            }
                        >
                            {contributions.map((item, idx) => (
                                <List.Item key={idx} fw={500} style={{ wordBreak: 'keep-all' }}>{item}</List.Item>
                            ))}
                        </List>
                    </Paper>
                )}

                {star && (
                    <Box mt={50}>
                        <Title order={3} mb="xl" ta="center" style={{ letterSpacing: '2px', textTransform: 'uppercase' }}>Technical Case Study</Title>
                        <Stack gap={0}>
                            <Paper withBorder p="lg" radius="md" style={{ borderLeft: '4px solid var(--mantine-color-indigo-6)', whiteSpace: 'pre-line', backgroundColor: 'var(--mantine-color-body)', position: 'relative' }}>
                                <Badge variant="filled" color="indigo" size="xs" style={{ position: 'absolute', top: -10, left: 20 }}>STEP 01</Badge>
                                <Group gap="xs" mb={8}>
                                    <ThemeIcon color="indigo" size="lg" radius="md" variant="light"><IconListCheck size={20} /></ThemeIcon>
                                    <Text fw={800} size="lg" c="indigo.7">Situation & Challenge</Text>
                                </Group>
                                <Box pl="xl" ml="xs">
                                    <Text size="md" lh={1.6} style={{ wordBreak: 'keep-all' }}>{renderTextWithHighlights(star.situation)}</Text>
                                </Box>
                            </Paper>

                            <Center py="xs">
                                <IconArrowDown size={36} stroke={1.5} color="var(--mantine-color-blue-5)" />
                            </Center>

                            <Paper withBorder p="lg" radius="md" style={{ borderLeft: '4px solid var(--mantine-color-blue-6)', whiteSpace: 'pre-line', backgroundColor: 'var(--mantine-color-body)', position: 'relative' }}>
                                <Badge variant="filled" color="blue" size="xs" style={{ position: 'absolute', top: -10, left: 20 }}>STEP 02</Badge>
                                <Group gap="xs" mb={8}>
                                    <ThemeIcon color="blue" size="lg" radius="md" variant="light"><IconBolt size={20} /></ThemeIcon>
                                    <Text fw={800} size="lg" c="blue.7">Action & Implementation</Text>
                                </Group>
                                <Box pl="xl" ml="xs">
                                    <Text size="md" lh={1.6} style={{ wordBreak: 'keep-all' }}>{renderTextWithHighlights(star.action)}</Text>
                                </Box>
                            </Paper>

                            <Center py="xs">
                                <IconArrowDown size={36} stroke={1.5} color="var(--mantine-color-blue-5)" />
                            </Center>

                            <Paper withBorder p="lg" radius="md" style={{ borderLeft: '4px solid var(--mantine-color-teal-6)', whiteSpace: 'pre-line', backgroundColor: 'var(--mantine-color-body)', position: 'relative' }}>
                                <Badge variant="filled" color="teal" size="xs" style={{ position: 'absolute', top: -10, left: 20 }}>STEP 03</Badge>
                                <Group gap="xs" mb={8}>
                                    <ThemeIcon color="teal" size="lg" radius="md" variant="light"><IconTrophy size={20} /></ThemeIcon>
                                    <Text fw={800} size="lg" c="teal.7">Result & Impact</Text>
                                </Group>
                                <Box pl="xl" ml="xs">
                                    <Text size="md" lh={1.6} style={{ wordBreak: 'keep-all' }}>{renderTextWithHighlights(star.result)}</Text>
                                </Box>
                            </Paper>
                        </Stack>
                    </Box>
                )}

                {images && images.length > 0 && (
                    <Box mt={50} pt="xl" style={{ borderTop: '1px solid var(--mantine-color-gray-2)' }}>
                        <Text size="xl" fw={800} mb="xl">Project Deep-Dive</Text>
                        <Stack gap="xl">
                            {images.map((img, index) => (
                                <Box key={index}>
                                    <Paper withBorder radius="md" shadow="xs" style={{ overflow: 'hidden' }}>
                                        <Image
                                            src={img.src}
                                            alt={img.caption || `${title} - Image ${index + 1}`}
                                            fit="contain"
                                            h="auto"
                                            mah={600}
                                            bg="gray.0"
                                            p="xs"
                                        />
                                    </Paper>
                                    {img.caption && (
                                        <Text size="sm" c="dimmed" ta="center" mt="sm" style={{ fontStyle: 'italic' }}>
                                            &ldquo; {img.caption} &rdquo;
                                        </Text>
                                    )}
                                </Box>
                            ))}
                        </Stack>
                    </Box>
                )}

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

            <Card
                shadow="sm"
                padding="lg"
                radius="md"
                withBorder
                className={classes.card}
                onClick={open}
                style={{ cursor: 'pointer', transition: 'transform 0.2s' }}
            >
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
                    {duration && <Text size="xs" c="dimmed">{duration}</Text>}
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
