import React from 'react'
import Link from 'next/link'
import Header from '@/components/layouts/Header'
import Footer from '@/components/layouts/Footer'


export default function page() {
  return (
    <>
    <Header />
    <div className="">

        <div style={{ backgroundImage: "url('/images/at-auth-bg.png')" }}
          className='m-0 m-auto flex justify-center items-start  w-[1140px] max-w-[1140px] min-h-[100vh] pt-[100px]'>
        <form action="" className='max-w-[375px]  bg-white p-[20px] flex-col space-y-[15px]' >
          <h1 className="text-xl text-[#bdbdbd] text-center">
          <Link className="underline hover:text-[#444]"  href="/" >Đăng nhập </Link>
          <span> </span>
          hoặc
          <span> </span>
          <Link className="text-[#444] pointer-events-none" href="/">Đăng ký</Link>
          </h1>
          <p className='text-[14px] text-[#a94442] hidden'>Đăng ký không hợp lệ.</p>
          <p className='text-[14px] text-[#a94442] hidden'>Mật khẩu không được dài quá 100 ký tự và không được ít hơn 6 ký tự.</p>
          <div>
            <input placeholder="Họ và tên hoặc bút danh" className='text-[14px] w-full h-[34px] pl-[32px] bg-white text-[#555] border-[1px] border-[#ccc] rounded-[4px] outline-none
          focus:border-[#8bdbff] shadow-[inset_1px_1px_5px_rgba(0,0,0,0.3)] inset-shadow-[1px] inset-shadow-[rgba(92, 172, 237, 0.7)]' type="text" />
          <p className='text-[14px] text-[#a94442]'>Trường này là bắt buộc.</p>
          </div>
          <div>
            <input placeholder="Email" className='text-[14px]  w-full h-[34px] pl-[32px] bg-white text-[#555] border-[1px] border-[#ccc] rounded-[4px] outline-none
          focus:border-[#8bdbff] shadow-[inset_1px_1px_5px_rgba(0,0,0,0.3)] inset-shadow-[1px] inset-shadow-[rgba(92, 172, 237, 0.7)]' type="text" />
          <p className='text-[14px] text-[#a94442]'>Trường này là bắt buộc.</p>
          </div>
          <div>
            <input placeholder="Mật khẩu" className='text-[14px]  w-full h-[34px] pl-[32px] bg-white text-[#555] border-[1px] border-[#ccc] rounded-[4px] outline-none
          focus:border-[#8bdbff] shadow-[inset_1px_1px_5px_rgba(0,0,0,0.3)] inset-shadow-[1px] inset-shadow-[rgba(92, 172, 237, 0.7)]' type="password" name="" id="" />
          <p className='text-[14px] text-[#a94442]'>Trường này là bắt buộc.</p>
          </div>
          <div className='flex justify-between'>
            <div className='flex items-center'>
              <input type="checkbox"  className='w-[18px]'/>
              <label className='text-[14px] ml-1'> Lưu đăng nhập</label>
            </div>
            <Link href="/" className='text-[14px] text-[#4582af] hover:underline hover:text-[#2f5978]' >Quên mật khẩu</Link>
          </div>
          <button className='w-full px-[10px] py-[4px] bg-[#4582af] text-white rounded'>Đăng nhập</button>
          <div className="relative text-center
          before:content-[''] before:border-b before:absolute before:h-0 before:left-[0px] before:right-[0px] before:top-[50%] before:border-[#444]">

            <span className="text-[14px] relative p-[10px] bg-white">
              Đăng nhập qua mạng xã hội</span>
          </div>
          <div className='flex gap-[12px]'>
            <Link href="/" className='px-[6px] py-[6px] bg-[#07f] text-white text-[15px] rounded '><i></i>VK ID</Link>
            <Link href="/" className='px-[6px] py-[6px] bg-[#07f] text-white text-[15px] rounded '><i></i>Facebook</Link>
            <Link href="/" className='px-[6px] py-[6px] bg-[#F2F2F2] text-base text-[15px] rounded '><i></i>Google</Link>
            <Link href="/" className='px-[6px] py-[6px] bg-[#000] text-white text-[15px] rounded '><i></i>Yandex</Link>
          </div>
          <h2 className='text-[12px] text-center text-[#9197a3]'>Bằng cách đăng ký, bạn đồng ý
            <Link href="/" className='px-1 hover:underline'>thỏa thuận người dùng</Link>
            và
            <Link href="/" className='px-1 hover:underline'>chính sách bảo mật</Link>
            </h2>
        </form>
      </div>
      </div>
    <Footer />
    

    
    </>

  )
}

