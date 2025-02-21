import React, { useEffect } from "react";
import $ from "jquery";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "owl.carousel";

function Service_Slider() {
  const options = {
    autoplay: true,
    autoplayTimeout: 3000, // 3 seconds delay between transitions
    autoplaySpeed: 1000, // 1 second transition speed
    autoplayHoverPause: true, // Pause on hover
    smartSpeed: 1000, // Smooth transition
    // rtl: true, // Right-to-left direction
    items: 4,
    loop: true,
    margin: 20,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 1, // 1 item on small screens (mobile)
      },
      600: {
        items: 2, // 2 items on medium screens (tablet)
      },
      1000: {
        items: 4, // 4 items on large screens (desktop)
      },
    },
  };

  return (
    <div>
      <section id="services" className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 text-center mx-auto">
              <div className="section-title">
                <h3>
                  Our<span> Services</span>
                </h3>
                <span className="line"></span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <OwlCarousel className="service-slider" {...options}>
              <div className="single-service-item">
                <div className="single-service">
                  <img
                    className="img-fluid"
                    src="assets/images/service/1.jpg"
                    alt=""
                  />
                  <h5>CANCER CARE</h5>
                  <p>
                    Lorem ipsum dolor sit consecte adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et.
                  </p>
                  <a className="serv-rmbtn" href="#">
                    Read More
                  </a>
                </div>
              </div>
              <div className="single-service-item">
                <div className="single-service">
                  <img
                    className="img-fluid"
                    src="assets/images/service/2.jpg"
                    alt=""
                  />
                  <h5>HEALTH CHECK</h5>
                  <p>
                    Lorem ipsum dolor sit consecte adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et.
                  </p>
                  <a className="serv-rmbtn" href="#">
                    Read More
                  </a>
                </div>
              </div>
              <div className="single-service-item">
                <div className="single-service">
                  <img
                    className="img-fluid"
                    src="assets/images/service/3.jpg"
                    alt=""
                  />
                  <h5>HOME CARE</h5>
                  <p>
                    Lorem ipsum dolor sit consecte adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et.
                  </p>
                  <a className="serv-rmbtn" href="#">
                    Read More
                  </a>
                </div>
              </div>
              <div className="single-service-item">
                <div className="single-service">
                  <img
                    className="img-fluid"
                    src="assets/images/service/4.jpg"
                    alt=""
                  />
                  <h5>GENERAL SURGERY</h5>
                  <p>
                    Lorem ipsum dolor sit consecte adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et.
                  </p>
                  <a className="serv-rmbtn" href="#">
                    Read More
                  </a>
                </div>
              </div>
              <div className="single-service-item">
                <div className="single-service">
                  <img
                    className="img-fluid"
                    src="assets/images/service/5.jpg"
                    alt=""
                  />
                  <h5>Dental Medicine</h5>
                  <p>
                    Lorem ipsum dolor sit consecte adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et.
                  </p>
                  <a className="serv-rmbtn" href="#">
                    Read More
                  </a>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Service_Slider;
