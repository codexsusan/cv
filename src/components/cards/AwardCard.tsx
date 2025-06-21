import Bullet from "../common/Bullet";
import Description from "../common/Description";
import List from "../common/List";
import SubHeader from "../common/SubHeader";

export interface AwardCardProps {
    event: string;
    date: string;
    points: string[];
    stack: string[];
}

function AwardCard({ award }: { award: AwardCardProps }) {
    return (
        <div className="flex flex-col space-y-2 sm:space-y-3 border border-slate-300/40 p-3 sm:p-4 rounded-md hover:bg-gray-50 hover:border-gray-300">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-y-1 sm:gap-y-0 sm:gap-x-2">
                <SubHeader>{award.event}</SubHeader>
                <p className="text-xs sm:text-sm tabular-nums tracking-wider">{award.date}</p>
            </div>
            <div className="flex items-center">
                <Description>
                    {award.points.map((point, index) => {
                        return <List key={index}>{point}</List>;
                    })}
                </Description>
            </div>
            <div className="flex gap-1.5 sm:gap-2 flex-wrap">
                {
                    award.stack.map((skill, index) => {
                        return <Bullet key={index}>{skill}</Bullet>;
                    })
                }
            </div>
        </div>
    );
}

export default AwardCard;
