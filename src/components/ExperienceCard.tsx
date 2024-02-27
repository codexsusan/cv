import Bullet from "./Bullet";
import Description from "./Description";
import SubHeader from "./SubHeader";

function ExperienceCard() {
  return (
    <div className="flex flex-col gap-y-1.5 border border-slate-300/40 p-2 rounded-md hover:bg-gray-50 hover:border-gray-300">
      <div className="flex justify-between items-center">
        <div className="flex items-baseline gap-x-2 ">
          <SubHeader>Jotno</SubHeader>
        </div>
        <p className="text-sm tabular-nums tracking-wider">
          May 2023 - Sep 2023
        </p>
      </div>
      <div className="flex items-center gap-x-2">
        <div className="text-sm font-mono">Backend Developer</div>
        <Bullet>Freelance</Bullet>
      </div>
      <Description>
        Worked on the frontend of the Jotno app. Built the UI and UX of the app
        using React and Tailwind CSS
      </Description>
    </div>
  );
}

export default ExperienceCard;
