'use client';

import { useState, useEffect } from 'react';
import { AppShell, Burger, Group, Text, UnstyledButton, useMantineColorScheme, ActionIcon, Container, rem } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Link from 'next/link';
import { IconSun, IconMoon, IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react';
import { usePathname } from 'next/navigation';
import { siteConfig, navLinks } from '@/data/site';
import classes from './MainAppShell.module.css';

export function MainAppShell({ children }: { children: React.ReactNode }) {
    const [opened, { toggle }] = useDisclosure();
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const pathname = usePathname();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const links = navLinks;

    const mainLinks = links.map((link) => (
        <Link
            key={link.label}
            href={link.link}
            className={`${classes.link} ${pathname === link.link ? classes.linkActive : ''}`}
            onClick={() => { if (opened) toggle(); }} // Close menu on click
        >
            {link.label}
        </Link>
    ));

    return (
        <AppShell
            header={{ height: 60 }}
            navbar={{
                width: 300,
                breakpoint: 'sm',
                collapsed: { desktop: true, mobile: !opened },
            }}
            padding="md"
        >
            <AppShell.Header>
                <Container size="lg" className={classes.innerHeader}>
                    <Group gap={5} visibleFrom="sm">
                        <Link href="/" style={{ textDecoration: 'none' }}>
                            <Text size="xl" fw={700} variant="gradient" gradient={{ from: 'blue', to: 'cyan', deg: 90 }} style={{ cursor: 'pointer' }}>
                                {siteConfig.name.split('|')[1]?.trim() || 'Jiseo'}.Dev
                            </Text>
                        </Link>
                    </Group>

                    <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />

                    {/* Logo for mobile centered or left */}
                    <Group gap={5} hiddenFrom="sm">
                        <Link href="/" style={{ textDecoration: 'none' }}>
                            <Text size="lg" fw={700} c="black">{siteConfig.name.split('|')[1]?.trim() || 'Jiseo'}.Dev</Text>
                        </Link>
                    </Group>

                    <Group gap={5} visibleFrom="sm">
                        {mainLinks}
                    </Group>

                    <ActionIcon
                        onClick={() => toggleColorScheme()}
                        variant="default"
                        size="lg"
                        aria-label="Toggle color scheme"
                    >
                        {/* Prevent hydration mismatch by rendering default (Dark->Sun) until mounted */}
                        {!mounted ? (
                            <IconSun size={18} />
                        ) : (
                            colorScheme === 'dark' ? <IconSun size={18} /> : <IconMoon size={18} />
                        )}
                    </ActionIcon>
                </Container>
            </AppShell.Header>

            <AppShell.Navbar p="md">
                {mainLinks}
                <Group mt="xl">
                    <ActionIcon component="a" href={siteConfig.github} target="_blank" size="lg" variant="subtle" color="gray">
                        <IconBrandGithub size={20} />
                    </ActionIcon>
                    <ActionIcon component="a" href={siteConfig.linkedin} target="_blank" size="lg" variant="subtle" color="blue">
                        <IconBrandLinkedin size={20} />
                    </ActionIcon>
                </Group>
            </AppShell.Navbar>

            <AppShell.Main>
                <Container
                    size="lg"
                    fluid={pathname?.includes('/resume')}
                    p={pathname?.includes('/resume') ? 0 : 'md'}
                    style={{ maxWidth: pathname?.includes('/resume') ? '100%' : undefined }}
                >
                    {children}
                </Container>
            </AppShell.Main>
        </AppShell>
    );
}
