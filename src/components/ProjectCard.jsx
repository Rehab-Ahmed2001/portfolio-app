import React from 'react'

export default function ProjectCard({
    image,
    title,
    description,
    live,
    github,
    stack
}) {
    return (
        <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 flex flex-col h-full">

            {/* Image */}
            <div className="relative overflow-hidden h-48 sm:h-52 md:h-56">
                <img
                    src={image}
                    alt={`${title} project screenshot`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Content */}
            <div className="p-5 sm:p-6 flex flex-col flex-grow space-y-4">

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 line-clamp-2">
                    {title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed flex-grow line-clamp-3">
                    {description}
                </p>

                {/* Tools */}
                <div className="pt-2 border-t border-gray-100">
                    <div className="flex flex-wrap gap-2">
                        {stack.map((tool, index) => (
                            <span
                                key={index}
                                className="px-2 sm:px-3 py-1 bg-purple-50 text-gray-700 rounded-full text-xs sm:text-sm font-medium"
                            >
                                {tool.name}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-2">
                    {live && (
                        <a
                            href={live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 text-center px-4 py-2.5 bg-purple-400 text-white rounded-lg font-medium hover:bg-purple-500 transition shadow-sm text-sm sm:text-base"
                        >
                            Live Demo
                        </a>
                    )}

                    <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center px-4 py-2.5 bg-gray-700 text-white rounded-lg font-medium hover:bg-gray-900 transition shadow-sm text-sm sm:text-base"
                    >
                        View Code
                    </a>
                </div>
            </div>
        </div>
    )
}
