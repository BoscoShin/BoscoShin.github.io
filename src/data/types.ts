export interface ResourceLinks { paper?: string; project?: string; code?: string; dataset?: string }
export type Preview = { type: 'image'; src: string; alt: string } | { type: 'video'; src: string; poster: string; alt: string };
export interface ResearchProject {
  id: string; category: string; title: string; description: string; tags: string[];
  preview?: Preview; links: ResourceLinks; placeholder?: boolean;
  titleKo?: string; status?: 'ongoing' | 'finished'; period?: string;
  funding?: string; programme?: string; grantNumber?: string; acknowledgements?: string[];
}
export type PublicationCategory = 'SCIE' | 'Conference' | 'KCI';
export interface Publication {
  id: string; title: string; authors: string[]; venue: string; year: number;
  category: PublicationCategory; titleKo?: string; award?: string;
  highlight?: { label: string; sourceUrl: string; note: string };
  thumbnail?: string; thumbnailAlt?: string; links: ResourceLinks; placeholder?: boolean;
  sourceUrl?: string;
}
export interface NewsEntry { date: string; text: string; url?: string; placeholder?: boolean }
export interface ExperienceEntry { period: string; title: string; institution: string; description: string; placeholder?: boolean }
