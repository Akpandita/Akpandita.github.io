"use client";
import React, { useState, useEffect } from "react";

const PDFViewer = () => {
  const [isClient, setIsClient] = useState(false);
  const [mounted, setMounted] = useState(false);
  const resumeUrl = "/akresume.pdf";

  useEffect(() => {
    setIsClient(true);
    setMounted(true);
    console.log("PDFViewer mounted, resumeUrl:", resumeUrl);
  }, []);

  console.log("PDFViewer render - isClient:", isClient, "mounted:", mounted);

  if (!isClient || !mounted) {
    return <div className="text-blue-200">Loading PDF viewer...</div>;
  }

  return (
    <div className="flex flex-col items-center">
      <div className="mb-6 flex flex-col sm:flex-row gap-4 items-center">
        <a
          href={resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition-colors text-center min-w-[150px]"
        >
          View Resume
        </a>
        <a
          href={resumeUrl}
          download="Akanksha_Resume.pdf"
          className="inline-block px-6 py-3 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition-colors text-center min-w-[150px]"
        >
          Download PDF
        </a>
      </div>
      
      {/* Embedded PDF viewer for browsers that support it */}
      <div className="w-full h-[900px] border border-gray-600 rounded-lg overflow-hidden">
        <iframe
          src={`${resumeUrl}#toolbar=0&navpanes=0&scrollbar=0&zoom=FitH&view=FitH`}
          width="100%"
          height="100%"
          className="border-0"
          title="Resume PDF"
        >
          <p className="text-blue-200 p-4">
            Your browser doesn&apos;t support PDF viewing. 
            <a href={resumeUrl} className="text-blue-400 hover:underline ml-1">
              Click here to download the PDF
            </a>
          </p>
        </iframe>
      </div>
      
      <p className="text-gray-300 text-sm mt-4 text-center">
        If the PDF doesn&apos;t load properly, try opening it in a new tab or downloading it.
      </p>
    </div>
  );
};

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
