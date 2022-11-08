import React from "react";
import xxdesktop from "../assets/product-xx99-mark-two-headphones/desktop/image-product.jpg";
import xxtablet from "../assets/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg";
import xxmobile from "../assets/product-xx99-mark-two-headphones/mobile/image-product.jpg";
import xx1desktop from "../assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg";
import xx1mobile from "../assets/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg";
import xx1tablet from "../assets/product-xx99-mark-one-headphones/tablet/image-category-page-preview.jpg";
import xx59desktop from "../assets/product-xx59-headphones/desktop/image-product.jpg";
import xx59mobile from "../assets/product-xx59-headphones/mobile/image-product.jpg";
import xx59tablet from "../assets/product-xx59-headphones/tablet/image-category-page-preview.jpg";
import headphone from "../assets/xshared/xheadphones.png";
import speaker from "../assets/xshared/xspeakers.png";
import earphone from "../assets/xshared/xearphones.png";
import arrowright from "../assets/icon-arrow-right.svg";
import "../components/Headphone.css";
import { Link } from "react-router-dom";
import Headphone1 from "./headphone1/Headphone1";

const Headphone = () => {
  return (
    <>
      <div className="heading">
        <h4>Headphones</h4>
      </div>
      <div className="xx99">
        <div className="xx99-images">
          <img className="desktop" src={xxdesktop} alt="" />
          <img className="tablet" src={xxtablet} alt="" />
          <img className="mobile" src={xxmobile} alt="" />
        </div>
        <div className="xx99-texts">
          <p>New product</p>
          <h1>
            XX99 Mark II <br /> Headphones
          </h1>
          <h6>
            The new XX99 Mark II headphones is the pinnacle of pristine audio.
            It redefines your premium headphone experience by reproducing the
            balanced depth and precision of studio-quality sound.{" "}
          </h6>
          <Link className="btn" to="/headphone1">
            SEE PRODUCT
          </Link>
        </div>
      </div>

      <div className="xx99-mark">
        <div className="xx99mark-images">
          <img className="desktop" src={xx1desktop} alt="" />
          <img className="tablet" src={xx1tablet} alt="" />
          <img className="mobile" src={xx1mobile} alt="" />
        </div>
        <div className="xx99mark-texts">
          <h1>
            XX99 Mark I <br /> Headphones
          </h1>
          <h6>
            As the gold standard for headphones, the classic XX99 Mark I offers
            detailed and accurate audio reproduction for audiophiles, mixing
            engineers, and music aficionados alike in studios and on the go.{" "}
          </h6>
          <a href="#" className="btn">
            SEE PRODUCT
          </a>
        </div>
      </div>

      <div className="xx59">
        <div className="xx59-images">
          <img className="desktop" src={xx59desktop} alt="" />
          <img className="tablet" src={xx59tablet} alt="" />
          <img className="mobile" src={xx59mobile} alt="" />
        </div>
        <div className="xx59-texts">
          <h1>XX59 Headphones</h1>
          <h6>
            Enjoy your audio almost anywhere and customize it to your specific
            tastes with the XX59 headphones. The stylish yet durable versatile
            wireless headset is a brilliant companion at home or on the move.{" "}
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

      <Headphone1 />
    </>
  );
};

export default Headphone;
