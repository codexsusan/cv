import Card from "../common/Card";
import Header from "../common/Header";

type SkillProps = string[];

function Skill({ skills }: { skills: SkillProps }) {
    return (
        <div className="flex flex-col gap-y-3 p-3">
            <Header>Skills</Header>
            <div className="flex gap-2 flex-wrap justify-center">
                {skills.map((skill, index) => {
                    return <Card key={index}>{skill}</Card>;
                })}
            </div>
        </div>
    );
}

export default Skill;
