# Wonseop Shin — Research Portfolio

Astro + Tailwind CSS + TypeScript로 만든 반응형 정적 연구 포트폴리오입니다. white background, black typography, blue accent (#245bc4), neutral gray divider, Arial/Helvetica와 한국어 Malgun Gothic fallback을 사용합니다. 시스템 글꼴을 사용하며 SVG 일러스트는 로컬에서 제공하므로 외부 이미지 API가 필요하지 않습니다.

참고 사이트 https://bumsookim00.com/ 의 연구자 소개·논문 메타데이터라는 정보 구성만 참고했습니다. HTML/CSS와 레이아웃은 독자적으로 작성했습니다.

> 소개와 사진은 사용자 편집 내용이며, R&D 과제는 제공받은 연구실 정보입니다. 논문은 2026-10-06 GRLab 목록을 대조한 실제 논문 25개입니다. 확인 출처와 표기 차이는 [PUBLICATIONS_SOURCES.md](./PUBLICATIONS_SOURCES.md)에 기록했습니다. 뉴스·일부 이력에는 디자인 확인용 예시가 남아 있을 수 있으므로 공개 전 확인하세요.

## 로컬 실행

Node.js **22.12 이상** (Node 24 LTS 권장)과 npm을 설치한 뒤 이 디렉터리에서 실행합니다.

```bash
npm ci
npm run dev
```

브라우저에서 http://localhost:4321 을 엽니다.

```bash
npm run check    # Astro 및 TypeScript 진단
npm run build    # dist/에 정적 파일 생성
npm run preview  # 빌드 결과 미리보기
```

package-lock.json을 함께 커밋하세요. npm ci는 이 잠금 파일로 재현 가능한 설치를 수행합니다. npm install은 의존성을 의도적으로 변경할 때 사용합니다.

## 구조

```text
.github/workflows/deploy.yml
astro.config.mjs
package.json
package-lock.json
src/
  components/
    Header.astro
    Hero.astro
    ProfileGallery.astro
    MiniRoom.astro
    ResearchProject.astro
    PublicationItem.astro
    Publications.astro
    ResourceLink.astro
    SectionHeading.astro
    News.astro
    Experience.astro
    Footer.astro
  data/
    types.ts
    profile.ts
    projects.ts
    publications.ts
    news.ts
    experience.ts
  layouts/Layout.astro
  pages/
    index.astro         # Home
    research.astro      # /research/
    publications.astro  # /publications/ 전체 논문 목록
    news.astro          # /news/
    about.astro         # /about/
  styles/global.css
  utils/urls.ts
public/
  images/        # SVG, JPG, PNG, WebP, GIF
  videos/        # MP4, WebM
  cv/            # 실제 CV PDF 추가
  favicon.svg
```

## 내 정보와 링크 설정

`src/data/profile.ts`에서 소개와 연구 관심사, 링크를 수정합니다.

```ts
links: {
  scholar: 'https://scholar.google.com/citations?user=YOUR_ID',
  github: 'https://github.com/YOUR_USERNAME',
  cv: '/cv/Wonseop_Shin_CV.pdf',
  email: 'your-real-address@example.com', // mailto: 없이 이메일 주소만
},
```

CV 파일도 `public/cv/`에 추가하세요. 설정하지 않은 링크는 `undefined`로 두면 비활성 라벨로 표시됩니다. 외부 링크에는 새 탭과 `noopener noreferrer`가 적용됩니다.

## 논문 추가

홈에는 homePublicationIds에 지정한 논문 3편을 연도순으로 표시하고, View all publications 버튼으로 /publications/의 전체 목록을 볼 수 있습니다. Publications와 Research의 전체 목록은 **SCIE → Conference → KCI**, 각 분류 안에서는 최신 연도순으로 표시합니다. 같은 연도에서는 데이터 배열 순서를 유지합니다. `src/data/publications.ts`의 배열에 객체 하나를 추가하면 자동으로 해당 분류에 표시됩니다. `Wonseop Shin`과 `신원섭`은 저자 목록에서 자동 강조됩니다. 국제·국내 학술대회 및 워크숍은 Conference에 함께 넣습니다.

```ts
{
  id: 'unique-paper-id',
  category: 'SCIE', // 'SCIE' | 'Conference' | 'KCI'
  title: 'Your Actual Paper Title',
  authors: ['Wonseop Shin', 'Co-author'],
  venue: 'Your actual venue',
  year: 2026,
  thumbnail: '/images/your-paper.webp',
  thumbnailAlt: '논문의 주요 결과를 설명하는 대체 텍스트',
  links: {
    paper: 'https://your-paper-url',
    project: 'https://your-project-url',
    code: 'https://github.com/your-account/your-code',
    dataset: 'https://your-dataset-url',
  },
}
```

리소스 URL과 thumbnail/thumbnailAlt는 선택 사항입니다. URL이 있는 링크만 표시되며, 썸네일이 없으면 텍스트 행으로 표시합니다. `sourceUrl`을 넣고 paper URL이 없으면 Lab listing 링크가 표시됩니다. `award`는 수상 문구, `titleKo`는 한국어 보조 제목에 사용합니다. `placeholder: true`는 가상 예시에만 사용합니다.

전체 목록은 분류별로 접고 펼칠 수 있습니다. 처음에는 SCIE만 열리며, 분류 링크나 개별 논문 앵커로 이동하면 해당 분류가 자동으로 열립니다. 홈페이지의 세 논문은 항상 표시됩니다.

주요 논문을 파란 배경과 강조선으로 표시하려면 아래 선택 필드를 추가하세요. 분류나 venue 이름만으로 자동 강조하지 않으므로, 확인한 논문에만 지정할 수 있습니다. `label`은 배지, `sourceUrl`은 근거 링크, `note`는 배지에 마우스를 올렸을 때의 설명입니다.

```ts
highlight: {
  label: 'Top 34%',
  sourceUrl: 'https://grlab.cau.ac.kr/?page_id=42',
  note: 'Journal rank as reported by GRLab; metric year and subject category unspecified.',
},
```

현재 저널 세 편과 WACV 본 학회 논문을 강조했습니다. 저널은 연구실 기재 Top 50% 이내를 기준으로 선택했으며, 최신 JCR Q1/Q2 등급을 확정한 표시는 아닙니다. 구체적인 근거와 그림 출처는 PUBLICATIONS_SOURCES.md를 참고하세요. 글씨 크기와 강조색은 `src/styles/global.css`의 `.publication-title`, `.authors`, `.publication-featured`, `.publication-highlight-label`에서 수정합니다.

## 프로젝트 / 이미지 / GIF / 비디오

`src/data/projects.ts`의 배열 순서대로 표시되며 홀수·짝수에 따라 좌우 배치가 바뀝니다. 모바일에서는 항상 비주얼 다음에 설명이 나옵니다. 카테고리도 데이터의 문자열로 관리합니다.

```ts
{
  id: 'my-project',
  category: 'Human Motion & Avatar',
  title: 'Project headline.\nSecond line.',
  description: 'A concise explanation of the problem and contribution.',
  tags: ['Motion Generation', '3D Human'],
  preview: {
    type: 'image',
    src: '/images/my-preview.gif',
    alt: '프로젝트 시각 결과 설명',
  },
  links: { paper: 'https://...', project: 'https://...', code: 'https://...' },
}
```

비디오를 쓰려면 `public/videos/demo.mp4`와 포스터 이미지를 추가하고 preview만 바꿉니다.

```ts
preview: {
  type: 'video',
  src: '/videos/demo.mp4',
  poster: '/images/demo-poster.webp',
  alt: 'Context-conditioned motion generation demonstration',
},
```

`<video controls muted loop playsinline preload="none">`으로 렌더링합니다. 사용자가 재생하며 자동 재생은 하지 않습니다. MP4(H.264)를 권장합니다. 비디오는 브라우저 기본 재생·일시정지·음량 컨트롤을 사용할 수 있습니다. 시스템 reduced motion 설정이 켜지면 실행 중인 영상도 정지합니다. GIF는 img로 지원하므로 움직임을 정지해야 하는 콘텐츠에는 video나 정적 이미지가 더 적합합니다.

대표 비주얼 권장 비율은 10:7이며 `object-fit: cover`가 적용됩니다. 썸네일도 같은 원본을 재사용할 수 있습니다. 대체 텍스트를 반드시 작성하세요. 제공된 SVG는 직접 만든 예시 일러스트이며 실제 연구 결과가 아닙니다.

## 뉴스 / 이력

- `src/data/news.ts`: `date: 'YYYY-MM-DD'`, `text`, 선택 `url`. 최신 날짜부터 자동 정렬합니다.
- `src/data/experience.ts`: `education`, `experience` 배열의 기간·직함·기관·설명 수정. 배열 순서를 유지합니다.
- 실제 데이터에는 `placeholder` 필드를 제거합니다.
- 소개 문구는 `src/data/profile.ts`에서 수정합니다.

## 디자인과 접근성

색상·폰트는 `src/styles/global.css`의 `@theme`에 모여 있습니다. desktop max-width는 1160px, 모바일과 태블릿에 별도 레이아웃을 적용합니다. Home은 소개와 선택한 논문 3편, View all publications 버튼, Research는 큰 연구 비주얼과 연도별 논문 목록, News는 업데이트, About은 이력과 학력으로 분리되어 있습니다. Header/Footer는 공통 Layout에서 렌더링됩니다. 각 페이지는 고유한 title, description, canonical URL을 가집니다.

키보드 포커스, skip link, 의미론적 section/article/nav, 이미지 alt, 연도별 제목, reduced motion을 지원합니다. JavaScript가 꺼져도 모든 정보가 표시됩니다. JavaScript가 가능할 때만 IntersectionObserver로 작은 fade-in을 적용합니다. 브라우저 내 smooth scroll과 비주얼 hover scale을 사용합니다. 다크 모드는 없습니다.

## GitHub Pages 배포 — 공통 단계

1. GitHub에 **public repository**를 만듭니다. 무료 GitHub Pages를 사용하려면 공개 저장소를 사용하세요.
2. **이 폴더의 내용 자체를 저장소 루트로** 올립니다. `outputs/wonseop-portfolio/`라는 중첩 경로로 올리지 마세요. `.github/`와 `package-lock.json`도 포함해야 합니다.
3. 기본 브랜치를 `main`으로 설정합니다. 다른 브랜치를 쓰면 workflow의 `branches: [main]`을 바꿉니다.
4. GitHub 저장소 **Settings → Pages → Build and deployment → Source → GitHub Actions**를 선택합니다.
5. `main`에 push하거나 **Actions → Deploy portfolio to GitHub Pages → Run workflow**를 실행합니다.
6. Actions가 성공하면 Pages 또는 deployment environment에서 배포 주소를 확인합니다.

```bash
git init
git add .
git commit -m "Create research portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
git push -u origin main
```

workflow는 Node 22로 `npm ci → npm run check → npm run build`를 실행하고 `dist/`를 Pages artifact로 업로드한 뒤 배포합니다. `contents: read`, `pages: write`, `id-token: write` 권한을 사용하며 별도의 토큰 secret은 필요 없습니다. 조직 저장소에서는 조직의 Actions/Pages 허용 정책을 확인하세요.

### A. repository 이름이 username.github.io인 경우

예: 계정 `yourname`, 저장소 `yourname.github.io`

- 주소: `https://yourname.github.io/`
- `site`: `https://yourname.github.io`
- `base`: `/`

workflow에서 `GITHUB_REPOSITORY=yourname/yourname.github.io`가 전달되어 **자동으로 이 설정을 적용**합니다. config를 수정할 필요가 없습니다.

### B. 일반 repository인 경우

예: 계정 `yourname`, 저장소 `research-portfolio`

- 주소: `https://yourname.github.io/research-portfolio/`
- `site`: `https://yourname.github.io`
- `base`: `/research-portfolio/`

`GITHUB_REPOSITORY=yourname/research-portfolio`에서 이름을 읽어 **자동으로 base를 적용**합니다. 이미지, 영상, favicon, 로컬 CV와 기타 리소스 링크는 `assetUrl()`이 `BASE_URL`을 붙입니다. 데이터에는 `/images/...`, `/videos/...`, `/cv/...`처럼 저장소 이름 없이 작성하세요. Astro는 CSS/JS/폰트 경로에도 base를 적용합니다. 메뉴는 `/research/`, `/news/`, `/about/`로 이동하며 모두 base를 적용합니다. Home, Research, Publications의 논문 목록은 동일한 Publications 컴포넌트와 publications.ts 데이터를 사용합니다.

### GitHub 설정을 로컬에서 재현하기

macOS / Linux:

```bash
GITHUB_REPOSITORY=yourname/research-portfolio npm run build
npm run preview
# http://localhost:4321/research-portfolio/
```

PowerShell:

```powershell
$env:GITHUB_REPOSITORY = 'yourname/research-portfolio'
npm run build
npm run preview
# 검증 후 환경변수 해제
Remove-Item Env:GITHUB_REPOSITORY
```

로컬에서 환경변수가 없으면 `/`로 실행합니다. 로컬 `site` fallback은 `http://localhost:4321`이며 실제 배포에서는 GitHub 소유자 주소를 사용합니다.

### 선택: 수동 site/base 또는 커스텀 도메인

`astro.config.mjs`는 `SITE_URL`, `BASE_PATH` 환경변수로 자동 설정을 덮어쓸 수 있습니다. GitHub **Settings → Secrets and variables → Actions → Variables**에 repository variables를 추가하면 workflow가 전달합니다.

```text
SITE_URL = https://your-custom-domain.example
BASE_PATH = /
```

커스텀 도메인을 쓰는 경우 GitHub Pages의 Custom domain/DNS 설정도 필요합니다. 미설정 또는 빈 변수는 자동 설정을 사용합니다. SITE_URL에는 도메인 origin을, BASE_PATH에는 `/` 또는 `/repo/`를 넣으세요.

### 자주 만나는 문제

- **이미지 404**: 파일명 대소문자 확인. GitHub의 Linux runner는 대소문자를 구분합니다. 데이터 경로와 실제 파일명이 같아야 합니다.
- **흰 페이지 / CSS 404**: 일반 repo에 base가 `/`로 덮어쓰여 있는지 확인합니다. BASE_PATH 변수를 제거해 자동 설정을 사용하세요.
- **workflow 실행 안 됨**: `.github/workflows/deploy.yml`이 저장소 루트에 있는지, 브랜치가 `main`인지 확인합니다.
- **Pages deployment 거부**: Source가 GitHub Actions인지, github-pages environment가 main 배포를 허용하는지 확인합니다.
- **check 실패**: Actions 로그의 파일과 줄 번호를 확인합니다. types.ts의 형식에 맞게 데이터를 작성하세요.

공식 문서: [Astro / GitHub Pages](https://docs.astro.build/en/guides/deploy/github/), [Tailwind / Astro](https://tailwindcss.com/docs/installation/framework-guides/astro).

## 공개 전 교체 항목

- Google Scholar, GitHub, email, 실제 CV
- 모든 예시 논문과 프로젝트의 내용·저자·venue·링크
- 예시 뉴스와 이력
- 실제 결과 이미지·GIF·영상, 대체 텍스트

이 결과물에는 GitHub 원격 저장소 생성이나 실제 배포가 포함되어 있지 않습니다. 배포 가능한 코드와 workflow를 제공하며, 원격 저장소에 올리면 자동 배포가 시작됩니다.


## 프로필 사진과 5초 슬라이드쇼

홈 소개 오른쪽에 프로필 사진 영역이 있습니다. 모바일에서는 소개 아래에 표시됩니다.
사진 파일을 `public/images/profile/` 폴더에 넣고 `src/data/profile.ts`의 photos 배열을 수정하세요.

```ts
photos: [
  { src: '/images/profile/portrait.jpg', alt: 'Wonseop Shin portrait' },
  { src: '/images/profile/conference.jpg', alt: 'Wonseop Shin at a conference', position: '50% 30%' },
  { src: '/images/profile/lab.jpg', alt: 'Wonseop Shin in the lab' },
] as ProfilePhoto[],
photoIntervalMs: 5000,
```

사진이 없으면 빈 프로필 자리, 한 장이면 정적 사진, 두 장 이상이면 5초마다 부드럽게 교체됩니다.
사진 비율은 4:5이며 position으로 얼굴이 잘리는 위치를 조절할 수 있습니다.
이전/다음, 일시정지/재생 버튼을 제공합니다. 탭을 숨기면 타이머를 멈추고 돌아오면 재개합니다.
시스템의 reduced motion 설정에서는 자동 재생을 시작하지 않습니다. JavaScript 없이도 첫 사진은 표시됩니다.
실제 프로필 사진은 아직 포함되지 않았습니다.


## 은은한 미니홈피 디자인

흰 배경과 파란 포인트를 유지하면서 프로필의 점선 프레임, 작은 메뉴 탭, 픽셀 댄서 미니룸을 사용합니다. 미니룸은 직접 작성한 SVG/CSS 장식이며 실제 연구 결과 이미지나 개인 아바타가 아닙니다. Pause/Play로 애니메이션을 멈출 수 있고 reduced motion을 지원합니다. 소개에는 사용자가 언급한 컴퓨터 그래픽스, 춤 생성, 픽셀 연구 관심사를 반영했습니다. 구체적인 논문 실적과 연구실 이름은 예시 데이터에서 실제 정보로 교체하세요.

픽셀 캐릭터는 `src/components/MiniRoom.astro`에 있습니다. 사용자 프로필 사진의 검은 머리와 안경을 참고한 연구자 캐릭터로, 남색 재킷과 크림색 셔츠, 노란 신발을 입습니다. 미니룸은 포켓몬 게임의 밝은 팔레트를 참고했습니다. `poses` 배열의 네 프레임과 `src/styles/global.css`의 `pixel-dance` 애니메이션으로 춤춥니다. 캐릭터 색상은 SVG의 `fill` 값, 미니룸 크기는 SVG `viewBox`와 `.mini-room svg`에서 조절합니다. 모바일에서는 프로필 사진 아래에 놓여 충분한 크기로 표시됩니다.


## 연구실 R&D 과제

Research 페이지의 projects.ts에는 사용자가 제공한 OmniTwin, 피지컬 AI 로보틱 디스플레이, 아동케어 CRC 과제를 등록했습니다. titleKo, period, funding, programme, grantNumber, acknowledgements, status 필드로 과제 정보를 관리합니다. 종료일 기준 2026년 10월 현재 모두 ongoing입니다. 종료 과제는 status를 finished로 수정하세요. 개인의 참여 역할은 별도로 명시하지 않았습니다.

OmniTwin과 Physical AI 이미지 출처는 사용자가 제공한 GRLab 웹사이트입니다. 로컬 public/images/projects/에 저장했습니다. CRC는 사용자가 첨부한 연구 개요 그림을 public/images/projects/child-care-crc.png에 저장하여 표시합니다. 사사 문구는 Acknowledgement를 펼쳐 볼 수 있습니다. 영문 과제명과 사사 문구는 제공받은 내용을 사용했습니다.


홈의 논문 선택은 src/data/publications.ts 끝의 homePublicationIds 배열에서 관리합니다. 현재 L-DANCE, BoXFire, WACV 2025 논문을 표시합니다. 전체 Publications 및 Research 목록은 publications 배열의 논문을 모두 표시합니다.
