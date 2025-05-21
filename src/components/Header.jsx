import React, { useState } from 'react'
import logo from '../assets/images/logo.png'
import { HiMagnifyingGlass, HiMoon, HiSun } from "react-icons/hi2";

const Header = () => {
    const [toggle, setToggle] = useState(true)
  return (
    <div className='flex items-center p-3'>
      <img src={logo} width={60} height={60}/>
      <div className='flex bg-slate-200 p-2 w-full mx-5 rounded-full items-center'>
        <HiMagnifyingGlass/>
        <input type='text' placeholder='Search Games' className='px-2 bg-transparent outline-none'/>
      </div>
      <div className=''>
        {toggle ? <HiMoon className='text-[35px] bg-slate-200 text-black p-1 rounded-full' onClick={()=> setToggle(false)}/> : <HiSun className='text-[35px] bg-slate-200 text-black p-1 rounded-full' onClick={()=> setToggle(true)}/>}
        
      </div>
    </div>
  )
}

export default Header
