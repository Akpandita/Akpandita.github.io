"use client";
import React from "react";
import dynamic from "next/dynamic";

const PDFViewer = dynamic(() => import("./pdf-viewer"), { ssr: false });

const ExperienceSection: React.FC = () => {
  return (
    <section
      id="experience"
      className="my-8 p-8 rounded-2xl shadow-xl bg-black/80 backdrop-blur-md border border-white/20 text-white"
    >
      <h2 className="text-3xl font-bold mb-4 text-blue-300">Experience</h2>
      <PDFViewer />
    </section>
  );
};

export default ExperienceSection;
