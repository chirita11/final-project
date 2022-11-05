import React from "react";
import "../components/Home.css";
import desktopimage from "../assets/home/desktop/image-hero.jpg";
import tabletimage from "../assets/home/tablet/image-header.jpg";
import mobileimage from "../assets/home/mobile/image-header.jpg";
import headphone from "../assets/product-xx99-mark-one-headphones/desktop/image-product.png";
import speaker from "../assets/home/desktop/image-speaker-zx9.png";
import earphone from "../assets/product-yx1-earphones/desktop/image-product.png";
import arrowright from "../assets/icon-arrow-right.svg";
import speakerdesktop from "../assets/home/desktop/image-speaker-zx9.png";
import speakermobile from "../assets/home/mobile/image-speaker-zx9.png";
import speakertablet from "../assets/home/tablet/image-speaker-zx9.png";
import mobilespeaker from "../assets/home/mobile/image-speaker-zx7.jpg";
import tabletspeaker from "../assets/home/tablet/image-speaker-zx7.jpg";
import desktopspeaker from "../assets/home/desktop/image-speaker-zx7.jpg";

const home = () => {
  return (
    <>
      <div className="section">
        <div className="home-images">
          <img className="desktop" src={desktopimage} alt="" />
          <img className="tablet" src={tabletimage} alt="" />
          <img className="mobile" src={mobileimage} alt="" />
        </div>
        <div className="home-texts">
          <p>New product</p>
          <h1>
            XX99 Mark II <br /> Headphones
          </h1>
          <h6>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </h6>
          <a href="#" className="btn">
            SEE PRODUCT
          </a>
        </div>
      </div>

      <div className="section-2">
        <div className="shop-items">
          <img className="items" src={headphone} alt="" />
          <div className="item-box">
            <h6>Headphones</h6>
            <a href="#">
              Shop <img src={arrowright} alt="" />
            </a>
          </div>
        </div>

        <div className="shop-items">
          <img className="items" src={speaker} alt="" />
          <div className="item-box">
            <h6>Speakers</h6>
            <a href="#">
              Shop <img src={arrowright} alt="" />
            </a>
          </div>
        </div>

        <div className="shop-items">
          <img className="items" src={earphone} alt="" />
          <div className="item-box">
            <h6>Earphones</h6>
            <a href="#">
              Shop <img src={arrowright} alt="" />
            </a>
          </div>
        </div>
      </div>

      <div className="section-3">
        <div className="image-box">
          <img className="mobile" src={speakermobile} alt="" />
          <img className="tablet" src={speakertablet} alt="" />
          <img className="desktop" src={speakerdesktop} alt="" />
        </div>
        <div className="section-text">
          <h3>ZX9 speaker</h3>
          <h6>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </h6>
          <a href="#" className="btn">
            See product
          </a>
        </div>
      </div>

      <div className="section-4">
        <div className="section4-text">
          <h3> ZX7 Speaker</h3>

          <a href="#" className="btn">
            See product
          </a>
        </div>
        <div className="images-box">
          <img className="mobile" src={mobilespeaker} alt="" />
          <img className="tablet" src={tabletspeaker} alt="" />
          <img className="desktop" src={desktopspeaker} alt="" />
        </div>
      </div>
    </>
  );
};

export default home;
