import React, { useState } from 'react';
import './cart.scss';
import image from '../../resources/mocno-fotografia-nzYcN7Vz9BI-unsplash.jpg';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

const Cart = () => {
  const [count, setCount] = useState(0);

  const reduceItem = () => {
    count <= 0 ? setCount(0) : setCount(count - 1);
  };

  const addItem = () => {
    setCount(count + 1);
  };

  return (
    <div className="cart">
      <h1>My Cart</h1>
      <div className="listitems">
        <List component="nav" aria-label="mailbox folders">
          <ListItem>
            <div className="product">
              <div className="lefttext">
                <p id="title">Sepatu Ngabers</p>
                <p id="indprice">Rp900.000,-</p>
                <p id="variety">Color: Red, Size: 47</p>
                <Button
                  variant="outlined"
                  startIcon={<DeleteIcon color="disabled" />}
                >
                  Delete
                </Button>
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
                <Button
                  variant="outlined"
                  startIcon={<DeleteIcon color="disabled" />}
                >
                  Delete
                </Button>
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
              <img src={image} alt="icon" />
            </div>
          </ListItem>
          <ListItem>
            <div className="product">
              <div className="lefttext">
                <p id="title">Sepatu Ngabers</p>
                <p id="indprice">Rp900.000,-</p>
                <p id="variety">Color: Red, Size: 47</p>
                <Button
                  variant="outlined"
                  startIcon={<DeleteIcon color="disabled" />}
                >
                  Delete
                </Button>
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
              <img src={image} alt="icon" />
            </div>
          </ListItem>
          <Divider light />
          <ListItem>
            <div className="product">
              <div className="lefttext">
                <p id="title">Sepatu Ngabers</p>
                <p id="indprice">Rp900.000,-</p>
                <p id="variety">Color: Red, Size: 47</p>
                <Button
                  variant="outlined"
                  startIcon={<DeleteIcon color="disabled" />}
                >
                  Delete
                </Button>
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
              <img src={image} alt="icon" />
            </div>
          </ListItem>
        </List>
        <div className="total">
          <p id="price">Rp99.999.999,-</p>
          <div className="wishlist">
            <Button variant="contained" endIcon={<ShoppingCartCheckoutIcon />}>
              <p>Checkout</p>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
