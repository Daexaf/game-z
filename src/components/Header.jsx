import React, { useContext, useEffect, useState } from 'react'
import logo from '../assets/images/logo.png'
import { HiMagnifyingGlass, HiMoon, HiSun } from "react-icons/hi2";
import { ThemeContext } from '../context/ThemeContext';

const Header = () => {
    const [toggle, setToggle] = useState(true)
    const {theme, setTheme} = useContext(ThemeContext)

    useEffect(()=>{
        console.log("Theme", theme)
    }, [])
  return (
    <div className='flex items-center p-3'>
      <img src={logo} width={60} height={60}/>
      <div className='flex bg-slate-200 p-2 w-full mx-5 rounded-full items-center'>
        <HiMagnifyingGlass/>
        <input type='text' placeholder='Search Games' className='px-2  bg-transparent outline-none w-full'/>
      </div>
      <div className=''>
        {theme == 'light' ? <HiMoon className='text-[35px] bg-slate-200 text-black p-1 rounded-full' onClick={()=> setTheme('dark')}/> : <HiSun className='text-[35px] bg-slate-200 text-black p-1 rounded-full' onClick={()=> setTheme('light')}/>}
        
      </div>
    </div>
  )
}

export default Header
