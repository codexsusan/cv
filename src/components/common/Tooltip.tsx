import React from "react";

type Props = {
    children: React.ReactNode;
    content: string;
};

function Tooltip({ children, content }: Props) {
    return (
        <div className="has-tooltip">
            <span className="border bg-gray-100 tooltip -mt-10 -mx-3 px-2.5 py-1 rounded">
                {content}
            </span>
            {children}
        </div>
    );
}

export default Tooltip;
