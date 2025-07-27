import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Agent from "./pages/Agent";
import Services from "./pages/Services";
import Properties from "./pages/Properties";
import Blog from "./pages/Blog";

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/agent" element={<Agent />} />
        <Route path="/services" element={<Services />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
