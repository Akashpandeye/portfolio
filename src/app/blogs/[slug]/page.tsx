'use client'

import Navbar from "../../components/Navbar";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "motion/react";
import { useState } from "react";

const blogItems = [
  {
    title: "How I Build Full Stack Projects",
    excerpt: "My process for shipping reliable features across frontend and backend.",
    date: "16 Apr 2026",
    time: "10:30 AM",
    slug: "how-i-build-full-stack-projects",
  },
  {
    title: "What I Learned From Building Portfolio Projects",
    excerpt: "Lessons from real projects and what I would improve next.",
    date: "11 Apr 2026",
    time: "07:15 PM",
    slug: "what-i-learned-from-building-portfolio-projects",
  },
  {
    title: "Clean UI Patterns for Developer Portfolios",
    excerpt: "Simple design patterns that improve clarity and conversion.",
    date: "03 Apr 2026",
    time: "05:40 PM",
    slug: "clean-ui-patterns-for-developer-portfolios",
  },
];

function ShareBar({ title }: { title: string }) {
  const [copied, setCopied] = useState(false);
  const url = typeof window !== "undefined" ? window.location.href : "";

  const copyLink = () => {
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const shareX = () => {
    window.open(
      `https://x.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
      "_blank"
    );
  };

  const shareLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      "_blank"
    );
  };

  const nativeShare = () => {
    if (navigator.share) {
      navigator.share({ title, url });
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-3 mt-8">
      <span className="text-sm text-stone-500 dark:text-zinc-400 mr-1">Share:</span>
      <button
        onClick={copyLink}
        className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-full border border-stone-300 dark:border-zinc-600 hover:bg-stone-200 dark:hover:bg-zinc-800 transition-colors"
      >
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
          <path d="M13.828 10.172a4 4 0 0 0-5.656 0l-4 4a4 4 0 1 0 5.656 5.656l1.102-1.101m-.758-4.899a4 4 0 0 0 5.656 0l4-4a4 4 0 0 0-5.656-5.656l-1.1 1.1" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        {copied ? "Copied!" : "Copy link"}
      </button>
      <button
        onClick={shareX}
        className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-full bg-black text-white hover:bg-zinc-800 transition-colors"
      >
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
          <path d="m18.9 2.3-5.3 6 6.2 8.4h-4.8l-3.9-5.1-4.5 5.1H2.5l5.6-6.4L2 2.3h4.9L10.4 7l4.1-4.7z" />
        </svg>
        Post on X
      </button>
      <button
        onClick={shareLinkedIn}
        className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-full bg-[#0A66C2] text-white hover:bg-[#0959aa] transition-colors"
      >
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
          <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3zm7 0h3.8v1.7h.1c.5-1 1.8-2 3.7-2 3.9 0 4.7 2.6 4.7 6V21h-4v-5.3c0-1.3 0-2.8-1.8-2.8s-2 1.3-2 2.7V21h-4z" />
        </svg>
        Share on LinkedIn
      </button>
      {typeof navigator !== "undefined" && "share" in navigator && (
        <button
          onClick={nativeShare}
          className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-full border border-orange-300 text-orange-600 dark:text-orange-400 hover:bg-orange-50 dark:hover:bg-orange-500/10 transition-colors"
        >
          <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/>
            <polyline points="16 6 12 2 8 6"/>
            <line x1="12" y1="2" x2="12" y2="15"/>
          </svg>
          Share
        </button>
      )}
    </div>
  );
}

export default function BlogDetailPage() {
  const { slug } = useParams();
  const blog = blogItems.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <>
        <Navbar />
        <main className="pt-28 pb-16 min-h-screen flex flex-col items-center justify-center bg-stone-50 text-stone-900 dark:bg-zinc-950 dark:text-zinc-100">
          <h1 className="text-3xl font-ovo mb-4">Blog not found</h1>
          <Link href="/blogs" className="text-orange-500 hover:underline">Back to Blogs</Link>
        </main>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="pt-28 pb-16 min-h-screen bg-stone-50 text-stone-900 dark:bg-zinc-950 dark:text-zinc-100">
        <div className="w-[92%] md:w-[90%] max-w-3xl mx-auto">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/blogs" className="text-sm text-orange-500 hover:underline font-ovo">&larr; All blogs</Link>

            <h1 className="text-3xl md:text-4xl font-ovo mt-6 mb-3">{blog.title}</h1>
            <p className="text-sm text-stone-500 dark:text-zinc-400 mb-8">
              {blog.date} at {blog.time}
            </p>

            <div className="rounded-2xl border border-stone-200 dark:border-zinc-700 bg-stone-100/80 dark:bg-zinc-900/80 p-8">
              <p className="text-lg text-stone-600 dark:text-zinc-300 leading-relaxed">
                {blog.excerpt}
              </p>
              <p className="text-stone-500 dark:text-zinc-400 mt-6">Full article coming soon.</p>
            </div>

            <ShareBar title={blog.title} />
          </motion.article>
        </div>
      </main>
    </>
  );
}
