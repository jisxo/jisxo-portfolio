'use client';

import { Container, Title, Text, Timeline, ThemeIcon, Card, Group, Badge } from '@mantine/core';
import { IconBriefcase, IconSchool, IconCertificate, IconGitBranch } from '@tabler/icons-react';

export function AboutSection() {
    return (
        <Container size="lg" py="xl" id="about">
            <Title order={1} mb="lg">About Me</Title>

            <Text size="lg" mb="xl" style={{ maxWidth: 800 }}>
                데이터를 통해 세상을 이해하는 것을 좋아하는 개발자 정지서입니다. <b>숨겨진 맛집을 찾아 데이터를 검증하고 공유하는 취미</b>도 가지고 있습니다.<br /><br />
                업무에서는 Python과 Airflow로 복잡한 비정형 데이터를 정제해 가치를 발굴하고, 일상에서는 맛있는 음식으로 주변 사람들과 소소한 행복을 나눕니다. 수천 줄의 로그 뒤에 숨은 '사람의 의도'를 읽어내듯, 기술 너머의 비즈니스와 동료를 먼저 생각합니다. 차가운 이성과 따뜻한 감성으로 신뢰받는 엔지니어가 되겠습니다.
            </Text>

            <Title order={2} mb="lg" mt={50}>Experience & Education</Title>

            <div style={{ maxWidth: 800 }}>
                <Timeline active={4} bulletSize={32} lineWidth={2}>
                    <Timeline.Item bullet={<IconBriefcase size={18} />} title="씨에스리 (CSLEE) - AI엔지니어링사업부 / 프리랜서">
                        <Text c="dimmed" size="sm">2025.04 ~ 2025.10</Text>
                        <Text size="sm" mt={4}>
                            SecuXper AI 솔루션 운영 및 유지보수
                        </Text>
                    </Timeline.Item>

                    <Timeline.Item bullet={<IconBriefcase size={18} />} title="씨에스리 (CSLEE) - AI엔지니어링사업부 선임 / Data Engineer">
                        <Text c="dimmed" size="sm">2021.03 ~ 2025.02</Text>
                        <Text size="sm" mt={4}>
                            - L사 보안 로그 분석 및 지능화 시스템 구축: 이기종 로그 통합 및 이상징후 탐지 파이프라인 구축<br />
                            - 유통사 데이터 분석 및 컨설팅: 공공/유통 데이터 분석 및 인사이트 도출<br />
                            - 신지모루 RPA 개발: 반복 업무 자동화 RPA 개발
                        </Text>
                        <Group gap={6} mt={8}>
                            <Badge size="xs" variant="default">Python</Badge>
                            <Badge size="xs" variant="default">Airflow</Badge>
                            <Badge size="xs" variant="default">RPA</Badge>
                        </Group>
                    </Timeline.Item>

                    <Timeline.Item bullet={<IconBriefcase size={18} />} title="경찰청 - 치안빅데이터정책담당관실 인턴">
                        <Text c="dimmed" size="sm">2019.09 ~ 2020.02</Text>
                        <Text size="sm" mt={4}>
                            치안 데이터 분석 보조 및 시각화 업무 수행
                        </Text>
                    </Timeline.Item>

                    <Timeline.Item bullet={<IconBriefcase size={18} />} title="패스트캠퍼스 / 씨에스리 - 빅데이터 교육 기술 조교">
                        <Text c="dimmed" size="sm">2018 ~ 2020</Text>
                        <Text size="sm" mt={4}>
                            수강생 기술 멘토링 및 실습 환경 지원
                        </Text>
                    </Timeline.Item>

                    <Timeline.Item bullet={<IconSchool size={18} />} title="동덕여자대학교 정보통계학과">
                        <Text c="dimmed" size="sm">2014.03 ~ 2018.02</Text>
                    </Timeline.Item>

                    <Timeline.Item bullet={<IconSchool size={18} />} title="해성국제컨벤션고등학교">
                        <Text c="dimmed" size="sm">2011.03 ~ 2014.02</Text>
                    </Timeline.Item>
                </Timeline>
            </div>
            {/* Certifications removed for now as per plan */}

        </Container>
    );
}
