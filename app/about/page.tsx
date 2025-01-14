import Link from "next/link";

export default function About() {
    return (
        <div className="about">
            <p>
                {"Hi! I'm "}
                <strong>bloodnighttw</strong>
                {"."}
            </p>
            <section>
                <p>{"I'm a software developer from Taiwan."}</p>
                <p>
                    {"I develop website using "}
                    <strong className="text-cyan-400">react.js</strong>
                    {" & "}
                    <strong className="text-blue-400">typescript</strong>
                    {", and I really enjoying it."}
                </p>
                <p>
                    {"I using "}
                    <strong className="text-sky-400">python</strong>
                    {" to develop some script."}
                </p>
                <p>
                    {"I'm familiar with "}
                    <strong className="text-orange-400">Java</strong>
                    {" & "}
                    <strong className="text-purple-400">Kotlin</strong>
                    {", and I develop some side project with it"}
                </p>
                <p className="my-2">
                    {"Want to take a look my side project? see "}
                    <Link href="/projects" className="text-red-400">
                        <strong>HERE</strong>
                    </Link>
                </p>
            </section>

            <section>
                <p>
                    {"I'm also a "}
                    <strong className="text-yellow-400">linux</strong>
                    {" enthusiast."}
                </p>
                <p>
                    {"Currently, I'm using NixOS on my PC to develop"}
                    {" software, including this website and my other site project."}
                </p>
                <p>
                    {"I'll post some thought on my social media or my blog, you can take a look at "}
                    <Link href="/contact">contact</Link>
                    {" or "}
                    <Link href="/blog">blog</Link>
                    {"."}
                </p>
            </section>
        </div>
    );
}
