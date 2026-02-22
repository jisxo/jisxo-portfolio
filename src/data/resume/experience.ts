import { Experience } from './types';

export const experienceData: Experience[] = [
    {
        company: 'CSLEE',
        role: 'AI엔지니어링사업부 / 프리랜서',
        period: '2025.04 - 2025.10',
        summary: '통신 보안 로그 파이프라인 구조 개선',
        bullets: [
            '보안 로그 수집·전처리·적재 파이프라인 운영 및 안정화',
            'Airflow 기반 배치 파이프라인의 실행 순서 점검 및 센싱 로직 적용으로 선행/후행 의존성 오류 수정',
            '복호화 배치의 처리 단위 오류 수정 및 기존 청크 구조로 복원',
            'EML 파싱 및 메타데이터 추출 로직 수정으로 예외 케이스 감소',
            '40개 이상 문서 분류 체계 기반 라벨링으로 학습데이터셋 구축',
        ]
    },
    {
        company: 'CSLEE',
        role: 'AI엔지니어링사업부 / 선임',
        period: '2021.03 ~ 2025.02',
        summary: 'SaaS 보안 데이터 플랫폼 설계 및 운영',
        bullets: [
            '보안 데이터 플랫폼을 위한 로그 수집·정제·적재 ETL 파이프라인 설계',
            '이기종 로그(메일·메신저·OCR)를 단일 스키마로 표준화하여 데이터 정합성 확보',
            'Airflow 기반 배치 오케스트레이션 설계 및 의존성 제어, 실패 케이스에 대한 재시도/롤백 처리 로직 정비',
            '사용자 행동 프로파일링을 위한 통합 조인 테이블 및 파생변수 설계',
            '기 학습된 LSTM 기반 모델 추론 배치 구현 및 결과 데이터 적재 자동화',
        ],
        skills: ['Python', 'Apache Airflow', 'GNN', 'NLP', 'Docker', 'RPA']
    }
];
