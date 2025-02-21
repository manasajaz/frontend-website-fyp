import React, { useEffect } from "react";
import $ from "jquery";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "owl.carousel";

function Logo_Slider() {
  const options = {
    autoplay: true,
    autoplayTimeout: 3000, // 3 seconds delay between transitions
    autoplaySpeed: 1000, // 1 second transition speed
    autoplayHoverPause: true, // Pause on hover
    smartSpeed: 1000, // Smooth transition
    items: 4,
    loop: true,
    margin: 20,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 2, // 1 item on small screens (mobile)
      },
      600: {
        items: 3, // 2 items on medium screens (tablet)
      },
      1000: {
        items: 5, // 4 items on large screens (desktop)
      },
    },
  };

  return (
    <div>
      <div id="client" className="client-section bg-gray">
        <div className="container">
          <div className="row">
            <OwlCarousel className="client-slider" {...options}>
              <div className="single-client">
                <a href="#">
                  <img
                    className="img-fluid"
                    src="assets/images/clients/1.png"
                    alt=""
                  />
                </a>
              </div>
              <div className="single-client">
                <a href="#">
                  <img
                    className="img-fluid"
                    src="assets/images/clients/2.png"
                    alt=""
                  />
                </a>
              </div>
              <div className="single-client">
                <a href="#">
                  <img
                    className="img-fluid"
                    src="assets/images/clients/3.png"
                    alt=""
                  />
                </a>
              </div>
              <div className="single-client">
                <a href="#">
                  <img
                    className="img-fluid"
                    src="assets/images/clients/4.png"
                    alt=""
                  />
                </a>
              </div>
              <div className="single-client">
                <a href="#">
                  <img
                    className="img-fluid"
                    src="assets/images/clients/1.png"
                    alt=""
                  />
                </a>
              </div>
              <div className="single-client">
                <a href="#">
                  <img
                    className="img-fluid"
                    src="assets/images/clients/2.png"
                    alt=""
                  />
                </a>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Logo_Slider;
