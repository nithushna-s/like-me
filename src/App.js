import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Navbar from './components/home/navbar';
import Carousel from './components/home/Carousel';
import ProductGallery from './components/home/ProductGallery';
import OrderPage from './components/home/OrderPage'; 
import ProductDetails from './components/home/ProductDetails'; 
import Footer from './components/home/ Footer';
import Contact from './components/home/Contact';

import './css/style.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className='container-fluid'>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/products" element={<ProductGallery />} />
          <Route exact path="/order" element={<OrderPage />} />
          <Route path="/products/:id" element={<ProductDetails />} /> 
        </Routes>
        </div> 
      </div>
      <Footer/>

    </Router>
  );
}

const Home = () => (
  <>
    <Carousel />
    <ProductGallery />
    <Contact />
  </>
);

export default App;
