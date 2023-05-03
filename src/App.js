import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './application/state_manager/persistor';
import './App.scss';

import Header from './infrastructure/components/header/header';
import Footer from './infrastructure/components/footer/footer';
import Chat from './infrastructure/components/chat/chat';
import LandingPage from './presentation/pages/landing_page/landing_page';
import About from './presentation/pages/about/about';
import Feedback from './presentation/pages/feedback/feedback';
import Cart from './presentation/pages/cart/cart';
import Wishlist from './presentation/pages/wishlist/wishlist';
import Profile from './presentation/pages/profile_page/profile_page';
import ProductDetails from './presentation/pages/product_details/product_details';
import Login from './presentation/pages/authentication/login';
import Signup from './presentation/pages/authentication/signup';

function App() {
  const [products, setProducts] = useState({});
  const fetchProducts = () => {
    const url = 'http://localhost:3001/products';
    fetch(url, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((result) => {
        setProducts(result.data);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
          <Router>
            <Chat />
            <Header />
            <Routes>
              <Route path="/" element={<LandingPage props={products} />} />
              <Route path="/about" element={<About />} />
              <Route path="/feedback" element={<Feedback />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/profile" element={<Profile />} />
              <Route
                path="/productdetails"
                element={<ProductDetails props={products[0]} />}
              />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              {products === undefined || Object.keys(products).length === 0
                ? null
                : products.map((product) => (
                    <Route
                      path={'/productdetails/' + product.id}
                      element={<ProductDetails props={product} />}
                    />
                  ))}
            </Routes>
            <Footer />
          </Router>
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
