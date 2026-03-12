import Navigations from "./Navigations"
import Sidebar from "./Sidebar"
import { Outlet } from "react-router-dom"

export default function FamilyAccess() {
    return (
        <div className="tw:flex tw:p-8 tw:gap-8">
            <Sidebar />
            <div className="tw:flex-1 tw:space-y-4 tw:py-4">
                <Navigations />
                <Outlet />
            </div>
        </div>
    )
}
