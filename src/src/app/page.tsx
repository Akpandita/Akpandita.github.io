"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AboutSection from "./about/page";
import WorkSection from "./work/page";
import EducationSection from "./education/page";
import ContactSection from "./contact/page";

export default function Home() {
  return (
    <div
      id="wrapper"
      className="min-h-screen flex flex-col items-center relative overflow-x-hidden"
    >
      {/* Dynamic animated background */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 animate-gradient bg-[length:400%_400%]"
        style={{
          background:
            'linear-gradient(120deg, #0f2027, #2c5364, #1c92d2, #f2fcfe, #1c92d2, #2c5364, #0f2027)',
          opacity: 0.9,
        }}
      />
      {/* Header */}
      <motion.header
        id="header"
        className="w-full max-w-4xl mx-auto py-10 flex flex-col items-center rounded-2xl shadow-xl bg-black/60 backdrop-blur-md border border-white/20 mt-8 mb-4"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="logo mb-4 flex items-center gap-3">
          <span className="icon fa-diamond text-5xl text-blue-400 drop-shadow-lg" aria-hidden="true"></span>
          <span className="text-2xl font-bold tracking-tight text-white">Akshay Pandita</span>
        </div>
        <div className="content text-center">
          <div className="inner">
            <h1 className="text-4xl font-extrabold mb-2 tracking-tight text-white">Software Engineer Portfolio</h1>
            <p className="mb-2 text-lg text-blue-200 font-medium">Hi! I&apos;m Akshay, a passionate Software Engineer and IT student at NITK Surathkal.<br />
              I love competitive coding, Android &amp; web development, and building impactful projects.</p>
          </div>
        </div>
        <nav className="mt-6">
          <ul className="flex flex-wrap gap-6 justify-center text-lg font-semibold">
            <li><a href="#about" className="hover:text-blue-400 transition-colors text-white">About</a></li>
            <li><a href="#work" className="hover:text-blue-400 transition-colors text-white">Work</a></li>
            <li><a href="#education" className="hover:text-blue-400 transition-colors text-white">Education</a></li>
            <li><a href="#contact" className="hover:text-blue-400 transition-colors text-white">Contact</a></li>
          </ul>
        </nav>
      </motion.header>

      {/* Main Content */}
      <main id="main" className="w-full max-w-4xl mx-auto flex-1 px-4">
        <AboutSection />
        <WorkSection />
        <EducationSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <footer id="footer" className="w-full py-4 text-center text-gray-500">
        <p className="copyright">&copy;Design: Akshay Pandita.</p>
      </footer>
    </div>
  );
}
