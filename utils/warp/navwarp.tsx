import { NavLG, NavMD, NavProps, NavXL } from "@/utils/nav";
import { getAllMetadata } from "@/utils/blog";

export async function NavLgWarp(props: NavProps) {
    const metadata = await getAllMetadata();
    const titles = metadata.map((post) => post.summery);

    return <NavLG title={props.title} contents={titles} />;
}

export async function NavMdWarp(props: NavProps) {
    const metadata = await getAllMetadata();
    const titles = metadata.map((post) => post.summery);

    return <NavMD title={props.title} contents={titles} />;
}

export async function NavXLWarp(props: NavProps) {
    const metadata = await getAllMetadata();
    const titles = metadata.map((post) => post.summery);

    return <NavXL title={props.title} contents={titles} />;
}
