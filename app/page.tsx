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
		>
			<div className="flex items-center justify-center align-middle py-16 min-h-screen">
				<div className="flex flex-col text-white sm:flex-row-reverse gap-x-16 gap-y-4">
					<div className="flex justify-center">
						<Image
							alt="View bloodnighttw's full-sized avatar"
							src="https://avatars.githubusercontent.com/u/44264182?s=460&u=b59e580f37ab7e6a3979ab8a6df1f12ba6588069&v=4"
							className="items-center rounded-full w-28 h-28 sm:w-40 sm:h-40"
							width={160}
							height={160}
							loading="eager"
						/>
					</div>

					<div className="introduce-text">
						<p className="rwd-show">{"👋 hi! I'm"}</p>
						<p className="rwd-hidden">👋 hi!</p>
						<h1 className="rwd-hidden">
							{"I'm"}
						</h1>
						<h1 className="">
							bloodnighttw
						</h1>
						<div
							className="justify-center sm:justify-start sm:text-start mt-2 sm:mt-auto flex flex-row gap-2">
							<Link href="/about">about</Link> /
							<Link href="/projects">projects</Link> /
							<Link href="/contact">contact</Link> /
							<Link href="/blog">blog</Link>
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	);
}
