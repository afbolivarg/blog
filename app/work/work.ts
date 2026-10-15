export type WorkItem = {
  name: string;
  description?: string;
  url?: string;
  role?: string;
  year?: string;
  sort?: number;
};

export const workItems: WorkItem[] = [
  {
    name: 'Alquilo',
    description:
      'Property management company building the most efficient rental platform in LATAM.',
    url: 'https://alquilo.co?ref=afbolivarg',
    role: 'Co-founder',
    year: '2026–present',
    sort: 1,
  },
  {
    name: 'Become Digital',
    description:
      'Led R&D on the founding team. ML for ID fraud detection across LATAM and Become KYB for enterprise business validation.',
    role: 'Founding team',
    year: '2021–2026',
    sort: 2,
  },
];

export function sortWorkItems(items: WorkItem[] = workItems) {
  return [...items].sort((a, b) => (a.sort ?? 99) - (b.sort ?? 99));
}
