import React, { useEffect } from 'react';
import { useState } from 'react';
import './price_tag.scss';

import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BookmarksIcon from '@mui/icons-material/Bookmarks';

const PriceTag = (props) => {
  const [item, setItem] = useState(props.props);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setItem(props.props);
  }, [props.props]);

  const reduceItem = () => {
    count <= 0 ? setCount(0) : setCount(count - 1);
  };

  const addItem = () => {
    setCount(count + 1);
  };

  return (
    <div className="pricetag">
      <div className="prices">
        <h1></h1>
        <h2>{item === undefined ? '' : 'Rp' + item.price + ',-'}</h2>
      </div>

      <div className="countfield">
        <IconButton onClick={reduceItem}>
          <RemoveIcon />
        </IconButton>
        {count}
        <IconButton onClick={addItem}>
          <AddIcon />
        </IconButton>
      </div>

      <div className="buttons">
        <div className="wishlist">
          <Button variant="contained" startIcon={<BookmarksIcon />}>
            <p>Add to wishlist</p>
          </Button>
        </div>

        <div className="cart">
          <Button variant="contained" startIcon={<ShoppingCartIcon />}>
            <p>Add to cart</p>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PriceTag;
