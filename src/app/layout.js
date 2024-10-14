import Header from "./component/Header/header"
import HeaderMain from "./component/HeaderMain/headerMain"
import Navbar from "./component/navbar/navbar"
import Foot from './component/Footer/footer'

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./globals.css";
export const metadata = {
  title: "SHOPIFY || Suhas Khilari",
  description: "Generated by create next app",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link href="https://cdn.jsdelivr.net/npm/remixicon/fonts/remixicon.css" rel="stylesheet"/>
      <link rel="icon" href="/favicon.png" />
      {/* <link rel="icon" type="image/png" sizes="32x32" href="/logo.png" /> */}

      </head>
      <body className="container">
        <Header/>
        <HeaderMain/>
        <Navbar/>
        {children}
        <Foot/>


      </body>
    </html>
  );
}
