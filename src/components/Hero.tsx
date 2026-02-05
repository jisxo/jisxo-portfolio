'use client';

import { Container, Title, Text, Button, Group } from '@mantine/core';
import { siteConfig } from '@/data/site';
import { resumeData } from '@/data/resume';
import { heroData } from '@/data/resume/about';
import classes from './Hero.module.css';

export function Hero() {
    const name = siteConfig.name.split('|')[0].trim();
    const role = siteConfig.role;

    return (
        <div className={classes.hero}>
            <Container size="lg">
                <div className={classes.inner}>
                    <div className={classes.content}>
                        <Title className={classes.title}>Python과 Airflow로 멈추지 않는<br /><span className={classes.highlight}>{heroData.titleHighlight}</span>을 설계합니다</Title>
                        <Text size="xl" mt={30} className={classes.description}>
                            비효율적인 반복 업무를 기술로 혁신하는 <b>{role} {name}</b>입니다.<br />
                            <b>Python</b>과 <b>Docker</b>, <b>Airflow</b>를 주무기로 견고한 데이터 파이프라인을 구축하고,<br />
                            로그 분석부터 NLP 기반의 이상징후 탐지까지 폭넓은 데이터 문제를 해결해왔습니다.
                        </Text>

                        <Text size="lg" mt="md" className={classes.subDescription} style={{ whiteSpace: 'pre-line' }}>
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
