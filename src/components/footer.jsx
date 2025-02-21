import React, { useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "owl.carousel";

function Footer() {
  const options = {
    autoplay: true,
    autoplayTimeout: 4000, // 3 seconds delay between transitions
    autoplaySpeed: 2000, // 1 second transition speed
    autoplayHoverPause: true, // Pause on hover
    smartSpeed: 2000, // Smooth transition
    items: 1,
    loop: true,
    margin: 0,
    nav: false,
    dots: false,
  };

  return (
    <div>
      <footer>
        <div
          className="footer-top overlay-2 section-back-image-2"
          data-background="assets/images/counter-bg.jpg"
          style={{ backgroundImage: "url(assets/images/counter-bg.jpg)" }}
        >
          <div className="auto-container">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-12 col-12  mb-lg-0 mb-md-4 mb-sm-5 mb-5 footer-widget">
                <div className="footer-section-title col-12 p-0 mb-4">
                  <h5>About Us</h5>
                </div>
                <div className="about">
                  <p>
                    Cleveland Hospitals is one of the most multi-specialty
                    healthcare provider catering to both native & foreigner
                    patients.
                  </p>
                  <p>
                    Manage your health the easier way with the Cleveland
                    Hospital mobile app. Download it today! Available on.
                  </p>
                </div>
                <div className="footer-logo">
                  <a href="#">
                    <img
                      className="img-fluid"
                      src="assets/images/app-google.png"
                      alt=""
                    />
                  </a>
                  <a href="#">
                    <img
                      className="img-fluid"
                      src="assets/images/app-apple.png"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 col-12  mb-lg-0 mb-md-4 mb-sm-5 mb-5 footer-widget">
                <div className="footer-section-title col-12 p-0 mb-4">
                  <h5>Our Associates</h5>
                </div>
                <ul className="quick-link-list">
                  <li>
                    <a href="#">Education</a>
                  </li>
                  <li>
                    <a href="#">Research</a>
                  </li>
                  <li>
                    <a href="#">Healthcare Services</a>
                  </li>
                  <li>
                    <a href="#">Cleveland Foundation</a>
                  </li>
                </ul>
                <div className="footer-section-title col-12 p-0 mt-4 mb-4">
                  <h5>Get Connected</h5>
                </div>
                <div className="footer-social">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="icofont icofont-social-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icofont icofont-social-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icofont icofont-social-youtube-play"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icofont icofont-social-google-plus"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 col-12  mb-lg-0 mb-md-0 mb-sm-5 mb-5 footer-widget">
                <div className="footer-section-title col-12 p-0 mb-4">
                  <h5>What's new</h5>
                </div>
                {/* <div className="single-wn-slider owl-carousel owl-theme">
                 
                </div> */}
                <OwlCarousel className="single-wn-slider" {...options}>
                  <div className="single-wn-item">
                    <p>How to Prevent Eye Injuries?</p>
                    <p>
                      People at work are equally at risk of eye injuries as
                      those at home. Fortunately, 90 percent of all eye injuries
                      are preventable. Learn how to prevent eye injuries.
                    </p>
                  </div>
                  <div className="single-wn-item">
                    <p>Need To Know About Scoliosis?</p>
                    <p>
                      Scoliosis is a sideward bend of the spine which usually
                      occurs in children, but can also sometimes affect adults.
                      A normal spine is curved on the top of the shoulder.
                    </p>
                  </div>
                </OwlCarousel>
                <a className="wn-readm" href="#">
                  Know more
                </a>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 col-12 footer-widget">
                <div className="footer-section-title col-12 p-0 mb-4">
                  <h5>Stay With us</h5>
                </div>
                <ul className="quick-link-list">
                  <li>
                    <a href="#">
                      <i className="lnr lnr-map-marker"></i> Nazimabad, Karachi,
                      Pakistan
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="lnr lnr-envelope "></i> info@yoursite.com
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="lnr lnr-phone "></i> +0 123-456-7890
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icofont icofont-clock-time"></i> Open: Mon
                      to Sat: 9AM to 5PM
                    </a>
                  </li>
                </ul>
                <div className="footer-section-title col-12 p-0 mt-4 mb-4">
                  <h5>Get Updated</h5>
                </div>
                <div className="foo-news">
                  <form action="send.php" method="post">
                    <div className="row m-0">
                      <div className="form-group col-lg-10 col-md-10 col-sm-10 col-10 p-0">
                        <input
                          name="fnews"
                          type="email"
                          className="form-control"
                          placeholder="Your email here..."
                        />
                      </div>
                      <div className="form-group col-lg-2 col-md-2 col-sm-2 col-2 p-0">
                        <button type="submit" className="btn fnews-btn">
                          <i className="icofont icofont-location-arrow"></i>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <div className="auto-container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 col-12 copyright-text">
                <p>
                  Copyright © 2018 <a href="#"> Doctor</a> | All Rights Reserved
                </p>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-12 footer-menu">
                <ul>
                  <li>
                    <a href="#">Make an Enquiry</a>{" "}
                  </li>
                  <li>
                    <a href="#">Book an Appointment</a>{" "}
                  </li>
                  <li>
                    <a href="#">Terms and Conditions</a>{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
