"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
// import component

import Wrapper from "@/components/ui/Wrapper";
import ASideSection from "@/components/features/ASide/Section";
import PanelWrapper from "@/components/ui/PanelWrapper";
import ProductImage from "@/components/features/ProductImage";

import { FaEye, FaEyeSlash } from "react-icons/fa";
import { BsFillShareFill } from "react-icons/bs";
import { TfiMore } from "react-icons/tfi";
const book = {
  url: "/",
  imgUrl: "/images/СССР.png",
  title: "Boyar - Anime1. Kẻ thắp sáng bằng khí gas. Tập 21",
  author: "Григорий Володин",
};

export default function page() {
  return (
    <Wrapper>
      <Wrapper.MainSide>
        <PanelWrapper className={"p-[15px_13px]"}>
          <div className="book flex flex-col gap-4 text-[14px] ">
            <div className="book_review w-[200px] p-1.5 space-y-3 p-1.5">
              <div className="bookcover w-full ">
                <ProductImage src={book.imgUrl} />
              </div>
              <Link
                href={"/"}
                className="block text-[15px] text-center p-[8px_15px] bg-[#4582af] text-white rounded border border-[#3e749d]
                 hover:bg-[#3e749d]"
              >
                Đọc đoạn trích
              </Link>
              <button
                className="block w-full text-[15px] text-center p-[8px_15px] bg-[#4582af] text-white rounded border border-[#3e749d]
                 hover:bg-[#3e749d]"
              >
                Nghe bản audio
              </button>
              <div className="row">
                <div className="buy flex gap-4 w-full  text-[#333]">
                  <button className="flex-[4] border border-[#b0b0b0] rounded  price text-center p-[4px_10px] hover:bg-[#e6e6e6]">
                    Theo dõi
                  </button>
                  <button className="not_interested flex-1 buy-button border border-[#b0b0b0] rounded hover:bg-[#e6e6e6]">
                    <FaEye className="m-auto" />
                  </button>
                </div>
              </div>
              <div>
                <div className="buy flex w-full border border-[#72a53b] rounded overflow-hidden text-[#656565]">
                  <div className="flex-1 price text-center p-[4px_10px]">
                    750{" "}
                  </div>
                  <button className="flex-1 buy-button text-center bg-[#8cc152] hover:bg-[#72a53b] text-white p-[4px_10px]">
                    {" "}
                    Mua{" "}
                  </button>
                </div>
                <p className="text-[12px] text-center">
                  (Chỉ đọc trên trang web)
                </p>
              </div>

              <div className="buy flex w-full border border-[#3e749d] rounded overflow-hidden text-[#333]">
                <div className="flex-1 price text-center p-[4px_10px] bg-[#4582af] hover:bg-[3e749d]">
                  {"15"}%
                </div>

                <Link
                  href={"/"}
                  className="block flex-[4] buy-button text-center  p-[4px_10px]"
                >
                  Mua trọn bộ{" "}
                </Link>
              </div>

              <button className="block">Tải xuống</button>

              <div className="flex justify-center text-xl text-[#746d90]">
                <div className="space-x-5">
                  <button className="share p-2 hover:bg-[#e6e6e6] rounded hover:shadow-[0_0_0_0.5px_#656565]">
                    <BsFillShareFill />
                  </button>
                  <button className="more p-2 hover:bg-[#e6e6e6] rounded hover:shadow-[0_0_0_0.5px_#656565]">
                    <TfiMore />
                  </button>
                </div>
              </div>
            </div>
            <div className="detail"></div>
          </div>
        </PanelWrapper>

        <div></div>
        <div></div>
      </Wrapper.MainSide>
      <Wrapper.ASide>
        <ASideSection>
          <ASideSection.Title>
            <i />
            Bạn đã xem gần đây
          </ASideSection.Title>
          <ASideSection.Viewed />
        </ASideSection>
        <ASideSection>
          <ASideSection.Title>
            <i />% Đang giảm giá
          </ASideSection.Title>
          <ASideSection.Discounts />
        </ASideSection>
        <ASideSection>
          <ASideSection.Title>Sputnik khuyến nghị</ASideSection.Title>
          <ASideSection.LatestComments />
        </ASideSection>
        <ASideSection>
          <ASideSection.Title>Bình luận gần đây</ASideSection.Title>
          <ASideSection.LatestComments />
        </ASideSection>
      </Wrapper.ASide>
    </Wrapper>
  );
}
