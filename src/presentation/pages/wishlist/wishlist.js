import React from "react";
import './wishlist.scss'
import image from "../../resources/mocno-fotografia-nzYcN7Vz9BI-unsplash.jpg";

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

const Wishlist = () => {
    return(
        <div className="wishlist">
            <h1>My Wishlist</h1>
            <div className="items">
            <List component="nav" aria-label="mailbox folders">
                <ListItem >
                        <div className="product">
                            <div className="lefttext">
                                <p id="title">Sepatu Ngabers</p>
                                <p id="indprice">Rp900.000,-</p>
                                <p id="variety">Color: Red, Size: 47</p>
                            </div>
                            <Button variant="outlined" startIcon={<DeleteIcon color="disabled"/>}>
                                Delete
                            </Button>
                            <img src={image} alt="icon" />
                        </div>
                    </ListItem>
                    <Divider />
                    <ListItem  divider>
                    <div className="product">
                            <div className="lefttext">
                                <p id="title">Sepatu Ngabers</p>
                                <p id="indprice">Rp900.000,-</p>
                                <p id="variety">Color: Red, Size: 47</p>
                            </div>
                            <Button variant="outlined" startIcon={<DeleteIcon color="disabled"/>}>
                                Delete
                            </Button>
                            <img src={image} alt="icon" />
                        </div>
                    </ListItem>
                    <Divider />
                    <ListItem  divider>
                    <div className="product">
                            <div className="lefttext">
                                <p id="title">Sepatu Ngabers</p>
                                <p id="indprice">Rp900.000,-</p>
                                <p id="variety">Color: Red, Size: 47</p>
                            </div>
                            <Button variant="outlined" startIcon={<DeleteIcon color="disabled"/>}>
                                Delete
                            </Button>
                            <img src={image} alt="icon" />
                        </div>
                    </ListItem>
                    <Divider />
                    <ListItem  divider>
                    <div className="product">
                            <div className="lefttext">
                                <p id="title">Sepatu Ngabers</p>
                                <p id="indprice">Rp900.000,-</p>
                                <p id="variety">Color: Red, Size: 47</p>
                            </div>
                            <Button variant="outlined" startIcon={<DeleteIcon color="disabled"/>}>
                                Delete
                            </Button>
                            <img src={image} alt="icon" />
                        </div>
                    </ListItem>
                </List>
            </div>
        </div>
    )
}

export default Wishlist;
