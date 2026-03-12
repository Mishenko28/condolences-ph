import { HashRouter, Routes, Route } from "react-router-dom";
import FamilyAccess from "./pages/family/FamilyAccess";
import Overview from "./pages/family/Overview";
import ObituaryListings from "./pages/family/ObituaryListings";

export default function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/family-access" element={<FamilyAccess />}>
                    <Route path="overview" element={<Overview />} />
                    <Route path="obituary-listings" element={<ObituaryListings />} />
                    <Route path="media" element={<div>pending</div>} />
                    <Route path="blog" element={<div>pending</div>} />
                    <Route path="events" element={<div>pending</div>} />
                </Route>
            </Routes>
        </HashRouter>
    )
}