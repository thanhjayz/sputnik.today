"use client";
import React from "react";

export default function Page({
  position = "left",
  color = "left",
  className = "",
}) {
  const styles = {
    top: ` bottom-full -translate-x-1/2 border-x-[5px] border-b-[5px] border-b-[#383838]`,
    bottom: ` top-full -translate-x-1/2 border-x-[5px] border-t-[5px] border-t-[#383838]`,
    left: ` right-full -translate-y-1/2 border-y-[5px] border-r-[5px] border-r-[#383838]`,
    right: ` left-full -translate-y-1/2 border-y-[5px] border-l-[5px] border-l-[#383838]`,
  };
  return (
    <div
      className={` absolute w-0 h-0 border-transparent border-solid z-20 ${styles[position]} ${className} `}
    ></div>
  );
}
