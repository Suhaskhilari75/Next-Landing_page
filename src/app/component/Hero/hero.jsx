"use client";
import React from "react";
import Slider from "react-slick";
import Slide from "../Slides/slides";
const Herocomponent = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
  };
  const slidedata = [
    {
      id: 0,
      img: "/banner-1.jpg",
      title: "Trending Items",
      maintitle: "WOMENS LATEST FASHION SALE",
      price: "$50",
    },
    {
      id: 1,
      img: "/banner-2.jpg",
      title: "Trending Accessories",
      maintitle: "WOMENS LATEST FASHION SALE",
      price: "$15",
    },
    {
      id: 2,
      img: "/banner-3.jpg",
      title: "Sale Offers",
      maintitle: "NEW FASHION SUMMER SALE",
      price: "$30",
    },
  ];

  return (
    <>
      <div>
        <div className="pt-6 lg:pt-0">
          <Slider {...settings}>
            {slidedata.map((item) => (
              <Slide key={item.id}
              img={item.img} 
              title={item.title}
              mainTitle={item.maintitle}
              price={item.price} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Herocomponent;
