import type { WorkItem } from 'app/work/work';

export function WorkItemRow({ item }: { item: WorkItem }) {
  return (
    <li>
      <p className="text-neutral-900 dark:text-neutral-100">
        {item.url ? (
          <a
            href={item.url}
            className="underline decoration-neutral-400 dark:decoration-neutral-600 underline-offset-2 hover:text-neutral-600 dark:hover:text-neutral-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.name}
          </a>
        ) : (
          item.name
        )}
        {item.role ? (
          <span className="text-neutral-600 dark:text-neutral-400">
            {' '}
            — {item.role}
          </span>
        ) : null}
        {item.year ? (
          <span className="text-neutral-500 dark:text-neutral-500">
            {' '}
            ({item.year})
          </span>
        ) : null}
      </p>
      <p className="mt-1 text-sm text-neutral-700 dark:text-neutral-300">
        {item.description}
      </p>
    </li>
  );
}
