'use client'

import Navbar from "../components/Navbar";
import resumePdf from "@/assets/AKASH_PANDEY (1).pdf";
import { motion } from "motion/react";

const SocialIcon = ({ type }: { type: "linkedin" | "github" | "x" | "mail" }) => {
  if (type === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
        <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3zm7 0h3.8v1.7h.1c.5-1 1.8-2 3.7-2 3.9 0 4.7 2.6 4.7 6V21h-4v-5.3c0-1.3 0-2.8-1.8-2.8s-2 1.3-2 2.7V21h-4z" />
      </svg>
    );
  }
  if (type === "github") {
    return (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
        <path d="M12 2C6.5 2 2 6.6 2 12.3c0 4.6 2.8 8.5 6.8 9.9.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.2-3.4-1.2-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.6 2.3 1.1 2.9.8.1-.7.3-1.1.6-1.4-2.2-.3-4.5-1.1-4.5-5 0-1.1.4-2 1-2.8-.1-.2-.4-1.3.1-2.8 0 0 .8-.3 2.9 1a9.6 9.6 0 0 1 5.2 0c2-1.3 2.9-1 2.9-1 .6 1.5.2 2.6.1 2.8.6.8 1 1.7 1 2.8 0 3.9-2.3 4.7-4.6 5 .4.3.7 1 .7 2v3c0 .3.2.6.7.5A10.4 10.4 0 0 0 22 12.3C22 6.6 17.5 2 12 2" />
      </svg>
    );
  }
  if (type === "mail") {
    return (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
        <path d="M2 6a2 2 0 0 1 2-4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm3.5 0L12 11l6.5-5zm-1.5 2v10h16V8l-8 6-8-6z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
      <path d="m18.9 2.3-5.3 6 6.2 8.4h-4.8l-3.9-5.1-4.5 5.1H2.5l5.6-6.4L2 2.3h4.9L10.4 7l4.1-4.7z" />
    </svg>
  );
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-16 min-h-screen bg-stone-50 text-stone-900 dark:bg-zinc-950 dark:text-zinc-100">
        <div className="w-11/12 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-ovo text-center mb-3">Let&apos;s Work Together</h1>
          <p className="text-center text-stone-600 dark:text-zinc-300 mb-10">
            Open for collaborations, product builds, and freelance opportunities.
          </p>

          <div className="grid grid-cols-2 gap-4 auto-rows-auto">
            <motion.a
              whileHover={{ y: -3 }}
              href="mailto:aakashmediaworks@gmail.com"
              className="col-span-2 rounded-2xl border border-stone-200 dark:border-zinc-700 bg-stone-100/80 dark:bg-zinc-900/80 p-6"
            >
              <p className="text-sm text-stone-500 dark:text-zinc-400 mb-1">Email</p>
              <p className="text-xl font-semibold break-all">aakashmediaworks@gmail.com</p>
            </motion.a>

            <motion.a
              whileHover={{ y: -3 }}
              href={resumePdf}
              download
              className="col-span-2 rounded-2xl border border-amber-300/70 bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 text-stone-950 p-6 shadow-[0_0_24px_rgba(251,191,36,0.3)]"
            >
              <p className="text-sm mb-1">Resume</p>
              <p className="text-xl font-semibold">Download My Resume</p>
            </motion.a>

            <motion.a
              whileHover={{ y: -3 }}
              href="https://www.linkedin.com/in/akash-works/"
              target="_blank"
              rel="noopener noreferrer"
              className="col-span-1 rounded-2xl bg-[#0A66C2] text-white p-5 flex flex-col gap-2 hover:bg-[#0959aa] transition-colors"
            >
              <SocialIcon type="linkedin" />
              <span className="font-semibold mt-auto">LinkedIn</span>
            </motion.a>

            <motion.a
              whileHover={{ y: -3 }}
              href="https://github.com/Akashpandeye"
              target="_blank"
              rel="noopener noreferrer"
              className="col-span-1 rounded-2xl bg-[#24292f] text-white p-5 flex flex-col gap-2 hover:bg-black transition-colors"
            >
              <SocialIcon type="github" />
              <span className="font-semibold mt-auto">GitHub</span>
            </motion.a>

            <motion.a
              whileHover={{ y: -3 }}
              href="https://x.com/koragggTKW"
              target="_blank"
              rel="noopener noreferrer"
              className="col-span-1 rounded-2xl bg-black text-white p-5 flex flex-col gap-2 hover:bg-zinc-800 transition-colors"
            >
              <SocialIcon type="x" />
              <span className="font-semibold mt-auto">X (Twitter)</span>
            </motion.a>

            <motion.a
              whileHover={{ y: -3 }}
              href="mailto:aakashmediaworks@gmail.com"
              className="col-span-1 rounded-2xl border border-stone-200 dark:border-zinc-700 bg-stone-100/80 dark:bg-zinc-900/80 p-5 flex flex-col gap-2 hover:bg-stone-200/80 dark:hover:bg-zinc-800/80 transition-colors"
            >
              <SocialIcon type="mail" />
              <span className="font-semibold mt-auto">Mail</span>
            </motion.a>
          </div>
        </div>
      </main>
    </>
  );
}
