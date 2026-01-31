'use client';

import { Container, Title, Text, Group, Stack, Badge, Divider, Button, Box, ThemeIcon, List, Paper, Grid } from '@mantine/core';
import { IconMail, IconBrandGithub, IconWorld, IconPrinter, IconPhone, IconMapPin, IconBrandLinkedin } from '@tabler/icons-react';
import classes from './resume.module.css';

export default function ResumePage() {
    const handlePrint = () => {
        window.print();
    };

    return (
        <Box bg="gray.0" py="xl" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {/* Print Button - Hidden when printing */}
            <Group mb="lg" className="no-print">
                <Button
                    leftSection={<IconPrinter size={20} />}
                    onClick={handlePrint}
                    variant="filled"
                    color="dark"
                    size="md"
                    radius="md"
                >
                    PDF로 저장하기 / 인쇄
                </Button>
                <Button
                    component="a"
                    href="/"
                    variant="default"
                    size="md"
                    radius="md"
                >
                    포트폴리오로 돌아가기
                </Button>
            </Group>

            {/* A4 Resume Container */}
            <Paper
                shadow="md"
                p={50}
                className="resume-container"
                bg="white"
                style={{
                    width: '210mm',
                    minHeight: '297mm', // A4 height
                    margin: '0 auto',
                    color: '#000', // Force black text for print/readability
                    boxSizing: 'border-box',
                }}
            >
                {/* Header */}
                <Group justify="space-between" align="flex-start" mb="xl">
                    <div>
                        <Title order={1} size={36} fw={900} style={{ letterSpacing: '-0.5px' }}>정지서 (Jiseo Jeong)</Title>
                        <Text size="xl" fw={600} c="blue.8" mt={4}>Data Engineer</Text>
                    </div>
                    <Stack gap={4} align="flex-end">
                        <Group gap={8}>
                            <IconPhone size={16} color="#666" />
                            <Text size="sm" c="dimmed">010-7412-3699</Text>
                        </Group>
                        <Group gap={8}>
                            <IconMail size={16} color="#666" />
                            <Text size="sm" c="dimmed" component="a" href="mailto:jisxo@kakao.com">jisxo@kakao.com</Text>
                        </Group>
                        <Group gap={8}>
                            <IconWorld size={16} color="#666" />
                            <Text size="sm" c="dimmed" component="a" href="https://jisxo-portfolio.netlify.app">jisxo-portfolio.netlify.app</Text>
                        </Group>
                    </Stack>
                </Group>

                <Divider mb="xl" color="gray.3" />

                {/* Summary */}
                <SectionTitle title="Summary" />
                <Text size="sm" lh={1.6} mb="xl" c="dark.9">
                    <b>"데이터의 흐름을 설계하고 가치를 만드는 데이터 엔지니어"</b><br />
                    비효율적인 반복 업무를 기술로 혁신하는 4년 차 데이터 엔지니어입니다. Python과 Docker, Airflow를 활용해 견고한 데이터 파이프라인을 구축하고, 로그 분석부터 NLP 기반의 이상징후 탐지까지 폭넓은 데이터 문제를 해결해왔습니다. 현재는 데이터 엔지니어링을 넘어, 안정적인 서비스 운영을 위한 인프라 고도화와 풀스택 개발에 관심을 두고 끊임없이 성장하고 있습니다.
                </Text>

                {/* Skills */}
                <SectionTitle title="Technical Skills" />
                <Grid mb="xl">
                    <Grid.Col span={3}><Text size="sm" fw={700}>Languages</Text></Grid.Col>
                    <Grid.Col span={9}><Text size="sm">Python, SQL, Shell Script</Text></Grid.Col>

                    <Grid.Col span={3}><Text size="sm" fw={700}>Data Engineering</Text></Grid.Col>
                    <Grid.Col span={9}><Text size="sm">Apache Airflow, Spark, Kafka (Concept), ETL Pipelines</Text></Grid.Col>

                    <Grid.Col span={3}><Text size="sm" fw={700}>Infrastructure</Text></Grid.Col>
                    <Grid.Col span={9}><Text size="sm">Docker, Linux, CI/CD (Basic)</Text></Grid.Col>

                    <Grid.Col span={3}><Text size="sm" fw={700}>Web & Others</Text></Grid.Col>
                    <Grid.Col span={9}><Text size="sm">React, Next.js, RPA (Custom/UiPath)</Text></Grid.Col>
                </Grid>

                {/* Work Experience */}
                <SectionTitle title="Work Experience" />
                <Stack gap="xl" mb="xl">
                    {/* CSLEE Freelance */}
                    <ExperienceItem
                        company="씨에스리 (CSLEE)"
                        role="AI엔지니어링사업부 / 프리랜서"
                        period="2025.04 - 2025.10"
                        summary="SecuXper AI 솔루션 운영 및 유지보수"
                    />

                    {/* CSLEE Full-time */}
                    <ExperienceItem
                        company="씨에스리 (CSLEE)"
                        role="AI엔지니어링사업부 선임 / Data Engineer"
                        period="2021.03 - 2025.02 (4년)"
                        summary="보안 관제 도메인에 특화된 데이터 엔지니어링 및 이상징후 탐지 파이프라인 구축"
                    >
                        <List size="sm" spacing={4} withPadding listStyleType="disc">
                            <List.Item><b>Process Automation</b>: 수작업 제로화 및 데이터 파이프라인 100% 자동화 달성</List.Item>
                            <List.Item><b>Problem Solving</b>: 대용량 데이터 처리 병목 현상 및 중복 적재 이슈 기술적 해결</List.Item>
                        </List>
                        <Group gap={8} mt="xs">
                            <Badge size="xs" variant="outline" color="gray">Python</Badge>
                            <Badge size="xs" variant="outline" color="gray">Airflow</Badge>
                            <Badge size="xs" variant="outline" color="gray">RPA</Badge>
                        </Group>
                    </ExperienceItem>

                    {/* Police Internship */}
                    <ExperienceItem
                        company="경찰청 치안빅데이터정책담당관실"
                        role="인턴"
                        period="2019.09 - 2020.02"
                        summary="치안 데이터 분석 보조 및 시각화, 공공 데이터 활용 분석 보고서 작성 지원"
                    />
                </Stack>

                {/* Projects */}
                <SectionTitle title="Key Projects" />
                <Stack gap="xl" mb="xl">
                    <ProjectItem
                        title="1. L사, 보안 로그 분석 및 이상징후 탐지 파이프라인 구축"
                        role="Data Engineer (수집/전처리/EDA)"
                        desc="사외 발송 메일 로그 수집/전처리 100% 자동화, 다차원 EDA를 통한 이상징후 탐지 룰(Rule) 도출"
                    />
                    <ProjectItem
                        title="2. L사, 이기종 보안 로그 통합 및 이상징후 탐지 파이프라인 구축"
                        role="Data Engineer (ETL 구축)"
                        desc="5종 이기종 로그 통합 ETL 구축, 데이터 중복(Doubling) 이슈 해결로 정합성 100% 달성"
                    />
                    <ProjectItem
                        title="3. L사, 내부자 위협 탐지 및 비정형 텍스트 파이프라인 구축"
                        role="Data Engineer (Airflow/NLP)"
                        desc="메신저/이메일 비정형 텍스트 분석 자동화, File Partitioning으로 대용량 처리 병목 해결"
                    />
                    <ProjectItem
                        title="4. 아마존 글로벌 광고 비딩 및 키워드 관리 RPA 시스템 구축"
                        role="Full Stack Developer"
                        desc="Python/Airflow 활용 글로벌 10개국 광고 운영 자동화, 월 150시간 업무 → 2.5시간으로 83% 단축"
                    />
                    <ProjectItem
                        title="5. 서울시 상권 분석 및 음식점 랭킹 솔루션 DW 구축"
                        role="Data Engineer"
                        desc="공공/웹 데이터 통합 DW 구축 및 Docker 기반 개발 환경 표준화로 데이터 자산화 실현"
                    />
                </Stack>

                {/* Education */}
                <SectionTitle title="Education" />
                <Group justify="space-between" align="flex-start" mb="xs">
                    <div>
                        <Text fw={700} size="sm">동덕여자대학교 (Dongduk Women's Univ.)</Text>
                        <Text size="sm">Information Statistics (정보통계학과) / 학사</Text>
                    </div>
                    <Text size="sm" c="dimmed">2014.03 - 2018.02</Text>
                </Group>
                <Group justify="space-between" align="flex-start">
                    <div>
                        <Text fw={700} size="sm">해성국제컨벤션고등학교</Text>
                    </div>
                    <Text size="sm" c="dimmed">2011.03 - 2014.02</Text>
                </Group>
            </Paper>
        </Box>
    );
}

// Helper Components
function SectionTitle({ title }: { title: string }) {
    return (
        <Box mb="md">
            <Text size="md" fw={800} tt="uppercase" c="blue.8" mb={4} style={{ letterSpacing: '1px' }}>{title}</Text>
            <Divider color="blue.2" size="sm" />
        </Box>
    );
}

function ExperienceItem({ company, role, period, summary, children }: any) {
    return (
        <Box>
            <Group justify="space-between" mb={2}>
                <Text fw={700} size="md">{company}</Text>
                <Text size="sm" c="dimmed">{period}</Text>
            </Group>
            <Text size="sm" fw={600} mb={4} c="dark.7">{role}</Text>
            <Text size="sm" lh={1.5} mb={children ? 4 : 0}>{summary}</Text>
            {children}
        </Box>
    );
}

function ProjectItem({ title, role, desc }: any) {
    return (
        <Box>
            <Group justify="space-between" mb={2} align="flex-start">
                <Text fw={700} size="sm" style={{ flex: 1 }}>{title}</Text>
            </Group>
            <Group gap={8} mb={2}>
                <Text size="xs" c="dimmed" fw={600} bg="gray.1" px={6} py={1} style={{ borderRadius: 4 }}>{role}</Text>
            </Group>
            <Text size="sm" lh={1.4}>{desc}</Text>
        </Box>
    );
}
