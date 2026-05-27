import { sortWorkItems } from 'app/work/work';
import { WorkItemRow } from 'app/work/components/work-item-row';

export const metadata = {
  title: 'Work',
  description: 'Companies, products, and side projects.',
};

export default function WorkPage() {
  const items = sortWorkItems();

  return (
    <section>
      <h1 className="mb-2 text-2xl tracking-tighter">Work</h1>
      <p className="mb-8 text-neutral-600 dark:text-neutral-400">
        Things I&apos;ve built or been part of.
      </p>
      <ul className="space-y-8">
        {items.map((item) => (
          <WorkItemRow key={item.name} item={item} />
        ))}
      </ul>
    </section>
  );
}
