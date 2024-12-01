"use client";

import Image from "next/image";
import {motion} from "motion/react";
import Link from "next/link";

export default function Home() {
	return (
		<motion.div
			initial={{opacity: 0.01}}
			animate={{opacity: 1}}
			exit={{opacity: 0.01}}
			className="introduce-content"
		>

			<Image
				alt="View bloodnighttw's full-sized avatar"
				src="https://avatars.githubusercontent.com/u/44264182?s=460&u=b59e580f37ab7e6a3979ab8a6df1f12ba6588069&v=4"
				className="items-center rounded-full w-28 h-28 sm:w-40 sm:h-40"
				width={160}
				height={160}
				loading="eager"
			/>

			<div className="introduce-text">
				<p className="rwd-show">{"👋 hi! I'm"}</p>
				<p className="rwd-hidden">👋 hi!</p>
				<h1 className="rwd-hidden">
					{"I'm"}
				</h1>
				<h1>
					bloodnighttw
				</h1>
				<div
					className="introduce-links">
					<Link href="/about">about</Link> /
					<Link href="/projects">projects</Link> /
					<Link href="/contact">contact</Link> /
					<Link href="/blog">blog</Link>
				</div>
			</div>

		</motion.div>
	);
}
