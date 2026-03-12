import Navigations from "./Navigations"
import Sidebar from "./Sidebar"
import { Outlet } from "react-router-dom"

export default function FamilyAccess() {
    return (
        <div className="flex p-8 gap-8">
            <Sidebar />
            <div className="flex-1 space-y-4 py-4">
                <Navigations />
                <Outlet />
            </div>
        </div>
    )
}
