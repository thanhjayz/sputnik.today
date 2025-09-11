
import React from "react";
import Link from "next/link";
import Image from "next/image";
//import component
import Ribbon from "@/components/ui/Ribbon";

//import stylte
import "./style.css"


export default function Page({ src }) {
return (
<>
    <div className=" img-container relative w-full min-w-[75px] aspect-[0.67]">
        <Ribbon/>
        <img
            className="w-full   object-cover rounded-tr-md rounded-br-md border-[1px] border-[#d5d5d5]"
            src={src}
            alt="Ảnh thường"
            />
       
    </div>    
</>
);}
