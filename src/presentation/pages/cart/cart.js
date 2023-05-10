import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
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
  const [cart, setCart] = useState(0);
  const [items, setItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const user = useSelector((state) => state.user);

  const getCoverImage = (id) => {
    const url = 'https://146.190.100.158:3001/images/' + id;
    fetch(url, {
      method: 'GET',
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.data.length === 0) {
          return;
        } else {
          return "'" + result.data[0].url + "'";
        }
      })
      .catch((error) => console.error(error));
  };

  const getCartId = () => {
    if (user === undefined) {
      return;
    }
    const url = 'https://146.190.100.158:3001/carts/' + user.id;
    fetch(url, {
      method: 'GET',
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    })
      .then((response) => response.json())
      .then((result) => {
        setCart(result.data.id);
      })
      .catch((error) => console.error(error));
  };

  const getCartItems = () => {
    if (user === undefined || cart === undefined) {
      return;
    }
    const url = 'https://146.190.100.158:3001/carts/cart_items/' + cart;
    fetch(url, {
      method: 'GET',
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    })
      .then((response) => response.json())
      .then((result) => {
        setItems(result.data);
      })
      .catch((error) => console.error(error));
  };

  const getTotalPrice = () => {
    if (items === undefined) {
      return;
    }

    let total = 0;
    items.forEach((item) => {
      total += item.price * item.item_amount;
    });
    setTotalPrice(total);
  };

  const reduceItem = () => {
    count <= 0 ? setCount(0) : setCount(count - 1);
  };

  const addItem = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    getCartId();
  }, [user]);

  useEffect(() => {
    getCartItems();
  }, [cart]);

  useEffect(() => {
    if (items.length !== 0) {
      setCount(items[0].item_amount);
      getTotalPrice();
    }
  }, [items]);

  return (
    <div className="cart">
      <h1>My Cart</h1>
      <div className="listitems">
        <List component="nav" aria-label="mailbox folders">
          {items === [] || items === undefined ? (
            <p>Cart is empty</p>
          ) : (
            items.map((item) => {
              return (
                <ListItem>
                  <div className="product">
                    <div className="lefttext">
                      <p id="title">{item.name}</p>
                      <p id="indprice">Rp{item.price},-</p>
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
                    <img src={getCoverImage(item.id)} alt="icon" />
                  </div>
                  <Divider />
                </ListItem>
              );
            })
          )}
        </List>
        <div className="total">
          <p id="price">{'Rp' + totalPrice + ',-'}</p>
          <Button variant="contained" endIcon={<ShoppingCartCheckoutIcon />}>
            <p>Checkout</p>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
