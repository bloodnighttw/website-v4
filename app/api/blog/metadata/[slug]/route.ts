import { getAllSlugs, getMetadataBySlug } from "@/utils/blog";

export async function generateStaticParams() {
    const slugs = await getAllSlugs();
    return slugs.map((it) => {
        return {
            slug: it,
        };
    });
}

export const dynamicParams = false;

export async function GET(
    _request: Request,
    { params }: { params: Promise<{ slug: string }> },
) {
    const slug = (await params).slug;
    const metadata = await getMetadataBySlug(slug);
    return Response.json(metadata);
}
