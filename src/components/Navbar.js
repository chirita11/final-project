import React from "react";
import "../components/Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-dark py-3" id="nav">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <h1>audiophile</h1>
          </a>
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
              <a class="nav-link " aria-current="page" href="#">
                Home
              </a>
              <a class="nav-link active" href="#">
                Headphones
              </a>
              <a class="nav-link" href="#">
                Speakers
              </a>
              <a class="nav-link" href="#">
                Earphones
              </a>
            </div>
            <div className="cart">
              <a href="#" className="text-white">
                <i class="bi bi-cart"></i>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
