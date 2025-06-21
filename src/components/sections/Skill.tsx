import Card from "../common/Card";
import Header from "../common/Header";

import user from "../../user-data.json";

function Skill() {
    return (
        <div className="flex flex-col gap-y-2 sm:gap-y-3 p-2 sm:p-3">
            <Header>Skills</Header>
            <div className="flex gap-1.5 sm:gap-2 flex-wrap justify-center">
                {user.skills.map((skill, index) => {
                    return <Card key={index}>{skill}</Card>;
                })}
            </div>
        </div>
    );
}

export default Skill;
