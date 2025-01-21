import { NavLG, NavMD, NavProps, NavXL } from "@/utils/nav";

export async function NavLgWarp(props: NavProps) {
    return <NavLG title={props.title} />;
}

export async function NavMdWarp(props: NavProps) {
    return <NavMD title={props.title} />;
}

export async function NavXLWarp(props: NavProps) {
    return <NavXL title={props.title} />;
}
