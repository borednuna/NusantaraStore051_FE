import React from "react";
import Theme from "../../../application/globals/theme";
import { ThemeProvider } from "@mui/material/styles";
import "./footer.scss";

import IconButton from "@mui/material/IconButton";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <ThemeProvider theme={Theme}>
      <div className="footer">
        <div className="logo">
          <div className="text">
            <h1 id="nusantara">Nusantara</h1>
            <h1 id="store">Store</h1>
          </div>
        </div>

        <div className="logos">
          <IconButton aria-label="hobby" size="large" color="white">
            <InstagramIcon fontSize="large" />
          </IconButton>

          <IconButton aria-label="hobby" size="large" color="white">
            <GitHubIcon fontSize="large" />
          </IconButton>

          <IconButton aria-label="hobby" size="large" color="white">
            <LinkedInIcon fontSize="large" />
          </IconButton>
        </div>

        <div className="contact">
          <p>About</p>
          <p>FAQ</p>
          <p>Feedback</p>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Footer;
