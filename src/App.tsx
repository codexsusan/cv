import { Github, LocateFixed, MailOpen, PhoneCall } from "lucide-react";
import Button from "./components/Button";
import Card from "./components/Card";
import Description from "./components/Description";
import EducationCard from "./components/EducationCard";
import ExperienceCard from "./components/ExperienceCard";
import Header from "./components/Header";
import ProjectCard from "./components/ProjectCard";
import SubHeader from "./components/SubHeader";
import Bullet from "./components/Bullet";

function App() {
  return (
    <div className="font-inter grid grid-cols-1 p-1 gap-y-5">
      <div className="flex justify-between items-center gap-x-4 p-3">
        <div className="flex-1 space-y-2">
          <Header>Susan Khadka</Header>
          <Description>
            Full Stack Engineer focused on building products with extra
            attention to detail
            <div className="max-w-md font-light text-base tracking-wider text-neutral-600 flex items-center gap-x-2">
              <LocateFixed size={24} className="inline" />
              <p className="font-inter mt-1">Kathmandu, Nepal</p>
            </div>
          </Description>
          <div className="flex gap-x-3 text-gray-600 pt-2">
            {/* Can loop this by making an array */}
            <Button>
              <Github strokeWidth={1.75} />
            </Button>
            <Button>
              <PhoneCall />
            </Button>
            <Button>
              <MailOpen />
            </Button>
          </div>
        </div>
        <div className="size-28">
          <img
            className="w-full h-full rounded-xl"
            src="https://avatars.githubusercontent.com/u/106180687?v=4"
            alt="profile"
          />
        </div>
      </div>

      {/* Skills Section */}
      <div className="flex flex-col gap-y-3 p-3">
        <Header>Skills</Header>
        <div className="flex gap-2 flex-wrap justify-center">
          <Card>Javascript</Card>
          <Card>TypeScript</Card>
          <Card>React</Card>
          <Card>Node</Card>
          <Card>MongoDB</Card>
          <Card>PostgreSQL</Card>
          <Card>Sequelize</Card>
          <Card>Tailwind CSS</Card>
        </div>
      </div>

      {/* Experience Section */}
      <div className="flex flex-col gap-y-2 px-1.5">
        <Header classNames="p-1.5">Experience</Header>
        <ExperienceCard />
      </div>

      {/* Education Section */}
      <div className="flex flex-col gap-y-2 px-1.5">
        <Header classNames="p-1.5">Education</Header>
        <EducationCard />
      </div>

      {/* Project Section */}
      <div className="flex flex-col gap-y-2 px-1.5">
        <Header classNames="p-1.5">Projects</Header>
        <ProjectCard />
      </div>

      {/* Award Section */}
      <div className="flex flex-col gap-y-2 px-1.5">
        <Header classNames="p-1.5">Awards</Header>
        <AwardCard />
      </div>
    </div>
  );
}

function AwardCard() {
  return (
    <div className="lex flex-col space-y-3 border border-slate-300/40 p-2 rounded-md hover:bg-gray-50 hover:border-gray-300">
      <div className="flex justify-between items-center gap-x-2">
        <SubHeader>Azadi Ka Amrit Mahotsav Hackathon 2022 - Winner</SubHeader>
        <p className="text-sm tabular-nums tracking-wider">2023</p>
      </div>
      <div className="flex items-center">
        <Description>
          <div className="flex items-center gap-x-2 pt-1 pb-0.5 px-2 rounded-md">
            <p>•</p>
            <p className="">
              Selected among the top 69 teams out of 2087 teams for final round.
            </p>
          </div>
          <div className="flex items-center gap-x-2 pt-1 pb-0.5 px-2 rounded-md">
            <p>•</p>
            <p className="">
              Developed an android application for Rajkot Municipal Corporation
              for donating and receiving food, clothes, and other essentials.
            </p>
          </div>
        </Description>
      </div>
      <div className="flex gap-2 flex-wrap">
        <Bullet>Flutter</Bullet>
        <Bullet>Dart</Bullet>
        <Bullet>Node</Bullet>
        <Bullet>Express</Bullet>
        <Bullet>Git</Bullet>
      </div>
    </div>
  );
}
export default App;
