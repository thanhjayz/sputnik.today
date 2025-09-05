"use client";
import React, { useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import PanelWrapper from "@/components/common/PanelWrapper";
// Import embla
import useEmblaCarousel from "embla-carousel-react";
import { useBookContext } from "@/contexts/BookContext";
import Fade from "embla-carousel-fade";
import ProductImage from "@/components/ui/ProductImage";

export default function Page() {
  const books = useBookContext();
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "start",
      containScroll: false,
      loop: true,
      slidesToScroll: 1,
    },
    [Fade()]
  );
  // button slider
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);
  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
  return (
    <PanelWrapper>
      <div className="relative w-full select-none ">
        <div className="embla overflow-hidden" ref={emblaRef}>
          <div className="embla__container  flex items-stretch ">
            {books?.map((book, index) => (
              <div
                key={index}
                className="embla__slide  flex-[0_0_100%] w-full "
              >
                <div className="show-case-container relative w-full h-[280px] max-h-[280px] ">
                  {/* ảnh bìa show case */}
                  <div className="absolute bg-black/70 w-full h-full z-0">
                    <img
                      src={book.imgUrl}
                      alt="product-bg"
                      className="w-full h-full object-cover  blur-[50px] bg-[length:100%]"
                    />
                  </div>
                  <div className="showcase-wrapper w-full h-full items-stretch  px-[50px] pt-[20px] flex overflow-hidden gap-[10px] md:gap-[25px]  ">
                    <div
                      className="profile space-y-1
                     relative [text-shadow:1px_1px_3px_rgba(0,0,0,0.8)] text-white overflow-hidden"
                    >
                      <Link
                        href={`/products/${book.id}`}
                        className="text-[23px] hover:underline truncate block"
                      >
                        {book.title}
                      </Link>
                      <Link
                        href={`/profile/${book.id}`}
                        className="text-[18px] ml-2  hover:underline truncate block font-['Playfair_Display',Georgia,serif]"
                      >
                        {book.author}
                      </Link>
                      <p className="text-[14px] decription text-justify overflow-hidden text-ellipsispsis line-clamp-6">
                        ☯️ Сначала я погиб в уличной драке в холодной Сибири.
                        Потом невероятное чудовище, сломав ворота в наш мир на
                        тёплом китайском побережье, убило меня второй раз. Но в
                        этих смертельных боях я выбил для себя ещё один шанс.
                        Шесть лет комы закончились, и что я вижу? Город —
                        незнакомый мегаполис с фонтанирующим порталом в
                        бесконечный океан ци, оазис...
                      </p>

                      <Link
                        href={`/reader/${book.id}`}
                        className=" text-[14px] absolute left-4 bottom-5 block  px-[25px] py-[4px] rounded-sm border border-white hover:text-black hover:bg-white [text-shadow:none] "
                      >
                        Đọc
                      </Link>
                    </div>
                    <Link
                      href={`/profile/${book.id}`}
                      className="book min-w-[120px] w-[120px]"
                    >
                      <ProductImage src={book.imgUrl} />
                    </Link>
                  </div>
                  {/* nội dung showcase*/}
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={scrollPrev}
          style={{ backgroundImage: "url(/icons/arrows1.svg)" }}
          className="embla__prev bg-left bg-no-repeat absolute top-[50%] translate-y-[-75%] left-[10px]  w-[20px] h-[60px] cursor-pointer "
        ></button>
        <button
          onClick={scrollNext}
          style={{ backgroundImage: "url(/icons/arrows1.svg)" }}
          className="embla__next bg-right bg-no-repeat absolute top-[50%] translate-y-[-80%] right-[10px] w-[20px] h-[60px] cursor-pointer"
        ></button>
      </div>
    </PanelWrapper>
  );
}
