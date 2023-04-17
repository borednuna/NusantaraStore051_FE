import React from 'react'
import Theme from '../../../application/globals/theme'
import './header.scss'

import { ThemeProvider } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';

import LoginIcon from '@mui/icons-material/Login';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
    return (
        <div className='header'>
            <div className='logo'>
                <h1 id='nusantara'>Nusantara</h1>
                <h1 id='store'>Store</h1>
            </div>

            <ThemeProvider theme={Theme}>
            <FormControl
                sx={{ m: 1, width: '35rem' }} 
                variant="outlined" 
                size='small'
                color='yellow'
            >
                <InputLabel htmlFor="outlined-adornment-search">Search</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-search"
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="search"
                            edge="end"
                            >
                            <SearchIcon />
                            </IconButton>
                        </InputAdornment>
                    }
                    label="Search"
                />
            </FormControl>
            </ThemeProvider>

            <div className='wishlist'>
                <Button variant="contained" startIcon={<BookmarksIcon />}>
                    Wishlist
                </Button>
            </div>

            <div className='cart'>
                <Button variant="contained" startIcon={<ShoppingCartIcon />}>
                    Cart
                </Button>
            </div>

            <div className='login'>
                <Button variant="contained" startIcon={<LoginIcon />}>
                    Login
                </Button>
            </div>
        </div>
    )
}

export default Header;