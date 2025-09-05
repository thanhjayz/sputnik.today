"use client";
import React, { useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import PanelWrapper from "@/components/common/PanelWrapper";
import ProductImage from "@/components/ui/ProductImage";

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
      {books?.slice(0, 3).map((book, index) => (
        <div
          key={index}
          className="px-[15px] py-[13px] border-y border-[#e7e7e7] flex gap-[20px]"
        >
          <div className="book flex-shrink-0 flex-grow-0 w-full max-w-[75px]">
            <Link href={`/profile/${book.id}`} className="w-full block"> 
              <ProductImage src={book.imgUrl} />
            </Link>
          </div>

          <div className="space-y-1 text-[14px]">
            <p className="text-[9197A3]">Thể loại sách</p>
            <Link
              href={`/products/${book.id}`}
              className="block title text-[12px] hover:underline "
            >
              {book.title}
            </Link>
            <Link
              href={`/products/${book.id}`}
              className="block title text-[12px] text-[#717171] hover:underline  "
            >
              {book.author}
            </Link>
            
            <p className="text-[#8CC152] text-[11px]">Giá: <span className="ml-1 text-black line line-through decoration-red-500">149000</span> <span className="ml-1">149000 vnđ</span>  </p>
          </div>
        </div>
      ))}
    </div>
  );
}
