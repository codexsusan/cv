import SubHeader from "./SubHeader";

function EducationCard() {
  return (
    <div className="flex flex-col gap-y-1 border border-slate-300/40 p-2 rounded-md">
      <div className="flex justify-between items-center">
        <SubHeader>Marwadi University</SubHeader>
        <p className="text-sm tabular-nums tracking-wider">2020 - 2024</p>
      </div>
      <div className="flex">
        <div className="text-sm font-mono">
          Bachelor's Degree in Computer Engineering
        </div>
      </div>
    </div>
  );
}

export default EducationCard;
