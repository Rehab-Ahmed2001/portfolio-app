import React from 'react'
import Tabs from '../components/Tabs'
import ProjectCard from '../components/ProjectCard'
import ecommerceImg from "../assets/ecommerce.png";
import portfolioImg from "../assets/portfolio.png";
import weatherImg from "../assets/Weather-App.png";
import bookmarkImg from "../assets/Bookmark.png";
import smartLoginImg from "../assets/Smart Login.png";
import geroldImg from "../assets/Gerold.png";
import devfolioImg from "../assets/DevFolio.png";
import gridImg from "../assets/Grid-Masterclass.png";
import mealifyImg from "../assets/mealify.png";
import SocialImg from "../assets/Social-app.PNG";
import DashboardImg from "../assets/Admin-Dashboard.PNG";
const data = [
    {
        title: "E-Commerce App",
        description:
            "A responsive e-commerce web app with product browsing, cart, wishlist, and secure APIs.",
        stack: [
            { name: "HTML 5" },
            { name: "Tailwind CSS" },
            { name: "TypeScript" },
            { name: "React" },
            { name: "Next.js" },
        ],
        image: ecommerceImg,
        live: "https://vercel.com/rehab-ahmed2001s-projects/e-commerce-app",
        github: "https://github.com/Rehab-Ahmed2001/E-Commerce-app",
    },
    {
        title: "Social-App",
        description:
            "A modern social media web application built with React, React Router, React Query, and Tailwind CSS. Features include user authentication, profile management, post creation, likes/comments, friends’ system, and responsive design. Integrated with a RESTful backend API for data management.",
        stack: [
            { name: "HTML 5" },
            { name: "Tailwind CSS" },
            { name: "JavaScript" },
            { name: "React" },
        ],
        image: SocialImg,
        live: "https://social-app-liart-ten.vercel.app/login",
        github: "https://github.com/Rehab-Ahmed2001/Social-App",
    },
    {
        title: "Admin-Dashboard",
        description:
            "A modern, responsive Admin Dashboard built with Next.js, React, Tailwind CSS, and Framer Motion — designed for clean analytics visualization, smooth animations, and intuitive user control.",
        stack: [
            { name: "HTML 5" },
            { name: "Tailwind CSS" },
            { name: "JavaScript" },
            { name: "React" },
            { name: "Next.js" },
        ],
        image: DashboardImg,
        live: "https://admin-dashboard-jade-delta-95.vercel.app/",
        github: "https://github.com/Rehab-Ahmed2001/Admin-Dashboard",
    },
    {
        title: "Portfolio",
        description:
            "A modern personal portfolio template showcasing projects, resume, and skills.",
        stack: [
            { name: "HTML 5" },
            { name: "Tailwind CSS" },
            { name: "JavaScript" },
            { name: "React" },
            { name: "Next.js" },
        ],
        image: portfolioImg,
        live: "https://portfolio-eight-sigma-37.vercel.app/",
        github: "https://github.com/Rehab-Ahmed2001/Portfolio",
    },
    {
        title: "Weather App",
        description:
            "Displays live weather data with a clean and minimal design using JavaScript.",
        stack: [{ name: "HTML 5" }, { name: "CSS 3" }, { name: "JavaScript" }],
        image: weatherImg,
        live: "https://rehab-ahmed2001.github.io/Weather/",
        github: "https://github.com/Rehab-Ahmed2001/Weather",
    },
    {
        title: "Bookmark",
        description:
            "A responsive web app for saving and managing favorite websites.",
        stack: [{ name: "HTML 5" }, { name: "CSS 3" }, { name: "JavaScript" }],
        image: bookmarkImg,
        live: "https://rehab-ahmed2001.github.io/Bookmark/",
        github: "https://github.com/Rehab-Ahmed2001/Bookmark",
    },
    {
        title: "Smart Login",
        description:
            "A secure login and registration system with validation and local storage.",
        stack: [{ name: "HTML 5" }, { name: "CSS 3" }, { name: "JavaScript" }],
        image: smartLoginImg,
        live: "https://rehab-ahmed2001.github.io/smart_login/",
        github: "https://github.com/Rehab-Ahmed2001/smart_login",
    },
    {
        title: "Gerold",
        description:
            "A modern personal portfolio template showcasing projects, resume, and skills.",
        stack: [{ name: "HTML 5" }, { name: "CSS 3" }],
        image: geroldImg,
        live: "https://rehab-ahmed2001.github.io/Gerold/",
        github: "https://github.com/Rehab-Ahmed2001/Gerold",
    },
    {
        title: "DevFolio",
        description:
            "A professional portfolio template for developers with smooth UI and clean design.",
        stack: [{ name: "HTML 5" }, { name: "CSS 3" }],
        image: devfolioImg,
        live: "https://rehab-ahmed2001.github.io/DevFolio/",
        github: "https://github.com/Rehab-Ahmed2001/DevFolio",
    },
    {
        title: "Grid Masterclass",
        description:
            "A design-focused website teaching advanced CSS grid and Flexbox layouts.",
        stack: [{ name: "HTML 5" }, { name: "CSS 3" }],
        image: gridImg,
        live: "https://rehab-ahmed2001.github.io/Grid-masterclass/",
        github: "https://github.com/Rehab-Ahmed2001/Grid-masterclass",
    },
    {
        title: "Mealify",
        description:
            "Mealify is a modern and responsive restaurant website template built with HTML, CSS.",
        stack: [{ name: "HTML 5" }, { name: "CSS 3" }],
        image: mealifyImg,
        live: "https://rehab-ahmed2001.github.io/Mealify/",
        github: "https://github.com/Rehab-Ahmed2001/Mealify",
    },
];


export default function Projects() {
    return (
        <div className="w-full min-h-screen">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

                <Tabs />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-8">
                    {data.map((project) => (
                        <ProjectCard
                            key={project.github}
                            {...project}
                        />
                    ))}
                </div>

                {data.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-gray-500 text-lg">
                            No projects to display yet.
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
}
