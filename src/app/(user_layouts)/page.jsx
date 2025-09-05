"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
// import component

import Wrapper from "../../components/common/Wrapper";
import MultiSlider from "@/components/ui/MainSide/MainSection/MultiSlider";
import MainSection from "@/components/ui/MainSide/MainSection";
import SingleSlider from "@/components/ui/MainSide/MainSection/SingleSlider";
import SideSection from "@/components/ui/Aside/SideSection";
import Viewed from "@/components/features/Viewed";
import Discounts from "@/components/features/Discounts";
import LatestComments from "@/components/features/LatestComments";
import Genres from "@/components/features/Genres";

import Introduction from "@/components/ui/Introduction";

//import ...
import { BookContext } from "@/contexts/BookContext";

export default function page() {
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
    <>
      <Wrapper>
        <Wrapper.mainSide>
          {/* 1. Phổ biến*/}
          <BookContext.Provider value={books}>
            <MainSection
              info={{
                title: "Phổ biến",
                description:
                  "Những cuốn sách phổ biến nhất hiện nay. Danh sách được cập nhật mỗi giờ",
                link: "./",
              }}
            >
              <MultiSlider />
            </MainSection>
          </BookContext.Provider>
          {/* 2. Sản phẩm mới hấp dẫn*/}
          <BookContext.Provider value={books}>
            <MainSection
              info={{
                title: " Sản phẩm mới hấp dẫn",
                description: "Các sản phẩm mới phổ biến trong hai tuần qua",
                link: "./",
              }}
            >
              <MultiSlider />
            </MainSection>
          </BookContext.Provider>
          {/*  List thể loại*/}
          <Genres />
          {/* 3. Cập nhật mới nhất*/}
          <BookContext.Provider value={books}>
            <MainSection
              info={{
                title: " Cập nhật mới nhất",
                description:
                  "Các chương và đoạn mới. Các tác giả đăng những phần tiếp theo khi họ viết",
                link: "./",
              }}
            >
              <MultiSlider />
            </MainSection>
          </BookContext.Provider>

          {/* 4. Bán chạy nhất*/}
          <BookContext.Provider value={books}>
            <MainSection
              info={{
                title: "Bán chạy nhất",
                description: "Sách trả phí phổ biến nhất",
                link: "./",
              }}
            >
              <MultiSlider />
            </MainSection>
          </BookContext.Provider>

          {/* thử nghiệm single book slider */}
          <BookContext.Provider value={books}>
            <SingleSlider />
          </BookContext.Provider>

          {/* 5. Hàng mới về*/}
          <BookContext.Provider value={books}>
            <MainSection
              info={{
                title: "Sách mới",
                description: "Các tác phẩm mới xuất bản",
                link: "./",
              }}
            >
              <MultiSlider />
            </MainSection>
          </BookContext.Provider>

          {/* 6. Những gì họ đang đọc bây giờ*/}
          <BookContext.Provider value={books}>
            <MainSection
              info={{
                title: "Những gì họ đang đọc bây giờ",
                description: "Sách đã được thêm vào thư viện",
                link: "./",
              }}
            >
              <MultiSlider />
            </MainSection>{" "}
            {/* 7. Độc giả thích*/}
            <BookContext.Provider value={books}>
              {" "}
              <MainSection
                info={{
                  title: "Độc giả thích",
                  description: "...",
                  link: "./",
                }}
              >
                <MultiSlider />
              </MainSection>
            </BookContext.Provider>
          </BookContext.Provider>

          <Introduction />
        </Wrapper.mainSide>
        <Wrapper.aSide>
          <SideSection icon={<i />} title={<>Bạn đã xem gần đây</>}>
            <Viewed />
          </SideSection>
          <SideSection icon={<i />} title={<>% Đang giảm giá</>}>
            <Discounts />
          </SideSection>
          <SideSection icon={<i />} title={<>Bình luận gần đây</>}>
            <LatestComments />
          </SideSection>
        </Wrapper.aSide>
      </Wrapper>
    </>
  );
}
