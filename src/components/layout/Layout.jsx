import React from 'react'
import CoverImage from './CoverImage'
import { Outlet } from "react-router-dom";
import Footer from './Footer';


export default function Layout() {
    return (
        <div>
            <CoverImage />

            <main>
                <Outlet />
            </main>

            <Footer />
        </div>
    )
}
