import Image from "next/image";
import Link from "next/link";

const hello = "👋 hi! ";
const text1 = "I'm";
const text2 = "bloodnighttw";

export default function Home() {
    return (
        <div
            className="introduce"
        >
            <div className="introduce-card">
                <Image
                    alt="View bloodnighttw's full-sized avatar"
                    src="https://avatars.githubusercontent.com/u/44264182?s=460&u=b59e580f37ab7e6a3979ab8a6df1f12ba6588069&v=4"
                    className="introduce-image"
                    width={160}
                    height={160}
                    loading="eager"
                />

                <div className="introduce-text">
                    <p className="rwd-show">{hello + text1}</p>
                    <p className="rwd-hidden">{hello}</p>
                    <h1 className="rwd-hidden">{text1}</h1>
                    <h1>{text2}</h1>
                    <div className="introduce-links">
                        <Link href="/about">about</Link> /
                        <Link href="/projects">projects</Link> /
                        <Link href="/contact">contact</Link> /
                        <Link href="/blog">blog</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
