import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="container pt-6 pb-16 grid-cols-2">
        <h2 className="font-medium text-2xl pb-4">Testimonials</h2>
        <div className=" grid lg:grid-cols-[300px,1fr] gap-4">
          <div className="border border-gray-300 grid place-items-center rounded-2xl p-6 lg:p-0">
            <div className="items-center gap-1 pt-3 text-center flex flex-col">
              <Image
                className="rounded-full inline-block"
                src="/user.jpg"
                alt="user profile"
                height={80}
                width={80}
              />
              <h2 className="text-gray-500 font-black text-[20px]">ELSA DOE</h2>
              <p>CEO & Founder Invision</p>
              <Image
                className="inline-block py-2"
                src="/quotes.svg"
                alt="quotes"
                height={30}
                width={30}
              ></Image>
              <p className="max-w-[200px] text-gray-500">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem
                labore earum veniam, sit quo dicta sunt dolorem maiores placeat
                omnis.
              </p>
            </div>
          </div>
          <div className="bg-red-600 bg-cover bg-[url(/cta-banner.jpg)]  h-[500px] grid place-items-center rounded-2xl ">
            <div className="bg-[#ffffffa2] rounded-xl py-8 sm:px-8 px-2 place-items-center gap-3 min-w-[270px] sm:min-w-[300px] md:min-w-[500px] grid">
              <button className="bg-blackish text-white p-2 rounded-md cursor-pointer">
                25% Discount
              </button>
              <h2 className="font-extrabold text-2xl text-[#272727]">
                Summer Collection
              </h2>
              <p className="text-gray-500 text-[20px]">
                {" "}
                Starting @ $20 <b>Shop Now</b>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
