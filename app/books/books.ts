export type Book = {
  slug: string;
  title: string;
  author: string;
  note?: string;
  writingSlug?: string;
};

export const books: Book[] = [
  {
    slug: 'historia-de-colombia-y-sus-oligarquias',
    title: 'Historia de Colombia y sus oligarquías',
    author: 'Antonio Caballero',
  },
  {
    slug: 'the-everything-store',
    title: 'The everything store',
    author: 'Brad Stone',
    writingSlug: 'the-everything-store',
  },
  {
    slug: 'rework',
    title: 'Rework',
    author: 'David Heinemeier Hansson, Jason Fried',
  },
  {
    slug: 'crimen-y-castigo',
    title: 'Crimen y castigo',
    author: 'Fiódor Dostoyevski',
  },
  {
    slug: 'cien-anos-de-soledad',
    title: 'Cien años de soledad',
    author: 'Gabriel García Márquez',
  },
  {
    slug: 'orgullo-y-prejuicio',
    title: 'Orgullo y prejuicio',
    author: 'Jane Austen',
  },
  {
    slug: 'colombia-una-historia-minima',
    title: 'Colombia: una historia mínima',
    author: 'Jorge Orlando Melo',
  },
  {
    slug: 'meditaciones',
    title: 'Meditaciones',
    author: 'Marco Aurelio',
    writingSlug: 'meditaciones',
  },
  {
    slug: 'henry-j-kaiser-builder-in-the-modern-american-west',
    title: 'Henry J. Kaiser: Builder in the Modern American West',
    author: 'Mark S. Foster',
  },
  {
    slug: 'astrophysics-for-people-in-a-hurry',
    title: 'Astrophysics for people in a hurry',
    author: 'Neil DeGrasse Tyson',
  },
  {
    slug: 'el-principe',
    title: 'El príncipe',
    author: 'Niccolò Machiavelli',
  },
  {
    slug: 'el-retrato-de-dorian-gray',
    title: 'El retrato de Dorian Gray',
    author: 'Oscar Wilde',
  },
  {
    slug: 'outlive',
    title: 'Outlive',
    author: 'Peter Attia',
    writingSlug: 'outlive',
  },
  {
    slug: 'zero-to-one',
    title: 'Zero to one',
    author: 'Peter Thiel',
  },
  {
    slug: 'shoe-dog',
    title: 'Shoe dog',
    author: 'Phil Knight',
  },
  {
    slug: 'dr-jekyll-and-mr-hyde',
    title: 'Dr. Jekyll and Mr. Hyde',
    author: 'Robert Louis Stevenson',
  },
  {
    slug: 'sam-walton-made-in-america',
    title: 'Sam Walton: Made in America',
    author: 'Sam Walton',
  },
  {
    slug: 'numbers-don-t-lie',
    title: "Numbers don't lie",
    author: 'Vaclav Smil',
  },
  {
    slug: 'el-hombre-en-busca-de-sentido',
    title: 'El hombre en busca de sentido',
    author: 'Viktor Frankl',
  },
  {
    slug: 'elon-musk',
    title: 'Elon Musk',
    author: 'Walter Isaacson',
  },
  {
    slug: 'leonardo-da-vinci',
    title: 'Leonardo da Vinci',
    author: 'Walter Isaacson',
    writingSlug: 'leonardo-da-vinci',
  },
  {
    slug: 'steve-jobs',
    title: 'Steve Jobs',
    author: 'Walter Isaacson',
  },
];

export function sortBooksByAuthor(bookList: Book[]) {
  return [...bookList].sort((a, b) =>
    a.author.localeCompare(b.author, undefined, { sensitivity: 'base' })
  );
}
