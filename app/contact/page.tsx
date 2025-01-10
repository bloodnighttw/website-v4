import Image from "next/image";

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
        id: "bbeenn1227@gmail.com"
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
    }
]

export default function Contact() {
    return (
        <div className="mt-[10%] p-2">
            <div className="mx-auto w-full max-w-2xl text-center">
                <h1 className="text-4xl p-2">Contact</h1>
                {
                    Contacts.map((info) => (
                        <a
                            href={info.link}
                            key={info.link}
                            className="p-4 m-4 rounded border border-stone-700 hover:bg-stone-800 duration-200 mx-auto sm:hover:scale-105 grid grid-cols-3">
                            <Image src={info.image} alt={info.name}
                                   className={`my-auto rounded h-8 w-8 ${info.whiteBackground ? "bg-white" : ""}`}
                                   width="32" height="32" />
                            <div className="justify-center m-auto text-xl">{info.name}</div>
                            <div className="text-right my-auto text-stone-400 hidden md:block text-sm">{info.id ?? ""}</div>
                        </a>
                    ))
                }
            </div>
        </div>
    );
}
