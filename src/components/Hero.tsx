'use client';

import { Container, Title, Text, Button, Group } from '@mantine/core';
import { IconArrowDown, IconBrandGithub, IconDownload } from '@tabler/icons-react';
import classes from './Hero.module.css';

export function Hero() {
    return (
        <div className={classes.hero}>
            <Container size="lg">
                <div className={classes.inner}>
                    <div className={classes.content}>
                        <Title className={classes.title}>Python과 Airflow로 멈추지 않는<br /><span className={classes.highlight}>데이터 파이프라인</span>을 설계합니다</Title>
                        <Text size="xl" mt={30} className={classes.description}>
                            비효율적인 반복 업무를 기술로 혁신하는 <b>4년 차 데이터 엔지니어</b>입니다.<br />
                            <b>Python</b>과 <b>Docker</b>, <b>Airflow</b>를 주무기로 견고한 데이터 파이프라인을 구축하고,<br />
                            로그 분석부터 NLP 기반의 이상징후 탐지까지 폭넓은 데이터 문제를 해결해왔습니다.
                        </Text>

                        <Text size="lg" mt="md" className={classes.subDescription}>
                            현재는 데이터 엔지니어링을 넘어, 안정적인 서비스 운영을 위한 인프라 고도화와<br />
                            풀스택 개발에 관심을 두고 끊임없이 성장하고 있습니다.
                        </Text>

                        <Group mt={30}>
                            <Button radius="xl" size="md" rightSection={<IconArrowDown size={18} />} className={classes.control} component="a" href="#projects">
                                프로젝트 보기
                            </Button>
                            <Button variant="default" radius="xl" size="md" leftSection={<IconDownload size={18} />} className={classes.control} component="a" href="/resume.pdf" target="_blank">
                                이력서 다운로드
                            </Button>
                        </Group>
                    </div>
                </div>
            </Container>
        </div>
    );
}
