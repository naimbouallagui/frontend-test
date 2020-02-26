import React from "react";
import OurServices from "../component/ourServices";

const NavBar = () => {
  return (
    <>
      <header className="headerCover d-flex flex-wrap align-content-space-evenly w-100">
        <div className="d-block m-auto col-4" style={{ minWidth: "551px" }}>
          <div className="border border-white p-4 text-center">
            <h1 className="text-white">
              We're <span className="text-orange">Fusion</span>, We Build Things
              For Human
            </h1>
          </div>
          <div className="text-white mt-3">
            <ul className="list-unstyled d-flex justify-content-center font-family-open-sans">
              <li className="pr-3">
                <a href="#/" className="text-white">
                  DESIGN
                </a>
              </li>
              <span className="text-orange">|</span>
              <li className="pl-3 pr-3">
                <a href="#/" className="text-white">
                  STRATEGY
                </a>
              </li>{" "}
              <span className="text-orange">|</span>
              <li className="pl-3 pr-3">
                <a href="#/" className="text-white">
                  BRANDING
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="break-flex"></div>
        <div className="text-orange text-center w-100">
          <i class="fas fa-chevron-down"></i>
        </div>

        <div className="break-flex"></div>

        <div className="text-orange text-center w-100 d-flex justify-content-around">
          <div>
            <button className="rounded-circle btn btn-outline-orange">F</button>
          </div>
          <div>
            <a href="#/" className="text-white font-family-open-sans mr-4">
              GET IN TOUCH
            </a>
            <i class="fas fa-arrow-right"></i>
          </div>
        </div>
      </header>
      <OurServices />
      <section className="d-flex flex-wrap align-content-space-evenly w-100 bg-dark-grey">
        <div className="m-auto">
          <div className="vertical-line mx-5"></div>
          <p className="text-orange mt-4">TESTIMONIALS</p>
        </div>
        <div className="break-flex"></div>
        <div className="d-block m-auto col-4" style={{ minWidth: "551px" }}>
          <div className=" p-4 text-center">
            <h3 className="text-white">
              We have worked with some amazing companies arround the world
            </h3>
          </div>
        </div>
        <div className="break-flex"></div>
        <div class="container mt-5">
          <div class="row text-white">
            <div class="col-sm">
              <a href="#/">
                <i class="fab fa-cc-mastercard text-white font-size-icon"></i>
              </a>
            </div>
            <div class="col-sm">
              <a href="#/">
                <i class="fas fa-layer-group text-white font-size-icon"></i>
              </a>
            </div>
            <div class="col-sm">
              <a href="#/">
                <i class="far fa-save text-white font-size-icon"></i>
              </a>
            </div>
            <div class="col-sm">
              <a href="#/">
                <i class="fab fa-pinterest text-white font-size-icon"></i>
              </a>
            </div>
            <div class="col-sm">
              <a href="#/">
                <i class="fab fa-cc-visa text-white font-size-icon"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NavBar;
