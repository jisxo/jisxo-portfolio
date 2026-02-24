import { Project } from './types';

export const hiddenSpotMinioProject: Project = {
  title: 'Hidden Spot 데이터 레이크',
  duration: 'Personal Project',
  role: 'Data Engineer / 데이터 레이크 아키텍처 설계 및 서비스 구현',
  description:
    '네이버 지도 기반 리뷰·메타 데이터를 수집·분석하고, 원본 데이터를 먼저 보관하는 구조로 전환하여 재처리와 확장에 유연한 데이터 레이크 아키텍처를 구축한 프로젝트입니다.',
  overview: {
    background:
      '크롤링 기반 비정형 데이터는 스키마 변동이 잦고 원본 보존 요구가 높으며, 분석 로직 변경 시 전체 재처리가 빈번했습니다. 단일 데이터베이스 적재 구조는 스키마 변경 비용과 재처리 비용이 급격히 증가하는 문제가 있었습니다.',
    objective:
      '원본 데이터를 우선 보존하고 필요 시점에 해석하는 전략으로 전환하여 스키마 변동과 재처리 요구에 유연하게 대응하는 데이터 레이크 아키텍처를 구축하는 것을 목표로 했습니다.',
    outcome:
      '원본 데이터를 객체 저장소에 적재하고, 파이프라인에서 정제·가공을 수행하는 구조로 전환하여 재처리 비용을 낮추고, 서비스 계층과 분리된 안정적인 데이터 구조를 완성했습니다.',
  },
  image: '/images/thumbnails/hidden_spot_minio.png',
  domain: 'Data Lake & Analytics',
  tags: [
    'MinIO',
    'Airflow',
    'Schema-on-Read',
    'Python',
    'NLP',
    'Django REST API',
    'Docker',
  ],
  star: {
    situation: `리뷰 데이터는 형식이 자주 변하고 소스 품질 편차가 커서 고정된 스키마에 즉시 맞추려 할수록 유지보수 비용이 증가했습니다.
또한 분석 로직 개선 시 과거 데이터를 다시 가공해야 했습니다.`,
    action: `원본 데이터를 객체 저장소에 먼저 저장하고, 분석 시점에 필요한 형태로 읽어오는 구조로 전환했습니다.
수집·정제·가공 단계를 분리해 재처리 가능성을 확보했습니다.`,
    result: `스키마 변경 대응 비용을 낮추고, 분석 로직 변경 시에도 원본 기반 재처리가 가능한 안정적인 데이터 아키텍처를 확보했습니다.`,
  },
  contributions: [
    '원본 데이터 우선 저장 기반 데이터 레이크 설계',
    '수집·정제·가공 단계를 분리한 파이프라인 구성',
    '분석 결과를 서비스 계층으로 연결하는 전체 흐름 구현',
  ],
  evidence: [
    {
      title: '01_serving_api.md (Serving API Contract)',
      slug: 'hidden-spot-serving-api',
    },
    {
      title: '02_async_jobs.md (Async Job Flow)',
      slug: 'hidden-spot-async-jobs',
    },
    {
      title: '03_datalake_layout.md (Data Lake Layout)',
      slug: 'hidden-spot-datalake-layout',
    },
  ],
};
