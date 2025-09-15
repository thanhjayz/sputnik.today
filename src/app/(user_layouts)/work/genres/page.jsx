"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
// import component

import Wrapper from "@/components/ui/Wrapper";

import ASideSection from "@/components/features/ASide/Section";
import PanelWrapper from "@/components/ui/PanelWrapper";
import GenresBlock from "@/components/features/MainSide/Section/Genres/GenresBlock";
import { listGenres } from "./data";

export default function page() {
  
  return (
    <Wrapper>
      <Wrapper.MainSide>
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
          {/* <ASideSection.Recomment /> */}
        </ASideSection>
       
      </Wrapper.ASide>
    </Wrapper>
  );
}
