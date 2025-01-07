import type { MetadataRoute } from 'next'
import { getAllMetadata } from "@/utils/posts/metadata";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

    const staticPages:MetadataRoute.Sitemap = [
        {
            url: '/',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1.0,
        },
        {
            url: '/about',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: '/contact',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: '/blog',
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.9,
        }
    ]

    const allPosts = await getAllMetadata()

    const posts:MetadataRoute.Sitemap = allPosts.map((post) => ({
        url: `/blog/${post.path}`,
        lastModified: post.date,
        changeFrequency: 'daily',
        priority: 0.7,
    }))

    return [...staticPages, ...posts]

}