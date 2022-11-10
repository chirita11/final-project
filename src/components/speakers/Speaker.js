import React from "react";
import zspeakerdesktop from "../../assets/product-zx9-speaker/desktop/image-product.jpg";
import zspeakertablet from "../../assets/product-zx9-speaker/tablet/image-category-page-preview.jpg";
import zspeakermobile from "../../assets/product-zx9-speaker/mobile/image-product.jpg";
import z7speakerdesktop from "../../assets/product-zx7-speaker/desktop/image-product.jpg";
import z7speakertablet from "../../assets/product-zx7-speaker/tablet/image-category-page-preview.jpg";
import z7speakermobile from "../../assets/product-zx7-speaker/mobile/image-product.jpg";
import headphone from "../../assets/xshared/xheadphones.png";
import speaker from "../../assets/xshared/xspeakers.png";
import earphone from "../../assets/xshared/xearphones.png";
import arrowright from "../../assets/icon-arrow-right.svg";

import "../speakers/Speaker.css";

const Speaker = () => {
  return (
    <div>
      <div className="heading">
        <h4>Speakers</h4>
      </div>
      <div className="zx9">
        <div className="zx9-images">
          <img className="desktop" src={zspeakerdesktop} alt="" />
          <img className="tablet" src={zspeakertablet} alt="" />
          <img className="mobile" src={zspeakermobile} alt="" />
        </div>
        <div className="zx9-texts">
          <p>New product</p>
          <h1>
            ZX9
            <br /> Speaker
          </h1>
          <h6>
            Upgrade your sound system with the all new ZX9 active speaker. It’s
            a bookshelf speaker system that offers truly wireless connectivity
            -- creating new possibilities for more pleasing and practical audio
            setups.
          </h6>
          <a href="#" className="btn">
            SEE PRODUCT
          </a>
        </div>
      </div>

      <div className="zx7">
        <div className="zx7-images">
          <img className="desktop" src={z7speakerdesktop} alt="" />
          <img className="tablet" src={z7speakertablet} alt="" />
          <img className="mobile" src={z7speakermobile} alt="" />
        </div>
        <div className="zx7-texts">
          <h1>
            ZX7 <br /> Speakers
          </h1>
          <h6>
            Stream high quality sound wirelessly with minimal to no loss. The
            ZX7 speaker uses high-end audiophile components that represents the
            top of the line powered speakers for home or studio use.
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
    </div>
  );
};

export default Speaker;
