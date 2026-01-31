import { Container, Title, Text, SimpleGrid } from '@mantine/core';
import { ProjectCard } from '@/components/ProjectCard';

const projects = [
    {
        title: '대기업 제조사, 보안 로그 분석 및 이상징후 탐지 파이프라인 구축',
        description: '외부 발송 메일 로그의 수집·전처리 과정을 100% 자동화하고, EDA를 통해 내부 탐지 모델의 기초를 마련한 데이터 엔지니어링 프로젝트.',
        image: 'https://placehold.co/600x400/101113/007bff?text=Log+Analysis',
        tags: ['Python', 'Pandas', 'ETL Pipeline', 'Data Analysis (EDA)', 'Anomaly Detection'],
        star: {
            situation: '매일 발생하는 대량의 외부 발송 메일 로그를 분석하여 이상 행위 징후를 포착해야 했으나, 정제된 데이터 수집 체계가 없어 수동 분석에 의존하는 비효율이 존재했습니다.',
            action: 'Python 기반의 전처리 모듈을 직접 개발하여 기존 배치 솔루션과 연동시킴으로써 데이터 수집부터 가공까지의 전 과정을 100% 자동화하고, 시간/부서/키워드별 다차원 EDA를 수행하여 이상징후 탐지 룰(Rule) 설정을 위한 통계적 근거를 확보했습니다.',
            result: '이를 통해 수동 데이터 추출에 소요되던 공수를 Zero화하여 분석 효율을 극대화했으며, 통계적 근거 기반의 정량적 탐지 룰(Rule)을 도출하여 보안 관제 고도화의 핵심 기반을 완성했습니다.'
        }
    },
    {
        title: '대기업 제조사, 이기종 보안 로그 통합 및 이상징후 탐지 파이프라인 구축',
        description: '5종 이상의 이기종 보안 로그를 통합하는 ETL 파이프라인을 구축하고, 데이터 중복(Doubling) 문제를 기술적으로 해결하여 무결성 100%를 달성한 프로젝트.',
        image: 'https://placehold.co/600x400/101113/20bf6b?text=Data+Integration',
        tags: ['Python', 'ETL Pipeline', 'Log Analysis Platform', 'Data Standardization', 'Anomaly Detection'],
        star: {
            situation: "출력물 보안 솔루션(DLP), 외부 메일 등 5종 이상의 이기종 보안 로그를 통합 분석해야 했으나, 장비마다 상이한 로그 포맷과 데이터 전송 과정에서 발생하는 '데이터 중복 적재(Doubling)' 이슈로 인해 분석 신뢰도가 심각하게 훼손된 상황이었습니다.",
            action: '로그별 Unique Key를 기준으로 중복을 제거하는 Python 기반 전처리 로직을 개발하여 데이터 정합성을 확보하고, 통합 스키마 설계 및 정규표현식(Regex) 파싱 모듈을 통해 비정형 로그를 표준 포맷으로 자동 변환하는 파이프라인을 구축했습니다. 또한, 부서별 업무 특성을 분석하여 탐지 임계치(Threshold)를 최적화했습니다.',
            result: '이를 통해 원천 데이터와 적재 데이터 간의 정합성(Integrity) 100%를 달성했으며, 오탐(False Positive)을 최소화하여 관제 업무 효율을 높이고 향후 신규 장비 추가 시 즉시 대응 가능한 확장성 있는 데이터 구조를 완성했습니다.'
        }
    },
    {
        title: '대기업 제조사, 핵심 기술 자산 보호를 위한 내부자 위협 탐지 및 데이터 파이프라인 구축',
        description: '제조업 핵심 공정 기술 자산을 보호하기 위해, 사내 메신저·이메일 등 비정형 텍스트에서 내부자 위협(Insider Threat)을 조기에 포착하는 Airflow 파이프라인을 구축.',
        image: 'https://placehold.co/600x400/101113/f783ac?text=Text+Pipeline',
        tags: ['Apache Airflow', 'Python', 'NLP', 'ETL Pipeline', 'Performance Optimization'],
        star: {
            situation: '내부자 위협(Insider Threat)이 높아짐에 따라, 사내 협업 툴(Messenger)과 이메일 등 방대한 비정형 데이터를 분석해 이상 행위를 사전에 차단해야 했습니다. 하지만 기존 시스템은 자동화가 되어 있지 않았고, 대용량 텍스트 벡터화 처리 시 성능 병목(Bottleneck)이 발생했습니다.',
            action: "Apache Airflow를 도입하여 전 과정을 자동화 파이프라인으로 구축했습니다. 이 과정에서 AI 모델 학습을 위한 대용량 텍스트 벡터화(Vectorization) 수행 시 메모리 초과 및 속도 저하가 발생하자, 거대한 JSON 데이터를 작은 단위로 쪼개어 처리하는 파일 분할(Partitioning) 기법을 적용해 병목 현상을 기술적으로 해결했습니다. 또한 사용자 행위 기반의 이상징후(Anomaly) 패턴 탐지를 위해 단순 키워드가 아닌 '문맥(Context)'을 포함한 문장 학습데이터셋을 구축하여 탐지 정교성을 높였습니다.",
            result: '이를 통해 텍스트 분석 범위를 확장하고 복잡한 워크플로우 운영을 100% 자동화했으며, 매일 발생하는 수만 건의 대화 데이터를 지연(Lag) 없이 처리하여 기술 유출 시도를 선제적으로 방어하는 보안 관제 체계를 완성했습니다.'
        }
    },
    {
        title: '대기업 통신사, 대용량 보안 로그 처리 로직 최적화 및 AI 데이터셋 구축',
        description: '통신사의 대용량 보안 로그 처리 속도를 개선하기 위해 청크(Chunk) 단위 배치 로직을 적용하고, 이상징후 탐지 AI 모델을 위한 학습 데이터셋(TF-IDF)을 구축한 프로젝트.',
        image: 'https://placehold.co/600x400/101113/ffd43b?text=Performance+Opt',
        tags: ['Python', 'Performance Optimization', 'Data Labeling', 'Splunk'],
        star: {
            situation: '통신사 특성상 하루에도 수백만 건의 보안 로그가 발생하는데, 특히 DRM 문서 검사 로직이 비효율적이어서 데이터 처리에 2시간 이상 소요되는 지연(Latency) 이슈가 발생했습니다. 또한, AI 탐지 모델 고도화를 위한 양질의 학습 데이터가 부족한 상황이었습니다.',
            action: '처리 속도 개선을 위해 기존의 일괄 처리 방식을 1,000개 단위의 청크(Chunk) 기반 분할 처리 로직으로 변경하여 메모리 부하를 줄이고 속도를 최적화했습니다. 동시에 비정형 문서 데이터를 AI가 학습할 수 있도록 TF-IDF(단어 빈도-역문서 빈도) 알고리즘을 적용해 벡터화하고, 핵심 키워드를 추출하여 정교한 라벨링 데이터셋을 구축했습니다.',
            result: '이를 통해 DRM 로그 처리 시간을 획기적으로 단축하여 데이터 병목 현상을 해결했으며, Splunk 대시보드 개선 및 양질의 학습 데이터셋 공급 체계를 완성하여 보안 관제 효율성을 높이고 AI 분석을 위한 핵심 기반을 마련했습니다.'
        }
    },
    {
        title: '아마존 글로벌 광고 비딩 및 키워드 관리 RPA 시스템 구축',
        description: 'Python과 Airflow를 활용해 아마존 10개국 광고 운영 프로세스를 자동화하여, 월 150시간의 수동 업무를 2.5시간으로 83% 단축한 RPA 프로젝트.',
        image: '/images/rpa_fe.png', // Main thumbnail
        images: [
            { src: '/images/rpa_architecture.png', caption: 'RPA 시스템 아키텍처 (Docker & Airflow)' },
            { src: '/images/rpa_batch_schedule.png', caption: 'Airflow 배치 스케줄링 및 모니터링' },
            { src: '/images/rpa_fe.png', caption: 'RPA 운영/관리 대시보드 (Django)' }
        ],
        tags: ['Python', 'Docker', 'Apache Airflow', 'Django', 'Amazon API'],
        star: {
            situation: '스마트폰 액세서리 브랜드의 아마존 셀러 광고 업무를 담당하며, 미국/일본 등 글로벌 10개국 마켓의 광고 캠페인을 1명이 관리해야 했습니다. 단순 규칙 기반의 반복 업무(클릭/입력)가 월 150시간 이상 소요되었으며, 노동집약적 업무로 인한 휴먼 에러 위험이 높았습니다.',
            action: 'Docker 컨테이너 환경에서 Apache Airflow를 활용하여 안정적인 배치 스케줄링 파이프라인을 구축했습니다. 기존 UI 클릭 방식 대신 Amazon Advertising API 기반의 백엔드 로직을 구현하여 데이터를 직접 제어하고, 5가지 핵심 입찰/키워드 관리 알고리즘을 개발했습니다. 또한 Django 기반 대시보드를 구축하여 RPA 실행 결과를 모니터링할 수 있게 했습니다.',
            result: '이를 통해 월 150시간의 업무를 2.5시간으로 83% 단축하고, 공휴일/심야 시간에도 중단 없는 24시간 광고 입찰 관리가 가능해졌습니다. 사람의 개입 없는 일관성 있는 광고 운영 체제를 확립하여 담당자의 생산성을 극대화했습니다.'
        }
    },
    {
        title: '서울시 유휴 공간 입점 최적화를 위한 상권 분석 및 음식점 랭킹 솔루션 개발',
        description: '공공데이터와 크롤링 데이터를 통합한 서울시 상권 분석 DW를 구축하고, Docker 기반의 개발 환경 표준화를 통해 팀 협업 생산성을 높인 데이터 엔지니어링 프로젝트.',
        image: '/images/hipp_fe.png', // Main thumbnail
        images: [
            { src: '/images/hipp_architecture.png', caption: '상권 분석 시스템 아키텍처' },
            { src: '/images/hipp_db_desc.png', caption: 'DB 인터페이스 명세서 (PostgreSQL)' },
            { src: '/images/hipp_fe.png', caption: '상권 분석 웹 서비스 화면' }
        ],
        tags: ['Python', 'PostgreSQL', 'Docker', 'Web Crawling', 'Git'],
        star: {
            situation: '공간 중개 플랫폼의 유휴 공간에 적합한 음식점을 추천하기 위해 객관적인 데이터(매출, 유동인구 등)가 필요했으나, 데이터가 서울시/네이버/카카오 등 여러 플랫폼에 파편화되어 있어 통합 분석이 불가능했습니다. 또한 팀원 간 로컬 개발 환경 불일치로 잦은 오류가 발생했습니다.',
            action: '서울시 공공데이터 API와 포털 크롤링 봇을 개발하여 일일/주간 단위로 데이터를 수집·적재하는 자동화 파이프라인을 구축했습니다(일 최대 10만 건). 수집된 데이터는 정규화하여 Mart 테이블로 재설계하고, Docker를 도입하여 컨테이너 기반의 동일한 개발 환경을 배포함으로써 환경 표준화를 달성했습니다.',
            result: '서울시 전체 상권 데이터를 통합 관리하는 중앙화된 DB를 구축하여 신규 비즈니스 모델(입점 제안)의 기반을 마련했습니다. 또한 Docker 도입과 개발 가이드 문서화를 통해 환경 세팅 시간을 50% 이상 단축하고 환경 차이로 인한 버그를 제거했습니다.'
        }
    },
];

export const metadata = {
    title: 'Projects | 정지서 Portfolio',
    description: 'Data Engineering & Pipeline Projects',
};

export default function ProjectsPage() {
    return (
        <Container size="lg" py="xl">
            <Title order={1} mb="sm">My Projects</Title>
            <Text c="dimmed" mb={50}>
                데이터 엔지니어링 및 파이프라인 구축 프로젝트 경험입니다. (Click 'View Details' for more)
            </Text>

            <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="xl">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </SimpleGrid>
        </Container>
    );
}
