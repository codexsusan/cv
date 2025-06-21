import React from "react";

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-slate-600 font-normal">
      <div className="flex items-center gap-x-1.5 sm:gap-x-2 border py-0.5 sm:py-1 pl-1.5 sm:pl-2 pr-2 sm:pr-3 rounded-md border-gray-100 hover:border-gray-300 bg-white text-xs sm:text-sm">
        <p>•</p>
        <p className="">{children}</p>
      </div>
    </div>
  );
}

export default Bullet;
