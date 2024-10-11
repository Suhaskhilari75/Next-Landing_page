import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className=' hidden lg:block'>

    <div className='container '>
        <div className='flex w-fit text-black mx-auto gap-10 font-medium py-4' > 
       
        <Link className='navbar_link relative' href={"#"}>HOME</Link>
        <Link className='text-slate-600 hover:text-accent hover:underline' href={"#"}>CATEGORY</Link>
        <Link className='text-slate-600 hover:text-accent hover:underline' href={"#"}>MENS</Link>
        <Link className='text-slate-600 hover:text-accent hover:underline' href={"#"}>WOMENS</Link>
        <Link className='text-slate-600 hover:text-accent hover:underline' href={"#"}>JEWELRY</Link>
        <Link className='text-slate-600 hover:text-accent hover:underline' href={"#"}>PERFUME</Link>
        <Link className='text-slate-600 hover:text-accent hover:underline' href={"#"}>BLOG</Link>
        <Link className='text-slate-600 hover:text-accent hover:underline' href={"#"}>HOT OFFERS</Link>
       </div>
    </div>
    </div>
  )
}

export default page