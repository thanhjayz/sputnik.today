"use client";
import React from "react";
import Link from "next/link";
import Tooltip from "@/components/ui/Tooltip";
import Caret from "@/components/ui/Caret";

export default function Page() {
  const books = [
    {
      url: "/",
      imgUrl: "/images/СССР.png",
      title: "Boyar - Anime1. Kẻ thắp sáng bằng khí gas. Tập 21",
      author: "Григорий Володин",
    },
    {
      url: "/",
      imgUrl: "/images/СССР.png",
      title: "Boyar - Anime2. Kẻ thắp sáng bằng khí gas. Tập 22",
      author: "Григорий Володин",
    },
    {
      url: "/",
      imgUrl: "/images/СССР.png",
      title: "Boyar - Anime3. Kẻ thắp sáng bằng khí gas. Tập 23",
      author: "Григорий Володин",
    },
    {
      url: "/",
      imgUrl: "/images/СССР.png",
      title: "Boyar - Anime. Kẻ thắp sáng bằng khí gas. Tập 25",
      author: "Григорий Володин",
    },
    {
      url: "/",
      imgUrl: "/images/СССР.png",
      title: "Boyar - Anime. Kẻ thắp sáng bằng khí gas. Tập 25",
      author: "Григорий Володин",
    },
    {
      url: "/",
      imgUrl: "/images/СССР.png",
      title: "Boyar - Anime. Kẻ thắp sáng bằng khí gas. Tập 25",
      author: "Григорий Володин",
    },
    {
      url: "/",
      imgUrl: "/images/СССР.png",
      title: "Boyar - Anime. Kẻ thắp sáng bằng khí gas. Tập 25",
      author: "Григорий Володин",
    },
    {
      url: "/",
      imgUrl: "/images/СССР.png",
      title: "Boyar - Anime. Kẻ thắp sáng bằng khí gas. Tập 25",
      author: "Григорий Володин",
    },
    {
      url: "/",
      imgUrl: "/images/СССР.png",
      title: "Boyar - Anime. Kẻ thắp sáng bằng khí gas. Tập 25",
      author: "Григорий Володин",
    },
    {
      url: "/",
      imgUrl: "/images/СССР.png",
      title: "Boyar - Anime. Kẻ thắp sáng bằng khí gas. Tập 25",
      author: "Григорий Володин",
    },
  ];

  return (
    <div className="">
      {books?.slice(0, 10).map((book, index) => (
        <div
          key={index}
          className="text-[13px] text-[#717171] px-[3px] py-[8px] border-y border-[#e7e7e7] space-y-1"
        >
          <div className="flex justify-between gap-2">
            <Link href={`/products/${book.id}`} className=" truncate title   ">
              {book.author}
            </Link>
            <Link href={`/products/${book.id}`}>
              <span className=" relative text-[11px] group">
                09:34
                <Tooltip className="group-hover:visible  whitespace-nowrap right-full mr-3 top-1/2 -translate-y-1/2">
                  20 tháng 8 2025 lúc 09:48:11
                  <Caret position="right" className="top-1/2" />
                </Tooltip>
              </span>
            </Link>
          </div>
          <div className="flex justify-between gap-2">
            <Link
              href={`/products/${book.id}`}
              className=" truncate title  text-[#444] "
            >
              {book.title}
            </Link>
            <Link
              href={`/products/${book.id}`}
              className=" \ text-[11px] whitespace-nowrap "
            >
              <span className="group relative text-[#4582AF]">
                523
                <Tooltip className="group-hover:visible  whitespace-nowrap right-0 bottom-full mb-2">
                  Số lượng bình luận trong 24 giờ
                  <Caret position="bottom" className="right-0" />
                </Tooltip>
              </span>
              /
              <span className="group relative text-[#4582AF]">
                30k
                <Tooltip className="group-hover:visible  whitespace-nowrap right-0 bottom-full mb-2">
                  Tổng số bình luận
                  <Caret position="bottom" className="right-0" />
                </Tooltip>
              </span>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
