import React from "react";

export default function Page({ children, className }) {
  return (
    <div
      className={`bg-white  rounded-[4px]  border border-[#e2e2e2]
      shadow-[0_.005em_.01em_0_rgba(0,0,0,0.12),0_2px_10px_0_rgba(0,0,0,0.12)] ${className} `}
    >
      {children}
    </div>
  );
}
