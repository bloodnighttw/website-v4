import Image from "next/image";
import { Nav } from "@/app/nav";

interface ContactInformation {
    name: string;
    link: string;
    image: string;
    id?: string;
    whiteBackground?: boolean;
}

const Contacts: ContactInformation[] = [
    {
        name: "Email",
        link: "mailto:bbeenn1227@gmail.com",
        image: "https://r2.bntw.dev/email.png",
        id: "bbeenn1227@gmail.com",
    },
    {
        name: "Telegram",
        link: "https://t.me/bntw0123",
        image: "https://r2.bntw.dev/telegram.webp",
        id: "@bntw0123",
    },
    {
        name: "Discord",
        link: "https://discord.com/users/406274365857202196",
        image: "https://r2.bntw.dev/discord.png",
        id: "@bloodnighttw",
        whiteBackground: true,
    },
    {
        name: "Threads",
        link: "https://www.threads.net/@bloodnighttw",
        image: "https://r2.bntw.dev/threads.png",
        id: "@bloodnighttw",
    },
    {
        name: "twitter",
        link: "https://twitter.com/bloodnighttw",
        image: "https://r2.bntw.dev/twitter_ouo.png",
        id: "@bloodnighttw",
    },
    {
        name: "GitHub",
        link: "https://github.com/bloodnighttw",
        image: "https://r2.bntw.dev/github_ouo.png",
        id: "bloodnighttw",
    },
];

export default function Contact() {
    return (
        <div className="mx-auto max-w-2xl">
            <div className="override-nav">
                <div className="mx-auto max-w-2xl">
                    <Nav title={"blog"} />
                </div>
            </div>
            <div className="contact">
                {Contacts.map((info) => (
                    <a
                        href={info.link}
                        key={info.link}
                        className="contact-card"
                    >
                        <Image
                            src={info.image}
                            alt={info.name}
                            className={`my-auto h-8 w-8 rounded ${info.whiteBackground ? "bg-white" : ""}`}
                            width="32"
                            height="32"
                        />
                        <div className="name">{info.name}</div>
                        <div className="id">{info.id ?? ""}</div>
                    </a>
                ))}
            </div>
        </div>
    );
}
