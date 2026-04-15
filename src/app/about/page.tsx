'use client'

import Navbar from "../components/Navbar";
import About from "../components/About";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 min-h-screen bg-stone-50 text-stone-900 dark:bg-zinc-950 dark:text-zinc-100">
        <About />
      </main>
    </>
  );
}
