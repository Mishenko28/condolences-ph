import { HashRouter, Routes, Route } from "react-router-dom";
import FamilyAccess from "./pages/family/family-access";
import Overview from "./pages/family/overview";

export default function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/family-access" element={<FamilyAccess />}>
                    <Route path="overview" element={<Overview />} />
                    <Route path="obituary-listings" element={<div>Overview</div>} />
                    <Route path="media" element={<div>Overview</div>} />
                    <Route path="blog" element={<div>Overview</div>} />
                    <Route path="events" element={<div>Overview</div>} />
                </Route>
            </Routes>
        </HashRouter>
    )
}