import { getProjects } from "@/utils/project";
import { NavLG } from "@/utils/nav";

export default async function Projects() {
    const projects = await getProjects();

    return (
        <>
            <NavLG title="projects">
                {projects.map((project) => (
                    <a href={project.url} key={project.name}>
                        <div
                            className="mx-auto h-24 w-full rounded-sm border border-stone-700 p-4 duration-200 hover:bg-stone-800 sm:hover:scale-105"
                            key={project.name}
                        >
                            <h1 className="line-clamp-1 text-2xl">
                                {project.name}
                            </h1>
                            <p className="text-stone-300">
                                {project.description}
                            </p>
                        </div>
                        <br />
                    </a>
                ))}
            </NavLG>
        </>
    );
}
