"use server";

import {postExists} from "@/utils/posts/content";
import {notFound} from "next/navigation";

interface BlogProps {
	slug: string;
}

export default async function Blog({params} :{ params:Promise<BlogProps> }) {

	const name = (await params).slug

	if(!await postExists(name)){
		return notFound();
	}

	return (
		<div>
			<h1>Blog</h1>
		</div>
	);
}