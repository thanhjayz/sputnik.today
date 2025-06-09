

"use client"
import Link from "next/link"
import React from 'react'
import { useState } from 'react';
export default function Page() {

  const [isHidden, setIsHidden] = useState(false);
  const toggleVisibility = () => {
    setIsHidden(!isHidden);
  };
  const [searchKey, setSearchKey] = useState("");
  const clear = () => {
    setSearchKey("");
  }
    return (
    <>
    <div className="inline relative" >
        <button onClick={toggleVisibility} 
        className="relative p-[14px] inline min-w-fit font-[var(--font-3)]" type="button">
        Icon
        </button>
        <form

        className={`${isHidden ? "opacity-[1] transition-opacity duration-[0.5s] ease-in-out animate-fadeIn": "opacity-[0] transition-opacity duration-[0.2s] ease-in-out animate-fadeOut pointer-events-none"} absolute top-[50%] right-[-16px] translate-y-[-50%]`} 

        action="">
          
          <input className="md:w-[350px] w-[full] h-[38px] bg-[#fcfcfc]
           border-[1px] rounded-[25px] mx-[5px] px-[6px] pr-[22px] pl-[22px] text-[#555] outline-none focus:border-[#66afe9] focus:shadow-[#66afe9]" type="text" placeholder="Tìm một tác giả, cuốn sách, bài viết hoặc tác phẩm nghệ thuật..."
          value={searchKey}
          onChange={(e) => setSearchKey(e.target.value)}
          
          />
          <button type="submit" className="text-[#9197a3] text-[20px] absolute top-[50%] translate-y-[-50%] left-[10px]" >O
            <i className="icon-search" />
          </button>
          <button  onClick={() => {toggleVisibility(); clear();}}type="button" className="text-[#9197a3] text-[18px] absolute top-[50%] right-[1.4em] translate-x-[100%] translate-y-[-50%]">X
            <i className="icon-dismiss icon-cross" />
          </button>
        </form>
      </div>
      </>
    )
}

