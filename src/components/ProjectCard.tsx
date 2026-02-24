'use client';

import React from 'react';
import { Card, Image, Text, Badge, Button, Group, Modal, Stack, Title, List, ThemeIcon, Box, Paper, SimpleGrid, Center } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconBrandGithub, IconExternalLink, IconListCheck, IconBolt, IconTrophy, IconUser, IconCalendar, IconApps, IconNetwork, IconArrowDown } from '@tabler/icons-react';
import ReactMarkdown from 'react-markdown';
import type { Components } from 'react-markdown';
import remarkGfm from 'remark-gfm';
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
        background: string | string[];
        objective: string | string[];
        outcome: string | string[];
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
    evidence?: {
        title: string;
        slug: string;
    }[];
}

function MermaidEvidence({ code }: { code: string }) {
    const [svg, setSvg] = React.useState<string | null>(null);
    const [fallbackCode, setFallbackCode] = React.useState<string | null>(null);

    React.useEffect(() => {
        let mounted = true;

        const renderMermaid = async () => {
            try {
                const mermaidModule = await import('mermaid');
                const mermaid = mermaidModule.default;
                mermaid.initialize({
                    startOnLoad: false,
                    securityLevel: 'loose',
                    theme: 'default',
                });

                await mermaid.parse(code);
                const renderId = `evidence-mermaid-${Math.random().toString(36).slice(2, 10)}`;
                const { svg } = await mermaid.render(renderId, code);

                if (!mounted) return;
                setSvg(svg);
                setFallbackCode(null);
            } catch {
                if (mounted) {
                    setSvg(null);
                    setFallbackCode(code);
                }
            }
        };

        renderMermaid();

        return () => {
            mounted = false;
        };
    }, [code]);

    if (fallbackCode !== null) {
        return (
            <Text component="pre" size="sm" className={classes.evidencePre}>
                {'```mermaid\n' + fallbackCode + '\n```'}
            </Text>
        );
    }

    if (svg === null) {
        return (
            <Text size="sm" c="dimmed">
                다이어그램 렌더링 중입니다...
            </Text>
        );
    }

    return (
        <Box className={classes.evidenceMermaid}>
            <div dangerouslySetInnerHTML={{ __html: svg }} />
        </Box>
    );
}

const markdownComponents: Components = {
    h1: ({ children }) => <Text component="h1" size="lg" fw={700} mb={8}>{children}</Text>,
    h2: ({ children }) => <Text component="h2" size="md" fw={700} mb={6}>{children}</Text>,
    h3: ({ children }) => <Text component="h3" size="sm" fw={700} mb={6}>{children}</Text>,
    p: ({ children }) => <Text size="sm" lh={1.6} mb={8}>{children}</Text>,
    ul: ({ children }) => <Box component="ul" style={{ paddingLeft: '18px', margin: '8px 0' }}>{children}</Box>,
    ol: ({ children }) => <Box component="ol" style={{ paddingLeft: '18px', margin: '8px 0' }}>{children}</Box>,
    li: ({ children }) => <Text component="li" size="sm" lh={1.6} style={{ marginBottom: '4px' }}>{children}</Text>,
    table: ({ children }) => (
        <Box className={classes.tableWrap}>
            <table className={classes.evidenceTable}>{children}</table>
        </Box>
    ),
    thead: ({ children }) => <thead>{children}</thead>,
    tbody: ({ children }) => <tbody>{children}</tbody>,
    tr: ({ children }) => <tr>{children}</tr>,
    th: ({ children }) => (
        <th className={classes.evidenceTh}>
            {children}
        </th>
    ),
    td: ({ children }) => (
        <td className={classes.evidenceTd}>
            {children}
        </td>
    ),
    hr: () => <Box style={{ borderTop: '1px solid var(--mantine-color-default-border)', margin: '10px 0' }} />,
    code: ({ className, children }) => {
        const raw = String(children ?? '').replace(/\n$/, '');
        const languageMatch = /language-(\w+)/.exec(className || '');

        if (languageMatch?.[1] === 'mermaid') {
            return <MermaidEvidence code={raw} />;
        }

        const isInlineCode = !className && !raw.includes('\n');

        if (isInlineCode) {
            return (
                <Text
                    span
                    component="code"
                    size="sm"
                    className={classes.evidenceInlineCode}
                >
                    {raw}
                </Text>
            );
        }

        return (
            <Text component="pre" size="sm" className={classes.evidencePre}>
                {raw}
            </Text>
        );
    },
    pre: ({ children }) => <>{children}</>,
};

