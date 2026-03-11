import { useState } from "react"

export type Navigation = {
    name: "Overview" | "Obituary Listings" | "Media" | "Blog" | "Events"
    href: string
}

const navigations: Navigation[] = [
    { name: "Overview", href: "#overview" },
    { name: "Obituary Listings", href: "#obituary-listings" },
    { name: "Media", href: "#media" },
    { name: "Blog", href: "#blog" },
    { name: "Events", href: "#events" }
]

export default function Navigations({ onNavChanged }: { onNavChanged?: (name: Navigation) => void }) {
    const [activeNav, setActiveNav] = useState("Overview")

    const handleNavChanged = (nav: Navigation) => {
        setActiveNav(nav.name)
        onNavChanged && onNavChanged(nav)
    }

    return (
        <nav className="flex justify-evenly">
            {navigations.map(nav => (
                <div
                    key={nav.name}
                    className={`${activeNav === nav.name && "border-primary"} cursor-pointer border-b-3 w-full py-2`}
                    onClick={() => handleNavChanged(nav)}
                >
                    <h1 className="font-medium text-primary/80 text-center">{nav.name}</h1>
                </div>
            ))}
        </nav>
    )
}
