import React from "react";
import Link from "next/link";
import Image from "next/image";
import Inspiration from "./Inspiration";
import Slider from "./Slider";
//import component
import Ribbon from "@/components/common/Ribbon";

export default function page() {
  const books = [
    {
      url: "/",
      imgUrl: "/images/at-logo.png",
      title: "Boyar - Anime. Kẻ thắp sáng bằng khí gas. Tập 25",
      title: "Boyar - Anime. Kẻ thắp sáng bằng khí gas. Tập 25",
      author: "Григорий Володин",
    },
    {
      url: "/",
      imgUrl: "/images/at-logo.png",
      title: "Boyar - Anime. Kẻ thắp sáng bằng khí gas. Tập 25",
      title: "Boyar - Anime. Kẻ thắp sáng bằng khí gas. Tập 25",
      author: "Григорий Володин",
    },
    {
      url: "/",
      imgUrl: "/images/at-logo.png",
      title: "Boyar - Anime. Kẻ thắp sáng bằng khí gas. Tập 25",
      title: "Boyar - Anime. Kẻ thắp sáng bằng khí gas. Tập 25",
      author: "Григорий Володин",
    },
    {
      url: "/",
      imgUrl: "/images/at-logo.png",
      title: "Boyar - Anime. Kẻ thắp sáng bằng khí gas. Tập 25",
      title: "Boyar - Anime. Kẻ thắp sáng bằng khí gas. Tập 25",
      author: "Григорий Володин",
    },
    {
      url: "/",
      imgUrl: "/images/at-logo.png",
      title: "Boyar - Anime. Kẻ thắp sáng bằng khí gas. Tập 25",
      title: "Boyar - Anime. Kẻ thắp sáng bằng khí gas. Tập 25",
      author: "Григорий Володин",
    },
    {
      url: "/",
      imgUrl: "/images/at-logo.png",
      title: "Boyar - Anime. Kẻ thắp sáng bằng khí gas. Tập 25",
      title: "Boyar - Anime. Kẻ thắp sáng bằng khí gas. Tập 25",
      author: "Григорий Володин",
    },
    {
      url: "/",
      imgUrl: "/images/at-logo.png",
      title: "Boyar - Anime. Kẻ thắp sáng bằng khí gas. Tập 25",
      title: "Boyar - Anime. Kẻ thắp sáng bằng khí gas. Tập 25",
      author: "Григорий Володин",
    },
  ];

  return (
    <>
      <div className="wrapper pt-[14px] min-h-96 flex flex-row gap-[14px]">
        <div className="flex-[4] box-border overflow-hidden flex flex-col gap-[14px] items-stretch">
          {/* pannel */}
          <div className="bg-white  rounded-sm rounded-md shadow-full py-[15px]">
            <div className="flex flex-col gap-[20px]">
              <div className="mx-7">
                <div className=" flex flex-row justify-between items-end">
                  <Link href={"/"} className="text-[22px] hover:underline">
                    Phổ biến
                  </Link>
                  <Link
                    href={"/"}
                    style={{ backgroundImage: "url(/images/arrow-right.png)" }}
                    className="bg-no-repeat bg-right pr-[11px] text-[13px] text-[#4582AF] hover:underline hover:text-[#366688]"
                  >
                    Hiển thị tất cả
                  </Link>
                </div>
                <h3 className="text-[14px] text-[#9197a3]">
                  Những cuốn sách phổ biến nhất hiện nay. Danh sách được cập
                  nhật mỗi giờ
                </h3>
              </div>
              <div className="px-10 relative">
                <button
                  style={{ backgroundImage: "url(/icons/arrows1.svg)" }}
                  className=".bg-center bg-no-repeat absolute top-[50%] translate-y-[-80%] left-2 w-[20px] h-[60px] cursor-pointer"
                ></button>
                {/* slider */}
                <div className="flex w-full">
                  {/* sản phẩm */}
                  {books.map((book, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center pt-[6px] w-[135px] h-[240px]"
                    >
                      <Link href={book.url} className="group relative">
                        <div>
                          <Image
                            className="  bg-slate-600 object-cover min-w-[100px] min-h-[100px] rounded-tr-md rounded-br-md "
                            src={book.imgUrl}
                            alt="Picture of the author"
                            quality={100}
                            width={100}
                            height={160}
                            style={{ minWidth: "100px", height: "160px" }}
                          />
                          <Ribbon />
                        </div>
                      </Link>
                      <div>
                        <Link
                          href={book.url}
                          className="line-clamp-2 text-[12px] text-center hover:underline"
                        >
                          {book.title}
                        </Link>
                        <Link
                          href={book.url}
                          className="line-clamp-2 text-[12px] text-center text-[#9a938d] hover:underline"
                        >
                          {book.author}
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
                <button className=".bg-center bg-no-repeat absolute top-[50%] translate-y-[-80%] right-2 w-[20px] h-[60px] cursor-pointer">
                  <Image
                    src="icons/arrows2.svg"
                    width={24}
                    height={50}
                    alt="Icon"
                    className="#444"
                    style={{ minWidth: "100px", height: "100px" }}
                  />
                </button>
              </div>
            </div>
          </div>
          {/* pannel */}
          <div className="bg-white rounded-sm rounded-md shadow-lg py-[15px]">
            <div className="flex flex-col gap-[20px]">
              <div className="mx-7">
                <div className=" flex flex-row justify-between items-end">
                  <Link href={"/"} className="text-[22px] hover:underline">
                    Phổ biến
                  </Link>
                  <Link
                    href={"/"}
                    style={{ backgroundImage: "url(/images/arrow-right.png)" }}
                    className="bg-no-repeat bg-right pr-[11px] text-[13px] text-[#4582AF] hover:underline hover:text-[#366688]"
                  >
                    Hiển thị tất cả
                  </Link>
                </div>
                <h3 className="text-[14px] text-[#9197a3]">
                  Những cuốn sách phổ biến nhất hiện nay. Danh sách được cập
                  nhật mỗi giờ
                </h3>
              </div>
              <div className="px-10">
                <button></button>
                {/* slider */}
                <div className="flex w-full">
                  {/* sản phẩm */}

                  {books.map((book, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center pt-[6px] w-[135px] h-[240px]"
                    >
                      <Link href={book.url} className="group relative">
                        <div>
                          <Image
                            className="  bg-slate-600 object-cover min-w-[100px] min-h-[100px] rounded-tr-md rounded-br-md "
                            src={book.imgUrl}
                            alt="Picture of the author"
                            quality={100}
                            width={100}
                            height={160}
                            style={{ minWidth: "100px", height: "160px" }}
                          />
                          <Ribbon />
                        </div>
                      </Link>
                      <div>
                        <Link
                          href={book.url}
                          className="line-clamp-2 text-[12px] text-center hover:underline"
                        >
                          {book.title}
                        </Link>
                        <Link
                          href={book.url}
                          className="line-clamp-2 text-[12px] text-center text-[#9a938d] hover:underline"
                        >
                          {book.author}
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
                <button></button>
              </div>
            </div>
          </div>
          {/* <Slider slides={slides} /> */}
          <Inspiration />
        </div>
        <div className="flex-[1] flex flex-col gap-[14px] items-stretch ">
          <div className="bg-white rounded-sm h-60 rounded-md shadow-lg"></div>
          <div className="bg-white rounded-sm h-60 rounded-md shadow-lg"></div>
          <div className="bg-white rounded-sm h-60 rounded-md shadow-lg"></div>
        </div>
      </div>
    </>
  );
}
