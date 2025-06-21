import ProjectCard, { ProjectCardProps } from "../cards/ProjectCard";
import Header from "../common/Header";
import user from "../../user-data.json";

function Project() {
    return (
        <div className="flex flex-col gap-y-2 px-1 sm:px-1.5">
            <Header classNames="p-1 sm:p-1.5">Projects</Header>
            {user.projects.map((project: ProjectCardProps, index) => {
                return <ProjectCard key={index} project={project} />;
            })}
        </div>
    );
}

export default Project;
