"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import useBack from "@/utils/back";

interface NavProps {
    title: string;
}

export function Nav(props: NavProps) {
    "use client";

    const { canGoBack, back } = useBack();

    return (
        <nav className="nav">
            {canGoBack && (
                <div className="back" onClick={back}>
                    back
                </div>
            )}
            <Image
                alt="View bloodnighttw's full-sized avatar"
                src="https://avatars.githubusercontent.com/u/44264182?s=460&u=b59e580f37ab7e6a3979ab8a6df1f12ba6588069&v=4"
                className="my-auto h-6 w-6 rounded-full"
                width={24}
                height={24}
                loading="eager"
            />
            <p>bloodnighttw</p>
            <p>|</p>
            <p>{props.title}</p>
            <div className="mx-auto"></div>
            <p></p>
        </nav>
    );
}
