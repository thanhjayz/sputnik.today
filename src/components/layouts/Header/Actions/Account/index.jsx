
"use client"
import Link from "next/link"
import React from 'react'




export default function Page({isHovered}) {
    return (
        <div className={`block ${isHovered ? 'block' : ''}`}>
            <div className={`absolute text-black bg-white top-[100%] left-[-30%] border-[1px] border-[rgba(0, 0, 0, .15);] rounded-r-sm rounded-b-sm min-w-[650px] w-[650px] min-h-[440px]`}>
                <div className="inline-flex w-full">
                    {/* Sub menu left */}
                    <div className="w-[33.3%] min-w-[33.3%]">
                        <p className="mb-[9px] font-[var(--font-4)] font-semibold text-[14px] text-[#9197a3] tracking-[1px]" >SÁCH ĐIỆN TỬ</p>
                        <div className="flex flex-col mb-[10px]">
                            <Link className="ml-[5px] px-[6px] py-[10px] hover:bg-[#e6f0fc] hover:text-[#262626] hover:bg-[#e6f0fc] hover:text-[#262626]" href="/">Sách mới</Link>
                            <Link className="ml-[5px] px-[6px] py-[10px] hover:bg-[#e6f0fc] hover:text-[#262626]" href="/">Tất cả sách</Link>
                            <Link className="ml-[5px] px-[6px] py-[10px] hover:bg-[#e6f0fc] hover:text-[#262626]" href="/">Đọc nhiều</Link>
                            <Link className="ml-[5px] px-[6px] py-[10px] hover:bg-[#e6f0fc] hover:text-[#262626]" href="/">Khuyến khích</Link>
                        </div>
                        <p className="mb-[9px] font-[var(--font-4)] font-semibold text-[14px] text-[#9197a3] tracking-[1px]" >SÁCH CÓ AUDIO</p>
                        <div className="flex flex-col mb-[10px]">
                            <Link className="ml-[5px] px-[6px] py-[10px] hover:bg-[#e6f0fc] hover:text-[#262626]" href="/">Sách mới</Link>
                            <Link className="ml-[5px] px-[6px] py-[10px] hover:bg-[#e6f0fc] hover:text-[#262626]" href="/">Tất cả sách</Link>
                            <Link className="ml-[5px] px-[6px] py-[10px] hover:bg-[#e6f0fc] hover:text-[#262626]" href="/">Nghe nhiều</Link>
                            <Link className="ml-[5px] px-[6px] py-[10px] hover:bg-[#e6f0fc] hover:text-[#262626]" href="/">Khuyến khích</Link>
                        </div>
                        <div className="flex flex-col mb-[10px]">
                            <Link className="ml-[5px] px-[6px] py-[10px] hover:bg-[#e6f0fc] hover:text-[#262626]" href="/">Bộ sưu tập</Link>
                            <Link className="ml-[5px] px-[6px] py-[10px] hover:bg-[#e6f0fc] hover:text-[#262626]" href="/">Bộ sưu tập Sputnik</Link>
                        </div>
                    </div>
                    {/* Sub menu right */}
                    <div className={s['subMenu__rightSide']}>
                        <p className="mb-[9px] font-[var(--font-4)] font-semibold text-[14px] text-[#9197a3] tracking-[1px]" >Thể loại sách</p>
                        <div className="flex flex-col mb-[10px]">
                            <Link className="ml-[5px] px-[6px] py-[10px] hover:bg-[#e6f0fc] hover:text-[#262626]" href="/">Khoa học viễn tưởng</Link>
                            <Link className="ml-[5px] px-[6px] py-[10px] hover:bg-[#e6f0fc] hover:text-[#262626]" href="/">Giả tưởng</Link>
                            <Link className="ml-[5px] px-[6px] py-[10px] hover:bg-[#e6f0fc] hover:text-[#262626]" href="/">Xuyên không</Link>
                            <Link className="ml-[5px] px-[6px] py-[10px] hover:bg-[#e6f0fc] hover:text-[#262626]" href="/">Fanfic</Link>
                            <Link className="ml-[5px] px-[6px] py-[10px] hover:bg-[#e6f0fc] hover:text-[#262626]" href="/">Văn học lịch sử</Link>
                            <Link className="ml-[5px] px-[6px] py-[10px] hover:bg-[#e6f0fc] hover:text-[#262626]" href="/">Văn học hiện đại</Link>
                            <Link className="ml-[5px] px-[6px] py-[10px] hover:bg-[#e6f0fc] hover:text-[#262626]" href="/">Tiểu thuyết tình yêu</Link>
                            <Link className="ml-[5px] px-[6px] py-[10px] hover:bg-[#e6f0fc] hover:text-[#262626]" href="/">Văn học giải trí</Link>
                            <Link className="ml-[5px] px-[6px] py-[10px] hover:bg-[#e6f0fc] hover:text-[#262626]" href="/">Trinh thám</Link>
                            <Link className="ml-[5px] px-[6px] py-[10px] hover:bg-[#e6f0fc] hover:text-[#262626]" href="/">Hành động</Link>
                            <Link className="ml-[5px] px-[6px] py-[10px] hover:bg-[#e6f0fc] hover:text-[#262626]" href="/">Phiêu lưu</Link>
                            <Link className="ml-[5px] px-[6px] py-[10px] hover:bg-[#e6f0fc] hover:text-[#262626]" href="/">Kinh dị</Link>
                            <Link className="ml-[5px] px-[6px] py-[10px] hover:bg-[#e6f0fc] hover:text-[#262626]" href="/">Hài hước</Link>
                            <Link className="ml-[5px] px-[6px] py-[10px] hover:bg-[#e6f0fc] hover:text-[#262626]" href="/">Huyền bí</Link>
                            <Link className="ml-[5px] px-[6px] py-[10px] hover:bg-[#e6f0fc] hover:text-[#262626]" href="/">Giật gân</Link>
                            <Link className="ml-[5px] px-[6px] py-[10px] hover:bg-[#e6f0fc] hover:text-[#262626]" href="/">Văn học thiếu nhi</Link>
                            <Link className="ml-[5px] px-[6px] py-[10px] hover:bg-[#e6f0fc] hover:text-[#262626]" href="/">Phát triển bản thân (self-help)</Link>
                            <Link className="ml-[5px] px-[6px] py-[10px] hover:bg-[#e6f0fc] hover:text-[#262626]" href="/">Tài liệu nghiên cứu</Link>
                            <Link className="ml-[5px] px-[6px] py-[10px] hover:bg-[#e6f0fc] hover:text-[#262626]" href="/">Tài liệu học tập</Link>
                            <Link className="ml-[5px] px-[6px] py-[10px] hover:bg-[#e6f0fc] hover:text-[#262626]" href="/">Khiêu gợi(18+)</Link>
                            <Link className="ml-[5px] px-[6px] py-[10px] hover:bg-[#e6f0fc] hover:text-[#262626]" href="/">Tạp chí</Link>
                            <Link className="ml-[5px] px-[6px] py-[10px] hover:bg-[#e6f0fc] hover:text-[#262626]" href="/">Sách nước ngoài</Link>
                            <Link className="ml-[5px] px-[6px] py-[10px] hover:bg-[#e6f0fc] hover:text-[#262626]" href="/">Khác</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


