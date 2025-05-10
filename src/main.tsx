import { Navbar } from "./shared/components/Navbar/index.tsx";
import { Footer } from "./shared/components/Footer/index.tsx";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./shared/styles/globals.css";
import { StrictMode } from "react";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <main>
        <div className="px-8 py-6">
          <Navbar />
        </div>
        <App />
        <Footer />
      </main>
    </BrowserRouter>
  </StrictMode>
);
