import React, { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import Sidebar from './Sidebar';

const Header = () => {
  const[sidebartoggle,setSidebartoggle]=useState(false)

  return (
  <div className='sticky top-0 z-50'>
    {sidebartoggle?<div className='bg-black fixed opacity-65 inset-0 z-50 lg:hidden' onClick={()=>setSidebartoggle(false)}></div>:null}
      <div className=' bg-blue-500 text-white p-4 w-full flex items-center font-bold gap-3'>
     <span className='lg:hidden' onClick={()=>setSidebartoggle(true)}> <RxHamburgerMenu size={20}/></span>
    <h1 className='text-xl bg-gradient-to-tr from-gray-800 to-white text-transparent bg-clip-text'>Virtual@lab</h1>
    </div>
    <div className={`z-50 fixed top-0 left-0 h-full lg:hidden w-[60%] sm:w-[40%] md:w-[30%] shadow-xl bg-white transform transition-transform  ${sidebartoggle? " translate-x-0":" -translate-x-full"}`}><Sidebar setSidebartoggle={setSidebartoggle}/></div>
  </div>
  )
}

export default Header
