import type { Publication, PublicationCategory } from './types';

// Audited against GRLab on 2026-10-06. See PUBLICATIONS_SOURCES.md.
export const publicationCategories: readonly PublicationCategory[] = ["SCIE","Conference","KCI"];

export const publications: Publication[] = [
  {
    "id": "l-dance",
    "title": "L-DANCE: LLM-guided Motion Intensity Aware Natural Dance Generation",
    "authors": [
      "Wonseop Shin",
      "Yonghoon Jung",
      "Mi Young Lee",
      "Sanghyun Seo"
    ],
    "venue": "The Visual Computer · CGI 2026",
    "year": 2026,
    "thumbnail": "/images/publications/Ldance.png",
    "thumbnailAlt": "L-DANCE music-driven dance generation",
    "links": {
      "paper": "https://doi.org/10.1007/s00371-026-04706-5",
      "project": "https://l-dance.netlify.app/"
    },
    "category": "SCIE",
    "sourceUrl": "https://grlab.cau.ac.kr/?page_id=42",
    "highlight": {
      "label": "Top 34%",
      "sourceUrl": "https://grlab.cau.ac.kr/?page_id=42",
      "note": "Journal rank as reported by GRLab. Metric year and subject category are not specified in the lab listing."
    }
  },
  {
    "id": "boxfire",
    "title": "BoXFire: Geometry-Aware Box-Supervised Fusion for Accurate Fire and Smoke Segmentation",
    "authors": [
      "Muhammad Ayaz",
      "Sareer Ul Amin",
      "Salman Khan",
      "Yonghoon Jung",
      "Wonseop Shin",
      "Mi Young Lee",
      "Sanghyun Seo"
    ],
    "venue": "Advanced Engineering Informatics",
    "year": 2026,
    "thumbnail": "/images/publications/boxfire.png",
    "thumbnailAlt": "BoXFire fire and smoke segmentation",
    "links": {
      "paper": "https://doi.org/10.1016/j.aei.2026.104671"
    },
    "category": "SCIE",
    "sourceUrl": "https://grlab.cau.ac.kr/?page_id=42",
    "highlight": {
      "label": "Top 2.5%",
      "sourceUrl": "https://grlab.cau.ac.kr/?page_id=42",
      "note": "Journal rank as reported by GRLab. Metric year and subject category are not specified in the lab listing."
    }
  },
  {
    "id": "pear-synthetic-data",
    "title": "Synthetic Data Generation for Pear Black Spot Detection Using 3D Rendering and Vision-Language Model-based Editing",
    "authors": [
      "Wonseop Shin",
      "Jeongmin Won",
      "Dongmin Shin",
      "Sanghyun Seo"
    ],
    "venue": "Journal of Digital Contents Society",
    "year": 2025,
    "thumbnail": "/images/publications/Pear.png",
    "thumbnailAlt": "Synthetic data generation for pear disease detection",
    "links": {
      "paper": "https://doi.org/10.9728/dcs.2025.26.12.3559"
    },
    "category": "KCI",
    "sourceUrl": "https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART003279337"
  },
  {
    "id": "vlm-cartoon-hallucination",
    "title": "Make VLM Recognize Visual Hallucination on Cartoon Character Image with Pose Information",
    "authors": [
      "Bumsoo Kim*",
      "Wonseop Shin*",
      "Kyuchul Lee",
      "Yonghoon Jung",
      "Sanghyun Seo"
    ],
    "venue": "IEEE/CVF Winter Conference on Applications of Computer Vision (WACV)",
    "year": 2025,
    "thumbnail": "/images/publications/WACV.png",
    "thumbnailAlt": "Pose-aware visual hallucination detection for cartoon characters",
    "links": {
      "paper": "https://openaccess.thecvf.com/content/WACV2025/html/Kim_Make_VLM_Recognize_Visual_Hallucination_on_Cartoon_Character_Image_with_WACV_2025_paper.html",
      "project": "https://bumsookim00.com/Cartoon-Hallucinations-Detection/",
      "code": "https://github.com/gh-BumsooKim/Cartoon-Hallucinations-Detection",
      "dataset": "https://huggingface.co/datasets/Wseop/PA-ICVL-DataSet"
    },
    "category": "Conference",
    "sourceUrl": "https://grlab.cau.ac.kr/?page_id=42",
    "highlight": {
      "label": "WACV 2025",
      "sourceUrl": "https://openaccess.thecvf.com/WACV2025?day=all",
      "note": "Main conference paper at IEEE/CVF WACV 2025."
    }
  },
  {
    "id": "multifloodsynth",
    "title": "MultiFloodSynth: Multi-Annotated Flood Synthetic Dataset Generation",
    "authors": [
      "YoonJe Kang*",
      "Yonghoon Jung*",
      "Wonseop Shin*",
      "Bumsoo Kim*",
      "Sanghyun Seo"
    ],
    "venue": "AAAI 2025 Good-Data Workshop · Oral",
    "year": 2025,
    "thumbnail": "/images/publications/Flood.png",
    "thumbnailAlt": "MultiFloodSynth synthetic flood dataset",
    "links": {
      "paper": "https://arxiv.org/abs/2502.03966"
    },
    "category": "Conference",
    "sourceUrl": "https://grlab.cau.ac.kr/?page_id=42"
  },
  {
    "id": "multimodal-emotion",
    "title": "A Multi-Modal Emotion Recognition Model Incorporating Arousal and Valence with Incomplete Data",
    "authors": [
      "Yudam Shin",
      "Wonseop Shin",
      "Sanghyun Seo"
    ],
    "venue": "The Journal of Society for e-Business Studies",
    "year": 2025,
    "thumbnail": "/images/publications/emotion.png",
    "thumbnailAlt": "Multimodal emotion recognition",
    "links": {
      "paper": "https://doi.org/10.7838/jsebs.2025.30.2.001"
    },
    "category": "KCI",
    "sourceUrl": "https://grlab.cau.ac.kr/?page_id=42"
  },
  {
    "id": "patchified-adain",
    "title": "Explicitly Color-Inspired Neural Style Transfer Using Patchified AdaIN",
    "authors": [
      "Bumsoo Kim",
      "Wonseop Shin",
      "Yonghoon Jung",
      "Youngsup Park",
      "Sanghyun Seo"
    ],
    "venue": "Computer Modeling in Engineering & Sciences",
    "year": 2024,
    "thumbnail": "/images/publications/CMES.png",
    "thumbnailAlt": "Patchified AdaIN neural style transfer",
    "links": {
      "paper": "https://doi.org/10.32604/cmes.2024.056079"
    },
    "category": "SCIE",
    "sourceUrl": "https://grlab.cau.ac.kr/?page_id=42",
    "highlight": {
      "label": "Top 33.2%",
      "sourceUrl": "https://grlab.cau.ac.kr/?page_id=42",
      "note": "Journal rank as reported by GRLab. Metric year and subject category are not specified in the lab listing."
    }
  },
  {
    "id": "digital-twin",
    "title": "Generating 3D Digital Twins of Real Indoor Spaces based on Real-World Point Cloud Data",
    "authors": [
      "Wonseop Shin",
      "Jaeseok Yoo",
      "Bumsoo Kim",
      "Yonghoon Jung",
      "Muhammad Sajjad",
      "Youngsup Park",
      "Sanghyun Seo"
    ],
    "venue": "KSII Transactions on Internet and Information Systems",
    "year": 2024,
    "thumbnail": "/images/publications/KSII2.png",
    "thumbnailAlt": "3D digital twin reconstruction from real-world point cloud data",
    "links": {
      "paper": "https://doi.org/10.3837/tiis.2024.08.018"
    },
    "category": "SCIE",
    "sourceUrl": "https://grlab.cau.ac.kr/?page_id=42"
  },
  {
    "id": "minecraft-ify",
    "title": "Minecraft-ify: Minecraft Style Image Generation with Text-guided Image Editing for In-Game Application",
    "authors": [
      "Bumsoo Kim",
      "Sanghyun Byun",
      "Yonghoon Jung",
      "Wonseop Shin",
      "Sareer Ul Amin",
      "Sanghyun Seo"
    ],
    "venue": "NeurIPS 2023 ML4CD Workshop · Spotlight",
    "year": 2023,
    "thumbnail": "/images/publications/Mine.png",
    "thumbnailAlt": "Minecraft-style image generation and editing",
    "links": {
      "paper": "https://arxiv.org/abs/2402.05448",
      "project": "https://gh-bumsookim.github.io/Minecraft-ify/"
    },
    "category": "Conference",
    "sourceUrl": "https://grlab.cau.ac.kr/?page_id=42"
  },
  {
    "id": "parameterized-cartoon-mesh",
    "category": "SCIE",
    "year": 2023,
    "title": "Transfer Learning based Parameterized 3D Mesh Deformation with 2D Stylized Cartoon Character",
    "authors": [
      "Sanghyun Byun",
      "Bumsoo Kim",
      "Wonseop Shin",
      "Yonghoon Jung",
      "Sanghyun Seo"
    ],
    "venue": "KSII Transactions on Internet and Information Systems",
    "thumbnail": "/images/publications/KSII1.png",
    "thumbnailAlt": "Parameterized 3D mesh deformation from stylized cartoon characters",
    "links": {
      "paper": "https://doi.org/10.3837/tiis.2023.11.012"
    },
    "sourceUrl": "https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART003020715"
  },
  {
    "id": "excavation-terrain-sync",
    "category": "KCI",
    "year": 2026,
    "title": "A Physical-Virtual Terrain Synchronization System for Quantitative Evaluation of Excavation Simulation",
    "titleKo": "굴착 시뮬레이션의 정량적 평가를 위한 물리–가상 지형 동기화 시스템",
    "authors": [
      "Sejun Yoon",
      "Suhwan Lee",
      "Yonghoon Jung",
      "Wonseop Shin",
      "Sanghyun Seo"
    ],
    "venue": "Journal of Digital Contents Society",
    "links": {
      "paper": "https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART003382918"
    },
    "sourceUrl": "https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART003382918"
  },
  {
    "id": "indoor-cultural-facility-safety",
    "category": "KCI",
    "year": 2023,
    "title": "Deep Learning-based Approach for Visitor Detection and Path Tracking to Enhance Safety in Indoor Cultural Facilities",
    "titleKo": "실내 문화시설 안전을 위한 딥러닝 기반 방문객 검출 및 동선 추적에 관한 연구",
    "authors": [
      "Wonseop Shin",
      "Seungmin Rho"
    ],
    "venue": "Journal of Platform Technology",
    "links": {
      "paper": "https://doi.org/10.23023/JPT.2023.11.4.003"
    },
    "sourceUrl": "https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART002993279",
    "thumbnail": "/images/publications/indoor-cultural-facility-safety.png",
    "thumbnailAlt": "Visitor detection and tracking pipeline, Figure 1 of the JPT 2023 paper"
  },
  {
    "id": "deca-east-asian-faces",
    "category": "Conference",
    "year": 2026,
    "title": "Characterizing Reconstruction Bias in DECA for East Asian Faces",
    "authors": [
      "M. Kim",
      "Wonseop Shin",
      "Sanghyun Seo"
    ],
    "venue": "PlatCon 2026",
    "award": "Best Paper Award",
    "links": {},
    "sourceUrl": "https://grlab.cau.ac.kr/?page_id=42"
  },
  {
    "id": "agent-procedural-synthetic-data",
    "category": "Conference",
    "year": 2026,
    "title": "An Agent-Based Procedural Pipeline for Controllable Synthetic Data Generation",
    "authors": [
      "Y. Kang",
      "G. Kim",
      "Wonseop Shin",
      "Sanghyun Seo"
    ],
    "venue": "PlatCon 2026",
    "links": {},
    "sourceUrl": "https://grlab.cau.ac.kr/?page_id=42"
  },
  {
    "id": "dictprompt",
    "category": "Conference",
    "year": 2026,
    "title": "DictPrompt: Dictionary Structured Prompting for Text to Image Generation",
    "authors": [
      "Wonseop Shin",
      "Sanghyun Seo"
    ],
    "venue": "MITA 2026",
    "award": "Best Paper Award",
    "links": {},
    "sourceUrl": "https://grlab.cau.ac.kr/?page_id=42"
  },
  {
    "id": "construction-safety-synthetic-data",
    "category": "Conference",
    "year": 2025,
    "title": "Synthetic Data for Construction Safety Monitoring",
    "authors": [
      "Yonghoon Jung",
      "Wonseop Shin",
      "Bumsoo Kim",
      "Sanghyun Seo"
    ],
    "venue": "PlatCon 2025",
    "links": {},
    "sourceUrl": "https://grlab.cau.ac.kr/?page_id=42"
  },
  {
    "id": "pear-scab-platcon",
    "category": "Conference",
    "year": 2025,
    "title": "VLM and 3D Rendering based Synthetic Data for ScabDisease Detection in Pears",
    "authors": [
      "Wonseop Shin",
      "D. Shin",
      "J. Won",
      "Sanghyun Seo"
    ],
    "venue": "PlatCon 2025",
    "links": {},
    "sourceUrl": "https://grlab.cau.ac.kr/?page_id=42"
  },
  {
    "id": "child-friendly-3d-objects",
    "category": "Conference",
    "year": 2025,
    "title": "Text-Guided Generation of Child-Friendly 3D Objects for Virtual Environments",
    "authors": [
      "G. Kim",
      "Yonghoon Jung",
      "Wonseop Shin",
      "Sanghyun Seo"
    ],
    "venue": "MASP 2025",
    "award": "Best Paper Award",
    "links": {},
    "sourceUrl": "https://grlab.cau.ac.kr/?page_id=42"
  },
  {
    "id": "tangible-interaction-game",
    "category": "Conference",
    "year": 2025,
    "title": "Development of a Tangible Interaction-Based Game Bridging the Physical and Digital Worlds",
    "authors": [
      "J. Ryu",
      "J. Choi",
      "S. Lim",
      "H. Lee",
      "Wonseop Shin",
      "Yonghoon Jung",
      "Sanghyun Seo"
    ],
    "venue": "MASP 2025",
    "links": {},
    "sourceUrl": "https://grlab.cau.ac.kr/?page_id=42"
  },
  {
    "id": "metaverse-avatar-pose",
    "category": "Conference",
    "year": 2025,
    "title": "딥러닝을 통한 메타버스 내 아바타 포즈 추정",
    "authors": [
      "신원섭",
      "서상현"
    ],
    "venue": "한국멀티미디어학회 추계학술대회 2025",
    "award": "Best Paper Award",
    "links": {},
    "sourceUrl": "https://grlab.cau.ac.kr/?page_id=42"
  },
  {
    "id": "few-shot-gaussian-splatting-views",
    "category": "Conference",
    "year": 2025,
    "title": "퓨-샷 가우시안 스플래팅 학습 뷰 탐색",
    "authors": [
      "김범수",
      "신원섭",
      "신유담",
      "서상현"
    ],
    "venue": "스마트미디어&전자거래학회 춘계학술대회 2025",
    "links": {},
    "sourceUrl": "https://grlab.cau.ac.kr/?page_id=42"
  },
  {
    "id": "metaverse-abuse-training-data",
    "category": "Conference",
    "year": 2024,
    "title": "Research On Building Training Datasets For Detecting Abusing Behavior In the Metaverse",
    "authors": [
      "Y. Cho",
      "Wonseop Shin",
      "Sanghyun Seo"
    ],
    "venue": "PlatCon 2024",
    "award": "Best Paper Award",
    "links": {},
    "sourceUrl": "https://grlab.cau.ac.kr/?page_id=42"
  },
  {
    "id": "rgbd-indoor-object-inpainting",
    "category": "Conference",
    "year": 2023,
    "title": "Deep Learning-Based Indoor Object Detection and Area Inpainting from RGB-D Camera",
    "authors": [
      "Wonseop Shin",
      "Jaeseok Yoo",
      "Sanghyun Byun",
      "Sanghyun Seo"
    ],
    "venue": "ICONI 2023",
    "links": {},
    "sourceUrl": "https://grlab.cau.ac.kr/?page_id=42"
  },
  {
    "id": "rendering-visitor-detection",
    "category": "Conference",
    "year": 2023,
    "title": "Visitor Detection in Indoor Facility Using Rendering Based Synthetic Data",
    "authors": [
      "Wonseop Shin",
      "Yonghoon Jung",
      "Sanghyun Byun",
      "Sanghyun Seo"
    ],
    "venue": "PlatCon 2023",
    "links": {},
    "sourceUrl": "https://grlab.cau.ac.kr/?page_id=42"
  },
  {
    "id": "pine-wilt-synthetic-detection",
    "category": "Conference",
    "year": 2023,
    "title": "Pine Wilt Disease Detection using Synthetic Data and Object Detection Techniques",
    "authors": [
      "Yonghoon Jung",
      "Wonseop Shin",
      "Sanghyun Seo"
    ],
    "venue": "APIC-IST 2023",
    "links": {
      "paper": "https://apicist.org/media?key=site%2Fapicist2023%2FProceedings_of_APIC-IST_2023.pdf#page=125"
    },
    "sourceUrl": "https://grlab.cau.ac.kr/?page_id=42",
    "thumbnail": "/images/publications/pine-wilt-synthetic-detection.png",
    "thumbnailAlt": "Pine wilt disease detection on aerial forest imagery, from the APIC-IST 2023 paper"
  }
];

// Homepage selections remain independent of category grouping and highlights.
export const homePublicationIds = ["l-dance","boxfire","vlm-cartoon-hallucination"];
