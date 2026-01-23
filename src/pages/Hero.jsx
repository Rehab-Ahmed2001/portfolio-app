import React from 'react'
import Tabs from '../components/Tabs'
import Skills from '../components/Skills'
import About from '../components/About'
import ProfileCard from '../components/ProfileCard.jsx'
export default function Hero() {
    return (
        <section className="w-full">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <ProfileCard/>
                <Tabs />
                <div className="mt-8 pb-12 space-y-8">
                    <About />
                    <Skills />
                </div>
            </div>
        </section>
    )
}
