
"use client"
console.log("Header component loaded");
import Link from "next/link"
import React from 'react'
import { useState } from 'react';
import Image from 'next/image'
// import components
import SubmenuLibrary from '@/components/layouts/Header/SubmenuLibrary'
import SubmenuCommunity from '@/components/layouts/Header/SubmenuCommunity'
import Actions from '@/components/layouts/Header/Actions'
import Searchbar from '@/components/layouts/Header/Actions/Searchbar'


export default function header() {
  //hàm sự kiện của nút hamberger
  const toggleMenu = () => {
    console.log("toggleMenu button")
  };
  //biến state của navbar, dùng để thay đổi dạng navbar
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Biến state của menu, onmouse(focus) để ẩn hiện menu
  const [isLibraryHovered, setIsLibraryHovered] = useState(false);
  const [isCommunityHovered, setIsCommunityHovered] = useState(false);


  return (<>
    <div className="h-[50px]"></div>
  
    
    <header className="fixed z-50 top-0 left-0 w-full h-[50px] max-h-[50px] bg-[var(--header-bg-color)] font-[var(--font-base)] text-white text-[13.5px]" >
      
        <div className="wrapper h-[50px] max-h-[50px] m-0 m-auto  px-[5px] flex items-center justify-between">
        {/* header__navbar-left */}
        <div className="inline-flex items-center gap-[13.5px]">

          {/* logo */}
          <div className="w-[40px] h-[40px]">
            <Image
              className=""
              src="/images/at-logo.png"
              alt="Picture of the author"
              quality={100}
              width={40}
              height={40}
                style={{ minWidth: '40px', height: '40px'}}
            />
          </div>

          {/* menu */}
          <nav className="flex flex-wrap w-[100vw] bg-[var(--header-bg-color)] z-auto absolute top-[100%] left-[-5px] overflow-visible border-t-[1px] border-[rgba(255,255,255,.1)] px-2
          md:static md:text-white md:w-auto md:font-medium md:border-none">
            {/* Sub menu danh mục sách */}
            <div className="relative p-[14px] inline min-w-fit font-[var(--font-3)]"
              onMouseEnter={()=> setIsLibraryHovered(true)}
              onMouseLeave={()=> setIsLibraryHovered(false)}>
              <p className="cursor-pointer">Thư viện<i className="caret cursor-pointer"></i></p>
              <SubmenuLibrary isHovered = {isLibraryHovered}/> 
            </div>
            <Link className="relative p-[14px]  inline min-w-fit font-[var(--font-3)]" href="/">Thảo luận</Link>
            {/* Sub menu cộng đồng */}
            <div className="relative p-[14px]  inline min-w-fit font-[var(--font-3)]"
              onMouseEnter={()=> setIsCommunityHovered(true)}
              onMouseLeave={()=> setIsCommunityHovered(false)}>
              <p className="cursor-pointer">Cộng đồng<i className="caret"></i></p>
              <SubmenuCommunity isHovered = {isCommunityHovered} /> 
            </div>
            <Link className="relative p-[14px]  inline min-w-fit font-[var(--font-3)]" href="/">Đóng góp</Link>
            <Link className="relative p-[14px]  inline min-w-fit font-[var(--font-3)]" href="/">Thư viện của tôi</Link>
          </nav>
        </div>

        {/* header__navbar-right */}
        <div className="inline-flex items-center gap-[13.5]">
          {/* header__searchbar */}
          <Searchbar />
          {/* header__Account */}
          
          <Link className="relative p-[14px]  inline min-w-fit font-[var(--font-3)]" href="/">Đăng nhập</Link>
          
          <div className="md:hidden block" onClick={toggleMenu}>☰</div>
        </div>
        </div>
      
    </header>
    </>
  )
}
