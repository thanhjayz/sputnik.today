"use client";
import React, { useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import PanelWrapper from "@/components/common/PanelWrapper";
// Import embla
export default function Page({ icon, title, children }) {
  
  return (
    <PanelWrapper>
      <div className="w-full select-none  ">
        <div className="title px-[13px] py-[10px] text-[#66757f] bg-[#f5f5f5] border ">
            { icon }
            <Link href={"/library/viewed"} className="hover:underline">
                { title }
              </Link>
        </div>
        {children}
      </div>
    </PanelWrapper>
  );
}
