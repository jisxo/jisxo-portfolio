import { Project } from './types';

export const retailGnnProject: Project = {
    title: 'GNN 기반 리테일 프롭테크 양방향 매칭 솔루션 개발',
    duration: '2024.05 - 2024.11',
    role: `AI & Data Engineer
    (Architecture / Graph Modeling)`,
    description: "팝업스토어 플랫폼 내 '공간'과 '브랜드' 데이터를 양방향으로 매칭해주는 AI 추천 솔루션 구축 프로젝트입니다. 데이터 간의 관계와 속성을 동시에 학습하는 GNN 기술을 통해 기존 추천 시스템의 한계를 극복했습니다.",
    image: '/images/thumbnails/retail_gnn.png',
    domain: 'PropTech & Retail AI',
    tags: ['GNN', 'GraphSAGE', 'PinSAGE', 'Python', 'PyTorch Geometric', 'Cold-Start Optimization'],
    star: {
        situation: `기존의 필터링 방식은 공간의 물리적 특성과 브랜드의 추상적 속성 사이의 복합적인 연관성을 반영하지 못했습니다. 특히 사용자의 행동 로그가 없는 **신규 등록 공간 및 브랜드(Cold-Start)**는 추천에서 완전히 배제되는 문제가 발생하여 비즈니스 확장에 큰 장애가 되고 있었습니다.`,
        action: `속성 데이터 처리에 특화된 **PinSAGE**와 행동 패턴 분석에 강점이 있는 **GraphSAGE**를 상호보완적으로 결합한 하이브리드 아키텍처를 설계했습니다. 
공간, 브랜드, 사용자를 노드로 정의하고 이들 사이의 상호작용을 엣지로 구성하는 **이종(Heterogeneous) 그래프 스키마**를 독자적으로 설계하여, 단순 속성 매칭을 넘어선 복합적인 관계성을 모델이 학습할 수 있도록 구현했습니다.`,
        result: `이를 통해 이력이 없는 신규 데이터에 대해서도 **즉각적인 추천이 가능한 시스템**을 구축하여 Cold-Start 문제를 해결했습니다. 
또한 데이터 간의 숨겨진 연관성을 학습함으로써 인기 아이템 쏠림 현상을 개선하고, 라이프스타일 기반의 **추천 다양성**을 확보하여 실제 서비스 탑재 가능한 수준의 PoC(Proof of Concept)를 성공적으로 완료했습니다.`
    },
    contributions: [
        '이종 그래프 기반 비즈니스 데이터 스키마 설계 및 모델링',
        'PinSAGE/GraphSAGE 하이브리드 추천 아키텍처 구축',
        '데이터 전처리 최소화 및 End-to-End 학습 파이프라인 설계',
        'AI 모델 임베딩 표준화 작업을 통한 데이터 정합성 확보'
    ]
};
