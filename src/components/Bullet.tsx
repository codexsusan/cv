import React from "react";

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-slate-600 font-normal">
      <div className="flex items-center gap-x-2 border pt-1 pb-0.5 px-2 rounded-md border-gray-100 hover:border-gray-300 bg-white">
        <p>•</p>
        <p className="">{children}</p>
      </div>
    </div>
  );
}

export default Bullet;
