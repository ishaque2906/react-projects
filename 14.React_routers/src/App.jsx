import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './assets/pages/Home';
import About from './assets/pages/About';
import Product from './assets/pages/Product';
import NotFound from './assets/pages/NotaFound';
import Men from './assets/pages/Mens';
import Women from './assets/pages/Women';
import Kids from './assets/pages/Kids';

import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/product" element={<Product />}>
          <Route path="men" element={<Men />} />
          <Route path="women" element={<Women />} />
          <Route path="kids" element={<Kids />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
