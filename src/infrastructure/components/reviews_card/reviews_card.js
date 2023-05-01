import React from 'react';
import './reviews_card.scss';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import StarIcon from '@mui/icons-material/Star';

const ReviewsCard = () => {
  return (
    <div className="reviewscard">
      <h1>Reviews(50)</h1>
      <div className="individual-cards">
        <AccountCircleIcon fontSize="large" sx={{ margin: '1rem' }} />
        <div className="text">
          <h2>Bunda Corla</h2>
          <h3>
            <StarIcon fontSize="small" sx={{ color: '#FFD600' }} />
            3.5
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>

      <div className="individual-cards">
        <AccountCircleIcon fontSize="large" sx={{ margin: '1rem' }} />
        <div className="text">
          <h2>Bunda Corla</h2>
          <h3>
            <StarIcon fontSize="small" sx={{ color: '#FFD600' }} />
            3.5
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>

      <div className="individual-cards">
        <AccountCircleIcon fontSize="large" sx={{ margin: '1rem' }} />
        <div className="text">
          <h2>Bunda Corla</h2>
          <h3>
            <StarIcon fontSize="small" sx={{ color: '#FFD600' }} />
            3.5
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <p id="load">Load More</p>
    </div>
  );
};

export default ReviewsCard;
