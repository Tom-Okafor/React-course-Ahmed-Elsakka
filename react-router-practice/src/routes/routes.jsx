import { Routes, Route } from "react-router-dom";
import Contact from "../pages/Contact/Contact.jsx";
import About from "../pages/About/About.jsx";
import Home from "../pages/Home/Home.jsx";
import Products from "../pages/Products/Products.jsx";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/products" element={<Products />} />
    </Routes>
  );
}
