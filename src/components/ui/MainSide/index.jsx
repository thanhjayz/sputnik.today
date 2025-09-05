"use client";
import React from "react";

export default function page({ children }) {
  return (
    <div className="flex-[3_1_0%] w-full min-w-[300px] space-y-4">
      {children}
    </div>
  );
}
