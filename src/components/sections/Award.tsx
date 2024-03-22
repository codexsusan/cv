import AwardCard, { AwardCardProps } from "../cards/AwardCard";
import Header from "../common/Header";

interface Award {
    awards: AwardCardProps[];
}

function Award({ awards }: Award) {
    return (
        <div className="flex flex-col gap-y-2 px-1.5">
            <Header classNames="p-1.5">Awards</Header>
            {awards.map((award, index) => {
                return <AwardCard key={index} award={award} />;
            })}
        </div>
    );
}

export default Award;
