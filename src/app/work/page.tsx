'use client'

import Image, { StaticImageData } from "next/image";
import Navbar from "../components/Navbar";
import { motion } from "motion/react";
import noteTradeImg from "@/assets/image copy.png";
import noHellImg from "@/assets/image.png";

type Project = {
  title: string;
  tagline: string;
  description: string;
  image: StaticImageData;
  imageAlt: string;
  tech: string[];
  liveUrl: string;
  githubUrl: string;
  accent: string;
};

const projects: Project[] = [
  {
    title: "NoHell",
    tagline: "Focus past tutorial hell",
    description:
      "Paste any YouTube tutorial and get AI checkpoints, in-session notes, and recall cards so you actually learn instead of binge-watching.",
    image: noHellImg,
    imageAlt: "NoHell landing preview",
    tech: ["Next.js 15", "React 19", "Clerk", "Supabase", "Groq", "Razorpay", "Tailwind CSS"],
    liveUrl: "https://no-hell.vercel.app/",
    githubUrl: "https://github.com/Akashpandeye/NoHell",
    accent: "from-amber-400/60 via-orange-400/50 to-rose-400/60",
  },
  {
    title: "NoteTrade",
    tagline: "Trading journal",
    description:
      "Upload Zerodha tradebooks, track P&L, and learn from every trade with a clean dashboard, charts, and analytics.",
    image: noteTradeImg,
    imageAlt: "NoteTrade dashboard preview",
    tech: ["Next.js 15", "TypeScript", "Supabase", "Tailwind CSS", "Recharts", "PapaParse"],
    liveUrl: "https://note-trade-murex.vercel.app/",
    githubUrl: "https://github.com/Akashpandeye/note-trade",
    accent: "from-emerald-400/60 via-teal-400/50 to-emerald-500/60",
  },
];

function ExternalIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M14 3h7v7" />
      <path d="M21 3l-9 9" />
      <path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5" />
    </svg>
  );
}

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 .5C5.73.5.78 5.45.78 11.72c0 4.94 3.2 9.13 7.65 10.61.56.1.77-.24.77-.54v-1.9c-3.11.68-3.77-1.5-3.77-1.5-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 1.72 2.63 1.22 3.27.93.1-.73.39-1.22.71-1.5-2.48-.28-5.09-1.24-5.09-5.51 0-1.22.43-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.08 1.14a10.7 10.7 0 0 1 5.62 0c2.14-1.44 3.08-1.14 3.08-1.14.61 1.54.23 2.68.11 2.96.72.78 1.15 1.77 1.15 2.99 0 4.28-2.61 5.22-5.1 5.5.4.34.76 1.02.76 2.06v3.05c0 .3.21.65.78.54 4.45-1.48 7.65-5.67 7.65-10.61C23.22 5.45 18.27.5 12 .5z" />
    </svg>
  );
}

export default function WorkPage() {
  return (
    <>
      <Navbar />
      <main className="relative pt-28 pb-20 min-h-screen bg-stone-50 text-stone-900 dark:bg-zinc-950 dark:text-zinc-100">
        <div className="w-[92%] md:w-[90%] max-w-5xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <p className="text-sm tracking-[0.3em] uppercase text-stone-500 dark:text-zinc-400">
              Selected Work
            </p>
            <h1 className="text-4xl md:text-5xl font-ovo mt-2">Things I&apos;ve built</h1>
            <p className="mt-4 max-w-xl mx-auto text-stone-600 dark:text-zinc-300">
              A small collection of products I designed, built, and shipped end to end.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
            {projects.map((project, idx) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: "easeOut" }}
                whileHover={{ y: -4 }}
                className="group relative rounded-2xl overflow-hidden border border-stone-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900/70 backdrop-blur-sm shadow-[0_2px_16px_-12px_rgba(0,0,0,0.15)] hover:shadow-[0_16px_40px_-20px_rgba(0,0,0,0.25)] dark:shadow-[0_2px_16px_-12px_rgba(0,0,0,0.6)] dark:hover:shadow-[0_20px_48px_-24px_rgba(251,191,36,0.22)] transition-all duration-300"
              >
                <span
                  className={`pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br ${project.accent} opacity-0 group-hover:opacity-60 blur-md transition-opacity duration-500 -z-10`}
                  aria-hidden="true"
                />

                <div className="relative aspect-[16/9] overflow-hidden bg-stone-100 dark:bg-zinc-800">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover object-top transition-transform duration-[600ms] ease-out group-hover:scale-[1.04]"
                    priority={idx === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-4 md:p-5 flex flex-col gap-4">
                  <div>
                    <p className="text-[0.65rem] tracking-[0.2em] uppercase text-stone-500 dark:text-zinc-400 mb-1">
                      {project.tagline}
                    </p>
                    <h2 className="text-xl font-ovo leading-tight">
                      {project.title}
                    </h2>
                    <p className="mt-2 text-[0.85rem] leading-relaxed text-stone-600 dark:text-zinc-300">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center text-[0.7rem] font-medium px-2 py-0.5 rounded-full border border-stone-200 dark:border-zinc-700 bg-stone-50 dark:bg-zinc-800/80 text-stone-700 dark:text-zinc-200 transition-colors duration-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 pt-0.5">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="cursor-pointer inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-stone-900 text-stone-50 hover:bg-stone-800 dark:bg-amber-400 dark:text-stone-950 dark:hover:bg-amber-300 shadow-sm hover:shadow-md transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-amber-400 dark:focus-visible:ring-offset-zinc-900"
                    >
                      Live Demo
                      <ExternalIcon className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="cursor-pointer inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border border-stone-300 dark:border-zinc-700 text-stone-800 dark:text-zinc-100 hover:bg-stone-100 dark:hover:bg-zinc-800 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-stone-400 dark:focus-visible:ring-offset-zinc-900"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      Source
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
