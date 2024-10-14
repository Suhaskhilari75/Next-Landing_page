import React from "react";

const page = () => {
  return (
    
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <p className="text-gray-400">
                Shopify is  committed to providing the best products and
                services to our customers.
              </p>
            </div>

            <div className=" gap-3 ">
              <h3 className="text-lg font-semibold mb-4">Quick Links </h3>
              <ul className="flex content-around gap-3">
                <li className="mb-2">
                  <a href="#" className="text-gray-400 hover:text-blue-400">
                    Home
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-gray-400 hover:text-blue-400">
                    Products
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-gray-400 hover:text-blue-400">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-blue-400">
                    About
                  </a>
                </li>
              </ul>
            </div>
            <div>
           <p className="text-gray-400">   
           All Rights Reserved 2024 ©Shopify Suhas Khilari </p>
            </div>
          </div>
        </div>
      </footer>
    
  );
};

export default page;
