
"use client"
import Link from "next/link"
import React from 'react'




export default function Page({isHovered}) {
    return (
        <div className={`
        block 
        ${isHovered ? "block" : ""}`}>
            <div className={`absolute p-[10px] bg-white top-[100%] left-0 md:left-[-30px] border-[1px] border-[rgba(0, 0, 0, .15)] rounded-l-[4px] rounded-b-[4px] shadow-[0 6px 12px rgba(0, 0, 0, .175)] 
            w-[100vw] min-h-[440px]
            md:min-w-[650px] md:w-[650px] md:max-w-[650px] z-10
            
            after-relative-caret`}>
                <div className="w-full inline">
                    {/* Sub menu left */}
                    <div className="flex-1">
                        <p className="mb-[9px] text-[#9197a3] font-semibold text-[14px] tracking-[1px]" >Sách điện tử</p>
                        <div className="flex flex-col mb-[10px]">
                            <Link className="ml-[5px] px-[10px] py-[6px]
                            hover:bg-[#e6f0fc] hover:text-[#262626]" href="/">Sách mới</Link>
                            <Link className="ml-[5px] px-[10px] py-[6px]
                            hover:bg-[#e6f0fc] hover:text-[#262626]" href="/">Tất cả sách</Link>
                            <Link className="ml-[5px] px-[10px] py-[6px]
                            hover:bg-[#e6f0fc] hover:text-[#262626]" href="/">Đọc nhiều</Link>
                            <Link className="ml-[5px] px-[10px] py-[6px]
                            hover:bg-[#e6f0fc] hover:text-[#262626]" href="/">Khuyến khích</Link>
                        </div>
                        <p className="mb-[9px] text-[#9197a3] font-semibold text-[14px] tracking-[1px]"  >Sách có audio</p>
                        <div className="flex flex-col mb-[10px]">
                            <Link className="ml-[5px] px-[10px] py-[6px]
                            hover:bg-[#e6f0fc] hover:text-[#262626]" href="/">Sách mới</Link>
                            <Link className="ml-[5px] px-[10px] py-[6px]
                            hover:bg-[#e6f0fc] hover:text-[#262626]" href="/">Tất cả sách</Link>
                            <Link className="ml-[5px] px-[10px] py-[6px]
                            hover:bg-[#e6f0fc] hover:text-[#262626]" href="/">Nghe nhiều</Link>
                            <Link className="ml-[5px] px-[10px] py-[6px]
                            hover:bg-[#e6f0fc] hover:text-[#262626]" href="/">Khuyến khích</Link>
                        </div>
                        <div className="flex flex-col mb-[10px]">
                            <Link className="ml-[5px] px-[10px] py-[6px]
                            hover:bg-[#e6f0fc] hover:text-[#262626]" href="/">Bộ sưu tập</Link>
                            <Link className="ml-[5px] px-[10px] py-[6px]
                            hover:bg-[#e6f0fc] hover:text-[#262626]" href="/">Bộ sưu tập Sputnik</Link>
                        </div>
                    </div>
                    {/* Sub menu right */}
                    <div className="flex-[2]">
                        <p className="mb-[9px] text-[#9197a3] font-semibold text-[14px] tracking-[1px]"  >Thể loại sách</p>
                        <div className="flex flex-row flex-wrap justify-start mb-[10px]">
                            <Link className="ml-[5px] px-[10px] py-[6px]
                            hover:bg-[#e6f0fc] hover:text-[#262626] flex-grow-[calc(50% - 5px)]" href="/">Khoa học viễn tưởng</Link>
                            <Link className="ml-[5px] px-[10px] py-[6px]
                            hover:bg-[#e6f0fc] hover:text-[#262626] flex-grow-[calc(50% - 5px)]" href="/">Giả tưởng</Link>
                            <Link className="ml-[5px] px-[10px] py-[6px]
                            hover:bg-[#e6f0fc] hover:text-[#262626] flex-grow-[calc(50% - 5px)]" href="/">Xuyên không</Link>
                            <Link className="ml-[5px] px-[10px] py-[6px]
                            hover:bg-[#e6f0fc] hover:text-[#262626] flex-grow-[calc(50% - 5px)]" href="/">Fanfic</Link>
                            <Link className="ml-[5px] px-[10px] py-[6px]
                            hover:bg-[#e6f0fc] hover:text-[#262626] flex-grow-[calc(50% - 5px)]" href="/">Văn học lịch sử</Link>
                            <Link className="ml-[5px] px-[10px] py-[6px]
                            hover:bg-[#e6f0fc] hover:text-[#262626] flex-grow-[calc(50% - 5px)]" href="/">Văn học hiện đại</Link>
                            <Link className="ml-[5px] px-[10px] py-[6px]
                            hover:bg-[#e6f0fc] hover:text-[#262626] flex-grow-[calc(50% - 5px)]" href="/">Tiểu thuyết tình yêu</Link>
                            <Link className="ml-[5px] px-[10px] py-[6px]
                            hover:bg-[#e6f0fc] hover:text-[#262626] flex-grow-[calc(50% - 5px)]" href="/">Văn học giải trí</Link>
                            <Link className="ml-[5px] px-[10px] py-[6px]
                            hover:bg-[#e6f0fc] hover:text-[#262626] flex-grow-[calc(50% - 5px)]" href="/">Trinh thám</Link>
                            <Link className="ml-[5px] px-[10px] py-[6px]
                            hover:bg-[#e6f0fc] hover:text-[#262626] flex-grow-[calc(50% - 5px)]" href="/">Hành động</Link>
                            <Link className="ml-[5px] px-[10px] py-[6px]
                            hover:bg-[#e6f0fc] hover:text-[#262626] flex-grow-[calc(50% - 5px)]" href="/">Phiêu lưu</Link>
                            <Link className="ml-[5px] px-[10px] py-[6px]
                            hover:bg-[#e6f0fc] hover:text-[#262626] flex-grow-[calc(50% - 5px)]" href="/">Kinh dị</Link>
                            <Link className="ml-[5px] px-[10px] py-[6px]
                            hover:bg-[#e6f0fc] hover:text-[#262626] flex-grow-[calc(50% - 5px)]" href="/">Hài hước</Link>
                            <Link className="ml-[5px] px-[10px] py-[6px]
                            hover:bg-[#e6f0fc] hover:text-[#262626] flex-grow-[calc(50% - 5px)]" href="/">Huyền bí</Link>
                            <Link className="ml-[5px] px-[10px] py-[6px]
                            hover:bg-[#e6f0fc] hover:text-[#262626] flex-grow-[calc(50% - 5px)]" href="/">Giật gân</Link>
                            <Link className="ml-[5px] px-[10px] py-[6px]
                            hover:bg-[#e6f0fc] hover:text-[#262626] flex-grow-[calc(50% - 5px)]" href="/">Văn học thiếu nhi</Link>
                            <Link className="ml-[5px] px-[10px] py-[6px]
                            hover:bg-[#e6f0fc] hover:text-[#262626] flex-grow-[calc(50% - 5px)]" href="/">Phát triển bản thân (self-help)</Link>
                            <Link className="ml-[5px] px-[10px] py-[6px]
                            hover:bg-[#e6f0fc] hover:text-[#262626] flex-grow-[calc(50% - 5px)]" href="/">Tài liệu nghiên cứu</Link>
                            <Link className="ml-[5px] px-[10px] py-[6px]
                            hover:bg-[#e6f0fc] hover:text-[#262626] flex-grow-[calc(50% - 5px)]" href="/">Tài liệu học tập</Link>
                            <Link className="ml-[5px] px-[10px] py-[6px]
                            hover:bg-[#e6f0fc] hover:text-[#262626] flex-grow-[calc(50% - 5px)]" href="/">Khiêu gợi(18+)</Link>
                            <Link className="ml-[5px] px-[10px] py-[6px]
                            hover:bg-[#e6f0fc] hover:text-[#262626] flex-grow-[calc(50% - 5px)]" href="/">Tạp chí</Link>
                            <Link className="ml-[5px] px-[10px] py-[6px]
                            hover:bg-[#e6f0fc] hover:text-[#262626] flex-grow-[calc(50% - 5px)]" href="/">Sách nước ngoài</Link>
                            <Link className="ml-[5px] px-[10px] py-[6px]
                            hover:bg-[#e6f0fc] hover:text-[#262626] flex-grow-[calc(50% - 5px)]" href="/">Khác</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


