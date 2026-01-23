import React from 'react'
import { Link, useLocation } from "react-router-dom";
export default function Tabs() {
    const location = useLocation();

    const navItems = [
        { to: "/", label: "Home" },
        { to: "/projects", label: "Projects" },
        { to: "/education", label: "Education" },
        { to: "/work", label: "Services" },
        { to: "/contact", label: "Contact" },
    ];
    return (
        <div className="my-4">
            <ul className="flex flex-wrap gap-2 sm:gap-4 md:gap-6 text-gray-600 font-medium text-sm sm:text-base pt-4">
                {navItems.map((item) => {
                    const isActive = location.pathname === item.to;
                    return (
                        <li key={item.to}>
                            <Link
                                to={item.to}
                                className={`pb-2 px-1 sm:px-2 border-b-2 transition-all duration-200 ${isActive
                                    ? "border-purple-600 text-purple-600"
                                    : "border-transparent hover:border-gray-300 hover:text-gray-900"
                                    }`}
                            >
                                {item.label}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}
