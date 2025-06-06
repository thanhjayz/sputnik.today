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
        <Formik initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}>

            <Form action="" className='max-w-[375px]  bg-white p-[20px] flex-col space-y-[15px]' >
              <h1 className="text-xl text-center  text-[#595959] pointer-events-none">Khôi phục mật khẩu
              </h1>
              <div>
                <p className='text-[14px] text-[#a94442]'>Vui lòng xác nhận rằng bạn không phải là người máy.</p>
                <p className='text-[14px] text-[#a94442]'>Không tìm thấy tài khoản nào có địa chỉ email này.</p>
            </div>
            <p className='text-[15px] text-[#555555]'>Để đặt lại mật khẩu, hãy nhập địa chỉ email bạn đã sử dụng để đăng ký tài khoản của mình.</p>
              
              <div>
                <Field type="text" name="email" placeholder="Email" className='text-[14px] w-full h-[34px] pl-[32px] bg-white text-[#555] border-[1px] border-[#ccc] rounded-[4px] outline-none
                focus:border-[#8bdbff] shadow-[inset_1px_1px_5px_rgba(0,0,0,0.3)] inset-shadow-[1px] inset-shadow-[rgba(92, 172, 237, 0.7)]' />
                <ErrorMessage component="p" className='text-[14px] text-[#a94442]' name="email"  />
                {/* <p>Trường này là bắt buộc.</p> */}
              </div>
                <div className=''>
                  <input type="checkbox" className='w-[18px]' />
                  <label className='text-[14px] ml-1'> Captcha </label>
                </div>
                
              <button type="submit" className='w-full px-[10px] py-[4px] bg-[#4582af] text-white rounded'>Tiếp tục</button>
              
            </Form>
          </Formik>

        </div>
      </div>
      <Footer />



    </>

  )
}

