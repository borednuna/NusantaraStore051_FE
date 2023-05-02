import React, {useEffect, useState} from 'react';
import './product_details.scss';

import Gallery from '../../../infrastructure/components/gallery/gallery';
import ProductHeader from '../../../infrastructure/components/product_header/product_header';
import PriceTag from '../../../infrastructure/components/price_tag/price_tag';
import SellerCard from '../../../infrastructure/components/seller_card/seller_card';
import ReviewsCard from '../../../infrastructure/components/reviews_card/reviews_card';
import CardCarousel from '../../../infrastructure/components/card_carousel/card_carousel';

const ProductDetails = (props) => {
  const [item, setItem] = useState(props.props);
  const [details, setDetails] = useState({});
  const [seller, setSeller] = useState({});
  const [images, setImages] = useState([]);

  const fetchProductDetails = () => {
    if (item === undefined) {
      return;
    }
    const url = 'http://localhost:3001/product_details/' + item.id;
    fetch(url, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((result) => {
        setDetails(result.data);
      })
      .catch((error) => console.error(error));
  };

  const fetchSeller = () => {
    if (item === undefined) {
      return;
    }
    const url = 'http://localhost:3001/users/' + item.user_id;
    fetch(url, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((result) => {
        setSeller(result.data);
      })
      .catch((error) => console.error(error));
  }

  const fetchImages = () => {
    if (item === undefined) {
      return;
    }
    const url = 'http://localhost:3001/images/' + item.id;
    fetch(url, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((result) => {
        setImages(result.data);
        console.log(result);
      })
      .catch((error) => console.error(error));
  }

  useEffect(() => {
    setItem(props.props);
  }, [props.props]);

  useEffect(() => {
    fetchProductDetails();
    fetchSeller();
    fetchImages();
  }, [item]);

  return (
    <div className="productdetails">
      <section className="head">
        <Gallery props={images} />
        <ProductHeader props={item} />
      </section>

      <PriceTag props={item} />

      <section className="details">
        <div className="description">
          <SellerCard props={seller} />
          <p id="subtitle">Product Description</p>
          <p id="subtext">
            {item === undefined ? '' : item.description}
          </p>

          <p id="subtitle">Product Details</p>
          <p id="subtext">
            <table>
              <tr>
                <td>Weight</td>
                <td>{details.weight + ' kg'}</td>
              </tr>
              <tr>
                <td>Dimensions</td>
                <td>{details.dimensions}</td>
              </tr>
              <tr>
                <td>Color</td>
                <td>{details.color}</td>
              </tr>
              <tr>
                <td>Material</td>
                <td>{details.material}</td>
              </tr>
              <tr>
                <td>Made In</td>
                <td>Keputih, Surabaya</td>
              </tr>
            </table>
          </p>
        </div>

        <div className="reviews">
          <ReviewsCard />
        </div>
      </section>

      <section className="recommends">
        <p id="subtitle">Similar Products</p>
        <CardCarousel />
      </section>
    </div>
  );
};

export default ProductDetails;
