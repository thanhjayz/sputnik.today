"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";

//import component
import ProductImage from "@/components/ui/ProductImage";

export default function Page({book}) {
return (
    // * sản phẩm
    <div className="product-container flex flex-col items-center pt-[6px] min-w-[107px] w-[107px] h-fit ">
        <Link href={book.url} className="group w-full "> 
            <ProductImage src={book.imgUrl} />
        </Link>
        <div>
            <Link
            href={book.url}
            className="line-clamp-2 text-[12px] text-center hover:underline"
            >
            {book.title}
            </Link>
            <Link
            href={book.url}
            className="line-clamp-2 text-[12px] text-center text-[#9a938d] hover:underline"
            >
            {book.author}
            </Link>
        </div>
    </div>


    
)}