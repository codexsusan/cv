import Bullet from "./Bullet";
import SubHeader from "./SubHeader";

interface ExperienceProps {
  role: string;
  company: string;
  date: string;
  type: string;
  description: string;
}

function ExperienceCard({ experience }: { experience: ExperienceProps }) {
  return (
    <div className="flex flex-col gap-y-1.5 border border-slate-300/40 p-2 rounded-md hover:bg-gray-50 hover:border-gray-300">
      <div className="flex justify-between items-center">
        <div className="flex items-baseline gap-x-2 ">
          <SubHeader>{experience.company}</SubHeader>
        </div>
        <p className="text-sm tabular-nums tracking-wider">{experience.date}</p>
      </div>
      <div className="flex items-center gap-x-2">
        <div className="text-sm font-mono">{experience.role}</div>
        <Bullet>{experience.type}</Bullet>
      </div>
      {/* <Description>Worked on the backend of the Jotno app.</Description> */}
    </div>
  );
}

export default ExperienceCard;
