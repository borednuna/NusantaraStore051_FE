import React from "react";
import "./card.scss"
import cover from "../../../presentation/resources/mocno-fotografia-nzYcN7Vz9BI-unsplash.jpg";

import StarIcon from '@mui/icons-material/Star';

const Card = () => {
  return (
    <div className="card">
        <img src={cover} alt="Cover for product"/>
        <p id="category">Footwear</p>
        <p id="name">Sepatu Ngabers</p>
        <p id="price">Rp9.999.999,-</p>
        <p id="final-price">Rp900.000,-</p>
        <div className="star-sold">
            <p id="star"><StarIcon sx={{fontSize: 'small'}} />3.5</p>
            <p id="sold">Sold 1975</p>
        </div>
    </div>
  );
}

export default Card;
