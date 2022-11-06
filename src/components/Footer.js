import React from "react";
import "../components/Footer.css";

import logoImg from "../assets/shared/desktop/logo.svg";
import facebookIcon from "../assets/shared/desktop/icon-facebook.svg";
import twitterIcon from "../assets/shared/desktop/icon-twitter.svg";
import instagramIcon from "../assets/shared/desktop/icon-instagram.svg";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="footer-nav">
          <img src={logoImg} alt="" />
          <div className="footer-link">
            <a href="#">HOME</a>
            <a href="#">HEADPHONES</a>
            <a href="#">SPEAKERS</a>
            <a href="#">EARPHONES</a>
          </div>
        </div>
        <p>
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>

        <div className="footer-links">
          <p>Copyright 2021. All Rights Reserved</p>
          <div className="links">
            <a href="#">
              <img src={facebookIcon} alt="facebooklogo" />
            </a>
            <a href="#">
              <img src={twitterIcon} alt="twitterlogo" />
            </a>
            <a href="#">
              <img src={instagramIcon} alt="instagramlogo" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
