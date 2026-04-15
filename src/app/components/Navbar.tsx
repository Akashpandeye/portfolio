import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { assets } from '@/assets/assets'
import { useRef } from 'react'
import { motion } from "motion/react"

const Navbar = () => {
  const sideMenu = useRef<HTMLUListElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldUseDark = savedTheme ? savedTheme === 'dark' : prefersDark;
    setIsDarkMode(shouldUseDark);
    document.documentElement.classList.toggle('dark', shouldUseDark);
  }, []);

  const toggleTheme = () => {
    const next = !isDarkMode;
    setIsDarkMode(next);
    document.documentElement.classList.toggle('dark', next);
    window.localStorage.setItem('theme', next ? 'dark' : 'light');
  };

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
        <nav className='w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 z-50 text-stone-900 dark:text-zinc-100'>
            <div className='flex items-center justify-between'>
            <Link href="/">    
                <Image src={isDarkMode ? assets.logo_dark : assets.logo} className='w-28 cursor-pointer' alt="logo" priority />
            </Link>

            <div className='flex items-center gap-4'>
                <button
                    onClick={toggleTheme}
                    aria-label="Toggle dark mode"
                    className="rounded-full p-2 border border-stone-300 dark:border-zinc-700 hover:bg-stone-200 dark:hover:bg-zinc-800 transition-colors"
                >
                    <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt="theme" className='w-5 md:w-6 '/>
                </button>
                <motion.div
                  whileHover={{ scale: 1.04, y: -1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                  className="hidden md:block relative"
                >
                  <span className="absolute -inset-1 -z-10 rounded-full bg-gradient-to-r from-amber-300/50 via-orange-400/50 to-amber-500/50 blur-xl" />
                  <Link
                    href="/contact"
                    className='lg:flex items-center gap-3 rounded-full px-8 py-2 border border-amber-300/70 bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 text-stone-950 shadow-[0_0_20px_rgba(251,191,36,0.45)] hover:shadow-[0_0_28px_rgba(249,115,22,0.55)] transition-shadow'
                  >
                      Contact Me 
                      <Image src={assets.arrow_icon} alt="arrow-right" className='w-3' width={12} height={12} />
                  </Link>
                </motion.div>
                <button className='md:hidden lg:hidden ml-3 cursor-pointer' onClick={openSideMenu}> 
                    <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt="" className='w-6 h-6 ' />
                </button>
            </div>
            </div>

            <ul className={`hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-8 lg:gap-10 rounded-full px-12 py-3 transition-all duration-300 ${isScrolled ? 'bg-stone-50/55 dark:bg-zinc-800/55 backdrop-blur-md shadow-sm' : 'bg-stone-50/25 dark:bg-zinc-800/25 backdrop-blur-md'}`}>
                <li>
                    <Link className='font-ovo' href="/">Home</Link>    
                </li>
                <li>
                    <Link className='font-ovo' href="/work">My Work</Link>    
                </li>
                <li>
                    <Link className='font-ovo' href="/blogs">Blogs</Link>
                </li>
            </ul>

            {/* mobile menu */}

            <ul ref={sideMenu} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-45 z-50 h-screen bg-stone-100 text-stone-900 dark:bg-zinc-900 dark:text-zinc-100 transition duration-500 '>
                <div className='absolute top-6 right-6' onClick={closeSideMenu}>
                    <Image src={isDarkMode ? assets.close_white : assets.close_black} alt="" className='w-5 cursor-pointer' />
                </div>
                <li>
                    <Link className='font-ovo' href="/" onClick={closeSideMenu}>Home</Link>    
                </li>
                <li>
                    <Link className='font-ovo' href="/work" onClick={closeSideMenu}>My Work</Link>    
                </li>
                <li>
                    <Link className='font-ovo' href="/blogs" onClick={closeSideMenu}>Blogs</Link>
                </li>
                <li>
                    <Link className='font-ovo text-orange-500' href="/contact" onClick={closeSideMenu}>Contact Me</Link>
                </li>
            </ul>

        </nav>
    </>
  )
}

export default Navbar 