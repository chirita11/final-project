import React from "react";
import "../components/Footer.css";

import logoImg from "../assets/shared/desktop/logo.svg";
import facebookIcon from "../assets/shared/desktop/icon-facebook.svg";
import twitterIcon from "../assets/shared/desktop/icon-twitter.svg";
import instagramIcon from "../assets/shared/desktop/icon-instagram.svg";

import mobileximage from "../assets/shared/mobile/image-best-gear.jpg";
import tabletximage from "../assets/shared/tablet/image-best-gear.jpg";
import desktopximage from "../assets/shared/desktop/image-best-gear.jpg";

const Footer = () => {
  return (
    <div>
      <div className="sectionx">
        <div className="imagex-box">
          <img className="mobile" src={mobileximage} alt="" />
          <img className="tablet" src={tabletximage} alt="" />
          <img className="desktop" src={desktopximage} alt="" />
        </div>
        <div className="sectionx-text">
          <div className="leftx">
            <h3>
              Bringing you the <span>best</span> audio gear
            </h3>
            <p>
              {" "}
              Located at the heart of New York City, Audiophile is the premier
              store for high end headphones, earphones, speakers, and audio
              accessories. We have a large showroom and luxury demonstration
              rooms available for you to browse and experience a wide range of
              our products. Stop by our store to meet some of the fantastic
              people who make Audiophile the best place to buy your portable
              audio equipment.
            </p>
          </div>
        </div>
      </div>

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
