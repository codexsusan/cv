import Link from "../../assets/icons/link";
import Bullet from "../common/Bullet";
import Button from "../common/Button";
import List from "../common/List";
import SubHeader from "../common/SubHeader";

export interface ExperienceCardProps {
  role: string;
  company: string;
  link: string;
  location: string;
  date: string;
  type: string;
  description: string;
  tasks: string[];
  stack: string[];
}

function ExperienceCard({ experience }: { experience: ExperienceCardProps }) {
  return (
    <div className="flex flex-col border border-slate-300/40 p-3 sm:p-4 rounded-md hover:bg-gray-50 hover:border-gray-300">
      <div className="flex  sm:flex-row justify-between items-center gap-y-1 sm:gap-y-0">
        <div className="flex items-baseline gap-x-2">
          <SubHeader>{experience.company}</SubHeader>
        </div>
        {experience.link.length > 0 && (
          <Button>
            <div className="flex items-center gap-x-1 sm:gap-x-2 px-1 sm:px-2">
              <Link />
              <a
                href={experience.link}
                target="_blank"
                className="text-sm sm:text-base no-underline"
              >
                Link
              </a>
            </div>
          </Button>
        )}

      </div>
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-y-2 sm:gap-y-0 sm:gap-x-2 tracking-wide">
        <div className="flex flex-col sm:flex-row sm:items-center gap-y-1 sm:gap-y-0 sm:gap-x-2">
          <div className="font-normal text-sm sm:text-base">{experience.role}</div>
          <div className="flex flex-row items-center gap-x-2">
            {experience.type.length > 0 && <List>{experience.type}</List>}
            <List>{experience.location}</List>
          </div>
        </div>
        <p className="text-sm sm:text-base tracking-wider">{experience.date}</p>
      </div>
      <div className="mt-2">
        {
          experience.tasks.map((task, index) => {
            return <List key={index}>{task}</List>;
          })
        }
      </div>
      <div className="flex justify-center gap-1.5 sm:gap-2 flex-wrap mt-3 sm:mt-4">
        {experience.stack.map((skill, index) => {
          return <Bullet key={index}>{skill}</Bullet>;
        })}
      </div>
    </div>
  );
}

export default ExperienceCard;
