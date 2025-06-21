import ExperienceCard, { ExperienceCardProps } from "../cards/ExperienceCard";
import Header from "../common/Header";

import user from "../../user-data.json";

function Experience() {
    return (
        <div className="flex flex-col gap-y-2 px-1 sm:px-1.5">
            <Header classNames="p-1 sm:p-1.5">Experience</Header>
            {user.experiences.map((experience: ExperienceCardProps, index) => {
                return <ExperienceCard key={index} experience={experience} />;
            })}
        </div>
    );
}

export default Experience;
