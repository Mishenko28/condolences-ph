import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import FamilyAccess from "./pages/family/FamilyAccess";
import Overview from "./pages/family/Overview";
import ObituaryListings from "./pages/family/ObituaryListings";
import ObituaryListing from "./pages/family/ObituaryListing";
import Media from "./pages/family/Media";
import Blog from "./pages/family/Blog";
import Events from "./pages/family/Events";

export default function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/family-access" element={<FamilyAccess />}>
                    <Route index element={<Navigate to="overview" />} />
                    <Route path="overview" element={<Overview />} />
                    <Route path="obituary-listings" element={<ObituaryListings />} />
                    <Route path="obituary-listings/:id" element={<ObituaryListing />} />
                    <Route path="media" element={<Media />} />
                    <Route path="blog" element={<Blog />} />
                    <Route path="events" element={<Events />} />
                </Route>
            </Routes>
        </HashRouter>
    )
}