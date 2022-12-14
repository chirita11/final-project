import React from "react";
import "../components/Navbar.css";
import logoImg from "../assets/shared/desktop/logo.svg";
import cart from "../assets/shared/desktop/icon-cart.svg";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const { pathname: exactLocation } = location;
  const newLocation = exactLocation.split("/");
  console.log(newLocation);

  return (
    <>
      <nav class="navbar navbar-expand-lg  py-4" id="nav">
        <div class="container-fluid">
          <Link class="navbar-brand" href="#">
            <img src={logoImg} alt="" />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <Link
                className={newLocation[1] === "" ? "active" : ""}
                aria-current="page"
                to="/"
              >
                Home
              </Link>
              <Link
                className={newLocation[1] === "about" ? "active" : ""}
                to="/headphone"
              >
                Headphones
              </Link>
              <Link
                className={newLocation[1] === "about" ? "active" : ""}
                to="/speaker"
              >
                Speakers
              </Link>
              <Link
                className={newLocation[1] === "about" ? "active" : ""}
                to="/earphone"
              >
                Earphones
              </Link>
            </div>
            <div className="cart-icon">
              <Link className="cart">
                <img src={cart} alt="" />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
