import { useState } from "react";
import Navigations, { type Navigation } from "./Navigations";
import Sidebar from "./Sidebar";

export default function App() {
    const [activeNav, setActiveNav] = useState<Navigation>({ name: "Overview", href: "#" })

    return (
        <div className="flex p-8 gap-8">
            <Sidebar />
            <div className="flex-1 space-y-4 py-4">
                <Navigations onNavChanged={nav => setActiveNav(nav)} />
                {activeNav.name === "Overview" && (
                    <div>Overview</div>
                )}
                {activeNav.name === "Obituary Listings" && (
                    <div>Obituary Listings</div>
                )}
                {activeNav.name === "Media" && (
                    <div>Media</div>
                )}
                {activeNav.name === "Blog" && (
                    <div>Blog</div>
                )}
                {activeNav.name === "Events" && (
                    <div>Events</div>
                )}
            </div>
        </div>
    )
}