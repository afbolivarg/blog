import { sortWorkItems, type WorkItem } from 'app/work/work';

export const projectItems: WorkItem[] = [
  {
    name: 'Albuc',
    description:
      'Every time I finished a book the ideas faded. Building Albuc for myself: library + notes + ask your own highlights. Not commercial. Just putting it out free because I wish it existed. WIP.',
    url: 'https://albuc.com?ref=afbolivarg',
    sort: 1,
  },
  {
    name: 'Stay On',
    description:
      'Tiny macOS menu bar app that keeps the Mac awake while local AI agents run, including with the lid closed.',
    url: 'https://github.com/afbolivarg/StayOn',
    sort: 2,
  },
];

export function sortProjectItems(items: WorkItem[] = projectItems) {
  return sortWorkItems(items);
}
