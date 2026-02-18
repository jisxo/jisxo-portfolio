'use client';

import { Container, Title, Text, Button, Group } from '@mantine/core';
import { siteConfig } from '@/data/site';
import { heroData } from '@/data/resume/about';
import classes from './Hero.module.css';

export function Hero() {
    return (
        <div className={classes.hero}>
            <Container size="lg">
                <div className={classes.inner}>
                    <div className={classes.content}>
                        <Title className={classes.title}>
                            데이터 흐름으로 비즈니스 가치를 만드는<br />
                            <span className={classes.highlight}>{heroData.titleHighlight}</span>
                            정지서입니다
                        </Title>

                        <Text size="xl" mt={30} className={classes.description}>
                            {heroData.description}
                        </Text>

                        <Text size="lg" mt="md" c="dimmed" className={classes.subDescription}>
                            {heroData.subDescription}
                        </Text>

                        <Group mt={30}>
                            <Button radius="xl" size="md" className={classes.control} component="a" href="#projects">
                                프로젝트 보기
                            </Button>
                            <Button variant="default" radius="xl" size="md" className={classes.control} component="a" href="/resume">
                                이력서 보기
                            </Button>
                        </Group>
                    </div>
                </div>
            </Container>
        </div>
    );
}
