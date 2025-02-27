import path from "node:path";
import { PluggableList, unified } from "unified";
import remark2rehype from "remark-rehype";
import remarkParse from "remark-parse";
import rehypeStringify from "rehype-stringify";
import fs from "node:fs";
import { Root as HastRoot } from "hast";
import { Root as MDRoot } from "mdast";
import frontmatter from "remark-frontmatter";
import { select } from "unist-util-select";
import yaml from "yaml";

interface ContentOptions {
    root: string;
    matchRegex?: RegExp | "markdown";
    createSlug?: (from: string) => string;
    metadata?: object;

    mkBlogPlugins?: () => void;
    remarkPlugins?: PluggableList;
    rehypePlugins?: PluggableList;
}

interface PostFetchResult {
    hast: HastRoot;
    mdast: MDRoot;
}

interface YAMLNode {
    type: "yaml";
    value: string;
}

// TODO: Metadata checker
class Content {
    readonly filepath: string;
    readonly slug: string;
    private readonly remarkPlugins: PluggableList;
    private readonly rehypePlugins: PluggableList;

    constructor(
        filepath: string,
        slug: string,
        remarkPlugins: PluggableList,
        rehypePlugins: PluggableList,
    ) {
        this.filepath = filepath;
        this.slug = slug;
        this.remarkPlugins = remarkPlugins;
        this.rehypePlugins = rehypePlugins;
    }

    protected remarkProcessor() {
        return unified()
            .use(remarkParse)
            .use(frontmatter) // for metadata decode
            .use(this.remarkPlugins);
    }

    protected rehypeProcessor() {
        return unified().use(remark2rehype).use(this.rehypePlugins);
    }

    protected rehype2html() {
        return unified().use(rehypeStringify);
    }

    /**
     * @protected to fetch the markdown and html ast, used internal.
     */

    protected async mdast(): Promise<MDRoot> {
        const fileContent = await fs.promises.readFile(this.filepath, "utf-8");
        return this.remarkProcessor().parse(fileContent);
    }

    protected async hast(mdroot: MDRoot | null = null): Promise<HastRoot> {
        if (!mdroot) {
            mdroot = await this.mdast();
        }

        return await this.rehypeProcessor().run(mdroot);
    }

    /**
     *
     * @param root the hast root, if it's null, we will fetch hast automatically
     * @protected this method should be called internally
     * @Return return raw html string of content.
     */
    protected async html(root: HastRoot | null = null) {
        if (!root) {
            root = await this.hast();
        }

        return this.rehype2html().stringify(root);
    }

    public async metadata(mdast: MDRoot | null = null) {
        if (!mdast) mdast = await this.mdast();

        const yamlContent = select("yaml", mdast) as YAMLNode;

        if (yamlContent) {
            const metadata = yaml.parse(yamlContent.value);

            return metadata;
        }

        throw new Error("metadata not found");
    }
}

interface Collection {
    posts: Content[];
}

const markdownRegex = /\.md$/;

async function defineContent(options: ContentOptions): Promise<Collection> {
    const base = path.join(process.cwd(), options.root);
    const changeRegex =
        options.matchRegex === undefined || options.matchRegex === "markdown"
            ? markdownRegex
            : options.matchRegex;

    const rootFolder = await fs.promises.readdir(base);
    const files = rootFolder.filter((file) => changeRegex.test(file));

    const posts: Content[] = [];

    for (const file of files) {
        const filepath = path.join(base, file);
        const slug =
            options.createSlug?.(file) ?? file.replace(changeRegex, "");
        posts.push(
            new Content(
                filepath,
                slug,
                options.remarkPlugins ?? [],
                options.rehypePlugins ?? [],
            ),
        );
    }

    return { posts };
}

export type { ContentOptions, Collection };

export { defineContent, Content };
