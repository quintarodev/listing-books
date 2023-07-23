import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./index.css"
import { BookProvider } from "./context/bookContext.tsx"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BookProvider>
    <App />
  </BookProvider>
)
