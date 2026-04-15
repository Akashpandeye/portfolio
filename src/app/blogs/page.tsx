'use client'

import Navbar from "../components/Navbar";
import { motion } from "motion/react";

export default function BlogsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-16 min-h-screen bg-stone-50 text-stone-900 dark:bg-zinc-950 dark:text-zinc-100">
        <div className="w-[92%] md:w-[90%] max-w-6xl mx-auto">
        <h1 className="text-4xl font-ovo text-center mb-3">Blogs</h1>
        <p className="text-center text-stone-600 dark:text-zinc-300 mb-10">
          Writing on development, product building, and design.
        </p>

        <div className="flex items-center justify-center py-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-stone-200 dark:border-zinc-700 bg-stone-100/80 dark:bg-zinc-900/80 px-12 py-10 text-center"
          >
            <p className="text-2xl font-ovo text-stone-600 dark:text-zinc-300">Updating Soon</p>
          </motion.div>
        </div>
        </div>
      </main>
    </>
  );
}
