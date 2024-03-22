import { useEffect } from "react";
import Award from "./components/sections/Award";
import Education from "./components/sections/Education";
import Experience from "./components/sections/Experience";
import { Profile } from "./components/sections/Profile";
import Project from "./components/sections/Project";
import Skill from "./components/sections/Skill";
import user from "./user-data.json";

function App() {
  useEffect(() => {
    document.title = `${user.profile.name} | OpenCV`;
  }, []);
  return (
    <div className="font-inter p-1  flex justify-center">
      <div className="max-w-2xl w-full flex flex-col gap-y-5 md:mt-8">
        {/* Profile Section */}
        <Profile profile={user.profile} />

        {/* Skills Section */}
        <Skill skills={user.skills} />

        {/* Experience Section */}
        <Experience experiences={user.experiences} />

        {/* Education Section */}
        <Education education={user.education} />

        {/* Project Section */}
        <Project projects={user.projects} />

        {/* Award Section */}
        <Award awards={user.awards} />

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
