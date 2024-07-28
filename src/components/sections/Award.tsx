import AwardCard, { AwardCardProps } from "../cards/AwardCard";
import Header from "../common/Header";

import user from "../../user-data.json";

function Award() {
    return (
        <div className="flex flex-col gap-y-2 px-1.5">
            <Header classNames="p-1.5">Awards</Header>
            {user.awards.map((award: AwardCardProps, index) => {
                return <AwardCard key={index} award={award} />;
            })}
        </div>
    );
}

export default Award;
