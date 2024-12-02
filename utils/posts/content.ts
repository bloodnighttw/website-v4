import fs from "node:fs";
import path from "node:path";

export async function postExists(postName: string) {
	return fs.promises.access(path.join(process.cwd(), "posts", `${postName}.mdx`), fs.constants.F_OK)
		.then(() => true)
		.catch(() => false);
}
