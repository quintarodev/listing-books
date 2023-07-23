import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import { BookProvider } from "./context/bookContext.tsx"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BookProvider>
    <App />
  </BookProvider>
)
