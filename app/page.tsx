import Image from "next/image";

export default function Home() {
  return (
      <>
          <div className="flex items-center justify-center align-middle py-16 min-h-screen">
              <div className="flex flex-col text-white sm:flex-row-reverse gap-x-16 gap-y-4">
                  <div className="flex justify-center">
                      <Image
                          alt="View bloodnighttw's full-sized avatar"
                          src="https://avatars.githubusercontent.com/u/44264182?s=460&u=b59e580f37ab7e6a3979ab8a6df1f12ba6588069&v=4"
                          className="items-center rounded-full w-28 h-28 sm:w-40 sm:h-40"
                          width={160}
                          height={160}
                      />
                  </div>

                  <div className="h-auto flex flex-col">
                      <p className="text-center text-xl sm:hidden block sm:text-start">{"👋 hi! I'm"}</p>
                      <p className="text-center text-xl hidden sm:block sm:text-start">👋 hi!</p>
                      <h1 className="text-center text-5xl hidden sm:block sm:text-start">
                          {"I'm"}
                      </h1>
                      <h1 className="text-center text-5xl sm:text-start">
                          bloodnighttw
                      </h1>
                      <div
                          className="justify-center sm:justify-start sm:text-start mt-2 sm:mt-auto flex flex-row gap-2">
                          <a href="#about">about</a> /
                          <a href="#project">projects</a> /
                          <a href="#contact">contact</a> /
                          <a href="/blog">blog</a>
                      </div>
                  </div>
              </div>
          </div>
          <div className="bg-stone-800 min-h-screen" id="about">

          </div>
          <div className="bg-stone-900 min-h-screen" id="project">

          </div>
          <div className="bg-stone-800 min-h-screen" id="contact">

          </div>
      </>
  );
}
