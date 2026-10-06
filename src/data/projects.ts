import type { ResearchProject } from './types';

// Research-lab R&D projects supplied by the user. No individual role is claimed.
export const projects: ResearchProject[] = [
  {
    id: 'omnitwin', category: 'R&D Project', status: 'ongoing',
    title: 'OmniTwin',
    titleKo: '희소상황 대응을 위한 대화형 3D 버추얼 트윈 기반 고품질 옴니모달 데이터 생성ㆍ응용 프레임워크 연구',
    description: 'OmniTwin: An Interactive 3D Virtual Twin Framework for High-Quality Omni-Modal Data Generation and Validation in Sparse Scenarios',
    tags: ['3D Virtual Twin', 'Omni-Modal Data', 'Sparse Scenarios'],
    period: 'Mar. 2026 — Feb. 2029',
    funding: '과학기술정보통신부 · 한국연구재단(NRF)',
    programme: '개인기초연구(과기정통부)(R&D) · 우수연구-핵심연구(유형B)',
    grantNumber: 'RS-2026-25479055',
    acknowledgements: [
      'This work was supported by the National Research Foundation of Korea(NRF) grant funded by the Korea government(MSIT) (No. RS-2026-25479055).',
      '이 성과는 정부(과학기술정보통신부)의 재원으로 한국연구재단의 지원을 받아 수행된 연구임 (No. RS-2026-25479055).',
    ],
    preview: { type: 'image', src: '/images/projects/omnitwin.png', alt: 'OmniTwin 연구 개요 — 연구실에서 제공한 과제 이미지' },
    links: {},
  },
  {
    id: 'physical-ai-display', category: 'R&D Project', status: 'ongoing',
    title: 'Physical AI Robotic Display',
    titleKo: '피지컬 AI기반의 반응형 로보틱 디스플레이 솔루션 개발',
    description: 'Physical AI based Interative Robotic Display Solution Development',
    tags: ['Physical AI', 'Robotic Display', 'Interactive Systems'],
    period: 'Jul. 2026 — Jun. 2027',
    funding: '서울특별시 · 서울경제진흥원(SBA)',
    programme: '2026년 인공지능 기술사업화 지원사업',
    grantNumber: 'CY260119',
    acknowledgements: [
      'This research was supported by the Seoul R&BD Program (CY260119) (Physical AI based Interative Robotic Display Solution Development) through the Seoul Business Agency (SBA) and funded by the Seoul Metropolitan Government.',
      '이 논문은 서울시 산학연 연구개발 지원사업(2026년 인공지능 기술사업화 지원사업(CY260119) (피지컬 AI기반의 반응형 로보틱 디스플레이 솔루션 개발))의 지원을 받아 수행된 연구임.',
    ],
    preview: { type: 'image', src: '/images/projects/physical-ai-display.png', alt: '피지컬 AI 기반 반응형 로보틱 디스플레이 솔루션 연구 개요 — 연구실에서 제공한 과제 이미지' },
    links: {},
  },
  {
    id: 'child-care-crc', category: 'R&D Project', status: 'ongoing',
    title: 'Emotional & Intelligent Child Care',
    titleKo: '감성 지능형 아동케어시스템 융합연구센터',
    description: 'Emotional and Intelligent Child Care System Convergence Research Center',
    tags: ['Child Care', 'Convergence Research', 'CRC'],
    period: 'Mar. 2025 — Feb. 2030',
    funding: '과학기술정보통신부 · 한국연구재단(NRF)',
    programme: '글로벌 선도연구센터(CRC, Convergence Research Center)',
    grantNumber: 'RS-2023-00218176',
    acknowledgements: [
      'This work was supported by the National Research Foundation of Korea(NRF) grant funded by the Korea government(MSIT) (No. RS-2023-00218176).',
    ],
    preview: { type: 'image', src: '/images/projects/child-care-crc.png', alt: '감성 지능형 아동케어 CRC 연구 개요: 3D 생성 모델, 아동 선호도 조사, 모델 경량화 및 3D 콘텐츠' },
    links: {},
  },
];
