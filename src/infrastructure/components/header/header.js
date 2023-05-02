import React from 'react';
import Theme from '../../../application/globals/theme';
import { useSelector } from 'react-redux';
import './header.scss';

import { ThemeProvider } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';

import LoginIcon from '@mui/icons-material/Login';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
  const sessionUser = useSelector((state) => state.user);

  return (
    <div className="header">
      <a href="/">
        <div className="logo">
          <h1 id="nusantara">Nusantara</h1>
          <h1 id="store">Store</h1>
        </div>
      </a>

      <ThemeProvider theme={Theme}>
        <div className="search">
          <FormControl
            sx={{ m: 1, width: '100%' }}
            variant="outlined"
            size="small"
            color="yellow"
          >
            <OutlinedInput
              id="outlined-adornment-search"
              placeholder="Search"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton aria-label="search" edge="end">
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </div>
      </ThemeProvider>

      <div className="buttons">
        <a href="/wishlist">
          <Button variant="contained" startIcon={<BookmarksIcon />}>
            <p>Wishlist</p>
          </Button>
        </a>

        <a href="/cart">
          <Button variant="contained" startIcon={<ShoppingCartIcon />}>
            <p>Cart</p>
          </Button>
        </a>

        {sessionUser === undefined || sessionUser === null || Object.keys(sessionUser).length === 0 ? (
          <a href="/login">
            <Button variant="contained" startIcon={<LoginIcon />}>
              <p>login</p>
            </Button>
          </a>
        ) : (
          <a href="/profile">
            <Button variant="contained" startIcon={<LoginIcon />}>
              <p>profile</p>
            </Button>
          </a>
        )}
      </div>
    </div>
  );
};

export default Header;
