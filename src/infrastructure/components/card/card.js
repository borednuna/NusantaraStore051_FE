import React, { useState, useEffect } from 'react';
import './card.scss';
import cover from '../../../presentation/resources/mocno-fotografia-nzYcN7Vz9BI-unsplash.jpg';

import StarIcon from '@mui/icons-material/Star';

const Card = (props) => {
  const [item, setItem] = useState({});
  const [image, setImage] = useState([]);

  const fetchImage = () => {
    if (item === undefined) {
      return;
    }
    const url = 'https://146.190.100.158:3001/images/' + item.id;
    fetch(url, {
      method: 'GET',
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    })
      .then((response) => response.json())
      .then((result) => {
        setImage(result.data);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    if (props !== undefined && Object.keys(props).length !== 0) {
      setItem(props.props);
    }
  }, [props]);

  useEffect(() => {
    fetchImage();
  }, [item]);

  return item === undefined ? (
    <div></div>
  ) : (
    <div className="card">
      <a href={'productdetails/' + item.id}>
        <img
          src={image[0] === undefined ? cover : image[0].url}
          alt="Cover for product"
        />
        <p id="category">{item.category}</p>
        <p id="name">{item.name}</p>
        <p id="price"></p>
        <p id="final-price">{'Rp' + item.price + ',-'}</p>
        <div className="star-sold">
          <p id="star">
            <StarIcon sx={{ fontSize: 'small' }} />
            3.5
          </p>
          <p id="sold">{'Sold ' + item.sold + ' times'}</p>
        </div>
      </a>
    </div>
  );
};

export default Card;
