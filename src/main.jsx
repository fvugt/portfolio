import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          
          {/* Pagina's */}
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />

          {/* Projects pagina verwijst tijdelijk naar Home */}
          <Route path="projects" element={<Home />} />

          {/* Detailpagina placeholder (Week 3) */}
          <Route 
            path="projects/:projectId" 
            element={<p className="main-section">Project detail komt in Week 3 👀</p>} 
          />

        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
