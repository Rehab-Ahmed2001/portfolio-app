import React from 'react'
import { motion } from "framer-motion";
import Tabs from '../components/Tabs';

const certificates = [
  {
    title: "Frontend Development Internship",
    issuer: "Route Academy",
    date: "Mar 2025 - Sep 2025",
    url: "https://drive.google.com/file/d/1lvNw_wWUGu4KISLgqY9D0nf-_ymtFROy/view?usp=sharing",
  },
  {
    title: "Web Designer Track",
    issuer: "NTI - National Technology Institute",
    date: "Oct 2024 - Dec 2024",
    url: "https://drive.google.com/file/d/1qL2Dt_GbiUaAdh2iL_bCfuFVT2xZFN1R/view?usp=sharing",
  },
];

export default function Education() {
  return (
    <div className="w-full min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Tabs />

        {/* Faculty Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-12 border border-gray-100"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight text-center">
            Faculty of Navigation Science and Space Technology
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 font-medium text-center">
            Beni-Suef University — 2019 - 2024
          </p>
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03, y: -5 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl p-6 sm:p-8 border border-gray-100"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold text-lg sm:text-xl">
                  {index + 1}
                </div>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                {cert.title}
              </h3>

              <div className="space-y-2 mb-4">
                <p className="text-sm sm:text-base text-gray-600 font-medium">
                  {cert.issuer}
                </p>
                <p className="text-xs sm:text-sm text-gray-500">
                  {cert.date}
                </p>
              </div>

              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-semibold text-sm sm:text-base group"
              >
                View Certificate
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
