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
  }
  const handleSubmit = values => {
    console.log(values)
  }
  const validationSchema = Yup.object({
    email: Yup.string().email("email không hợp lệ").required('Bạn cần điền vào trường này.'),
  })

  return (
    <>
      <Header />
      <div className="">

        <div style={{ backgroundImage: "url('/images/at-auth-bg.png')" }}
          className='m-auto flex flex-col justify-center items-start items-center w-full max-w-[1140px] min-h-[100vh] pt-[100px]'>
        

            <div action="" className='max-w-[375px]  bg-white p-[20px] flex-col space-y-[15px]' >
              <h1 className="text-xl text-center  text-[#595959] pointer-events-none">Khôi phục mật khẩu
              </h1>
              <div className='icon success animate flex justify-center'>
                <div className=' bg-slate-600 rounded-full p-1'><div className='w-[70px] h-[70px] bg-white rounded-full'></div></div>
              </div>
              <div>
                <p className='text-[15px] text-[#666666]'>Một email có liên kết đặt lại mật khẩu đã được gửi đến địa chỉ email của bạn.</p>
              <p className='text-[16px] text-[#666666] font-semibold'>thanhjayz01@gmail.com</p>
              </div>
            </div>
          

        </div>
      </div>
      <Footer />



    </>

  )
}

