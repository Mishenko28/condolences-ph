import { HashRouter, Routes, Route } from "react-router-dom";
import FamilyAccess from "./pages/family-access";

export default function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/family-access" element={<FamilyAccess />} />
            </Routes>
        </HashRouter>
    )
}