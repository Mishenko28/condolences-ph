import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App"
import styles from "./index.css?inline"

const host = document.getElementById("condolences-react-dashboard")!
const shadow = host.attachShadow({ mode: "open" })

const style = document.createElement("style")
style.textContent = styles
shadow.appendChild(style)

createRoot(shadow).render(
    <StrictMode>
        <App />
    </StrictMode>
)