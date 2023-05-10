import React, { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import './price_tag.scss';

import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BookmarksIcon from '@mui/icons-material/Bookmarks';

const PriceTag = (props) => {
  const user = useSelector((state) => state.user);
  const [wishlistId, setWishlistId] = useState(0);
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

  const getWishlistId = () => {
    if (user === undefined) {
      return;
    }

    const url = 'http://146.190.100.158:3001/wishlists/user/' + user.id;
    fetch(url, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((result) => {
        setWishlistId(result.data.id);
      })
      .catch((error) => console.error(error));
  };

  const sendToWishlist = () => {
    if (user === undefined) {
      return;
    }

    const url = 'http://146.190.100.158:3001/detailed_wishlists/';
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        wishlist_id: wishlistId,
        product_id: item.id,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getWishlistId();
  }, [user]);

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
        <div className="wishlist" onClick={sendToWishlist}>
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
