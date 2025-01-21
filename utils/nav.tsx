"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

const variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
};

const jump = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-command"
        viewBox="0 0 16 16"
    >
        <path d="M3.5 2A1.5 1.5 0 0 1 5 3.5V5H3.5a1.5 1.5 0 1 1 0-3M6 5V3.5A2.5 2.5 0 1 0 3.5 6H5v4H3.5A2.5 2.5 0 1 0 6 12.5V11h4v1.5a2.5 2.5 0 1 0 2.5-2.5H11V6h1.5A2.5 2.5 0 1 0 10 3.5V5zm4 1v4H6V6zm1-1V3.5A1.5 1.5 0 1 1 12.5 5zm0 6h1.5a1.5 1.5 0 1 1-1.5 1.5zm-6 0v1.5A1.5 1.5 0 1 1 3.5 11z" />
    </svg>
);

export interface NavProps {
    title: string;
    size?: NavSize;
    contents?: string[];
}

enum NavSize {
    "sm",
    "lg",
    "xl",
}

export function Nav(props: NavProps) {
    const sizeMapping = [
        "max-w-2xl text-ellipsis duration-200",
        "max-w-4xl text-ellipsis duration-200",
        "max-w-[57rem] text-ellipsis duration-200 xl:max-w-[75rem]",
    ];

    const [dropdown, setDropdown] = useState(false);
    const dropdownRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            // console.log(props.contents);
            if (
                !(
                    dropdownRef.current &&
                    dropdownRef.current.contains(event.target as Node)
                )
            ) {
                setDropdown(false);
            }
        }

        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    });

    return (
        <>
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
                    <Link href="/" className="my-auto hidden md:block">
                        <p>bloodnighttw</p>
                    </Link>
                    <p className="hidden md:block">|</p>
                    <p className="truncate">{props.title}</p>
                    <div className="mx-auto"></div>
                    <div
                        className="jump"
                        onClick={() => setDropdown(!dropdown)}
                    >
                        {jump}
                    </div>
                </nav>
            </div>

            {dropdown && (
                <div className="menu-bg">
                    <motion.div
                        ref={dropdownRef}
                        className="menu"
                        variants={variants}
                        initial="hidden"
                        animate="show"
                    >
                        <div className="m-auto flex gap-x-2">
                            <div className="my-auto">{jump}</div>
                            <span className="my-auto">GOTO</span>
                        </div>
                        <hr />
                        <Link href="/">
                            <div className="dropdown-item">Home</div>
                        </Link>
                        <Link href="/blog">
                            <div className="dropdown-item">Blog</div>
                        </Link>
                        <Link href="/projects">
                            <div className="dropdown-item">Projects</div>
                        </Link>
                        <Link href="/contact">
                            <div className="dropdown-item">Contact</div>
                        </Link>
                        <Link href="/about">
                            <div className="dropdown-item">About</div>
                        </Link>
                    </motion.div>
                    <p className="text-center text-stone-500">
                        press any place to close
                    </p>
                </div>
            )}
        </>
    );
}

export function NavLG(props: NavProps) {
    return <Nav size={NavSize.lg} {...props} />;
}

export function NavXL(props: NavProps) {
    return <Nav size={NavSize.xl} {...props} />;
}

export function NavMD(props: NavProps) {
    return <Nav size={NavSize.sm} {...props} />;
}
