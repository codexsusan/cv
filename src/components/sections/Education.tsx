import EducationCard, { EducationCardProps } from "../cards/EducationCard";
import Header from "../common/Header";
import user from "../../user-data.json";

function Education() {
    return (
        <div className="flex flex-col gap-y-2 px-1 sm:px-1.5">
            <Header classNames="p-1 sm:p-1.5">Education</Header>
            {user.education.map((education: EducationCardProps, index) => {
                return <EducationCard key={index} education={education} />;
            })}
        </div>
    );
}

export default Education;
