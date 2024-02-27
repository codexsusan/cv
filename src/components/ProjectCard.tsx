import Link from "../assets/icons/link";
import Bullet from "./Bullet";
import Button from "./Button";
import Description from "./Description";
import SubHeader from "./SubHeader";

interface ProjectCardProps {
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
    <div className="lex flex-col space-y-3 border border-slate-300/40 p-2 rounded-md hover:bg-gray-50 hover:border-gray-300">
      <div className="flex justify-between items-center">
        <SubHeader>{project.title}</SubHeader>
        <p className="text-sm tabular-nums tracking-wider">{project.date}</p>
      </div>
      <div className="flex items-center">
        <Description>{project.description}</Description>
        <div className="flex flex-col gap-2 justify-end">
          {project.links.map((data, index) => {
            return (
              <Button key={index}>
                <div className="flex items-center gap-x-2">
                  <Link />
                  <a
                    href={data.link}
                    target="_blank"
                    className="text-base no-underline"
                  >
                    {data.name}
                  </a>
                </div>
              </Button>
            );
          })}
        </div>
      </div>
      <div className="flex gap-2 flex-wrap">
        {project.stack.map((skill, index) => {
          return <Bullet key={index}>{skill}</Bullet>;
        })}
      </div>
    </div>
  );
}

// function LinkHandler() {
//   return (
//     <div className="flex flex-col gap-2 justify-end">
//       <Button>
//         <div className="flex items-center gap-x-2">
//           <Link />
//           <p className="text-base">Github</p>
//         </div>
//       </Button>
//       <Button>
//         <div className="flex items-center gap-x-2">
//           <Link />
//           <p className="text-base">Live</p>
//         </div>
//       </Button>
//     </div>
//   );
// }

export default ProjectCard;
