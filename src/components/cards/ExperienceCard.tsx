import Link from "../../assets/icons/link";
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
}

function ExperienceCard({ experience }: { experience: ExperienceCardProps }) {
  return (
    <div className="flex flex-col  border border-slate-300/40 p-4 rounded-md hover:bg-gray-50 hover:border-gray-300">
      <div className="flex justify-between items-center">
        <div className="flex items-baseline gap-x-2 ">
          <SubHeader>{experience.company}</SubHeader>
        </div>
        <p className="text-base tracking-wider">{experience.date}</p>
      </div>
      <div className="max-h-min flex justify-between items-center gap-x-2 tracking-wide">
        <div className="flex items-center gap-x-2">
          <div className="font-normal">{experience.role}</div>
          {experience.type.length > 0 && <List>{experience.type}</List>}
          <List>{experience.location}</List>
        </div>
        {experience.link.length > 0 && (
          <Button>
            <div className="flex items-center gap-x-2 px-2">
              <Link />
              <a
                href={experience.link}
                target="_blank"
                className="text-base no-underline"
              >
                Link
              </a>
            </div>
          </Button>
        )}
      </div>
      <div className="mt-2">
        {
          experience.tasks.map((task, index) => {
            return <List key={index}>{task}</List>;
          })
        }
      </div>
    </div>
  );
}

export default ExperienceCard;
