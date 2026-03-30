import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import ContactPage from "./pages/contact-page";
import HomePage from "./pages/home-page";
import ProjectsPage from "./pages/projects-page";
import AboutPage from "./pages/about-page";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}
