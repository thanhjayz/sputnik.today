"use client";
import React from "react";
import Link from "next/link";
import PanelWrapper from "@/components/ui/PanelWrapper";

import { genres } from "./data";

export default function Page() {
  return (
    <PanelWrapper>
      <div className="w-full flex flex-wrap  px-[15px] py-[13px] text-[14px] text-[#4582AF]">
        {genres?.slice(0, 10).map((genre, index) => (
          <Link
            key={index}
            href={`/genre/${genre.id}`}
            className=" truncate m-[5px] block px-[10px] py-[5px] hover:text-[#444] hover:bg-[#E6F0FC]"
          >
            {genre.name}
          </Link>
        ))}
        <Link
          href={`/genres/`}
          className=" truncate m-[5px]  block px-[10px] py-[5px] hover:text-[#444] hover:bg-[#E6F0FC] font-semibold "
        >
          Tất cả thể loại
        </Link>
      </div>
    </PanelWrapper>
  );
}
