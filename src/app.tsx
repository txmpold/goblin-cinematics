import { BrowserRouter, Route, Routes } from "react-router";
import ContactPage from "./pages/contact-page";
import ContentPage from "./pages/content-page";
import HomePage from "./pages/home-page";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="content" element={<ContentPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}
