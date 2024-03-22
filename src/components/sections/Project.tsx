import ProjectCard, { ProjectCardProps } from "../cards/ProjectCard";
import Header from "../common/Header";

interface ProjectProps {
    projects: ProjectCardProps[];
}

function Project({ projects }: ProjectProps) {
    return (
        <div className="flex flex-col gap-y-2 px-1.5">
            <Header classNames="p-1.5">Projects</Header>
            {projects.map((project, index) => {
                return <ProjectCard key={index} project={project} />;
            })}
        </div>
    );
}

export default Project;
