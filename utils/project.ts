import path from "node:path";
import fs from "node:fs";

export interface ProjectMetadata {
    name: string;
    description: string;
    url: string;
    tags: string[];
}

export async function getProjects(): Promise<ProjectMetadata[]> {
    const folder = path.join(process.cwd(), "projects");
    const files = await fs.promises.readdir(folder);
    const i = files
        .filter((file) => file.endsWith(".md"))
        .map(async (file) => {
            const content = await fs.promises.readFile(
                path.join(folder, file),
                "utf8",
            );
            return JSON.parse(content) as ProjectMetadata;
        });

    return Promise.all(i);
}
