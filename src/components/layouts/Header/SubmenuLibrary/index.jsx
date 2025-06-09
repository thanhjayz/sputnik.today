
"use client"
import Link from "next/link"
import React from 'react'




export default function Page({isHovered}) {
    return (
        <div className={(isHovered ? "block" : "hidden")}>
            <div className={`absolute p-[10px] bg-white top-[100%] left-0 md:left-[-30px] border-[1px] border-[rgba(0, 0, 0, .15)] rounded-b-[4px] shadow-[0_6px_12px_rgb(0,0,0,0.275)] 
            w-[100vw] min-h-[440px]  text-black
            md:min-w-[650px] md:w-[650px] md:max-w-[650px] z-10
            
            after-relative-caret`}>
                <div className="w-full flex justify-between">
                    {/* Sub menu left */}
                    <div className="flex-[1]">
                        <p className="mb-[9px] text-[#9197a3] font-semibold text-[14px] tracking-[1px]" >Sách điện tử</p>
                        <div className="flex flex-col mb-[10px]">
                            <Link className="px-[10px] py-[6px]
                            hover:bg-[#e6f0fc] hover:text-[#262626]" href="/">Sách mới</Link>
                            <Link className="px-[10px] py-[6px]
                            hover:bg-[#e6f0fc] hover:text-[#262626]" href="/">Tất cả sách</Link>
                            <Link className="px-[10px] py-[6px]
                            hover:bg-[#e6f0fc] hover:text-[#262626]" href="/">Đọc nhiều</Link>
                            <Link className="px-[10px] py-[6px]
                            hover:bg-[#e6f0fc] hover:text-[#262626]" href="/">Khuyến khích</Link>
                        </div>
                        <p className="mb-[9px] text-[#9197a3] font-semibold text-[14px] tracking-[1px]"  >Sách có audio</p>
                        <div className="flex flex-col mb-[10px]">
                            <Link className="px-[10px] py-[6px]
                            hover:bg-[#e6f0fc] hover:text-[#262626]" href="/">Sách mới</Link>
                            <Link className="px-[10px] py-[6px]
                            hover:bg-[#e6f0fc] hover:text-[#262626]" href="/">Tất cả sách</Link>
                            <Link className="px-[10px] py-[6px]
                            hover:bg-[#e6f0fc] hover:text-[#262626]" href="/">Nghe nhiều</Link>
                            <Link className="px-[10px] py-[6px]
                            hover:bg-[#e6f0fc] hover:text-[#262626]" href="/">Khuyến khích</Link>
                        </div>
                        <div className="flex flex-col mb-[10px]">
                            <Link className="px-[10px] py-[6px]
                            hover:bg-[#e6f0fc] hover:text-[#262626]" href="/">Bộ sưu tập</Link>
                            <Link className="px-[10px] py-[6px]
                            hover:bg-[#e6f0fc] hover:text-[#262626]" href="/">Bộ sưu tập Sputnik</Link>
                        </div>
                    </div>
                    {/* Sub menu right */}
                    <div className="flex-[2]">
                        <p className="mb-[9px] text-[#9197a3] font-semibold text-[14px] tracking-[1px]"  >Thể loại sách</p>
                        <div className="flex flex-wrap mb-[10px]">
                            <Link className="px-[10px] py-[6px]
                            hover:bg-[#e6f0fc] hover:text-[#262626] basis-[50%]" href="/">Khoa học viễn tưởng</Link>
                            <Link className="px-[10px] py-[6px]
                            hover:bg-[#e6f0fc] hover:text-[#262626] basis-[50%]" href="/">Giả tưởng</Link>
                            <Link className="px-[10px] py-[6px]
                            hover:bg-[#e6f0fc] hover:text-[#262626] basis-[50%]" href="/">Xuyên không</Link>
                            <Link className="px-[10px] py-[6px]
                            hover:bg-[#e6f0fc] hover:text-[#262626] basis-[50%]" href="/">Fanfic</Link>
                            <Link className="px-[10px] py-[6px]
                            hover:bg-[#e6f0fc] hover:text-[#262626] basis-[50%]" href="/">Văn học lịch sử</Link>
                            <Link className="px-[10px] py-[6px]
                            hover:bg-[#e6f0fc] hover:text-[#262626] basis-[50%]" href="/">Văn học hiện đại</Link>
                            <Link className="px-[10px] py-[6px]
                            hover:bg-[#e6f0fc] hover:text-[#262626] basis-[50%]" href="/">Tiểu thuyết tình yêu</Link>
                            <Link className="px-[10px] py-[6px]
                            hover:bg-[#e6f0fc] hover:text-[#262626] basis-[50%]" href="/">Văn học giải trí</Link>
                            <Link className="px-[10px] py-[6px]
                            hover:bg-[#e6f0fc] hover:text-[#262626] basis-[50%]" href="/">Trinh thám</Link>
                            <Link className="px-[10px] py-[6px]
                            hover:bg-[#e6f0fc] hover:text-[#262626] basis-[50%]" href="/">Hành động</Link>
                            <Link className="px-[10px] py-[6px]
                            hover:bg-[#e6f0fc] hover:text-[#262626] basis-[50%]" href="/">Phiêu lưu</Link>
                            <Link className="px-[10px] py-[6px]
                            hover:bg-[#e6f0fc] hover:text-[#262626] basis-[50%]" href="/">Kinh dị</Link>
                            <Link className="px-[10px] py-[6px]
                            hover:bg-[#e6f0fc] hover:text-[#262626] basis-[50%]" href="/">Hài hước</Link>
                            <Link className="px-[10px] py-[6px]
                            hover:bg-[#e6f0fc] hover:text-[#262626] basis-[50%]" href="/">Huyền bí</Link>
                            <Link className="px-[10px] py-[6px]
                            hover:bg-[#e6f0fc] hover:text-[#262626] basis-[50%]" href="/">Giật gân</Link>
                            <Link className="px-[10px] py-[6px]
                            hover:bg-[#e6f0fc] hover:text-[#262626] basis-[50%]" href="/">Văn học thiếu nhi</Link>
                            <Link className="px-[10px] py-[6px]
                            hover:bg-[#e6f0fc] hover:text-[#262626] basis-[50%]" href="/">Phát triển bản thân (self-help)</Link>
                            <Link className="px-[10px] py-[6px]
                            hover:bg-[#e6f0fc] hover:text-[#262626] basis-[50%]" href="/">Tài liệu nghiên cứu</Link>
                            <Link className="px-[10px] py-[6px]
                            hover:bg-[#e6f0fc] hover:text-[#262626] basis-[50%]" href="/">Tài liệu học tập</Link>
                            <Link className="px-[10px] py-[6px]
                            hover:bg-[#e6f0fc] hover:text-[#262626] basis-[50%]" href="/">Khiêu gợi(18+)</Link>
                            <Link className="px-[10px] py-[6px]
                            hover:bg-[#e6f0fc] hover:text-[#262626] basis-[50%]" href="/">Tạp chí</Link>
                            <Link className="px-[10px] py-[6px]
                            hover:bg-[#e6f0fc] hover:text-[#262626] basis-[50%]" href="/">Sách nước ngoài</Link>
                            <Link className="px-[10px] py-[6px]
                            hover:bg-[#e6f0fc] hover:text-[#262626] basis-[50%]" href="/">Khác</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


