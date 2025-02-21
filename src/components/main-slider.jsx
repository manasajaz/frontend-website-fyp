import React, { useEffect } from "react";
import $ from "jquery";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "owl.carousel";

function Main_Slider() {
  const options = {
    autoplay: true,
    autoplayTimeout: 4000, // 3 seconds delay between transitions
    autoplaySpeed: 1500, // 1 second transition speed
    autoplayHoverPause: true, // Pause on hover
    smartSpeed: 1500, // Smooth transition
    items: 1,
    loop: true,
    margin: 0,
    nav: false,
    dots: false,
  };

  return (
    <div>
      <section className="slider-section">
        <OwlCarousel className="home-slides" {...options}>
          <div
            className="home-single-slide"
            data-background="assets/images/slide2.jpg"
            style={{ backgroundImage: "url(assets/images/slide2.jpg)" }}
          >
            <div className="home-slide-overlay"></div>
            <div className="home-single-slide-inner">
              <div className="auto-container">
                <div className="row">
                  <div className="col-lg-7 col-md-8 col-sm-8 col-12">
                    <div className="home-single-slide-dec">
                      <p>WELL CARE</p>
                      <h2>PROVIDING</h2>
                      <h2>TOTAL LAB SOLUTION</h2>
                      <span>
                        <i className="icofont icofont-plus"></i> CARING YOUR
                        REPORTS
                      </span>
                      <a href="appointment.php" className="home-btn-1">
                        GET APPOINTMENT
                      </a>
                      <a href="reports.php" className="home-btn-2">
                        LAB REPORTS
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-5 col-md-4 col-sm-4 col-12 d-lg-block d-md-block d-sm-block d-none">
                    <img
                      className="img-fluid"
                      src="assets/images/single-doc1.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="home-single-slide"
            data-background="assets/images/slide1.jpg"
            style={{ backgroundImage: "url(assets/images/slide1.jpg)" }}
          >
            <div className="home-slide-overlay"></div>
            <div className="home-single-slide-inner">
              <div className="auto-container">
                <div className="row">
                  <div className="col-lg-7 col-md-8 col-sm-8 col-12">
                    <div className="home-single-slide-dec">
                      <p>TOTAL CARE</p>
                      <h2>PROVIDING</h2>
                      <h2>HEALTH SOLUTION</h2>
                      <span>
                        <i className="icofont icofont-plus"></i> WE ARE CARING
                      </span>
                      <a href="services.php" className="home-btn-1">
                        OUR SERVICES
                      </a>
                      <a href="services.php" className="home-btn-2">
                        CONTACT US
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-5 col-md-4 col-sm-4 col-12 d-lg-block d-md-block d-sm-block d-none">
                    <img
                      className="home-single-slide--img img-fluid"
                      src="assets/images/single-doc2.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </OwlCarousel>
      </section>
    </div>
  );
}

export default Main_Slider;
