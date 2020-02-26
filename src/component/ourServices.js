import React from "react";
import ComponentDescription from "./ComponentDescription";
import HeadComponent from "./HeadComponent";

const OurServices = () => {
  return (
    <>
      <section className="d-flex flex-wrap align-content-space-evenly w-100 bg-dark-grey">
        <HeadComponent />
        <div className="break-flex"></div>
        <ComponentDescription />
        <div className="break-flex"></div>
        <div class="container mt-5">
          <div class="row text-white">
            <div class="col-sm">
              <ul className="list-unstyled">
                <li className="pb-3">
                  <i class="far fa-address-book text-orange"></i>
                </li>
                <li className="py-4">
                  <h2>Strategy.</h2>
                </li>
                <li className="text-muted ">
                  Ship it user story iterate engaging co-working intuitive pitch
                  deck hacker prototype SpaceTeam user centered design big data.
                </li>
                <li className="py-4">
                  <a
                    href="#/"
                    className="text-white font-family-open-sans mr-4"
                  >
                    SEE DETAILS
                  </a>
                  <i class="fas fa-arrow-right text-orange"></i>
                </li>
              </ul>
            </div>
            <div class="col-sm">
              <ul className="list-unstyled">
                <li className="pb-3">
                  <i class="far fa-edit text-orange"></i>
                </li>
                <li className="py-4">
                  <h2>Branding.</h2>
                </li>
                <li className="text-muted">
                  Ship it user story iterate engaging co-working intuitive pitch
                  deck hacker prototype SpaceTeam user centered design big data.
                </li>
                <li className="py-4">
                  <a
                    href="#/"
                    className="text-white font-family-open-sans mr-4"
                  >
                    SEE DETAILS
                  </a>
                  <i class="fas fa-arrow-right text-orange"></i>
                </li>
              </ul>
            </div>
            <div class="col-sm">
              <ul className="list-unstyled">
                <li className="pb-3">
                  <i class="fas fa-pen text-orange"></i>
                </li>
                <li className="py-4">
                  <h2>Design.</h2>
                </li>
                <li className="text-muted">
                  Ship it user story iterate engaging co-working intuitive pitch
                  deck hacker prototype SpaceTeam user centered design big data.
                </li>
                <li className="py-4">
                  <a
                    href="#/"
                    className="text-white font-family-open-sans mr-4"
                  >
                    SEE DETAILS
                  </a>
                  <i class="fas fa-arrow-right text-orange"></i>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      </>
  );
};

export default OurServices;
