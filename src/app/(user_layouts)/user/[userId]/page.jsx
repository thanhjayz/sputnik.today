"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { GiQueenCrown } from "react-icons/gi";

// import component

import Wrapper from "@/components/ui/Wrapper";
import PanelWrapper from "@/components/ui/PanelWrapper";

import MainSection from "@/components/features/MainSide/Section";
import ASideSection from "@/components/features/ASide/Section";
import Genres from "@/components/features/MainSide/Section/Genres";
import Introduction from "@/components/features/Introduction";

import { IoMdAdd } from "react-icons/io";
import { FaCheck } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { TbCircleDottedLetterA } from "react-icons/tb";

import { PiDotsThreeOutline } from "react-icons/pi";

export default function Page() {
  const user = {
    _id: "1",
    name: "Văn Thanh",
    name: "Văn Thanh",
    avatarUrl: "/images/avatar.png",
    coverUrl: "/images/cover.png",
  };
  return (
    <div className="space-y-3.5 ">
      <Wrapper className="shadow-[0_.005em_.01em_0_rgba(0,0,0,0.12),0_2px_10px_0_rgba(0,0,0,0.12)]">
        <div className="user-profile-header flex-1 relative">
          <div
            style={{ backgroundImage: `url(${user.coverUrl})` }}
            className="user-cover w-full h-[250px] bg-gray-200 relative "
          >
            <Link
              href={`/user/${user._id}`}
              className=" absolute text-white font-bold left-1/4 bottom-2 hover:underline"
            >
              {user.name}
            </Link>
            <div className="absolute divide-x divide-gray-300 flex items-stretch h-8 bottom-2 right-10 text-sm rounded overflow-hidden">
              <button className="px-1.5 bg-white hover:bg-[#e6e6e6] space-x-1 flex items-center">
                <IoMdAdd className="inline" />
                <FaCheck className="inline" />
                <span>Đăng ký</span>
              </button>
              <button className="px-1.5  bg-white hover:bg-[#e6e6e6] space-x-1 flex items-center">
                <CiMail className="inline mr-1 text-base" />
                <span>Gửi tin nhắn</span>
              </button>
              <button className="px-1.5  bg-white hover:bg-[#e6e6e6]">
                <PiDotsThreeOutline />
              </button>
            </div>
          </div>
          <div className="bg-white">
            <Wrapper>
              <Wrapper.ASide className="relative">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-full w-40 h-40 rounded-xl bg-white p-1">
                  <div className="rounded-lg w-full h-full overflow-hidden">
                    <img
                      src={user.avatarUrl}
                      alt={user.name}
                      className="w-full h-full object-cover "
                    />
                  </div>
                </div>
              </Wrapper.ASide>
              <Wrapper.MainSide>
                <div className="font-[var(--font-apple)]) text-sm">
                  <Link
                    href={`/user/${user._id}`}
                    className="px-2 pt-3  inline-block pb-[11px] mb-[1px] border-b-[3px] border-[#4582af]"
                  >
                    Hồ sơ của tôi
                  </Link>
                  <Link
                    href={`/user/${user._id}`}
                    className="px-2 pt-3  inline-block pb-[11px] mb-[1px] border-b-[3px] border-[#4582af]"
                  >
                    Bảng tin
                  </Link>
                  <Link
                    href={`/user/${user._id}`}
                    className="px-2 pt-3  inline-block pb-[11px] mb-[1px] border-b-[3px] border-[#4582af]"
                  >
                    Thành tựu
                  </Link>
                  <Link
                    href={`/user/${user._id}`}
                    className="px-2 pt-3  inline-block pb-[11px] mb-[1px] border-b-[3px] border-[#4582af]"
                  >
                    Bạn bè
                  </Link>
                  <Link
                    href={`/user/${user._id}`}
                    className="px-2 pt-3  inline-block pb-[11px] mb-[1px] border-b-[3px] border-[#4582af]"
                  >
                    Đăng ký
                  </Link>
                </div>
              </Wrapper.MainSide>
            </Wrapper>
          </div>
        </div>
      </Wrapper>
      <Wrapper>
        <Wrapper.ASide>
          <PanelWrapper>
            <div className=" text-[#656565]   status  px-[6.5px] flex flex-col divide-y-[1px] text-sm">
              <div className="flex divide-x-[1px] py-2.5">
                <div className="flex-1 pr-3.5 flex items-center justify-end gap-2">
                  <GiQueenCrown className="inline" />
                  <span>0</span>
                </div>
                <div className="flex-1 text-left pl-3.5">
                  <span>0</span>
                </div>
              </div>

              <div className="flex divide-x-[1px] py-2.5">
                <div className="flex-1 pr-3.5 flex items-center justify-end gap-2">
                  <TbCircleDottedLetterA className="inline text-lg" />
                  <span>0</span>
                </div>
                <div className="flex-1 text-left  pl-3.5">
                  <span>0</span>
                  <span>0</span>
                </div>
              </div>

              <p className="py-2.5 text-center">Trực tuyến</p>
            </div>
          </PanelWrapper>
          <PanelWrapper>
            <div className="py-2.5 px-[13px] text-[#656565] text-sm">
              <p className="text-center">Tham gia: Tháng Bảy 25 2022</p>
            </div>
          </PanelWrapper>
        </Wrapper.ASide>
        <Wrapper.MainSide>sdad</Wrapper.MainSide>
      </Wrapper>
    </div>
  );
}
