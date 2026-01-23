import React from 'react'
import profile from "../assets/my-image.png";
export default function ProfileCard() {
    return (
        <div className="flex flex-col sm:flex-row sm:items-end gap-4 -mt-16 sm:-mt-20 relative">
            <img
                src={profile}
                alt="Profile"
                className="w-38 h-38 sm:w-40 sm:h-40 md:w-44 md:h-44 rounded-full border-4 border-white object-cover shadow-lg"
            />
            <div className="pb-2">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                    Rehab A khawas
                </h1>
                <p className="text-gray-600 font-medium text-lg">
                    Frontend Developer | React.js - Next.js
                </p>
            </div>
        </div>
    )
}
