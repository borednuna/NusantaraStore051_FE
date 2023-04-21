import React from "react";
import './product_details.scss';

import Gallery from '../../../infrastructure/components/gallery/gallery';
import ProductHeader from '../../../infrastructure/components/product_header/product_header';
import PriceTag from '../../../infrastructure/components/price_tag/price_tag';
import SellerCard from '../../../infrastructure/components/seller_card/seller_card';
import ReviewsCard from '../../../infrastructure/components/reviews_card/reviews_card';
import CardCarousel from '../../../infrastructure/components/card_carousel/card_carousel';

const ProductDetails = () => {
    return(
        <div className="productdetails">
            <section className="head">
                <Gallery />
                <ProductHeader />
            </section>

            <PriceTag />

            <section className="details">
                <div className="description">
                    <SellerCard />
                    <p id="subtitle">Product Description</p>
                    <p id="subtext">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                        <br/><br/>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                        <br/><br/>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                    </p>

                    <p id="subtitle">Product Details</p>
                    <p id="subtext">
                        <table>
                            <tr>
                                <td>Weight</td>
                                <td>1 kg</td>
                            </tr>
                            <tr>
                                <td>Dimensions</td>
                                <td>20 cm x 20 cm x 20 cm</td>
                            </tr>
                            <tr>
                                <td>Color</td>
                                <td>Red, gray, blue, black</td>
                            </tr>
                            <tr>
                                <td>Material</td>
                                <td>Canvas fabric</td>
                            </tr>
                            <tr>
                                <td>Made In</td>
                                <td>Keputih,</td>
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
    )
}

export default ProductDetails;
