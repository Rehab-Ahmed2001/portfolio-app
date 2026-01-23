import React from 'react'

export default function Footer() {
    return (
        <footer className="w-full bg-purple-50 mt-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
                <div className="text-center space-y-6">
                    {/* Job Title and Email */}
                    <div className="space-y-2">
                        <p className="text-sm sm:text-base text-gray-800 font-medium">
                            Frontend Developer | React.js Developer
                        </p>

                    </div>

                    {/* Social Links */}
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-6">
                        <a
                            href="https://github.com/Rehab-Ahmed2001"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-700 hover:text-gray-900 transition-colors duration-200 text-sm sm:text-base font-medium"
                        >
                            GitHub
                        </a>
                        <span className="hidden sm:inline text-gray-400">|</span>
                        <a
                            href="https://www.linkedin.com/in/rehab-khawas/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-700 hover:text-gray-900 transition-colors duration-200 text-sm sm:text-base font-medium"
                        >
                            LinkedIn
                        </a>
                    </div>

                    {/* Copyright */}
                    <p className="text-xs sm:text-sm text-gray-500 pt-1">
                        © {new Date().getFullYear()} Rehab A Khawas. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}
