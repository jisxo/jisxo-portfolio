import { Project } from './types';

export const securityPlatformPhasedProject: Project = {
  title: '그룹사 통합 보안 플랫폼',
  duration: '2021.06 - 2022.09',
  role: 'Data Engineer / 아키텍처 설계 및 파이프라인 구축',
  description:
    '보안 관제 체계를 단계적으로 고도화하여 수작업을 자동화하고, 대용량 비정형 데이터 처리 병목을 해결하며, 이기종 로그를 단일 스키마로 통합한 프로젝트입니다.',
  overview: {
    background:
      '보안 로그는 장비마다 형식이 달라 통합 분석이 어려웠고, 수작업 관제 방식으로 인해 운영 부담이 높았습니다. 또한 대용량 비정형 데이터 처리 과정에서 메모리 초과 문제가 발생했습니다.',
    objective:
      '관제 자동화, 대용량 처리 안정화, 로그 통합 표준화를 단계적으로 수행하여 확장 가능한 보안 데이터 플랫폼을 구축하는 것이 목표였습니다.',
    outcome:
      '수작업 관제를 자동화하고, 대용량 처리 시 발생하던 메모리 병목을 해결했으며, 여러 로그를 단일 구조로 통합하여 데이터 정합성을 확보했습니다.',
  },
  image: '/images/thumbnails/security_platform_phased.png',
  domain: 'Enterprise Data Platform',
  tags: [
    'Python',
    'Apache Airflow',
    'ETL',
    'NLP',
    'JSON Chunking',
    'Data Standardization',
    'Docker',
  ],
  star: {
    situation: `수작업 관제로 인해 처리 지연이 발생했고, 비정형 로그 분석 과정에서 메모리 초과로 파이프라인이 중단되는 문제가 있었습니다.`,
    action: `수집부터 분석까지 자동화 파이프라인을 구축하고, 대용량 파일을 분할 처리하는 방식으로 메모리 사용량을 제어했습니다.
또한 로그를 단일 구조로 변환하는 표준 스키마를 설계했습니다.`,
    result: `운영 부담을 줄이고 대용량 처리 안정성을 확보했으며, 이기종 로그를 통합해 데이터 정합성을 유지하는 관제 플랫폼을 완성했습니다.`,
  },
  contributions: [
    '수작업 관제 자동화 파이프라인 구축',
    '대용량 데이터 분할 처리로 메모리 병목 해결',
    '이기종 로그 통합을 위한 표준 스키마 설계',
  ],
  evidence: [
    {
      title: 'Canonical Schema v1 (Mail/Attachment)',
      slug: 'canonical-schema-v1',
    },
    {
      title: 'Parsing/Normalization Pipeline',
      slug: 'parsing-normalization-pipeline',
    },
    {
      title: 'Exception Handling Rules',
      slug: 'exception-handling-rules',
    },
    {
      title: 'OOM Mitigation (Record-level JSON Chunking)',
      slug: 'oom-mitigation-record-level-json-chunking',
    },
  ],
};
