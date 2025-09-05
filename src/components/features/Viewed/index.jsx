"use client";
import React, { useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import PanelWrapper from "@/components/common/PanelWrapper";
// Import embla
import useEmblaCarousel from "embla-carousel-react";
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
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: false,
    loop: true,
    slidesToScroll: 1,
  });
  // button slider
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);
  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
  return (
    <div className="relative px-[30px] py-[15px]">
      <div className="embla overflow-hidden" ref={emblaRef}>
        <div className="embla__container w-full  flex ">
          {books?.map((book, index) => (
            <div
              key={index}
              className="embla__slide  flex-[0_0_100%] w-full text-center space-y-4 "
            >
              <div className="flex justify-around">
                <Link
                  href={`/profile/${book.id}`}
                  className="book block w-[100px] min-w-[100px]"
                >
                  <ProductImage src={book.imgUrl} />
                </Link>
              </div>

              <Link
                href={`/products/${book.id}`}
                className="block title text-[12px] hover:underline "
              >
                {book.title}
              </Link>
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
  );
}
