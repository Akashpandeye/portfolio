'use client'

import Navbar from "../components/Navbar";
import { workData } from "@/assets/assets";

export default function WorkPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-16 min-h-screen bg-stone-50 text-stone-900 dark:bg-zinc-950 dark:text-zinc-100">
        <div className="w-[92%] md:w-[90%] max-w-6xl mx-auto">
        <h1 className="text-4xl font-ovo text-center mb-3">My Work</h1>
        <p className="text-center text-stone-600 dark:text-zinc-300 mb-10">
          Projects and product work I have built.
        </p>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {workData.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-stone-200 dark:border-zinc-700 p-6 bg-stone-100/80 dark:bg-zinc-900/80"
            >
              <p className="text-sm text-stone-500 dark:text-zinc-300">{item.description}</p>
              <h2 className="text-2xl mt-2 font-semibold">{item.title}</h2>
            </article>
          ))}
        </section>
        </div>
      </main>
    </>
  );
}
