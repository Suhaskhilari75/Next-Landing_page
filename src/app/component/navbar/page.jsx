import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className=' hidden lg:block'>

    <div className='container '>
        <div className='flex w-fit text-black mx-auto gap-10 font-medium py-4' > 
       
        <Link className='navbar_link relative' href={"#"}>HOME</Link>
        <Link className='navbar_link relative' href={"#"}>CATEGORY</Link>
        <Link className='navbar_link relative' href={"#"}>MENS</Link>
        <Link className='navbar_link relative' href={"#"}>WOMENS</Link>
        <Link className='navbar_link relative' href={"#"}>JEWELRY</Link>
        <Link className='navbar_link relative' href={"#"}>PERFUME</Link>
        <Link className='navbar_link relative' href={"#"}>BLOG</Link>
        <Link className='navbar_link relative' href={"#"}>HOT OFFERS</Link>
       </div>
    </div>
    </div>
  )
}

export default page