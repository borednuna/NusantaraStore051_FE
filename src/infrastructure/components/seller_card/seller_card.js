import React from "react";
import { ThemeProvider } from "styled-components";
import Theme from "../../../application/globals/theme";
import "./seller_card.scss";

import StoreIcon from "@mui/icons-material/Store";
import IconButton from "@mui/material/IconButton";
import ChatIcon from "@mui/icons-material/Chat";

const SellerCard = () => {
  return (
    <div className="sellercard">
      <ThemeProvider theme={Theme}>
        <div className="description">
          <StoreIcon fontSize="large" />
          <div className="text">
            <h1>Joko Ireng</h1>
            <h2>Surabaya, Jawa Timur</h2>
            <h2>50 produk terjual</h2>
          </div>
        </div>

        <div className="chatbutton">
          <IconButton aria-label="chat" size="medium" color="white">
            <ChatIcon fontSize="medium" sx={{ color: "white" }} />
            <p>Chat</p>
          </IconButton>
        </div>
      </ThemeProvider>
    </div>
  );
};

export default SellerCard;
