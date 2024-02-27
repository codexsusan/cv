import Bullet from "./Bullet";
import Button from "./Button";
import Description from "./Description";
import SubHeader from "./SubHeader";

function ProjectCard() {
  return (
    <div className="lex flex-col space-y-3 border border-slate-300/40 p-2 rounded-md hover:bg-gray-50 hover:border-gray-300">
      <div className="flex justify-between items-center">
        <SubHeader>Social Hub</SubHeader>
        <p className="text-sm tabular-nums tracking-wider">
          Aug 2023 - Oct 2023
        </p>
      </div>
      <div className="flex items-center">
        <Description>
          Social Hub is a dynamic social community based platform designed to
          provide users with a Reddit-like experience. It helps users to connect
          with people of similar interests and hobbies.
        </Description>
        <LinkHandler />
      </div>
      <div className="flex gap-2 flex-wrap">
        <Bullet>React</Bullet>
        <Bullet>Redux Toolkit</Bullet>
        <Bullet>Typescript</Bullet>
        <Bullet>Tailwind CSS</Bullet>
        <Bullet>Git</Bullet>
      </div>
    </div>
  );
}

function LinkHandler() {
  return (
    <div className="flex flex-col gap-2 justify-end">
      <Button>
        <div className="flex items-center gap-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
          <p className="text-base">Github</p>
        </div>
      </Button>
      <Button>
        <div className="flex items-center gap-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
          <p className="text-base">Live</p>
        </div>
      </Button>
    </div>
  );
}

export default ProjectCard;
