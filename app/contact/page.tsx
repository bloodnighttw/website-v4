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
        <div className="p-2 mx-auto">
            <div className="mx-auto w-full max-w-2xl text-center">
                <Nav title={"contact"} />

                {Contacts.map((info) => (
                    <a
                        href={info.link}
                        key={info.link}
                        className="m-4 mx-auto grid grid-cols-3 rounded border border-stone-700 p-4 duration-200 hover:bg-stone-800 sm:hover:scale-105"
                    >
                        <Image
                            src={info.image}
                            alt={info.name}
                            className={`my-auto h-8 w-8 rounded ${info.whiteBackground ? "bg-white" : ""}`}
                            width="32"
                            height="32"
                        />
                        <div className="m-auto justify-center text-xl">
                            {info.name}
                        </div>
                        <div className="my-auto hidden text-right text-sm text-stone-400 md:block">
                            {info.id ?? ""}
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}
