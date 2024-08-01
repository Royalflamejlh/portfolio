import { getProjectPosts } from 'app/projects/utils'

export const baseUrl = 'https://johnlhoward.me'

export default async function sitemap() {
  let projects = getProjectPosts().map((post) => ({
    url: `${baseUrl}/projects/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }))

  let routes = ['', '/projects'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...projects]
}
