import React from "react";

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-slate-600 font-normal">
      <div className="flex items-center gap-x-2 border py-1 pl-2 pr-3 rounded-md border-gray-100 hover:border-gray-300 bg-white">
        <p>•</p>
        <p className="">{children}</p>
      </div>
    </div>
  );
}

export default Bullet;
