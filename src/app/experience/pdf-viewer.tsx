"use client";
import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = "/js/pdf.worker.min.mjs";

const resumeUrl = "/akresume.pdf";

const PDFViewer: React.FC = () => {
  const [numPages, setNumPages] = useState<number | null>(null);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  return (
    <div className="flex flex-col items-center">
      <Document
        file={resumeUrl}
        onLoadSuccess={onDocumentLoadSuccess}
        loading={<div className="text-blue-200">Loading PDF...</div>}
        error={<div className="text-red-400">Failed to load PDF.</div>}
      >
        {Array.from(new Array(numPages), (el, index) => (
          <Page
            key={`page_${index + 1}`}
            pageNumber={index + 1}
            width={600}
            renderTextLayer={false}
            renderAnnotationLayer={false}
          />
        ))}
      </Document>
      <a
        href={resumeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition-colors"
      >
        View Full Resume (PDF)
      </a>
    </div>
  );
};

export default PDFViewer;
