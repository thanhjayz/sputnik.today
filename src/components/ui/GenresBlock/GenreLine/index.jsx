import React from "react";
import Link from "next/link";
import PanelWrapper from "@/components/common/PanelWrapper";

export default function Page({ id, title, reads = 0, isParent = false }) {
  return (
    <div className="flex ">
      <div className="genre-title inline-block">
        <Link
          href="./genres/"
          className={`  text-justify text-[#4582AF]  hover:text-[#2F5978] hover:underline ${
            isParent ? "font-bold" : ""
          }  `}
        >
          {title}
        </Link>
      </div>
      <div className="genre-dot grow m-[0_5px_7px]  border-b-[2px] border-[#444] border-dotted"></div>
      <div className="genre-count">7203</div>
    </div>
  );
}
