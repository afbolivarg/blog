import Link from 'next/link';
import { books, sortBooksByAuthor } from 'app/books/books';

export const metadata = {
  title: 'Books',
  description: 'Books I have read, with notes and links to related writing.',
};

export default function BooksPage() {
  const sortedBooks = sortBooksByAuthor(books);

  return (
    <section>
      <h1 className="text-2xl mb-2 tracking-tighter">Books</h1>
      <p className="mb-8 text-neutral-600 dark:text-neutral-400">
        No particular order. Just alphabetical. Books I&apos;ve really liked
        and recommend.
      </p>
      <ul className="space-y-8">
        {sortedBooks.map((book) => (
          <li key={book.slug}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <p className="text-neutral-900 dark:text-neutral-100">
                {book.title}
                <span className="text-neutral-600 dark:text-neutral-400">
                  {' '}
                  — {book.author}
                </span>
              </p>
              {book.writingSlug ? (
                <Link
                  href={`/writing/${book.writingSlug}`}
                  className="text-sm text-neutral-600 dark:text-neutral-400 underline underline-offset-2 decoration-neutral-400 dark:decoration-neutral-600 hover:text-neutral-900 dark:hover:text-neutral-100"
                >
                  notes
                </Link>
              ) : null}
            </div>
            {book.note ? (
              <p className="mt-1 text-sm text-neutral-700 dark:text-neutral-300">
                {book.note}
              </p>
            ) : null}
          </li>
        ))}
      </ul>
    </section>
  );
}
