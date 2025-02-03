import path from "node:path";
import fs from "node:fs";
import markdown2ast from "@/utils/posts/md2mdast";
import { yamlParse } from "@/utils/posts/mdast2metadata";

export interface ProjectMetadata {
    name: string;
    description: string;
    url: string;
    tags: string[] | null;
}

export async function getProjects(): Promise<ProjectMetadata[]> {
    const folder = path.join(process.cwd(), "projects");
    const files = await fs.promises.readdir(folder);
    const i = files
        .filter((file) => file.endsWith(".md"))
        .map(async (file) => {
            const ast = await markdown2ast(`projects/${file}`);
            return yamlParse<ProjectMetadata>(ast)!;
        });

    return Promise.all(i);
}