// Helper to render bold text from markdown-like syntax (**text**)
const normalizeLineBreaks = (text: string) => text.replace(/\\n/g, '\n');

const renderTextWithHighlights = (text: string) => {
    return normalizeLineBreaks(text).split(/(\*\*.*?\*\*)/).map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
            return <Text key={i} span fw={800} c="blue.6" style={{ wordBreak: 'keep-all' }}>{part.slice(2, -2)}</Text>;
        }
        return part;
    });
};

const renderOverviewContent = (content: string | string[]) => {
    if (Array.isArray(content)) {
        return (
            <Stack gap={6} pl="sm">
                {content.map((item, idx) => (
                    <Text key={idx} size="md" lh={1.6} style={{ whiteSpace: 'pre-line', wordBreak: 'keep-all' }}>
                        • {renderTextWithHighlights(item)}
                    </Text>
                ))}
            </Stack>
        );
    }

    return (
        <Box pl="sm">
            <Text size="md" lh={1.6} style={{ whiteSpace: 'pre-line', wordBreak: 'keep-all' }}>
                {renderTextWithHighlights(content)}
            </Text>
        </Box>
    );
};

export function ProjectCard({ title, description, overview, image, domain, role, images, tags, githubUrl, demoUrl, star, duration, contributions, evidence }: ProjectCardProps) {
    const [opened, { open, close }] = useDisclosure(false);
    const [evidenceOpened, { open: openEvidenceModal, close: closeEvidenceModal }] = useDisclosure(false);
    const [selectedEvidenceTitle, setSelectedEvidenceTitle] = React.useState('');
    const [evidenceContent, setEvidenceContent] = React.useState('');
    const [inlineEvidenceContent, setInlineEvidenceContent] = React.useState<Record<string, string>>({});
    const [inlineEvidenceError, setInlineEvidenceError] = React.useState<string | null>(null);
    const [isEvidenceLoading, setIsEvidenceLoading] = React.useState(false);
    const [evidenceError, setEvidenceError] = React.useState<string | null>(null);

    React.useEffect(() => {
        if (!evidence || evidence.length === 0) return;

        let mounted = true;

        const preloadEvidence = async () => {
            try {
                const entries = await Promise.all(
                    evidence.map(async (item) => {
                        const response = await fetch(`/api/evidence/${item.slug}`);
                        if (!response.ok) {
                            throw new Error(`evidence_preload_failed_${item.slug}`);
                        }

                        const markdown = await response.text();
                        return [item.slug, markdown] as const;
                    })
                );

                if (!mounted) return;
                setInlineEvidenceContent(Object.fromEntries(entries));
                setInlineEvidenceError(null);
            } catch {
                if (!mounted) return;
                setInlineEvidenceError('일부 증거 문서를 불러오지 못했습니다.');
            }
        };

        preloadEvidence();

        return () => {
            mounted = false;
        };
    }, [evidence]);

    const handleOpenEvidence = async (item: { title: string; slug: string }) => {
        setSelectedEvidenceTitle(item.title);
        setEvidenceError(null);
        openEvidenceModal();

        const preloaded = inlineEvidenceContent[item.slug];
        if (preloaded) {
            setEvidenceContent(preloaded);
            setIsEvidenceLoading(false);
            return;
        }

        setEvidenceContent('');
        setIsEvidenceLoading(true);

        try {
            const response = await fetch(`/api/evidence/${item.slug}`);
            if (!response.ok) {
                throw new Error('evidence_fetch_failed');
            }
            const markdown = await response.text();
            setEvidenceContent(markdown);
        } catch {
            setEvidenceError('증거 문서를 불러오지 못했습니다.');
        } finally {
            setIsEvidenceLoading(false);
        }
    };

    const handleCloseProjectModal = () => {
        closeEvidenceModal();
        close();
    };

    return (
        <>
            <Modal
                opened={evidenceOpened}
                onClose={closeEvidenceModal}
                title={<Text fw={800} size="lg">{selectedEvidenceTitle}</Text>}
                size="lg"
                centered
                padding="lg"
                radius="md"
                zIndex={310}
            >
                <Paper withBorder radius="md" p="md" bg="var(--mantine-color-body)">
                    {isEvidenceLoading && (
                        <Text size="sm" c="dimmed">문서를 불러오는 중입니다...</Text>
                    )}
                    {!isEvidenceLoading && evidenceError && (
                        <Text size="sm" c="red.6">{evidenceError}</Text>
                    )}
                    {!isEvidenceLoading && !evidenceError && (
                        <Box style={{ maxHeight: '70vh', overflowY: 'auto' }}>
                            <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
                                {evidenceContent}
                            </ReactMarkdown>
                        </Box>
                    )}
                </Paper>
            </Modal>

            <Modal
                opened={opened}
                onClose={handleCloseProjectModal}
                closeOnEscape={!evidenceOpened}
                closeOnClickOutside={!evidenceOpened}
                title={<Text fw={900} size="xl" variant="gradient" gradient={{ from: 'blue', to: 'cyan', deg: 90 }}>{title}</Text>}
                size="xl"
                centered
                padding="xl"
                radius="lg"
                zIndex={300}
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
                                    Problem
                                </Text>
                                {renderOverviewContent(overview.background)}
                            </Box>
                            <Box>
                                <Text component="div" size="xs" fw={800} c="dimmed" mb={2} style={{ textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                    <div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'var(--mantine-color-blue-6)' }}></div>
                                    Architecture & Approach
                                </Text>
                                {renderOverviewContent(overview.objective)}
                            </Box>
                            <Box>
                                <Text component="div" size="xs" fw={800} c="dimmed" mb={2} style={{ textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                    <div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'var(--mantine-color-blue-6)' }}></div>
                                    Impact (Quantified)
                                </Text>
                                {renderOverviewContent(overview.outcome)}
                            </Box>
                        </Stack>
                    ) : (
                        <Text size="md" lh={1.7} style={{ whiteSpace: 'pre-line', wordBreak: 'keep-all' }}>{normalizeLineBreaks(description)}</Text>
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

                {evidence && evidence.length > 0 && (
                    <Paper
                        mb="xl"
                        p="lg"
                        radius="md"
                        withBorder
                        className={classes.screenOnly}
                        style={{ backgroundColor: 'transparent', borderStyle: 'solid', borderColor: 'var(--mantine-color-default-border)' }}
                    >
                        <Title order={4} mb="md" c="blue.7" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <IconExternalLink size={20} /> Evidence
                        </Title>
                        <Stack gap={8}>
                            {evidence.map((item) => (
                                <Box key={item.slug}>
                                    <Button
                                        variant="subtle"
                                        color="blue"
                                        justify="flex-start"
                                        rightSection={<IconExternalLink size={14} />}
                                        onClick={() => handleOpenEvidence(item)}
                                        styles={{
                                            inner: { justifyContent: 'space-between', width: '100%' },
                                            label: { fontWeight: 600 },
                                        }}
                                    >
                                        {item.title}
                                    </Button>
                                </Box>
                            ))}
                        </Stack>
                    </Paper>
                )}

                {evidence && evidence.length > 0 && (
                    <Paper
                        mb="xl"
                        p="lg"
                        radius="md"
                        withBorder
                        className={classes.printOnly}
                        style={{ backgroundColor: 'transparent', borderStyle: 'solid', borderColor: 'var(--mantine-color-default-border)' }}
                    >
                        <Title order={4} mb="md" c="blue.7" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <IconExternalLink size={20} /> Evidence (Print)
                        </Title>
                        {inlineEvidenceError && (
                            <Text size="sm" c="red.6" mb="sm">{inlineEvidenceError}</Text>
                        )}
                        <Stack gap="lg">
                            {evidence.map((item) => (
                                <Box key={`print-evidence-${item.slug}`} className={classes.printEvidenceBlock}>
                                    <Text fw={700} size="sm" mb={6}>{item.title}</Text>
                                    {inlineEvidenceContent[item.slug] ? (
                                        <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
                                            {inlineEvidenceContent[item.slug]}
                                        </ReactMarkdown>
                                    ) : (
                                        <Text size="sm" c="dimmed">문서를 불러오는 중입니다...</Text>
                                    )}
                                </Box>
                            ))}
                        </Stack>
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
                                    <Text size="md" lh={1.6} style={{ whiteSpace: 'pre-line', wordBreak: 'keep-all' }}>{renderTextWithHighlights(star.situation)}</Text>
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
                                    <Text size="md" lh={1.6} style={{ whiteSpace: 'pre-line', wordBreak: 'keep-all' }}>{renderTextWithHighlights(star.action)}</Text>
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
                                    <Text size="md" lh={1.6} style={{ whiteSpace: 'pre-line', wordBreak: 'keep-all' }}>{renderTextWithHighlights(star.result)}</Text>
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

                <Text size="sm" c="dimmed" lineClamp={3} style={{ whiteSpace: 'pre-line' }}>
                    {normalizeLineBreaks(description)}
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
