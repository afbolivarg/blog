import { WritingPosts } from 'app/components/posts';

export const metadata = {
  title: 'Writing',
  description: 'Essays, notes, and things I write.',
};

export default function Page() {
  return (
    <section>
      <h1 className="text-2xl mb-8 tracking-tighter">Writing</h1>
      <WritingPosts />
    </section>
  );
}
