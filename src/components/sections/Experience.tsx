import ExperienceCard, { ExperienceCardProps } from "../cards/ExperienceCard";
import Header from "../common/Header";

interface ExperienceProps {
    experiences: ExperienceCardProps[];
}

function Experience({ experiences }: ExperienceProps) {
    return (
        <div className="flex flex-col gap-y-2 px-1.5">
            <Header classNames="p-1.5">Experience</Header>
            {experiences.map((experience, index) => {
                return <ExperienceCard key={index} experience={experience} />;
            })}
        </div>
    );
}

export default Experience;
