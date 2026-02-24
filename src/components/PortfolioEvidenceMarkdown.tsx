'use client';

import React from 'react';
import { Box, Text } from '@mantine/core';
import ReactMarkdown from 'react-markdown';
import type { Components } from 'react-markdown';
import remarkGfm from 'remark-gfm';
import classes from './PortfolioEvidenceMarkdown.module.css';

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
                const renderId = `portfolio-mermaid-${Math.random().toString(36).slice(2, 10)}`;
                const result = await mermaid.render(renderId, code);

                if (!mounted) return;
                setSvg(result.svg);
                setFallbackCode(null);
            } catch {
                if (!mounted) return;
                setSvg(null);
                setFallbackCode(code);
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

interface PortfolioEvidenceMarkdownProps {
    markdown: string;
}

export function PortfolioEvidenceMarkdown({ markdown }: PortfolioEvidenceMarkdownProps) {
    return (
        <Box className={classes.evidenceMarkdown}>
            <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
                {markdown}
            </ReactMarkdown>
        </Box>
    );
}
