import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useSmoothScroll } from "./hooks/useSmoothScroll";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Featured from "./components/Featured";
import Blog from "./components/Blog";
import NotFound from "./components/NotFound";
const App = () => {
  //smooth scroll are jonno lenis github use kora hoyse
  useSmoothScroll();
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/featured" element={<Featured />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blog" element={<Blog needFullHight={true} />} />
        <Route path="*" element={<NotFound needFullHight={true} />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
