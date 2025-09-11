"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
// import component

import Wrapper from "@/components/ui/Wrapper";
import MainSection from "@/components/features/MainSide/Section";
import ASideSection from "@/components/features/ASide/Section";
import Genres from "@/components/features/MainSide/Section/Genres";
import Introduction from "@/components/features/Introduction";

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
        <Wrapper.MainSide>
          {/* 1. Phổ biến*/}
          <MainSection>
            <MainSection.Title
              description="Những cuốn sách phổ biến nhất hiện nay. Danh sách được cập nhật mỗi giờ"
              link="./"
            >
              Phổ biến
            </MainSection.Title>
            <MainSection.MultiSlider books={books} />
          </MainSection>

          {/* 2. Sản phẩm mới hấp dẫn*/}
          <MainSection>
            <MainSection.Title
              description="Các sản phẩm mới phổ biến trong hai tuần qua"
              link="./"
            >
              Sản phẩm mới hấp dẫn
            </MainSection.Title>
            <MainSection.MultiSlider books={books} />
            {/* <MainSection.MultiSlider books={books} /> */}
          </MainSection>

          {/*  List thể loại*/}
          <Genres />
          {/* 3. Cập nhật mới nhất*/}
          <MainSection>
            <MainSection.Title
              description="Các chương và đoạn mới. Các tác giả đăng những phần tiếp theo khi họ viết"
              link="./"
            >
              Cập nhật mới nhất
            </MainSection.Title>
            <MainSection.MultiSlider books={books} />
            {/* <MainSection.MultiSlider books={books} /> */}
          </MainSection>

          {/* Pannel single book slider*/}
          <MainSection>
            <MainSection.SingleSlider books={books} />
            {/* <MainSection.MultiSlider books={books} /> */}
          </MainSection>

          {/* 4. Bán chạy nhất*/}
          <MainSection>
            <MainSection.Title
              description="Sách trả phí phổ biến nhất"
              link="./"
            >
              Bán chạy nhất
            </MainSection.Title>
            <MainSection.MultiSlider books={books} />
            {/* <MainSection.MultiSlider books={books} /> */}
          </MainSection>

          {/* 5. Hàng mới về*/}
          <MainSection>
            <MainSection.Title
              description="Các tác phẩm mới xuất bản"
              link="./"
            >
              Sách mới
            </MainSection.Title>
            <MainSection.MultiSlider books={books} />
            {/* <MainSection.MultiSlider books={books} /> */}
          </MainSection>

          {/* 6. Những gì họ đang đọc bây giờ*/}
          <MainSection>
            <MainSection.Title
              description="Sách đã được thêm vào thư viện riêng tư của người dùng trong 24 giờ qua"
              link="./"
            >
              Những gì họ đang đọc bây giờ
            </MainSection.Title>
            <MainSection.MultiSlider books={books} />
            {/* <MainSection.MultiSlider books={books} /> */}
          </MainSection>

          {/* 7. Độc giả thích*/}
          <MainSection>
            <MainSection.Title description="" link="./">
              Độc giả thích
            </MainSection.Title>
            <MainSection.MultiSlider books={books} />
            {/* <MainSection.MultiSlider books={books} /> */}
          </MainSection>

          <Introduction />
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
            <ASideSection.Title>
              Bình luận gần đây
            </ASideSection.Title>
            <ASideSection.LatestComments />
          </ASideSection>
        </Wrapper.ASide>
      </Wrapper>
    </>
  );
}
