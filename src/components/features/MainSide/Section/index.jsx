"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import PanelWrapper from "@/components/ui/PanelWrapper";
import MultiSlider from "@/components/features/MainSide/Section/MultiSlider";
import SingleSlider from "@/components/features/MainSide/Section/SingleSlider";
import Genres from "@/components/features/MainSide/Section/Genres";

import { BookContext } from "@/contexts/BookContext";

export default function Section({ children }) {
  return (
    <PanelWrapper>
      <div className="">{children}</div>
    </PanelWrapper>
  );
}

Section.Title = ({ children, description, link }) => {
  return (
    <div className="py-3 mx-7">
      <div className=" flex flex-row justify-between items-end">
        <Link href={"/"} className="text-[22px] hover:underline">
          {children}
        </Link>
        <Link
          href={link}
          style={{ backgroundImage: "url(/images/arrow-right.png)" }}
          className="bg-no-repeat bg-right pr-[11px] text-[13px] text-[#4582AF] hover:underline hover:text-[#366688]"
        >
          Hiển thị tất cả
        </Link>
      </div>
      <h3 className="text-[14px] text-[#9197a3]">{description}</h3>
    </div>
  );
};

Section.MultiSlider = ({ books }) => {
  return (
    <div className="px-10 py-3 relative py-[15px]">
      <BookContext.Provider value={books}>
        <MultiSlider />
      </BookContext.Provider>
    </div>
  );
};

Section.SingleSlider = ({ books }) => {
  return (
    <BookContext.Provider value={books}>
      <SingleSlider />
    </BookContext.Provider>
  );
};

Section.Genres = ({ Genres }) => {
  return <Genres />;
};
