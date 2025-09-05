

"use client"
import Link from "next/link"
import React from 'react'





export default function Page({isHovered}) {
    return (
        <div className={`
        ${isHovered==false ? "hidden" : "block"}`}>
            <div className={`absolute text-black bg-white top-[100%] left-[30%] border-[1px] border-[rgba(0, 0, 0, .15)] rounded-b-[4px] bg-clip-padding shadow-[0_6px_12px_rgb(0,0,0,0.275)] w-[160px] max-w-[160px]
    after-relative-caret`}>
                <div className="flex w-full flex-col text-[14px] tracking-wide text-[#262626] ">
                    <div className="flex flex-col">
                        <Link className="px-[20px] py-[6px] hover:bg-[#e6f0fc]" href="/">Cuộc thi</Link>
                        <Link className="px-[20px] py-[6px] hover:bg-[#e6f0fc]" href="/">Minh họa</Link>
                    </div>
                    <hr className=" mx-[15px] my-[5px] border-[1px] border-[#e5e5e5] "></hr>
                    <p className="px-[10px] py-[5px] font-[var(--font-4)] text-[#838a9a] font-semibold" >Đứng đầu</p>
                    <div className="flex flex-col ">
                        <Link className="px-[20px] py-[6px] hover:bg-[#e6f0fc]" href="/">Tác giả</Link>
                        <Link className="px-[20px] py-[6px] hover:bg-[#e6f0fc]" href="/">Người dùng</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

