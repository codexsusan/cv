import EducationCard, { EducationCardProps } from "../cards/EducationCard";
import Header from "../common/Header";

interface EducationProps {
    education: EducationCardProps[];
}

function Education({ education }: EducationProps) {
    return (
        <div className="flex flex-col gap-y-2 px-1.5">
            <Header classNames="p-1.5">Education</Header>
            {education.map((education, index) => {
                return <EducationCard key={index} education={education} />;
            })}
        </div>
    );
}

export default Education;
