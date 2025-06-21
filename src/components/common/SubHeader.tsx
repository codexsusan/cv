import React from "react";

function SubHeader({ children }: { children: React.ReactNode }) {
  return <h3 className="text-base sm:text-lg font-semibold">{children}</h3>;
}

export default SubHeader;
