import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

/**
 * App - Main layout wrapper for the entire portfolio
 * 
 * Structure:
 * - Header (sticky navigation)
 * - Main content area (pages switch here via React Router)
 * - Footer
 * 
 * Uses flexbox to ensure footer stays at bottom even on short pages
 */
export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Page content rendered here via React Router */}
      {/* Outlet is where Home, About, Contact, ProjectDetails will appear */}
      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
