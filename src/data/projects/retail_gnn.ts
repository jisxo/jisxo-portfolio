import { Project } from './types';

export const retailGnnProject: Project = {
    title: '팝업스토어 공간-브랜드 양방향 AI 추천 엔진 개발',
    duration: '2024.05 - 2024.11',
    role: `AI & 데이터 엔지니어
    (Graph Modeling)`,
    description: "GNN(그래프 신경망) 기술을 활용하여 공간과 브랜드 간의 복잡한 물리적/추상적 연관성을 학습하는 양방향 매칭 솔루션",
    overview: {
        background: "기존의 단순 필터링 방식은 정적인 속성 위주로 매칭되어, 브랜드와 공간의 숨겨진 유기적 관계를 반영하지 못했습니다.",
        objective: "공간, 브랜드, 사용자 행동 데이터를 그래프 구조로 모델링하여 신규 데이터(Cold-Start)에 대해서도 유연하고 정확한 추천을 제공하고자 했습니다.",
        outcome: "PinSAGE/GraphSAGE 하이브리드 모델을 통해 추천 다양성을 확보하였고, 실제 서비스 탑재 가능한 수준의 PoC를 성공적으로 완료했습니다."
    },
    image: '/images/thumbnails/retail_gnn.png',
    domain: 'PropTech & Retail AI',
    tags: ['GNN', 'GraphSAGE', 'PinSAGE', 'Python', 'PyTorch Geometric', 'Cold-Start Optimization'],
    star: {
        situation: `기존의 필터링 방식은 공간의 물리적 특성과 브랜드의 추상적 속성 사이의 복합적인 연관성을 반영하지 못했습니다. 특히 사용자의 행동 로그가 없는 **신규 등록 공간 및 브랜드**는 추천에서 완전히 배제되는 문제가 발생하여 추천에 어려움이 있었습니다..`,
        action: `속성 데이터 처리에 특화된 **PinSAGE**와 행동 패턴 분석에 강점이 있는 **GraphSAGE**를 상호보완적으로 결합한 하이브리드 아키텍처를 설계했습니다. 
공간, 브랜드, 사용자를 노드로 정의하고 이들 사이의 상호작용을 엣지로 구성하는 **공간-브랜드 상호작용 네트워크**를 설계하여, 단순 속성 매칭을 넘어선 복합적인 관계성을 모델이 학습할 수 있도록 구현했습니다.`,
        result: `이를 통해 이력이 없는 신규 데이터에 대해서도 **즉각적인 추천이 가능한 시스템**을 구축하여 Cold-Start 문제를 보완했습니다. 
또한 데이터 간의 숨겨진 연관성을 학습함으로써 인기 아이템 쏠림 현상을 개선하고, 라이프스타일 기반의 **추천 다양성**을 확보하여 실제 서비스 탑재 가능한 수준의 PoC를 성공적으로 완료했습니다.`
    },
    contributions: [
        '공간-브랜드 상호작용 네트워크 설계 및 모델링',
        'PinSAGE/GraphSAGE 하이브리드 추천 아키텍처 구축',
        '데이터 전처리 최소화 및 End-to-End 학습 파이프라인 설계'
    ]
};
