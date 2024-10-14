import React from "react";
import { IoPersonOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { IoBagHandleOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import Image from "next/image";

const page = () => {
  return (
    <div className="border-b border-gray-300 py-4 flex justify-around align-middle">
        <div className="container sm:flex justify-between items-center">
          <div> <Image src="/favicon.png" alt="logo" height={50} width={50}></Image></div>
      <div className="font-bold text-4xl text-center pb-4 sm:pb-0 text-blackish">Shopify
      </div>
      <div className="w-full sm:w-[300px] md:w-[70%] relative">
        <input type="text" className="border-gray-200 border p-2 px-4 rounded-lg w-full" placeholder="Enter any product name..." />
<CiSearch className="absolute right-0 top-0 mr-3 mt-3 text-gray-400 " size={20}/>
      </div>
      <div className=" hidden lg:flex gap-4 align-middle text-gray-500 text-[30px]">
        <IoPersonOutline className="cursor-pointer" />
        <div className="relative">
        <FaRegHeart className="cursor-pointer" /> 
        <div className="bg-red-600 rounded-full absolute top-0 right-0 text-white w-[18px] h-[18px] text-[12px] grid place-items-center translate-x-1 translate-y-1">10</div>
        </div>
        <div className="relative">
        <IoBagHandleOutline className="cursor-pointer"/>
        <div className="bg-red-600 rounded-full absolute top-0 right-0 text-white w-[18px] h-[18px] text-[12px] grid place-items-center translate-x-1 translate-y-1">10</div>
        </div>
        
      </div>
      </div>
    </div>
  );
};

export default page;
