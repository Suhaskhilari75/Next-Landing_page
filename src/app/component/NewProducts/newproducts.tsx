import React from "react";
import ProductCard from '../ProductCard/productdata';
const productData = [
  {
    img: "/jacket-1.jpg",
    title: " JACKET",
    desc: "MEN Yarn Fleece Full-Zip Jacket",
    rating: 3,
    price: "45.00",
    MRP:"100.00"
  },
  {
    img: "/skirt-1.jpg",
    title: "SKIRT",
    desc: "Black Floral Wrap Midi Skirt",
    rating: 5,
    price: "55.00",
    MRP:"120.00"

  },
  {
    img: "/party-wear-1.jpg",
    title: "PARTY WEAR",
    desc: "Women's Party Wear Shoes",
    rating: 3,
    price: "25.00",
    MRP:"150.00"

  },
  {
    img: "/shirt-1.jpg",
    title: "SHIRT",
    desc: "Pure Garment Dyed Cotton Shirt",
    rating: 4,
    price: "45.00",
    MRP:"200.00"

  },
  {
    img: "/sports-1.jpg",
    title: "SPORTS",
    desc: "Trekking & Running Shoes - Black",
    rating: 3,
    price: "58.00",
    MRP:"300.00"

  },
  {
    img: "/watch-1.jpg",
    title: "WATCH",
    desc: "Smart Watches Vital Plus",
    rating: 4,
    price: "100.00",
    MRP:"250.00"

  },
  {
    img: "/watch-2.jpg",
    title: "WATCHES",
    desc: "Pocket Watch Leather Pouch",
    rating: 4,
    price: "120.00",
    MRP:"200.00"

  },
];

const NewProductsCom = () => {
  return (
    <div>
      <div className="container pt-16">
        <h2 className="font-medium pb-4 text-2xl">New Products</h2>
        <div
          className="grid grid-cols-1 place-items-center 
        sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10 "
        >
          
            {productData.map((item, index) => (
              <ProductCard key={index}
              img={item.img}
              title={item.title}
              desc={item.desc}
              rating={item.rating}
              price={item.price}
              MRP={item.MRP} />

            ))}
          
        </div>
      </div>
    </div>
  );
};

export default NewProductsCom;
