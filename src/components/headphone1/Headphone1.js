import React from "react";
import mobileheadphone from "../../assets/product-xx99-mark-two-headphones/mobile/image-product.jpg";
import tabletheadphone from "../../assets/product-xx99-mark-two-headphones/tablet/image-product.jpg";
import desktopheadphone from "../../assets/product-xx99-mark-two-headphones/desktop/image-product.jpg";

import gallery1mobile from "../../assets/product-xx99-mark-two-headphones/mobile/image-gallery-1.jpg";
import gallery2mobile from "../../assets/product-xx99-mark-two-headphones/mobile/image-gallery-2.jpg";
import gallery3mobile from "../../assets/product-xx99-mark-two-headphones/mobile/image-gallery-3.jpg";

import gallery1tablet from "../../assets/product-xx99-mark-two-headphones/tablet/image-gallery-1.jpg";
import gallery2tablet from "../../assets/product-xx99-mark-two-headphones/tablet/image-gallery-2.jpg";
import gallery3tablet from "../../assets/product-xx99-mark-two-headphones/tablet/image-gallery-3.jpg";

import gallery1desktop from "../../assets/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg";
import gallery2desktop from "../../assets/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg";
import gallery3desktop from "../../assets/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg";

import mark1desktop from "../../assets/shared/desktop/image-xx99-mark-one-headphones.jpg";
import mark1tablet from "../../assets/shared/tablet/image-xx99-mark-one-headphones.jpg";
import mark1mobile from "../../assets/shared/mobile/image-xx99-mark-one-headphones.jpg";
import xx59desktop from "../../assets/shared/desktop/image-xx59-headphones.jpg";
import xx59tablet from "../../assets/shared/tablet/image-xx59-headphones.jpg";
import xx59mobile from "../../assets/shared/mobile/image-xx59-headphones.jpg";
import speakerdesktop from "../../assets/shared/desktop/image-zx9-speaker.jpg";
import speakertablet from "../../assets/shared/tablet/image-zx9-speaker.jpg";
import speakermobile from "../../assets/shared/mobile/image-zx9-speaker.jpg";
import headphone from "../../assets/xshared/xheadphones.png";
import speaker from "../../assets/xshared/xspeakers.png";
import earphone from "../../assets/xshared/xearphones.png";
import arrowright from "../../assets/icon-arrow-right.svg";
import { Link } from "react-router-dom";
import "../headphone1/Headphone1.css";

const Headphone1 = () => {
  return (
    <>
      <div className="goback">
        <Link to="/headphone">Go Back</Link>
      </div>

      <div className="mark2">
        <div className="mark2-image">
          <img className="mobile" src={mobileheadphone} alt="" />
          <img className="tablet" src={tabletheadphone} alt="" />
          <img className="desktop" src={desktopheadphone} alt="" />
        </div>
        <div className="mark2-text">
          <h6>NEW PRODUCT</h6>
          <h4>XX99 Mark II Headphones</h4>
          <p>
            The new XX99 Mark II headphones is the pinnacle of pristine audio.
            It redefines your premium headphone experience by reproducing the
            balanced depth and precision of studio-quality sound.
          </p>
          <h5>$ 2,999</h5>

          <div className="counter">
            <div className="count">
              <button>-</button>
              <p>1</p>
              <button>+</button>
            </div>

            <div className="add">
              <a href="#" className="btn">
                ADD TO CART
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="features">
        <div className="feat">
          <h5>FEATURES</h5>
          <p>
            Featuring a genuine leather head strap and premium earcups, these
            headphones deliver superior comfort for those who like to enjoy
            endless listening. It includes intuitive controls designed for any
            situation. Whether you’re taking a business call or just in your own
            personal space, the auto on/off and pause features ensure that
            you’ll never miss a beat.
          </p>
          <p>
            The advanced Active Noise Cancellation with built-in equalizer allow
            you to experience your audio world on your terms. It lets you enjoy
            your audio in peace, but quickly interact with your surroundings
            when you need to. Combined with Bluetooth 5. 0 compliant
            connectivity and 17 hour battery life, the XX99 Mark II headphones
            gives you superior sound, cutting-edge technology, and a modern
            design aesthetic.
          </p>
        </div>

        <div className="boxflex">
          <h5>IN THE BOX</h5>
          <div className="inflex">
            <div className="flex">
              <span>1x</span>
              <p>Headphone Unit</p>
            </div>
            <div className="flex">
              <span>2x</span>
              <p>Replacement Earcups</p>
            </div>
            <div className="flex">
              <span>1x</span>
              <p> User manual</p>
            </div>

            <div className="flex">
              <span>1x</span>
              <p>3.5mm 5m Audio Cable</p>
            </div>
            <div className="flex">
              <span>1x</span>
              <p>Travel Bag</p>
            </div>
          </div>
        </div>
      </div>

      <div className="gallery-image">
        <div className="leftcontainer">
          <div className="gallery01">
            <img className="mobile" src={gallery1mobile} alt="" />
            <img className="tablet" src={gallery1tablet} alt="" />
            <img className="desktop" src={gallery1desktop} alt="" />
          </div>
          <div className="gallery02">
            <img className="mobile" src={gallery2mobile} alt="" />
            <img className="tablet" src={gallery2tablet} alt="" />
            <img className="desktop" src={gallery2desktop} alt="" />
          </div>
        </div>
        <div className="rightcontainer">
          <div className="gallery03">
            <img className="mobile" src={gallery3mobile} alt="" />
            <img className="tablet" src={gallery3tablet} alt="" />
            <img className="desktop" src={gallery3desktop} alt="" />
          </div>
        </div>
      </div>
      <div className="you-may-also-like">
        <div className="head">
          <h3>YOU MAY ALSO LIKE</h3>
        </div>
        <div className="you-images">
          <div>
            <img className="mobile" src={mark1mobile} alt="" />
            <img className="tablet" src={mark1tablet} alt="" />
            <img className="desktop" src={mark1desktop} alt="" />
            <h5>XX99 MARK I</h5>
            <a href="/" className="btn">
              SEE PRODUCT
            </a>
          </div>
          <div>
            <img className="mobile" src={xx59mobile} alt="" />
            <img className="tablet" src={xx59tablet} alt="" />
            <img className="desktop" src={xx59desktop} alt="" />
            <h5>XX59</h5>
            <a href="/" className="btn">
              SEE PRODUCT
            </a>
          </div>
          <div>
            <img className="mobile" src={speakermobile} alt="" />
            <img className="tablet" src={speakertablet} alt="" />
            <img className="desktop" src={speakerdesktop} alt="" />

            <h5>ZX9 SPEAKER</h5>
            <a href="/" className="btn">
              SEE PRODUCT
            </a>
          </div>
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
    </>
  );
};

export default Headphone1;
