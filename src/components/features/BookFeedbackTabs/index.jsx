"use client";
import PanelWrapper from "@/components/ui/PanelWrapper";
import React, { useState } from "react";

import { FaComments } from "react-icons/fa";
import { GiFeather } from "react-icons/gi";
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";




export default function Page() {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <PanelWrapper>
      <div className="feedback-tab  text-[14px] ">
        <div className="bloc_tabs  pl-4 pb-[0.5px] border-b border-gray-300">
          <button
            onClick={() => toggleTab(1)}
            className={`px-3.5 py-[8px]  rounded-sm inline-flex items-center hover:text-[#4582af]
                    ${
                      toggleState === 1
                        ? "active-tabs border-b-[3px] border-[#4582af]"
                        : ""
                    }`}
          >
            <FaComments className="inline" />
            <span className="ml-2">Bình luận</span>
            <span className="ml-2">131</span>
          </button>
          <button
            onClick={() => toggleTab(2)}
            className={`px-3.5 py-[8px]  rounded-sm inline-flex items-center hover:text-[#4582af]
                    ${
                      toggleState === 2
                        ? "active-tabs border-b-[3px] border-[#4582af]"
                        : ""
                    }`}
          >
            <GiFeather className="inline" />
            <span className="ml-2">Đánh giá</span>
            <span className="ml-2">0</span>
          </button>
        </div>
        <div className="content-tabs">
          <div className="list-comments">
            <div className="comment flex gap-2.5 p-2.5">
              <div className="avatar w-12 h-12 bg-black rounded-full"></div>
              <div className="flex-1">
                <div className="comment-header space-x-3 text-xs">
                  <span className="name font-bold">Maxim Boldyrev</span>
                  <span className="date">
                    8 Tháng chín lúc 04:388 Tháng 9 lúc 04:38
                  </span>
                </div>
                <div className="comment-content">
                  <span>*сердце захлёбывается милотою*</span>
                </div>
                <div className="comment-footer flex items-center space-x-3 text-[13px] ">
                  <span className=" text-[#6da3bd] hover:text-[#4582af] font-bold"> 10 Tương tác</span>
                  <button className="text-[#d6d6d6] active:text-[#80be58] text-base"><AiFillLike /></button>
                  <button className="text-[#d6d6d6] active:text-[#e67e22] text-base"><AiFillDislike /></button>
                </div>
              </div>
            </div>
                    
          </div>
        </div>
      </div>
    </PanelWrapper>
  );
}
