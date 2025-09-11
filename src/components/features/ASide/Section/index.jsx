"use client";
import React, { useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import PanelWrapper from "@/components/ui/PanelWrapper";
import Viewed from "@/components/features/ASide/Section/Viewed";
import Discounts from "@/components/features/ASide/Section/Discounts";
import LatestComments from "@/components/features/ASide/Section/LatestComments";

export default function ASideSection({ children }) {
  return (
    <PanelWrapper>
      <div className="w-full select-none  ">{children}</div>
    </PanelWrapper>
  );
}

ASideSection.Title = function title({ children }) {
  return (
    <div className="title px-[13px] py-[10px] text-[#66757f] bg-[#f5f5f5] border ">
      <Link href={"/library/viewed"} className="hover:underline">
        {children}
      </Link>
    </div>
  );
};

ASideSection.Viewed = () => {
  return <Viewed />;
};

ASideSection.Discounts = () => {
  return <Discounts />;
};

ASideSection.LatestComments = () => {
  return <LatestComments />;
};

