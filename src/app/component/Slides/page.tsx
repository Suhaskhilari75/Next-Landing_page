import React from "react";
interface propsType {
    img: string;
    title: string;
    mainTitle: string;
    price: number;
  }
  
const page:React.FC<propsType> = ({img,title,price,mainTitle}) => {
  return (
    <div className="outline-none border-none relative">
        <div className="absolute left-[30px] md:left-[70px]"></div>
    </div> 
  )
}

export default page;