export interface CommunityServiceEntry {
  year: number;
  role: string;
  venues: string[];
}

export const communityService: CommunityServiceEntry[] = [
  {
    year: 2025,
    role: 'Reviewer',
    venues: ['WACV 2026'],
  },
  {
    year: 2026,
    role: 'Reviewer',
    venues: ['ECCV 2026', 'ICASSP 2027', 'NeurIPS 2026 Evaluations and Datasets Track'],
  },
];
