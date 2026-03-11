import { NavLink } from "react-router-dom"

type Navigation = {
    name: "Overview" | "Obituary Listings" | "Media" | "Blog" | "Events"
    href: string
}

const navigations: Navigation[] = [
    { name: "Overview", href: "overview" },
    { name: "Obituary Listings", href: "obituary-listings" },
    { name: "Media", href: "media" },
    { name: "Blog", href: "blog" },
    { name: "Events", href: "events" }
]

export default function Navigations() {

    return (
        <nav className="flex justify-evenly">
            {navigations.map(nav => (
                <NavLink
                    to={nav.href}
                    key={nav.name}
                    className={({ isActive }) => `${isActive && "border-primary"} cursor-pointer border-b-3 w-full py-2`}
                >
                    <h1 className="font-medium text-primary/80 text-center">{nav.name}</h1>
                </NavLink>
            ))}
        </nav>
    )
}
