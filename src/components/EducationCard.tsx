import SubHeader from "./SubHeader";

interface EducationCardProps {
  institute: string;
  date: string;
  course: string;
}

function EducationCard({ education }: { education: EducationCardProps }) {
  return (
    <div className="flex flex-col gap-y-1 border border-slate-300/40 p-2 rounded-md">
      <div className="flex justify-between items-center">
        <SubHeader>{education.institute}</SubHeader>
        <p className="text-sm tabular-nums tracking-wider">{education.date}</p>
      </div>
      <div className="flex">
        <div className="text-sm font-mono">{education.course}</div>
      </div>
    </div>
  );
}

export default EducationCard;
