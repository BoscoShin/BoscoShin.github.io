export interface ProfilePhoto { src: string; alt: string; position?: string }

export const profile = {
  name: 'Wonseop Shin',
  role: 'Ph.D. Student @ Chung-Ang University',
  introduction: 'Hello Everyone!!! I am Wonseop Shin, a Ph.D. student at GRLab, Chung-Ang University, advised by Professor Sanghyun Seo. My research lies at the intersection of music, dance, generative models, and computer graphics. Outside the lab, I pursue turntablism and occasionally DJ at various events and venues.',
  description: 'I am a Ph.D. student at GRLab, Chung-Ang University, advised by Professor Sanghyun Seo. My research focuses on the intersection of music, dance, generative models, and computer graphics, with particular interests in human motion generation, multimodal learning, and visual content generation. I am interested in exploring how generative AI can connect different modalities and create expressive visual and motion-based experiences.',
  interests: [
  'Computer Graphics',
  'Generative AI',
  'Multimodal Learning',
  'Human Motion Generation',
  'Music & Dance Generation',
  'Virtual Environments'
],
  // Add your own files under public/images/profile/ and list them here.
photos: [
  { src: '/images/profile/image1.jpg', alt: 'Wonseop Shin portrait' },
  { src: '/images/profile/image2.jpg', alt: 'Wonseop Shin at a conference' },
  { src: '/images/profile/image3.jpg', alt: 'Wonseop Shin at a conference' },
  { src: '/images/profile/image4.jpg', alt: 'Wonseop Shin at a conference' },
  { src: '/images/profile/image5.jpg', alt: 'Wonseop Shin at a conference' },
  { src: '/images/profile/image6.jpg', alt: 'Wonseop Shin at a conference' },
  { src: '/images/profile/image7.jpg', alt: 'Wonseop Shin at a conference' },
  { src: '/images/profile/image8.jpg', alt: 'Wonseop Shin at a conference' },

] as ProfilePhoto[],
photoIntervalMs: 5000,
links: {
  scholar: 'https://scholar.google.com/citations?user=gVAxCO0AAAAJ&hl=en',
  email: 'wonseop218@cau.ac.kr',
},
};

