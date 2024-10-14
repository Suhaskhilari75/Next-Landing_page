import React from "react";

const HeaderCom = () => {
  return (
    <div className="border-b-2 border-gray-200 hidden sm:block my-1">
      <div className="container py-2">
        <div className="diplay-flex">
          <div id="header-icons" className="flex text-lg gap-1 ">
            <div className="header-top-icon-wrapper">
              <i className="ri-facebook-circle-fill "></i>
            </div>
            <div className="header-top-icon-wrapper">
              <i className=" ri-twitter-fill"></i>
            </div>
            <div className="header-top-icon-wrapper">
              <i className="ri-instagram-line"></i>
            </div>
            <div className="header-top-icon-wrapper">
              <i className=" ri-linkedin-box-fill"></i>
            </div>
          </div>
          <div id="middle-header" className=" text-gray-500 text-[12px] ">
            
              {" "}
              <b>FREE SHIPPING </b> THIS WEEK ORDER OVER - $55
          </div>
          <div id="right-header " className="">
            <select name="currency" id="" className="text-gray-500 text-[12px] w-[60px] gap-1">
              <option value="usd">USD $</option>
              <option value="eur">EUR &euro;</option>
              <option value="inr">INR &#8377;</option>
            </select>
            <select name="language" className="text-gray-500 text-[12px] w-[60px]">
              <option value="en">English</option>
              <option value="fr">French</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderCom;
