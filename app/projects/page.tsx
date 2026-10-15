import { sortProjectItems } from 'app/projects/projects';
import { WorkItemRow } from 'app/work/components/work-item-row';

export const metadata = {
  title: 'Projects',
  description: 'Side projects.',
};

export default function ProjectsPage() {
  const items = sortProjectItems();

  return (
    <section>
      <h1 className="mb-2 text-2xl tracking-tighter">Projects</h1>
      <p className="mb-8 text-neutral-600 dark:text-neutral-400">
        Things I&apos;m building on the side.
      </p>
      <ul className="space-y-8">
        {items.map((item) => (
          <WorkItemRow key={item.name} item={item} />
        ))}
      </ul>
    </section>
  );
}
