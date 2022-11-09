import React from "react";
import "../components/Home.css";
import desktopimage from "../assets/home/desktop/image-hero.jpg";
import tabletimage from "../assets/home/tablet/image-header.jpg";
import mobileimage from "../assets/home/mobile/image-header.jpg";
import headphone from "../assets/xshared/xheadphones.png";
import speaker from "../assets/xshared/xspeakers.png";
import earphone from "../assets/xshared/xearphones.png";
import arrowright from "../assets/icon-arrow-right.svg";
import speakerdesktop from "../assets/home/desktop/image-speaker-zx9.png";
import speakermobile from "../assets/home/mobile/image-speaker-zx9.png";
import speakertablet from "../assets/home/tablet/image-speaker-zx9.png";
import mobilespeaker from "../assets/home/mobile/image-speaker-zx7.jpg";
import tabletspeaker from "../assets/home/tablet/image-speaker-zx7.jpg";
import desktopspeaker from "../assets/home/desktop/image-speaker-zx7.jpg";
import mobileearphone from "../assets/home/mobile/image-earphones-yx1.jpg";
import tabletearphone from "../assets/home/tablet/image-earphones-yx1.jpg";
import desktopearphone from "../assets/home/desktop/image-earphones-yx1.jpg";
import patterncircle from "../assets/home/desktop/pattern-circles.svg";

const home = () => {
  return (
    <>
      <div className="section">
        {/* <div className="home-images">
          <img className="desktop" src={desktopimage} alt="" />
          <img className="tablet" src={tabletimage} alt="" />
          <img className="mobile" src={mobileimage} alt="" />
        </div> */}
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
          <div className="pattern">
            <img className="pattern1" src={patterncircle} alt="" />
          </div>
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
          <div className="left">
            <h3> ZX7 Speaker</h3>
            <a href="#" className="btn">
              See product
            </a>
          </div>
        </div>
        <div className="images-box">
          <img className="mobile" src={mobilespeaker} alt="" />
          <img className="tablet" src={tabletspeaker} alt="" />
          <img className="desktop" src={desktopspeaker} alt="" />
        </div>
      </div>

      <div className="section-5">
        <div className="image4-box">
          <img className="mobile" src={mobileearphone} alt="" />
          <img className="tablet" src={tabletearphone} alt="" />
          <img className="desktop" src={desktopearphone} alt="" />
        </div>
        <div className="section5-text">
          <div className="left1">
            <h3> yx1 earphones</h3>
            <a href="#" className="btn">
              See product
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default home;
