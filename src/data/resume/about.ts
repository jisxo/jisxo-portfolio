import { PersonalInfo } from './types';

export const personalInfo: PersonalInfo = {
    name: '정지서 (Jiseo Jeong)',
    role: 'Data Engineer',
    phone: process.env.NEXT_PUBLIC_USER_PHONE || '010-0000-0000',
    email: process.env.NEXT_PUBLIC_USER_EMAIL || 'email@example.com',
    github: 'jisxo', // Username
    portfolioUrl: process.env.NEXT_PUBLIC_USER_PORTFOLIO_URL || 'portfolio-url.com'
};

export const resumeSummary = `데이터 수집부터 배치 추론, 최종 AI 결과물 적재까지 End-to-End 파이프라인을 완결성 있게 구현하는 ML 데이터 엔지니어입니다.

Airflow를 기반으로 데이터 사이언티스트가 개발한 추론모델을 폐쇄망 운영 환경에 통합하여 ML 파이프라인을 구축해 왔습니다. 특히 대용량 데이터 전처리 및 모델 로드 시 발생하는 OOM 리스크를 청킹 기법으로 선제 방어하는 최적화에 강점이 있습니다. 엄격한 예외 케이스 통제로 데이터 정합성을 지켜내며, 최근 Docker와 MinIO를 활용해 클라우드 네이티브 환경으로 역량을 넓히고 있습니다.`;

export const heroData = {
    titleHighlight: 'End-to-End 파이프라인 엔지니어',
    description: `Python과 Airflow를 활용해 데이터 추출부터 전처리, ML 배치 추론, AI 결과 적재까지 이어지는 End-to-End 파이프라인을 구축합니다. 데이터 사이언티스트의 모델을 폐쇄망 프로덕션에 안정적으로 통합하고, 대용량 처리 시 발생하는 OOM 리스크를 청킹 기법으로 선제 방어해 무중단 환경을 만듭니다. 
    최근 Docker와 MinIO를 통해 클라우드 기반의 데이터 생애주기 설계로 역량을 넓히고 있습니다.`,
    subDescription: '단순한 데이터의 이동을 넘어, 치열한 운영 트러블슈팅과 꼼꼼한 스키마 검증을 통해 ML 모델이 100% 신뢰할 수 있는 데이터 정합성을 창출합니다.'
};
