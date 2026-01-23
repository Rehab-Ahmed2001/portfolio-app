import React from "react";
import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";

export default function ResumeContact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="relative mt-6 overflow-hidden rounded-2xl border border-purple-100 bg-gradient-to-br from-purple-50 to-white p-6 shadow-sm hover:shadow-md transition"
    >
      {/* Decorative blur */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-200 rounded-full blur-3xl opacity-40" />

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center">
            <FileText className="w-5 h-5 text-purple-600" />
          </div>
          <h2 className="text-lg font-bold text-gray-900">
            Resume
          </h2>
        </div>

        <p className="text-sm text-gray-600 mb-5 leading-relaxed">
          Download my resume to learn more about my experience, skills,
          and background.
        </p>

        <a
          href="https://drive.google.com/file/d/1MHwwBsKIm4XYFiQqHDgqitp1dBlv8c-N/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl bg-purple-600 px-5 py-3 text-sm font-semibold text-white hover:bg-purple-700 transition"
        >
          <Download className="w-4 h-4" />
          View Resume
        </a>
      </div>
    </motion.div>
  );
}
