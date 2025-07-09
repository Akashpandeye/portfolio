import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import logo from '../../assets/logo.png'
import arrowIcon from '../../assets/arrow-icon.png'
import header_bg_color from '../../assets/header_bg_color.png'
import {assets} from '@/assets/assets'
import { useRef } from 'react'



const Navbar = () => {
    
  const sideMenu = useRef<HTMLUListElement>(null);

  const openSideMenu = () => {
    if (sideMenu.current) {
      sideMenu.current.style.transform = 'translateX(-16rem)';
    }
  }
  const closeSideMenu = () => {
    if (sideMenu.current) {
      sideMenu.current.style.transform = 'translateX(16rem)';
    }
  }

  return (
    <>
    <div className='top-0 right-0 fixed w11/12 -z-10 translate-y-[-80%]'>
        <Image src={assets.header_bg_color} alt="" className='w-full h-full object-cover'/>
    </div>
        <nav className='w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 justify-between flex items-center z-50'>
            <a href="#top">    
                <Image src={logo} className='w-28 cursor-pointer mr-14' alt="logo" width={100} height={100} />
            </a>
            <ul className='hidden md:flex lg:flex-row items-center gap-8 lg:gap-10  
            rounded-full  px-12 py-3 bg-white shadow-sm bg-opacity-50 backdrop-blur-sm'>
                <li>
                    <a className='font-ovo' href="#top">Home</a>    
                </li>
                <li>
                    <a className='font-ovo' href="#about">About</a>
                </li>
                <li>
                    <a className='font-ovo' href="#work">My Work</a>    
                </li>
                <li>
                    <a className='font-ovo' href="#contact">Contact</a>
                </li>
            </ul>

            <div className='flex items-center gap-4 pl-10  '>
                <button>
                    <Image src={assets.moon_icon} alt="" className='w-5 md:w-6'/>
                </button>
                <a href="#contact" className='hidden md:flex lg:flex items-center gap-3 rounded-full px-10 py-2.5 ml-4 border border-gray-300'>
                    Contact Me 
                    <Image src={arrowIcon} alt="arrow-right" className='w-3' width={12} height={12} />

                </a>
                <button className='md:hidden lg:hidden ml-3 cursor-pointer' onClick={openSideMenu}> 
                    <Image src={assets.menu_black} alt="" className='w-6 h-6 ' />
                </button>
            </div>

            {/* mobile menu */}

            <ul ref={sideMenu} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50  transition duration-500 '>
                <div className='absolute top-6 right-6' onClick={closeSideMenu}>
                    <Image src={assets.close_black} alt="" className='w-5 cursor-pointer' />
                </div>
                <li>
                    <a className='font-ovo' href="#top" onClick={closeSideMenu}>Home</a>    
                </li>
                <li>
                    <a className='font-ovo' href="#about" onClick={closeSideMenu}>About</a>
                </li>
                <li>
                    <a className='font-ovo' href="#work" onClick={closeSideMenu}>My Work</a>    
                </li>
                <li>
                    <a className='font-ovo' href="#contact" onClick={closeSideMenu}>Contact</a>
                </li>
            </ul>

        </nav>
    </>
  )
}

export default Navbar 