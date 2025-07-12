import React from 'react'
import Image from 'next/image'
import { assets, infoList } from '@/assets/assets'

const About = () => {
  return (
    <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
        <h4 className=' font-ovo text-center mb-2 text-lg' >
            Introduction</h4>
        <h2 className='text-center text-5xl font-ovo '>
            About Me
        </h2>
        <div className='flex flex-col lg:flex-row gap-20 my-20 w-full'>
            <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
                <Image src={assets.user_image} alt="user" className='w-full h-full rounded-3xl' />
            </div>
            <div className='w-full felx-1'>
              <p>
                I'm a software engineer with a passion for building web applications.
                I am a quick learner and I am always looking to improve my skills.
              </p>
              <ul>
                {infoList.map(({icon, iconDark, title, description})=>(
                  <li key={title}>
                    <Image src={icon} alt={title} />
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </li>
                ))}
              </ul>
            </div>
        </div>
    </div>
    
  )
}

export default About