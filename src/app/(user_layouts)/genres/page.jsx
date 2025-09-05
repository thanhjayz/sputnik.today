"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
// import component
import Side from "@/components/ui/Side";
import MainSide from "@/components/ui/MainSide";
import Aside from "@/components/ui/Aside";
import SideSection from "@/components/ui/Aside/SideSection";
import Discounts from "@/components/features/Discounts";
import Viewed from "@/components/features/Viewed";
import PanelWrapper from "@/components/common/PanelWrapper";
import GenresBlock from "@/components/ui/GenresBlock";

export default function page() {
  const listGenres = [
    {
      _id: 1,
      name: "Giả tưởng (Fantasy)",
      subGenres: [
        { _id: "1", name: "Giả tưởng lãng mạn" },
        { _id: "2", name: "Chiến đấu giả tưởng" },
        { _id: "3", name: "Truyền thuyết đô thị" },
        { _id: "4", name: "Giả tưởng đen tối" },
        { _id: "5", name: "Giả tưởng hài hước" },
        { _id: "6", name: "Giả tưởng anh hùng" },
        { _id: "7", name: "Boyar-Anime" },
        { _id: "8", name: "Giả tưởng sử thi" },
        { _id: "9", name: "Giả tưởng lịch sử" },
        { _id: "10", name: "Học viện Phép thuật" },
        { _id: "11", name: "Tưởng tượng đời thường" },
        { _id: "12", name: "Võ hiệp" },
        { _id: "13", name: "Giả tưởng cổ điển" },
      ],
    },
    {
      _id: 2,
      name: "Huyền bí",
    },
    {
      _id: 3,
      name: "Văn xuôi đương đại",
      subGenres: [{ _id: "1", name: "Chủ nghĩa hiện thực Nga" }],
    },
    {
      _id: 4,
      name: "Khoa học viễn tưởng (Sci-Fi)",
      subGenres: [
        { _id: "1", name: "Lịch sử viễn tưởng" },
        { _id: "2", name: "Viễn tưởng chiến đấu" },
        { _id: "2", name: "Viễn tưởng vũ trụ" },
        { _id: "2", name: "Viễn tưởng xã hội" },
        { _id: "2", name: "Khoa học viễn tưởng" },
        { _id: "2", name: "Hậu tận thế" },
        { _id: "2", name: "Viễn tưởng hài hước" },
        { _id: "2", name: "Phản utopia" },
        { _id: "2", name: "Cyberpunk" },
        { _id: "2", name: "Viễn tưởng anh hùng" },
        { _id: "2", name: "Steampunk" },
      ],
    },

    {
      _id: 5,
      name: "Phiêu lưu",
      subGenres: [{ _id: "1", name: "Phiêu lưu lịch sử" }],
    },
    {
      _id: 5,
      name: "Hài hước",
    },
    {
      _id: 5,
      name: "Thơ ca",
    },
    {
      _id: 5,
      name: "Fanfic",
    },
    {
      _id: 5,
      name: "Kinh dị",
    },
    {
      _id: 5,
      name: "Xuyên không (Isekai)",
      subGenres: [
        { _id: "1", name: "Xuyên không vào thế giới ma pháp" },
        { _id: "2", name: "Xuyên không thời gian" },
        { _id: "2", name: "Trở về Liên Xô" },
        { _id: "2", name: "Xuyên không vào vũ trụ" },
      ],
    },
    {
      _id: 5,
      name: "Kinh dị – giật gân",
    },
    {
      _id: 5,
      name: "Linh tinh (Khác)",
      subGenres: [
        { _id: "1", name: "Truyện cổ tích" },
        { _id: "2", name: "Phát triển bản thân" },
        { _id: "2", name: "Văn học báo chí / Tạp văn chính luận" },
        { _id: "2", name: "Văn học thiếu nhi" },
        { _id: "2", name: "Văn xuôi tài liệu / Phi hư cấu" },
        { _id: "2", name: "Sách kinh doanh" },
      ],
    },

    {
      _id: 5,
      name: "Hành động (Bạo lực)",
    },
    {
      _id: 5,
      name: "Game nhập vai (LitRPG)",
    },
    {
      _id: 5,
      name: "Văn xuôi tuổi teen",
    },
    {
      _id: 5,
      name: "Trinh thám",
      subGenres: [
        { _id: "1", name: "Thám tử hành động" },
        { _id: "1", name: "Thám tử lịch sử" },
        { _id: "1", name: "Thám tử gián điệp" },
      ],
    },
    {
      _id: 5,
      name: "Tiểu thuyết lãng mạn",
      subGenres: [
        { _id: "1", name: "Tiểu thuyết lãng mạn hiện đại" },
        { _id: "1", name: "Một mối tình ngắn ngủi" },
        { _id: "1", name: "Tiểu thuyết tình cảm lịch sử" },
      ],
    },
    {
      _id: 5,
      name: "RealRPG (RPG hiện thực)",
    },
    {
      _id: 5,
      name: "Văn xuôi lịch sử",
    },
    {
      _id: 5,
      name: "Văn học khiêu dâm (Erotica)",
      subGenres: [
        { _id: "1", name: "Erotica lãng mạn" },
        { _id: "1", name: "Khiêu dâm huyền ảo " },
        { _id: "1", name: "Khoa học viễn tưởng khiêu dâm" },
        { _id: "1", name: "Fanfic khiêu dâm" },
      ],
    },
    {
      _id: 5,
      name: "Tiểu thuyết / kịch bản kiểu phim truyền hình châu Á (Dorama)",
    },
    {
      _id: 5,
      name: "Tiểu thuyết chính trị",
    },
  ];

  return (
    <Side>
      <MainSide>
        <PanelWrapper>
          <div className="text-[#444]">
            <div className="panel-heading border-b-[1px] border-[#e1e1e1] p-[10px_13px] text-[#66757F]">
              Tất cả các thể loại sách
            </div>
            <div className="panel-body columns-3 space-y-[12px] gap-3 text-sm p-[13px_15px_35px]  ">
              {listGenres?.map((genre, index) => (
                <GenresBlock key={index} genre={genre} />
              ))}
            </div>
          </div>
        </PanelWrapper>
      </MainSide>
      <Aside>
        <SideSection icon={<i />} title={<>Bạn đã xem gần đây</>}>
          <Viewed />
        </SideSection>
        <SideSection icon={<i />} title={<>% Đang giảm giá</>}>
          <Discounts />
        </SideSection>
        <SideSection icon={<i />} title={<>Sputnik khuyến nghị</>}>
          <Discounts />
        </SideSection>
        <SideSection icon={<i />} title={<>Sputnik khuyến nghị</>}>
          <Discounts />
        </SideSection>
      </Aside>
    </Side>
  );
}
