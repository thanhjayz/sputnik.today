"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import PanelWrapper from "@/components/common/PanelWrapper";

export default function Page({ children, info }) {
  return (
    <PanelWrapper>
      <div className="py-[15px]">
        <div className="space-y-[16px]">
          <div className="mx-7">
            <div className=" flex flex-row justify-between items-end">
              <Link href={"/"} className="text-[22px] hover:underline">
                {info.title}
              </Link>
              <Link
                href={info.link}
                style={{ backgroundImage: "url(/images/arrow-right.png)" }}
                className="bg-no-repeat bg-right pr-[11px] text-[13px] text-[#4582AF] hover:underline hover:text-[#366688]"
              >
                Hiển thị tất cả
              </Link>
            </div>
            <h3 className="text-[14px] text-[#9197a3]">{info.description}</h3>
          </div>

          <div className="px-10 relative">
            {children} {/* => nơi để truyền   <MultiSlider /> */}
          </div>
        </div>
      </div>
    </PanelWrapper>
  );
}
