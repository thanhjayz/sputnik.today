import React from 'react'
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

export default function index() {
  return (
    <footer  className="mt-[14px] border-t-[1px] border-[]rgb(216, 216, 216) bg-[#fefefe] px-[20px] py-[14px]">
      <div className='wrapper'>
        <div className="w-full flex justify-between flex-row flex-wrap gap-[14px]">
          <div className="flex-grow-1 flex-shrink-0 basis-[100%] md:basis-[20%]">
            <h3 className="mb-[10px] text-[14px] font-bold text-[#66757F] uppercase">Mục lục</h3>
            <nav className='text-[14px] flex flex-col'>
              <Link className="hover:underline" href="/">Tuyển tập tác phẩm</Link>
              <Link className="hover:underline" href="/">Tin tức</Link>
              <Link className="hover:underline" href="/">Tìm kiếm trên trang</Link>
            </nav>
          </div>
          <div className="flex-grow-1 flex-shrink-0 basis-[100%] md:basis-[20%]">
            <h3 className="mb-[10px] text-[14px] font-bold text-[#66757F] uppercase">Thông tin</h3>
            <nav className='text-[14px] flex flex-col'>
              <Link className="hover:underline" href="/">Về dự án</Link>
              <Link className="hover:underline" href="/">Thông tin hướng dẫn. Trợ giúp</Link>
              <Link className="hover:underline" href="/">Quy định của trang web</Link>
              <Link className="hover:underline" href="/">Thỏa thuận bảo mật</Link>
              <Link className="hover:underline" href="/">Thỏa thuận người dùng</Link>
              <Link className="hover:underline" href="/">Đề nghị công khai</Link>
            </nav>
          </div>
          <div className="flex-grow-1 flex-shrink-0 basis-[100%] md:basis-[20%]">
            <h3 className="mb-[10px] text-[14px] font-bold text-[#66757F] uppercase">Liên hệ với chúng tôi</h3>
            <nav className='text-[14px] flex flex-col'>
              <Link className="hover:underline" href="/">Ý tưởng và đề xuất</Link>
              <Link className="hover:underline" href="/">Trang hỗ trợ</Link>
              <div>Người tạo dự án: <Link className="hover:underline" href="/">Sergey Shapin</Link></div>
              <div className="mt-[7px]"><h2 className='text-[14px] font-semibold text-[#66757F]'>Theo dõi chúng tôi</h2></div>
              <div className="mt-[7px]">
              <Link className="hover:underline" href="/"><i className="">vk</i></Link>
              <Link className="hover:underline" href="/"><i className="">fb</i></Link>
              <Link className="hover:underline" href="/"><i className="">telegram</i></Link>
              <Link className="hover:underline" href="/"><i className="">dzen</i></Link>




              </div>
            </nav>
          </div>  
          <div className="flex-grow-1 flex-shrink-0 basis-[100%] md:basis-[20%]">
            <nav className='text-[14px] flex flex-col'>
              <Link className="hover:underline" href="/"><h3 className="mb-[10px] text-[14px] font-bold text-[#66757F] uppercase">Phiên bản di động</h3></Link>
              <Link className="hover:underline" href="/"><h3 className="mb-[10px] text-[14px] font-bold text-[#66757F] uppercase">Ứng dụng cho Android</h3></Link>
              <div className="text-[9.8px] mt-[7px]"><label className='border-[1px] border-[#e27c79] rounded-[3.5px] bg-[#d9534f] text-white px-[1px] py-[2px]'>18+</label> Trang web có thể chứa nội dung không dành cho người dưới 18 tuổi !</div>
              <div className="text-[9.8px] mt-[7px]">Nguồn thông tin sử dụng
                <Link className="hover:underline" href="/"><p><b>Công nghệ đề xuất</b></p></Link>
              </div>
              <div className="mt-[7px]">Author.Today © 2016 - 2025 <button className='text-[21px] text-[#6cc9f0]'>❄</button></div>
            </nav>
          </div>
        </div>
      {/* </div> */}
      </div>
    </footer>
  )
}
