import SubHeader from "../common/SubHeader";

export interface EducationCardProps {
  institute: string;
  date: string;
  course: string;
  cgpa?: string;
}

function EducationCard({ education }: { education: EducationCardProps }) {
  return (
    <div className="flex flex-col gap-y-1 border border-slate-300/40 p-3 sm:p-4 rounded-md hover:border-gray-300 hover:bg-gray-50">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-y-1 sm:gap-y-0">
        <SubHeader>{education.institute}</SubHeader>
        <p className="text-xs sm:text-sm tabular-nums tracking-wider">{education.date}</p>
      </div>
      <div className="space-y-1">
        <div className="text-xs sm:text-sm font-mono">{education.course}</div>
        {education.cgpa && (
          <div className="text-xs sm:text-sm font-mono">CGPA - {education.cgpa}</div>
        )}
      </div>
    </div>
  );
}

export default EducationCard;
