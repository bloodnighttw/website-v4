import { NavLgWarp } from "@/utils/warp/navwarp";

export default async function Projects() {
    const nav = await NavLgWarp({ title: "projects" });

    return <div>{nav}</div>;
}
