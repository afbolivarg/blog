export type Book = {
  slug: string;
  title: string;
  author: string;
  readAt: string;
  note?: string;
  writingSlug?: string;
};

export const books: Book[] = [
  {
    slug: 'historia-de-colombia-y-sus-oligarquias',
    title: 'Historia de Colombia y sus oligarquías',
    author: 'Antonio Caballero',
    readAt: '2024-08-16',
  },
  {
    slug: 'the-everything-store',
    title: 'The everything store',
    author: 'Brad Stone',
    readAt: '2024-11-17',
    writingSlug: 'the-everything-store',
  },
  {
    slug: 'rework',
    title: 'Rework',
    author: 'David Heinemeier Hansson, Jason Fried',
    readAt: '2025-01-04',
  },
  {
    slug: 'crimen-y-castigo',
    title: 'Crimen y castigo',
    author: 'Fiódor Dostoyevski',
    readAt: '2024-10-27',
  },
  {
    slug: 'cien-anos-de-soledad',
    title: 'Cien años de soledad',
    author: 'Gabriel García Márquez',
    readAt: '2024-08-16',
  },
  {
    slug: 'orgullo-y-prejuicio',
    title: 'Orgullo y prejuicio',
    author: 'Jane Austen',
    readAt: '2024-12-05',
  },
  {
    slug: 'colombia-una-historia-minima',
    title: 'Colombia: una historia mínima',
    author: 'Jorge Orlando Melo',
    readAt: '2025-02-15',
  },
  {
    slug: 'meditaciones',
    title: 'Meditaciones',
    author: 'Marco Aurelio',
    readAt: '2024-11-07',
    writingSlug: 'meditaciones',
  },
  {
    slug: 'henry-j-kaiser-builder-in-the-modern-american-west',
    title: 'Henry J. Kaiser: Builder in the Modern American West',
    author: 'Mark S. Foster',
    readAt: '2026-02-06',
  },
  {
    slug: 'astrophysics-for-people-in-a-hurry',
    title: 'Astrophysics for people in a hurry',
    author: 'Neil DeGrasse Tyson',
    readAt: '2024-10-27',
  },
  {
    slug: 'el-principe',
    title: 'El príncipe',
    author: 'Niccolò Machiavelli',
    readAt: '2024-08-16',
  },
  {
    slug: 'el-retrato-de-dorian-gray',
    title: 'El retrato de Dorian Gray',
    author: 'Oscar Wilde',
    readAt: '2024-12-19',
  },
  {
    slug: 'outlive',
    title: 'Outlive',
    author: 'Peter Attia',
    readAt: '2025-05-27',
    writingSlug: 'outlive',
  },
  {
    slug: 'zero-to-one',
    title: 'Zero to one',
    author: 'Peter Thiel',
    readAt: '2025-03-10',
  },
  {
    slug: 'shoe-dog',
    title: 'Shoe dog',
    author: 'Phil Knight',
    readAt: '2026-02-06',
  },
  {
    slug: 'dr-jekyll-and-mr-hyde',
    title: 'Dr. Jekyll and Mr. Hyde',
    author: 'Robert Louis Stevenson',
    readAt: '2026-02-06',
  },
  {
    slug: 'sam-walton-made-in-america',
    title: 'Sam Walton: Made in America',
    author: 'Sam Walton',
    readAt: '2026-02-06',
  },
  {
    slug: 'numbers-don-t-lie',
    title: "Numbers don't lie",
    author: 'Vaclav Smil',
    readAt: '2024-11-17',
  },
  {
    slug: 'el-hombre-en-busca-de-sentido',
    title: 'El hombre en busca de sentido',
    author: 'Viktor Frankl',
    readAt: '2024-08-16',
  },
  {
    slug: 'elon-musk',
    title: 'Elon Musk',
    author: 'Walter Isaacson',
    readAt: '2026-03-26',
  },
  {
    slug: 'leonardo-da-vinci',
    title: 'Leonardo da Vinci',
    author: 'Walter Isaacson',
    readAt: '2026-02-06',
    writingSlug: 'leonardo-da-vinci',
  },
  {
    slug: 'steve-jobs',
    title: 'Steve Jobs',
    author: 'Walter Isaacson',
    readAt: '2026-02-06',
  },
];

export function sortBooksByAuthor(bookList: Book[]) {
  return [...bookList].sort((a, b) =>
    a.author.localeCompare(b.author, undefined, { sensitivity: 'base' })
  );
}
