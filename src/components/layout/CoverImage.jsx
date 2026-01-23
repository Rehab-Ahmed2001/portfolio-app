import React from 'react'
import cover from "../../assets/cdf2e5ad46f5f983f795fa5c9cd56357.jpg"
import { motion } from "framer-motion";
export default function CoverImage() {
    return (
        <div className="relative w-full h-48 sm:h-64 md:h-72 lg:h-80 overflow-hidden rounded-2xl shadow-lg">

            {/* Cover Image */}
            <img
                src={cover}
                alt="Cover"
                className="w-full h-full object-cover object-center"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
            <div className="absolute top-1/6 right-8 sm:right-12 md:right-16 -translate-y-1/2 px-6 py-3 rounded-xltext-white">
            </div>
        </div>
    )
}
