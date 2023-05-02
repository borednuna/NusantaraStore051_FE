import React, {useEffect, useState} from 'react';
import './landing_page.scss';

import MouseIcon from '@mui/icons-material/Mouse';
import Button from '@mui/material/Button';

import Banner from '../../../infrastructure/components/banner/banner';
import CategoryList from '../../../infrastructure/components/category_list/category_list';
import CardCarousel from '../../../infrastructure/components/card_carousel/card_carousel';
import Card from '../../../infrastructure/components/card/card';

const LandingPage = (props) => {
  const getFeaturedProducts = () => {
    const featuredProducts = [];
    for (let i = 0; i < 5; i++) {
      featuredProducts.push(props.props[i]);
    }
    return featuredProducts;
  };

  const getDisplayedAllProducts = () => {
    const displayedAllProducts = [];
    for (let i = 0; i < 8; i++) {
      displayedAllProducts.push(props.props[i]);
    }
    return displayedAllProducts;
  }

  const [allProducts, setAllProducts] = useState(getDisplayedAllProducts());
  const [featuredProducts, setFeaturedProducts] = useState(getFeaturedProducts());

  useEffect(() => {
    if (props !== undefined) {
      setFeaturedProducts(getFeaturedProducts());
      setAllProducts(getDisplayedAllProducts());
    }
  }, [props]);

  return (
    <div className="landingpage">
      <div className="logo">
        <h1 id="nusantara">Nusantara</h1>
        <h1 id="store">Store</h1>
      </div>

      <Banner />
      <h1>Browse by category</h1>
      <CategoryList />
      <h1>Or scroll down to find more</h1>
      <MouseIcon fontSize="large" sx={{ margin: 'auto' }} />

      <section id="onsale">
        <p id="subtitle-onsale">On Sale</p>
        <div className="carousel-onsale">
          <CardCarousel props={featuredProducts} />
        </div>
      </section>

      <section id="featured">
        <div className="carousel-featured">
          <CardCarousel props={featuredProducts} />
        </div>
        <p id="subtitle-featured">Featured Products</p>
      </section>

      <section id="allproducts">
        <p className="allproducttext">All Products</p>
        <div className="cards">
          {
            props === undefined || Object.keys(props.props).length === 0 ? <div></div> :
            allProducts.map((item, index) => {
              return (
                <Card props={item} key={index} />
              );
            })
          }
        </div>
        <Button variant="outlined">Load More</Button>
      </section>
    </div>
  );
};

export default LandingPage;
