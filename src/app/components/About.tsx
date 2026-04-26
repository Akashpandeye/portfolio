import React from 'react'
import Marquee from 'react-fast-marquee'
import { motion } from "motion/react"

const toolStack = [
  { name: "JavaScript", iconUrl: "/tool-icons/javascript.svg" },
  { name: "TypeScript", iconUrl: "/tool-icons/typescript.svg" },
  { name: "C/C++", iconUrl: "/tool-icons/cplusplus.svg" },
  { name: "FastAPI", iconUrl: "/tool-icons/fastapi.svg" },
  { name: "Node.js", iconUrl: "/tool-icons/nodejs.svg" },
  { name: "Express", iconUrl: "/tool-icons/express.svg" },
  { name: "Kubernetes", iconUrl: "/tool-icons/kubernetes.svg" },
  { name: "Git/GitHub", iconUrl: "/tool-icons/github.svg" },
  { name: "LangChain", iconUrl: "/tool-icons/langchain.svg" },
  { name: "LangGraph", iconUrl: "/tool-icons/langchain.svg" },
  { name: "MongoDB", iconUrl: "/tool-icons/mongodb.svg" },
  { name: "PineconeDB", iconUrl: "/tool-icons/pinecone.png" },
  { name: "AWS", iconUrl: "/tool-icons/aws.png" },
  { name: "Vercel", iconUrl: "/tool-icons/vercel.svg" },
  { name: "SQL", iconUrl: "/tool-icons/postgresql.svg" },
  { name: "Supabase", iconUrl: "/tool-icons/supabase.svg" },
  { name: "Firebase", iconUrl: "/tool-icons/firebase.svg" },
  { name: "Appwrite", iconUrl: "/tool-icons/appwrite.svg" },
  { name: "Claude Code", iconUrl: "/tool-icons/anthropic.svg" },
  { name: "Cursor", iconUrl: "/tool-icons/cursor.svg" },
  { name: "VS Code", iconUrl: "/tool-icons/vscode.png" },
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
        <p className='text-sm text-stone-500 dark:text-zinc-400 mb-2 text-center font-ovo'>Tools and Technologies I have used</p>
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