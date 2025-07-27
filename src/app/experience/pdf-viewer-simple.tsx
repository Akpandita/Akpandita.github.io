"use client";
import React from "react";

const resumeUrl = "/akresume.pdf";

const PDFViewer: React.FC = () => {
  return (
    <div className="flex flex-col items-center bg-gray-900 min-h-screen p-8">
      <h2 className="text-2xl font-bold text-blue-200 mb-6">Resume</h2>
      
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
      <div className="w-full max-w-4xl h-[800px] border border-gray-600 rounded-lg overflow-hidden">
        <iframe
          src={`${resumeUrl}#toolbar=1&navpanes=1&scrollbar=1`}
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
      
      <p className="text-gray-400 text-sm mt-4 text-center">
        If the PDF doesn&apos;t load properly, try opening it in a new tab or downloading it.
      </p>
    </div>
  );
};

export default PDFViewer;
