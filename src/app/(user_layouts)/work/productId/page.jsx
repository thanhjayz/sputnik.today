"use client";
import React from "react";
import Link from "next/link";


// import component

import Wrapper from "@/components/ui/Wrapper";
import ASideSection from "@/components/features/ASide/Section";
import PanelWrapper from "@/components/ui/PanelWrapper";
import ProductImage from "@/components/features/ProductImage";
import BookDetailTabs from "@/components/features/BookDetailTabs";
import BookFeedbackTabs from "@/components/features/BookFeedbackTabs";



import { FaEye, FaEyeSlash } from "react-icons/fa";
import { BsFillShareFill } from "react-icons/bs";
import { TfiMore } from "react-icons/tfi";
import { FaPencilAlt } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { CiGift } from "react-icons/ci";
import { IoSparklesSharp } from "react-icons/io5";
import { ImPriceTags } from "react-icons/im";
import { MdOutlineFileDownload } from "react-icons/md";

const book = {
  _id: "1",
  url: "/",
  imgUrl: "/images/СССР.png",
  title: "Boyar - Anime1. Kẻ thắp sáng bằng khí gas. Tập 21",
  authors: ["Serge Winterkay", "Serge Winterkay 2", "Serge Winterkay 3"],
  categories: [
    { _id: "c1", name: "Trinh thám" },
    { _id: "c2", name: "Hành động" },
    { _id: "c3", name: "Lãng mạn" },
  ],
  tags: [
    { id: 1, name: "Thanh tra chính phủ" },
    { id: 2, name: "Trở lại Liên Xô" },
  ],
};

export default function page() {
  return (
    <Wrapper>
      <Wrapper.MainSide>
        <PanelWrapper className={"p-[15px_13px]"}>
          <div className="book flex gap-4 text-[14px]  ">
            <div className="book_review w-[200px] p-1.5 space-y-3">
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
              <button className="block w-full text-center border border-gray-500 py-1 hover:bg-[#e6e6e6] rounded">
                <MdOutlineFileDownload className="inline mr-1" />
                <span>Tải xuống</span>
              </button>


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
            <div className="detail flex-1  text-[14px] space-y-1.5">
              <p className="text-[20px] font-bold text-[#444]">{book.title}</p>
              <div className="text-[#4582af] text-[16px]">
                {book.authors.map((author, index) => (
                  <Link className=" hover:underline" key={index} href={"/"}>
                    {index > 0 && ", "}
                    {author}
                  </Link>
                ))}
              </div>
              <div className="text-[#4582af] text-[14px]">
                {book.categories.map((category, index) => (
                  <Link className=" hover:underline" key={index} href={"/"}>
                    {index > 0 && ", "}
                    {category.name}
                  </Link>
                ))}
              </div>
              <div className="status divide-x divide-gray-400 text-gray-500 ">
                <span className="p-[2px_4px] mr-2  rounded  text-white bg-[#4582af] border border-[#3e749d]">
                  <FaPencilAlt className="inline mr-1" />
                  <span className="text-[12px]">đang tiến hành</span>
                </span>
                <span className="px-2 py-0.5">Hôm nay lúc 04:02 </span>
                <span className="px-2 py-0.5">302 849 CZN, 7,57 A.L.</span>
              </div>
              <div>
                <span className="text-gray-400">Chu kỳ series:</span>
                <Link
                  href={"/"}
                  className="ml-2 text-[#4582af] hover:underline"
                >
                  Thanh tra Chính phủ: Trở về Liên Xô
                </Link>
                <span className="ml-2"># 44</span>
              </div>
              <div className="flex divide-x divide-gray-400 text-gray-500 py-4 whitespace-nowrap">
                <span className="p-[2px_4px] mr-2  rounded  text-[#405e76] flex items-center">
                  <FaEye className="inline" />
                  <span className="ml-2">106k</span>
                </span>
                <span className="px-2 py-0.5 flex items-center">
                  <FaRegHeart className="inline text-[#d7295c]" />
                  <span className="ml-2">Yêu thích :</span>
                  <span className="ml-2">{(3986).toLocaleString("fr-FR")}</span>
                </span>

                <span className="px-2 py-0.5 flex items-center">
                  <IoSparklesSharp className="inline" />
                  <span className="ml-2">Phản ứng :</span>
                  <span className="ml-2">{(200).toLocaleString("fr-FR")}</span>
                </span>

                <span className="px-2 py-0.5 flex items-center">
                  <CiGift className="inline text-[#faa61e] text-[20px]" />
                  <span className="ml-2">Giải thưởng:</span>
                  <span className="ml-2"> 610</span>
                </span>
              </div>
              <div className="text-gray-500">
                <ImPriceTags className="inline" />
                <span className="ml-2">Nhãn: </span>
                {book.authors.map((author, index) => (
                  <Link
                    className=" hover:underline text-[#4582af]"
                    key={index}
                    href={"/"}
                  >
                    {index > 0 && ", "}
                    {author}
                  </Link>
                ))}
              </div>
              <BookDetailTabs bookId={book._id} />
            </div>
          </div>
        </PanelWrapper>

        
        <BookFeedbackTabs />

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
