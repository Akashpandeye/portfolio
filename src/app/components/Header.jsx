import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Header = () => {
  return (
    <div className = ' text-center w-11/12 max-w-3xl mx-auto h-screen flex flex-col justify-center items-center gap-4'>
        <div>
            <Image src={assets.profile_img} alt="" className='w-32 h-32 rounded-full'/>
        </div>
        <h3 className='flex flex-item-end gap-2 text-xl md:text-2xl lg:text-3xl font-ovo mb-3'>
                Hello, I'm Akash Pandey <Image src={assets.hand_icon} alt="" className='w-6'/>
            </h3>
            <h1 className= 'text-3xl sm:text-6xl lg:text-[66px] font-ovo '>
                Full Stack Developer based in India
            </h1>
            <p className='max-w-2xl mx-auto font-ovo'>
                I'm a software engineer with a passion for building web applications.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 mt-4'>

                <a href="#contact"className = 'flex items-center gap-2 text-white px-10 py-3 rounded-full border-white bg-black text-white'>ContactMe <Image src={assets.right_arrow_white} alt="" 
                className='w-4 '/></a>
               
                <a href="/sample-resume.pdf" 
                    download className='flex items-center gap-2  px-10 py-3 rounded-full border border-gray-500'> My Resume
                     <Image src={assets.download_icon} alt="" className='w-4'/></a>



        </div>

        
    </div>
  )
}

export default Header