import React, { useEffect } from "react";
import $ from "jquery";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "owl.carousel";

function Portfolio_Slider() {
  const options = {
    autoplay: true,
    autoplayTimeout: 3000, // 3 seconds delay between transitions
    autoplaySpeed: 1000, // 1 second transition speed
    autoplayHoverPause: true, // Pause on hover
    smartSpeed: 1000, // Smooth transition
    items: 4,
    loop: true,
    margin: 0,
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
      <section id="portfolio" className="section-padding pb-0">
        <div className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 text-center mx-auto">
                <div className="section-title">
                  <h3>
                    Cleveland <span>Gallery</span>
                  </h3>
                  <span className="line"></span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row text-center ">
            <OwlCarousel className="portfolio-slider" {...options}>
              <div className="single-gallery-item">
                <div className="single-gallery single-gallery-first">
                  <img
                    className="img-fluid"
                    src="assets/images/gallery/1.jpg"
                    alt=""
                  />
                  <div className="single-gallery">
                    <div className="single-gallery-inner">
                      <h5>Gallery Title</h5>
                      <p className="px-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing.
                      </p>
                      <a href="#" className="info">
                        <i className="icofont icofont-link"></i>
                      </a>
                      <a
                        href="assets/images/gallery/1.jpg"
                        className="venobox info"
                        data-title="PORTFOLIO TITTLE"
                        data-gall="gall1"
                      >
                        <i className="icofont icofont-expand"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="single-gallery-item">
                <div className="single-gallery single-gallery-first">
                  <img
                    className="img-fluid"
                    src="assets/images/gallery/4.jpg"
                    alt=""
                  />
                  <div className="single-gallery">
                    <div className="single-gallery-inner">
                      <h5>Youtube Demo</h5>
                      <p className="px-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing.
                      </p>
                      <a href="#" className="info">
                        <i className="icofont icofont-link"></i>
                      </a>
                      <a
                        href="https://www.youtube.com/watch?v=U6tSjIAGaTU"
                        data-title="PORTFOLIO YOUTUBE VIDEO"
                        data-vbtype="youtube"
                        className="venobox info vbox-item"
                        data-gall="gall1"
                      >
                        <i className="icofont icofont-expand"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="single-gallery-item">
                <div className="single-gallery single-gallery-first">
                  <img
                    className="img-fluid"
                    src="assets/images/gallery/3.jpg"
                    alt=""
                  />
                  <div className="single-gallery">
                    <div className="single-gallery-inner">
                      <h5>Vimeo Demo</h5>
                      <p className="px-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing.
                      </p>
                      <a href="#" className="info">
                        <i className="icofont icofont-link"></i>
                      </a>
                      <a
                        href="https://vimeo.com/75976293"
                        className="venobox info vbox-item"
                        data-autoplay="true"
                        data-title="PORTFOLIO VIMEO VIDEO"
                        data-vbtype="vimeo"
                        data-gall="gall1"
                      >
                        <i className="icofont icofont-expand"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="single-gallery-item">
                <div className="single-gallery single-gallery-first">
                  <img
                    className="img-fluid"
                    src="assets/images/gallery/5.jpg"
                    alt=""
                  />
                  <div className="single-gallery">
                    <div className="single-gallery-inner">
                      <h5>Gallery Title</h5>
                      <p className="px-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing.
                      </p>
                      <a href="#" className="info">
                        <i className="icofont icofont-link"></i>
                      </a>
                      <a
                        href="assets/images/gallery/5.jpg"
                        className="venobox info"
                        data-title="PORTFOLIO TITTLE"
                        data-gall="gall1"
                      >
                        <i className="icofont icofont-expand"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="single-gallery-item">
                <div className="single-gallery single-gallery-first">
                  <img
                    className="img-fluid"
                    src="assets/images/gallery/2.jpg"
                    alt=""
                  />
                  <div className="single-gallery">
                    <div className="single-gallery-inner">
                      <h5>Gallery Title</h5>
                      <p className="px-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing.
                      </p>
                      <a href="#" className="info">
                        <i className="icofont icofont-link"></i>
                      </a>
                      <a
                        href="assets/images/gallery/2.jpg"
                        className="venobox info"
                        data-title="PORTFOLIO TITTLE"
                        data-gall="gall1"
                      >
                        <i className="icofont icofont-expand"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio_Slider;
