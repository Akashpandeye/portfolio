import React from 'react'
import Marquee from 'react-fast-marquee'
import { motion } from "motion/react"

const toolStack = [
  { name: "JavaScript", iconUrl: "https://cdn.simpleicons.org/javascript/F7DF1E" },
  { name: "TypeScript", iconUrl: "https://cdn.simpleicons.org/typescript/3178C6" },
  { name: "C/C++", iconUrl: "https://cdn.simpleicons.org/cplusplus/00599C" },
  { name: "FastAPI", iconUrl: "https://cdn.simpleicons.org/fastapi/009688" },
  { name: "Node.js", iconUrl: "https://cdn.simpleicons.org/nodedotjs/339933" },
  { name: "Express", iconUrl: "https://cdn.simpleicons.org/express/000000" },
  { name: "Kubernetes", iconUrl: "https://cdn.simpleicons.org/kubernetes/326CE5" },
  { name: "Git/GitHub", iconUrl: "https://cdn.simpleicons.org/github/181717" },
  { name: "LangChain", iconUrl: "https://cdn.simpleicons.org/langchain/1C3C3C" },
  { name: "LangGraph", iconUrl: "https://cdn.simpleicons.org/langchain/1C3C3C" },
  { name: "MongoDB", iconUrl: "https://cdn.simpleicons.org/mongodb/47A248" },
  { name: "PineconeDB", iconUrl: "https://cdn.simpleicons.org/pinecone/0C1014" },
  { name: "AWS", iconUrl: "https://cdn.simpleicons.org/amazonaws/232F3E" },
  { name: "Vercel", iconUrl: "https://cdn.simpleicons.org/vercel/000000" },
  { name: "SQL", iconUrl: "https://cdn.simpleicons.org/postgresql/4169E1" },
  { name: "Supabase", iconUrl: "https://cdn.simpleicons.org/supabase/3ECF8E" },
  { name: "Firebase", iconUrl: "https://cdn.simpleicons.org/firebase/FFCA28" },
  { name: "Appwrite", iconUrl: "https://cdn.simpleicons.org/appwrite/F02E65" },
  { name: "Claude Code", iconUrl: "https://cdn.simpleicons.org/anthropic/191919" },
  { name: "Cursor", iconUrl: "https://cdn.simpleicons.org/cursor/000000" },
  { name: "VS Code", iconUrl: "https://cdn.simpleicons.org/visualstudiocode/007ACC" },
];

const About = () => {
  return (
    <motion.div
      id='about'
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className='w-full mt-4'
    >
      <div className='w-full max-w-4xl mx-auto'>
        <p className='text-sm text-stone-500 dark:text-zinc-400 mb-2 text-center font-ovo'>Tools I have used</p>
        <div className='bg-stone-100/70 dark:bg-zinc-900/70 py-4'>
          <Marquee speed={40} gradient={false} pauseOnHover>
            {toolStack.map((tool) => (
              <motion.div
                key={tool.name}
                whileHover={{ y: -2, scale: 1.03 }}
                className='mx-2 inline-flex items-center gap-2 rounded-full bg-stone-50/90 dark:bg-zinc-800/90 px-4 py-2 text-sm font-medium text-stone-700 dark:text-zinc-200'
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={tool.iconUrl} alt={`${tool.name} icon`} className='w-4 h-4 object-contain' />
                {tool.name}
              </motion.div>
            ))}
          </Marquee>
        </div>
      </div>
    </motion.div>
    
  )
}

export default About