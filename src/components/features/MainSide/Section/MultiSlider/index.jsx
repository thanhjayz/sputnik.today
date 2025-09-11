"use client";
import React, { useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
// Import embla
import useEmblaCarousel from "embla-carousel-react";
import Book from "@/components/features/Book";
import { useBookContext } from "@/contexts/BookContext";

export default function Page() {
  const books = useBookContext();

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
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
    <div className="relative">
      <div className="embla overflow-hidden" ref={emblaRef}>
        <div className="embla__container  flex  ">
          {books?.map((book, index) => (
            <div key={index} className="embla__slide   m-4 flex-[0_0_auto]">
              {/* sản phẩm */}
              <Book book={book} />
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={scrollPrev}
        style={{ backgroundImage: "url(/icons/arrows1.svg)" }}
        className=" embla__prev bg-left bg-no-repeat absolute top-[50%] translate-y-[-75%] left-[-30px]  w-[20px] h-[60px] cursor-pointer "
      ></button>
      <button
        onClick={scrollNext}
        style={{ backgroundImage: "url(/icons/arrows1.svg)" }}
        className=" embla__next bg-right bg-no-repeat absolute top-[50%] translate-y-[-80%] right-[-30px] w-[20px] h-[60px] cursor-pointer"
      ></button>
    </div>
  );
}
