"use client"
import { title } from "process";
import React from "react";

const Herocomponent = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const slidedata = [
    {
      id: 0,
      img: "/banner1.jpg",
      title: "Trending Items",
      maintitle: "WOMENS LATEST FASHION SALE",
      price: "$50",
    },
    {
      id: 1,
      img: "/banner2.jpg",
      title: "Trending Accessories",
      maintitle: "WOMENS LATEST FASHION SALE",
      price: "$15",
    },
    {
      id: 2,
      img: "/banner3.jpg",
      title: "Sale Offers",
      maintitle: "NEW FASHION SUMMER SALE",
      price: "$30",
    },
  ];

  return (
    <>
      <div>
        <img src="/Images/banner-1.jpg" alt="banner1" />
      </div>
    </>
  );
};

export default Herocomponent;
