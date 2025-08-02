// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import FlipkartEcommerce from "./FlipkartEcommerce";
import ModernAuthPage from "../Auth/ModernAuthPage";
import ElectronicsPage from "./components/Pages/ElectronicsPage";
import FashionPage from "./components/Pages/FashionPage";
import ProductDetailsPage from "./components/Pages/ProductDetailsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<FlipkartEcommerce />} />
          <Route path="/ModernAuthPage" element={<ModernAuthPage />} />
          <Route path="/electronics" element={<ElectronicsPage />} />
          <Route path="/fashion" element={<FashionPage />} />
          <Route path="/product/:id" element={<ProductDetailsPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;