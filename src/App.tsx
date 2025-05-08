import { useEffect } from "react";
import Award from "./components/sections/Award";
import Education from "./components/sections/Education";
import Experience from "./components/sections/Experience";
import { Profile } from "./components/sections/Profile";
import Project from "./components/sections/Project";
import Skill from "./components/sections/Skill";
import user from "./user-data.json";
import { Analytics } from "@vercel/analytics/react"

function App() {
  useEffect(() => {
    document.title = `${user.profile.name} | CV`;
  }, []);
  return (
    <div className="font-inter p-1  flex justify-center">
      <Analytics />
      <div className="max-w-2xl w-full flex flex-col gap-y-5 md:mt-8">
        {/* Profile Section */}
        <Profile />

        {/* Skills Section */}
        <Skill />

        {/* Experience Section */}
        <Experience />

        {/* Education Section */}
        <Education />

        {/* Project Section */}
        <Project />

        {/* Award Section */}
        <Award />

        {/* Footer Section */}
        <div className="border-t border-slate-300/40 p-4">
          <div className="text-base text-center text-neutral-700 tracking-widest">
            &copy; codexsusan 2024
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
