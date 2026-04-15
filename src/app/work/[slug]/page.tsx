'use client'

import Navbar from "../../components/Navbar";
import Link from "next/link";
import { workData } from "@/assets/assets";
import { useParams } from "next/navigation";
import { motion } from "motion/react";

export default function WorkDetailPage() {
  const { slug } = useParams();
  const project = workData.find((w) => w.slug === slug);

  if (!project) {
    return (
      <>
        <Navbar />
        <main className="pt-28 pb-16 min-h-screen flex flex-col items-center justify-center bg-stone-50 text-stone-900 dark:bg-zinc-950 dark:text-zinc-100">
          <h1 className="text-3xl font-ovo mb-4">Project not found</h1>
          <Link href="/work" className="text-orange-500 hover:underline">Back to Work</Link>
        </main>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="pt-28 pb-16 min-h-screen flex flex-col items-center justify-center bg-stone-50 text-stone-900 dark:bg-zinc-950 dark:text-zinc-100">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-sm text-stone-500 dark:text-zinc-400 mb-2">{project.description}</p>
          <h1 className="text-4xl md:text-5xl font-ovo mb-6">{project.title}</h1>
          <div className="inline-block rounded-2xl border border-stone-200 dark:border-zinc-700 bg-stone-100/80 dark:bg-zinc-900/80 px-10 py-8">
            <p className="text-lg text-stone-600 dark:text-zinc-300">Updating soon</p>
          </div>
          <div className="mt-8">
            <Link href="/work" className="text-sm text-orange-500 hover:underline font-ovo">&larr; Back to all work</Link>
          </div>
        </motion.div>
      </main>
    </>
  );
}
