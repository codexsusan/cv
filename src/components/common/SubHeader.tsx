import React from "react";

function SubHeader({ children }: { children: React.ReactNode }) {
  return <h3 className="text-sm sm:text-base md:text-lg font-semibold">{children}</h3>;
}

export default SubHeader;
