import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Products from "./components/products";
import Subscription from "./components/subscription";
import About from "./components/about";
import Blog from "./components/blog";
import Contact from "./components/contact";
import FAQ from "./components/faq";
import Terms from "./components/terms";
import Privacy from "./components/privacy";
import Refund from "./components/refund";
import PageTitle from "./components/PageTitle";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <PageTitle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/refund" element={<Refund />} />
        </Routes>
      </>
    </Suspense>
  );
}

export default App;