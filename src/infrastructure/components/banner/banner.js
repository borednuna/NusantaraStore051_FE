import React from "react";
import "./banner.scss";
import BannerImg from "../../../presentation/resources/pexels-gustavo-fring-4173174.jpg";

const Banner = () => {
  return (
    <div className="banner">
      <img src={BannerImg} alt="Banner" />
    </div>
  );
};

export default Banner;
