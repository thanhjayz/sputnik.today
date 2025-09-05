"use client"
import React from "react";

export default function page({ children }) {
  return (
    <div className="flex-[1_1_0%] min-w-[200px] w-[270px] space-y-[14px]  ">
      {children}
    </div>
  );
}
