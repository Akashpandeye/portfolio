import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import resumePdf from '@/assets/AKASH_PANDEY (1).pdf'
import { motion } from "motion/react"
import About from './About'

const SocialIcon = ({ type }: { type: "linkedin" | "github" | "x" }) => {
  if (type === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
        <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3zm7 0h3.8v1.7h.1c.5-1 1.8-2 3.7-2 3.9 0 4.7 2.6 4.7 6V21h-4v-5.3c0-1.3 0-2.8-1.8-2.8s-2 1.3-2 2.7V21h-4z" />
      </svg>
    );
  }
  if (type === "github") {
    return (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
        <path d="M12 2C6.5 2 2 6.6 2 12.3c0 4.6 2.8 8.5 6.8 9.9.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.2-3.4-1.2-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.6 2.3 1.1 2.9.8.1-.7.3-1.1.6-1.4-2.2-.3-4.5-1.1-4.5-5 0-1.1.4-2 1-2.8-.1-.2-.4-1.3.1-2.8 0 0 .8-.3 2.9 1a9.6 9.6 0 0 1 5.2 0c2-1.3 2.9-1 2.9-1 .6 1.5.2 2.6.1 2.8.6.8 1 1.7 1 2.8 0 3.9-2.3 4.7-4.6 5 .4.3.7 1 .7 2v3c0 .3.2.6.7.5A10.4 10.4 0 0 0 22 12.3C22 6.6 17.5 2 12 2" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
      <path d="m18.9 2.3-5.3 6 6.2 8.4h-4.8l-3.9-5.1-4.5 5.1H2.5l5.6-6.4L2 2.3h4.9L10.4 7l4.1-4.7z" />
    </svg>
  );
};

const Header = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className = 'text-center w-11/12 max-w-3xl mx-auto min-h-screen pt-28 md:pt-32 pb-8 flex flex-col justify-center items-center gap-4'
    >
        <motion.div whileHover={{ scale: 1.04 }} transition={{ type: "spring", stiffness: 240, damping: 18 }}>
            <Image src={assets.profile_img} alt="" className='w-40 h-32 md:w-44 md:h-36 rounded-[45%] object-cover object-center'/>
        </motion.div>
        <h3 className='flex flex-item-end gap-2 text-xl md:text-2xl lg:text-3xl font-ovo mb-3'>
                Hello, I&apos;m Akash Pandey <Image src={assets.hand_icon} alt="" className='w-6'/>
            </h3>
            <h1 className= 'text-3xl sm:text-6xl lg:text-[66px] font-ovo '>
                Full Stack Developer
            </h1>
            <p className='max-w-2xl mx-auto font-ovo'>
                I love building products and web applications.
            </p>
            <About />
            <div className='flex flex-col sm:flex-row gap-4 mt-4'>
                <a href={resumePdf} 
                    download className='flex items-center gap-2  px-10 py-3 rounded-full border border-gray-500 dark:border-gray-300'> My Resume
                     <Image src={assets.download_icon} alt="" className='w-4'/></a>
            </div>

            <div className='mt-6 flex flex-wrap justify-center gap-3'>
                <a href="https://www.linkedin.com/in/akash-works/" target="_blank" rel="noopener noreferrer" className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0A66C2] text-white hover:bg-[#0959aa] transition-colors'><SocialIcon type="linkedin" />LinkedIn</a>
                <a href="https://github.com/Akashpandeye" target="_blank" rel="noopener noreferrer" className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#24292f] text-white hover:bg-black transition-colors'><SocialIcon type="github" />GitHub</a>
                <a href="https://x.com/koragggTKW" target="_blank" rel="noopener noreferrer" className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black text-white hover:bg-zinc-800 transition-colors'><SocialIcon type="x" />X</a>
            </div>

        
    </motion.div>
  )
}

export default Header