"use client"

import Header from '@/components/layouts/Header'
import Footer from '@/components/layouts/Footer'


import React from 'react'
import Link from 'next/link'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'

export default function page() {

  const initialValues = {
    email: '',
    password: '',
  }
  const handleSubmit = values => {
    console.log(values)
  }
  const validationSchema = Yup.object({
    email: Yup.string().email("email không hợp lệ").required('Trường này là bắt buộc.'),
    password: Yup.string().required('Trường này là bắt buộc.')
  })
  
  return (
    <>
      <Header />
      <div className="">

        <div style={{ backgroundImage: "url('/images/at-auth-bg.png')" }}
          className='m-auto flex flex-col justify-center items-start items-center w-full max-w-[1140px] min-h-[100vh] pt-[100px]'>
        <Formik initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}>

            <Form className='max-w-[375px]  bg-white p-[20px] flex-col space-y-[15px]' >
              <h1 className="text-xl text-[#bdbdbd] text-center">
                <Link className="text-[#444444] pointer-events-none" href="/" >Đăng nhập </Link>
                <span> </span>
                hoặc
                <span> </span>
                <Link className="underline hover:text-[#2f5978]" href="/auth/register">Đăng ký</Link>
              </h1>
              
              <p className='text-[14px] text-[#a94442]'>Tên đăng nhập hoặc mật khẩu không đúng.</p>
              <div>
                <Field type="text" name="email" placeholder="Email" className='text-[14px] w-full h-[34px] pl-[32px] bg-white text-[#555] border-[1px] border-[#ccc] rounded-[4px] outline-none
                focus:border-[#8bdbff] shadow-[inset_1px_1px_5px_rgba(0,0,0,0.3)] inset-shadow-[1px] inset-shadow-[rgba(92, 172, 237, 0.7)]' />
                <ErrorMessage component="p" className='text-[14px] text-[#a94442]' name="email"  />
                {/* <p>Trường này là bắt buộc.</p> */}
              </div>
              <div>
                <Field type="password" name="password"  className='text-[14px] w-full h-[34px] pl-[32px] bg-white text-[#555] border-[1px] border-[#ccc] rounded-[4px] outline-none
                focus:border-[#8bdbff] shadow-[inset_1px_1px_5px_rgba(0,0,0,0.3)] inset-shadow-[1px] inset-shadow-[rgba(92, 172, 237, 0.7)]' />
                <ErrorMessage component="p" className='text-[14px] text-[#a94442]' name="password" />
                {/* <p className='text-[14px] text-[#a94442]'>Trường này là bắt buộc.</p> */}
              </div>
              <div className='flex justify-between'>
                <div className='flex items-center'>
                  <input type="checkbox" className='w-[18px]' />
                  <label className='text-[14px] ml-1'> Lưu đăng nhập</label>
                </div>
                <Link href="/" className='text-[14px] text-[#4582af] hover:underline hover:text-[#2f5978]' >Quên mật khẩu</Link>
              </div>
              <button type="submit" className='w-full px-[10px] py-[4px] bg-[#4582af] text-white rounded'>Đăng nhập</button>
              <div className="relative text-center
              before:content-[''] before:border-b before:absolute before:h-0 before:left-[0px] before:right-[0px] before:top-[50%] before:border-[#444]">

                <span className="text-[14px] relative p-[10px] bg-white">
                  Đăng nhập qua mạng xã hội</span>
              </div>
              <div className='flex gap-[12px] flex-wrap justify-evenly'>
                <Link href="/" className='px-[6px] py-[6px] bg-[#07f] text-white text-[14px] rounded  basis-[35%] grow text-center'><i></i>VK ID</Link>
                <Link href="/" className='px-[6px] py-[6px] bg-[#07f] text-white text-[14px] rounded  basis-[35%] grow text-center'><i></i>Facebook</Link>
                <Link href="/" className='px-[6px] py-[6px] bg-[#F2F2F2] text-base text-[14px] roundel basis-[35%] grow text-center'><i></i>Google</Link>
                <Link href="/" className='px-[6px] py-[6px] bg-[#000] text-white text-[14px] rounded  basis-[35%] grow text-center'><i></i>Yandex</Link>
              </div>
              <h2 className='text-[12px] text-center text-[#9197a3]'>Bằng cách đăng ký, bạn đồng ý
                <Link href="/" className='px-1 hover:underline'>thỏa thuận người dùng</Link>
                và
                <Link href="/" className='px-1 hover:underline'>chính sách bảo mật</Link>
              </h2>
            </Form>
          </Formik>

          {/* <form action="" className='max-w-[375px]  bg-white p-[20px] flex-col space-y-[15px]' >
            <h1 className="text-xl text-[#bdbdbd] text-center">
              <Link className="text-[#444444] pointer-events-none" href="/" >Đăng nhập </Link>
              <span> </span>
              hoặc
              <span> </span>
              <Link className="underline hover:text-[#2f5978]" href="/auth/register">Đăng ký</Link>
            </h1>
            <p className='text-[14px] text-[#a94442]'>Tên đăng nhập hoặc mật khẩu không đúng.</p>
            <div>
              <input placeholder="Email" className='text-[14px] w-full h-[34px] pl-[32px] bg-white text-[#555] border-[1px] border-[#ccc] rounded-[4px] outline-none
              focus:border-[#8bdbff] shadow-[inset_1px_1px_5px_rgba(0,0,0,0.3)] inset-shadow-[1px] inset-shadow-[rgba(92, 172, 237, 0.7)]' type="text" />
              <p className='text-[14px] text-[#a94442]'>Trường này là bắt buộc.</p>
            </div>
            <div>
              <input placeholder="Mật khẩu" className='text-[14px] w-full h-[34px] pl-[32px] bg-white text-[#555] border-[1px] border-[#ccc] rounded-[4px] outline-none
              focus:border-[#8bdbff] shadow-[inset_1px_1px_5px_rgba(0,0,0,0.3)] inset-shadow-[1px] inset-shadow-[rgba(92, 172, 237, 0.7)]' type="password" name="" id="" />
              <p className='text-[14px] text-[#a94442]'>Trường này là bắt buộc.</p>
            </div>
            <div className='flex justify-between'>
              <div className='flex items-center'>
                <input type="checkbox" className='w-[18px]' />
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
            <div className='flex gap-[12px] flex-wrap justify-evenly '>
              <Link href="/" className='px-[6px] py-[6px] bg-[#07f] text-white text-[14px] rounded  basis-[35%] grow text-center'><i></i>VK ID</Link>
              <Link href="/" className='px-[6px] py-[6px] bg-[#07f] text-white text-[14px] rounded  basis-[35%] grow text-center'><i></i>Facebook</Link>
              <Link href="/" className='px-[6px] py-[6px] bg-[#F2F2F2] text-base text-[14px] roundel basis-[35%] grow text-center'><i></i>Google</Link>
              <Link href="/" className='px-[6px] py-[6px] bg-[#000] text-white text-[14px] rounded  basis-[35%] grow text-center'><i></i>Yandex</Link>
            </div>
            <h2 className='text-[12px] text-center text-[#9197a3]'>Bằng cách đăng ký, bạn đồng ý
              <Link href="/" className='px-1 hover:underline'>thỏa thuận người dùng</Link>
              và
              <Link href="/" className='px-1 hover:underline'>chính sách bảo mật</Link>
            </h2>
          </form> */}
        </div>
      </div>
      <Footer />



    </>

  )
}

