import React from "react";
import mobileearphone from "../../assets/product-yx1-earphones/mobile/image-product.jpg";
import desktopearphone from "../../assets/product-yx1-earphones/desktop/image-category-page-preview.jpg";
import tabletearphone from "../../assets/product-yx1-earphones/tablet/image-category-page-preview.jpg";
import headphone from "../../assets/xshared/xheadphones.png";
import speaker from "../../assets/xshared/xspeakers.png";
import earphone from "../../assets/xshared/xearphones.png";
import arrowright from "../../assets/icon-arrow-right.svg";

import "../earphones/Earphones.css";

const Earphones = () => {
  return (
    <div>
      <div className="heading">
        <h4>Earphones</h4>
      </div>
      <div className="yx1">
        <div className="yx1-images">
          <img className="desktop" src={desktopearphone} alt="" />
          <img className="tablet" src={tabletearphone} alt="" />
          <img className="mobile" src={mobileearphone} alt="" />
        </div>
        <div className="yx1-texts">
          <p>New product</p>
          <h1>
            YX1 Wireless
            <br /> Earphones
          </h1>
          <h6>
            Tailor your listening experience with bespoke dynamic drivers from
            the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound
            even in noisy environments with its active noise cancellation
            feature.
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

export default Earphones;
