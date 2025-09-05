"use client";
import React from "react";

export default function Page({ children, className }) {
  return (
    <span
      className={`invisible absolute whitespace-nowrap  px-[5px] py-[6px]  text-white rounded-[3px]  shadow-[4px_4px_8px_rgba(0,0,0,0.3)] bg-[#383838] ${className}  `}
    >
      {children}
    </span>
  );
}
