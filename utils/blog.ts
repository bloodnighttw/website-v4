// This defined the metadata field in the markdown file
import { Root } from "mdast";
import {
    generateSummary,
    generateThumbnail,
    yamlParse,
} from "@/utils/posts/mdast2metadata";
import fs from "node:fs";
import path from "node:path";
import markdown2ast from "@/utils/posts/md2mdast";

export interface BaseMetadata {
    title: string;
    date: Date;
    category: string[];
}

// This defined the metadata field in the metadata object, which is used in the app
export interface Metadata extends BaseMetadata {
    summery: string;
    previewImage: string | null;
}

export interface MetadataWithSlug extends Metadata {
    slug: string;
}

export async function getAllSlugs() {
    const folder = path.join(process.cwd(), "posts");
    const files = await fs.promises.readdir(folder);
    return files
        .filter((file) => file.endsWith(".md"))
        .map((file) => file.replace(/\.md$/, ""));
}

export async function getMDASTBySlug(slug: string) {
    return await markdown2ast(`posts/${slug}.md`);
}

export function getMetadata(ast: Root): Metadata {
    const reviver = (key: string, value: never) => {
        if (key === "date") {
            return new Date(value);
        }
        return value;
    };

    const metadata = yamlParse<BaseMetadata>(ast, reviver)!;
    const summary = generateSummary(ast);
    const thumbnail = generateThumbnail(ast);

    return {
        ...metadata,
        summery: summary,
        previewImage: thumbnail,
    };
}

export async function getMetadataBySlug(slug: string) {
    const ast = await getMDASTBySlug(slug);
    return getMetadata(ast);
}

export async function getMetadatasWithSlug(): Promise<MetadataWithSlug[]> {
    const slugs = await getAllSlugs();
    return await Promise.all(
        slugs.map(async (slug) => {
            return {
                slug,
                ...(await getMetadataBySlug(slug)),
            };
        }),
    );
}
