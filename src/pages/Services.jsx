import React from 'react'
import { motion } from "framer-motion"
import { Code, Rocket } from "lucide-react"
import Tabs from '../components/Tabs'

const services = [
    {
        id: 1,
        title: "Front-End Development",
        description:
            "Building responsive, fast, and modern web interfaces using React.js, Next.js, and Tailwind CSS.",
        icon: Code,
    },
    {
        id: 2,
        title: "Technical SEO Improvements",
        description:
            "Improving SEO from the front-end side by optimizing performance, accessibility, and website structure.",
        icon: Rocket,
    },
]

export default function Services() {
    return (
        <section className="w-full min-h-screen">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

                <Tabs />

                {/* Section Header */}
                <div className="text-center mt-10 mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                        Services
                    </h2>
                    <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
                        What I can help you with as a Frontend Developer
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                    {services.map((service, index) => {
                        const Icon = service.icon
                        return (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                whileHover={{ y: -8 }}
                                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl p-6 sm:p-8 border border-gray-100"
                            >
                                {/* Icon */}
                                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-purple-100 text-purple-600 mb-5">
                                    <Icon className="w-7 h-7" />
                                </div>

                                {/* Title */}
                                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                                    {service.title}
                                </h3>

                                {/* Description */}
                                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                    {service.description}
                                </p>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

