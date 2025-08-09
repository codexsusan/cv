import Link from "../../assets/icons/link";
import Bullet from "../common/Bullet";
import Button from "../common/Button";
import Description from "../common/Description";
import SubHeader from "../common/SubHeader";

export interface ProjectCardProps {
  title: string;
  description: string;
  date: string;
  stack: string[];
  links: {
    name: string;
    link: string;
  }[];
}

function ProjectCard({ project }: { project: ProjectCardProps }) {
  return (
    <div className="flex flex-col space-y-2 sm:space-y-3 border border-slate-300/40 p-3 sm:p-4 rounded-md hover:bg-gray-50 hover:border-gray-300">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-y-1 sm:gap-y-0">
        <SubHeader>{project.title}</SubHeader>
        <p className="text-xs sm:text-sm tabular-nums tracking-wider">{project.date}</p>
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center gap-y-2 sm:gap-y-0">
        <Description>{project.description}</Description>
        <div className="flex flex-col gap-1.5 sm:gap-2 justify-end">
          {project.links.map((data, index) => {
            return (
              <Button key={index}>
                <div className="flex items-center gap-x-1 sm:gap-x-2">
                  <Link />
                  <a
                    href={data.link}
                    target="_blank"
                    className="text-sm sm:text-base no-underline"
                  >
                    {data.name}
                  </a>
                </div>
              </Button>
            );
          })}
        </div>
      </div>
      <div className="flex justify-center gap-1.5 sm:gap-2 flex-wrap">
        {project.stack.map((skill, index) => {
          return <Bullet key={index}>{skill}</Bullet>;
        })}
      </div>
    </div>
  );
}

export default ProjectCard;
