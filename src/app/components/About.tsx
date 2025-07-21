import React from 'react'
import Image from 'next/image'
import { assets, infoList } from '@/assets/assets'
import {toolsData} from '@/assets/assets'


const About = () => {
  return (
    <div id='about' className='w-full px-4 md:px-16 py-10 scroll-mt-20'>
        <h4 className=' font-ovo text-center mb-2 text-lg' >
            Introduction</h4>
        <h2 className='text-center text-5xl font-ovo '>
            About Me
        </h2>
        <div className='flex flex-col lg:flex-row gap-10 my-8 w-full items-center justify-center max-w-5xl mx-auto'>
            <div className='w-64 sm:w-80 rounded-3xl max-w-none mx-auto'>
                <Image src={assets.user_image} alt="user" className='w-full h-full rounded-3xl ' />
            </div>
            <div className='w-full flex-1 flex flex-col items-start max-w-2xl'>
              <p className='max-w-xl mb-6'>
                I'm a software engineer with a passion for building web applications.
                I am a quick learner and I am always looking to improve my skills.
              </p>
              <ul className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-6 w-full max-w-2xl'>
                {infoList.map(({icon, iconDark, title, description})=>(
                  <li key={title} className="border-[0.5px] border-gray-400 rounded-xl cursor-pointer
  hover:bg-lighthover hover:translate-y-1 duration-300 hover:shadow-md hover:shadow-black">
                    <Image src={icon} alt={title} className='w-7 mt-3 mx-1 md:'/>
                    <h3 className='font-semibold my-4 text-gray-700 m-1'>{title}</h3>
                    <p className='text-gray-600 text-sm m-1'>{description}</p>
                  </li>
                ))}
              </ul>
              <h4 className = " my-6 text-gray-600 font-ovo ">Tools I use</h4>
              <ul className='flex flex-wrap gap-3 justify-center sm:gap-5'>
                {toolsData.map(({tool,index})=>(
                  <li key ={index}>
                    <Image src={tool} alt="tool" className='w-5 sm:w-7'/>
                  </li>
                  
                ))}
              </ul>
            </div>
        </div>
    </div>
    
  )
}

export default About