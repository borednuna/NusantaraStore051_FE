import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './wishlist.scss';
import image from '../../resources/mocno-fotografia-nzYcN7Vz9BI-unsplash.jpg';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

const Wishlist = () => {
  const user = useSelector((state) => state.user);
  const [wishlistId, setWishlistId] = useState(0);
  const [items, setItems] = useState([]);

  const getWishlistId = () => {
    const url = 'http://146.190.100.158:3001/wishlists/user/' + user.id;
    fetch(url, {
      method: 'GET',
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    })
      .then((response) => response.json())
      .then((result) => {
        setWishlistId(result.data.id);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getWishlistId();
  }, [user]);

  const fetchItems = () => {};

  return (
    <div className="wishlist">
      <h1>My Wishlist</h1>
      <div className="items">
        <List component="nav" aria-label="mailbox folders">
          <ListItem>
            <div className="product">
              <div className="lefttext">
                <p id="title">Sepatu Ngabers</p>
                <p id="indprice">Rp900.000,-</p>
                <p id="variety">Color: Red, Size: 47</p>
              </div>
              <Button
                variant="outlined"
                startIcon={<DeleteIcon color="disabled" />}
              >
                Delete
              </Button>
              <img src={image} alt="icon" />
            </div>
          </ListItem>
          <Divider />
          <ListItem divider>
            <div className="product">
              <div className="lefttext">
                <p id="title">Sepatu Ngabers</p>
                <p id="indprice">Rp900.000,-</p>
                <p id="variety">Color: Red, Size: 47</p>
              </div>
              <Button
                variant="outlined"
                startIcon={<DeleteIcon color="disabled" />}
              >
                Delete
              </Button>
              <img src={image} alt="icon" />
            </div>
          </ListItem>
          <Divider />
          <ListItem divider>
            <div className="product">
              <div className="lefttext">
                <p id="title">Sepatu Ngabers</p>
                <p id="indprice">Rp900.000,-</p>
                <p id="variety">Color: Red, Size: 47</p>
              </div>
              <Button
                variant="outlined"
                startIcon={<DeleteIcon color="disabled" />}
              >
                Delete
              </Button>
              <img src={image} alt="icon" />
            </div>
          </ListItem>
          <Divider />
          <ListItem divider>
            <div className="product">
              <div className="lefttext">
                <p id="title">Sepatu Ngabers</p>
                <p id="indprice">Rp900.000,-</p>
                <p id="variety">Color: Red, Size: 47</p>
              </div>
              <Button
                variant="outlined"
                startIcon={<DeleteIcon color="disabled" />}
              >
                Delete
              </Button>
              <img src={image} alt="icon" />
            </div>
          </ListItem>
        </List>
      </div>
    </div>
  );
};

export default Wishlist;
