import Image from "next/image";
import Link from "next/link";

interface NavProps {
    title: string;
    size?: NavSize;
}

export enum NavSize {
    "sm",
    "lg",
    "xl",
}

export function Nav(props: NavProps) {
    const sizeMapping = [
        "max-w-2xl text-ellipsis duration-200",
        "max-w-4xl text-ellipsis duration-200",
        "max-w-4xl text-ellipsis duration-200 xl:max-w-[75rem]",
    ];

    return (
        <div className="navbar">
            <nav
                className={
                    "navbar-panel " + (sizeMapping[props.size ?? 4] ?? "")
                }
            >
                <Image
                    alt="View bloodnighttw's full-sized avatar"
                    src="https://avatars.githubusercontent.com/u/44264182?s=460&u=b59e580f37ab7e6a3979ab8a6df1f12ba6588069&v=4"
                    className="my-auto h-6 w-6 rounded-full"
                    width={24}
                    height={24}
                    loading="eager"
                />
                <Link href="/" className="hidden md:block">
                    <p>bloodnighttw</p>
                </Link>
                <p className="hidden md:block">|</p>
                <p className="truncate">{props.title}</p>
                <div className="mx-auto"></div>
                <p>123</p>
            </nav>
        </div>
    );
}
