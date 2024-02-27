import AwardCard from "./components/AwardCard";
import Card from "./components/Card";
import EducationCard from "./components/EducationCard";
import ExperienceCard from "./components/ExperienceCard";
import Header from "./components/Header";
import Profile from "./components/Profile";
import ProjectCard from "./components/ProjectCard";
import user from "./config.json";

function App() {
  return (
    <div className="font-inter p-1  flex justify-center">
      <div className="max-w-2xl w-full flex flex-col gap-y-5 md:mt-8">
        {/* Profile Section */}
        <Profile profile={user.profile} />

        {/* Skills Section */}
        <div className="flex flex-col gap-y-3 p-3">
          <Header>Skills</Header>
          <div className="flex gap-2 flex-wrap justify-center">
            {user.skills.map((skill, index) => {
              return <Card key={index}>{skill}</Card>;
            })}
          </div>
        </div>

        {/* Experience Section */}
        <div className="flex flex-col gap-y-2 px-1.5">
          <Header classNames="p-1.5">Experience</Header>
          {user.experiences.map((experience, index) => {
            return <ExperienceCard key={index} experience={experience} />;
          })}
        </div>

        {/* Education Section */}
        <div className="flex flex-col gap-y-2 px-1.5">
          <Header classNames="p-1.5">Education</Header>
          {user.education.map((education, index) => {
            return <EducationCard key={index} education={education} />;
          })}
        </div>

        {/* Project Section */}
        <div className="flex flex-col gap-y-2 px-1.5">
          <Header classNames="p-1.5">Projects</Header>
          {user.projects.map((project, index) => {
            return <ProjectCard key={index} project={project} />;
          })}
        </div>

        {/* Award Section */}
        <div className="flex flex-col gap-y-2 px-1.5">
          <Header classNames="p-1.5">Awards</Header>
          {user.awards.map((award, index) => {
            return <AwardCard key={index} award={award} />;
          })}
        </div>

        {/* Footer Section */}
        <div className="border-t border-slate-300/40 p-4">
          <div className="text-base text-center text-neutral-700 tracking-widest">
            &copy; codexsusan
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
