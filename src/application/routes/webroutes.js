import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LandingPage from '../../presentation/pages/landing_page/landing_page';
import About from '../../presentation/pages/about/about';
import Feedback from '../../presentation/pages/feedback/feedback';
import Cart from '../../presentation/pages/cart/cart';
import Wishlist from '../../presentation/pages/wishlist/wishlist';
import Profile from '../../presentation/pages/profile_page/profile_page';
import ProductDetails from '../../presentation/pages/product_details/product_details';
import Login from '../../presentation/pages/authentication/login';
import Signup from '../../presentation/pages/authentication/signup';

const Webroutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/productdetails" element={<ProductDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default Webroutes;
