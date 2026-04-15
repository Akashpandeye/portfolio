'use client'

import Navbar from "../components/Navbar";

const blogItems = [
  {
    title: "How I Build Full Stack Projects",
    excerpt: "My process for shipping reliable features across frontend and backend.",
    date: "16 Apr 2026",
    time: "10:30 AM",
  },
  {
    title: "What I Learned From Building Portfolio Projects",
    excerpt: "Lessons from real projects and what I would improve next.",
    date: "11 Apr 2026",
    time: "07:15 PM",
  },
  {
    title: "Clean UI Patterns for Developer Portfolios",
    excerpt: "Simple design patterns that improve clarity and conversion.",
    date: "03 Apr 2026",
    time: "05:40 PM",
  },
];

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

        <section className="space-y-4">
          {blogItems.map((blog) => (
            <article key={blog.title} className="rounded-2xl border border-stone-200 dark:border-zinc-700 p-6 bg-stone-100/80 dark:bg-zinc-900/80">
              <h2 className="text-2xl font-semibold mb-2">{blog.title}</h2>
              <p className="text-sm text-stone-500 dark:text-zinc-400 mb-2">
                {blog.date} at {blog.time}
              </p>
              <p className="text-stone-600 dark:text-zinc-300">{blog.excerpt}</p>
            </article>
          ))}
        </section>
        </div>
      </main>
    </>
  );
}
