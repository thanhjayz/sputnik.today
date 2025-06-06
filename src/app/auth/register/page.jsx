"use client"
import React from 'react'
import Link from 'next/link'
import Header from '@/components/layouts/Header'
import Footer from '@/components/layouts/Footer'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup"

export default function page() {

    const initialValues = {
      name: "",
      email: "",
      password: "",
    }
    const handleSubmit = values => {
      console.log(values)
    }
    const validationSchema = Yup.object({
      name:  Yup.string().required('Trường này là bắt buộc.'),
      email: Yup.string().email("email không hợp lệ").required('Trường này là bắt buộc.'),
      password: Yup.string().min(8, 'Mật khẩu phải dài hơn 8 kí tự').max(25, 'Mật khẩu phải ngắn hơn 25 kí tự').matches(/[0-9]/, 'Phải có ít nhất một chữ số').required('Trường này là bắt buộc.')
    })
  
  return (
    <>
    <Header />
    <div className="">

        <div style={{ backgroundImage: "url('/images/at-auth-bg.png')" }}
          className='m-0 m-auto flex justify-center items-start  w-[1140px] max-w-[1140px] min-h-[100vh] pt-[100px]'>
        <Formik initialValues={initialValues}
                  onSubmit={handleSubmit}
                  validationSchema={validationSchema}>
        
        <Form action="" className='max-w-[375px]  bg-white p-[20px] flex-col space-y-[15px]' >
          <h1 className="text-xl text-[#bdbdbd] text-center">
          <Link className="underline hover:text-[#444]"  href="/" >Đăng nhập </Link>
          <span> </span>
          hoặc
          <span> </span>
          <Link className="text-[#444] pointer-events-none" href="/">Đăng ký</Link>
          </h1>
          <p className='text-[14px] text-[#a94442] hidden'>Đăng ký không hợp lệ.</p>
          <p className='text-[14px] text-[#a94442] hidden'>Mật khẩu không được dài quá 25 ký tự và không được ít hơn 6 ký tự.</p>
          <div>
            <Field type="text" name="name" placeholder="Họ và tên hoặc bút danh" className='text-[14px] w-full h-[34px] pl-[32px] bg-white text-[#555] border-[1px] border-[#ccc] rounded-[4px] outline-none
          focus:border-[#8bdbff] shadow-[inset_1px_1px_5px_rgba(0,0,0,0.3)] inset-shadow-[1px] inset-shadow-[rgba(92, 172, 237, 0.7)]' />
          {/* <p className='text-[14px] text-[#a94442]'>Trường này là bắt buộc.</p> */}
          <ErrorMessage name="name" component="p" className='text-[14px] text-[#a94442]'  />
          </div>
          <div>
            <Field type="text" name="email" placeholder="Email" className='text-[14px]  w-full h-[34px] pl-[32px] bg-white text-[#555] border-[1px] border-[#ccc] rounded-[4px] outline-none
          focus:border-[#8bdbff] shadow-[inset_1px_1px_5px_rgba(0,0,0,0.3)] inset-shadow-[1px] inset-shadow-[rgba(92, 172, 237, 0.7)]'/>
          {/* <p className='text-[14px] text-[#a94442]'>Trường này là bắt buộc.</p> */}
          <ErrorMessage name="email" component="p" className='text-[14px] text-[#a94442]'  />
          </div>
          <div>
            <Field type="password" name="password" placeholder="Mật khẩu" className='text-[14px]  w-full h-[34px] pl-[32px] bg-white text-[#555] border-[1px] border-[#ccc] rounded-[4px] outline-none
          focus:border-[#8bdbff] shadow-[inset_1px_1px_5px_rgba(0,0,0,0.3)] inset-shadow-[1px] inset-shadow-[rgba(92, 172, 237, 0.7)]' />
          {/* <p className='text-[14px] text-[#a94442]'>Trường này là bắt buộc.</p> */}
          <ErrorMessage name="password" component="p" className='text-[14px] text-[#a94442]'  />
          </div>
            <div className='flex items-start'>
              <input type="checkbox"  className='w-[18px] mt-1 ' />
              <label className='text-[14px] ml-1'>Tôi đồng ý với thỏa thuận người dùng và chính sách bảo mật</label>
            </div>
          <button className='w-full px-[10px] py-[4px] bg-[#4582af] text-white rounded'>Đăng ký</button>
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
      </div>
      </div>
    <Footer />
    

    
    </>

  )
}

