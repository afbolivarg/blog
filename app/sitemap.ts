import { getWritingPosts } from 'app/writing/utils';

export const baseUrl = 'https://afbolivarg.com';

export default async function sitemap() {
  let writing = getWritingPosts().map((post) => ({
    url: `${baseUrl}/writing/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  let routes = ['', '/work', '/writing', '/books'].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date().toISOString().split('T')[0],
    }),
  );

  return [...routes, ...writing];
}
