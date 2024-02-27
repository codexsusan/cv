import Bullet from "./Bullet";
import Description from "./Description";
import List from "./List";
import SubHeader from "./SubHeader";

interface AwardCardProps {
    event: string;
    date: string;
    points: string[];
    stack: string[];
}

function AwardCard({ award }: { award: AwardCardProps }) {
    return (
        <div className="lex flex-col space-y-3 border border-slate-300/40 p-2 rounded-md hover:bg-gray-50 hover:border-gray-300">
            <div className="flex justify-between items-center gap-x-2">
                <SubHeader>{award.event}</SubHeader>
                <p className="text-sm tabular-nums tracking-wider">{award.date}</p>
            </div>
            <div className="flex items-center">
                <Description>
                    <List>
                        Selected among the top 69 teams out of 2087 teams for final round.
                    </List>
                    <List>
                        Developed an android application for Rajkot Municipal Corporation
                        for donating and receiving food, clothes, and other essentials.
                    </List>
                    {/* <div className="flex items-center gap-x-2 pt-1 pb-0.5 px-2 rounded-md">
                        <p>•</p>
                        <p className="">
                            Developed an android application for Rajkot Municipal Corporation
                            for donating and receiving food, clothes, and other essentials.
                        </p>
                    </div> */}
                </Description>
            </div>
            <div className="flex gap-2 flex-wrap">
                <Bullet>Flutter</Bullet>
                <Bullet>Dart</Bullet>
                <Bullet>Node</Bullet>
                <Bullet>Express</Bullet>
                <Bullet>Git</Bullet>
            </div>
        </div>
    );
}

export default AwardCard;
