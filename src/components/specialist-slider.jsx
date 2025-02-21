import React, { useEffect } from "react";
import $ from "jquery";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "owl.carousel";

function Specialist_Slider() {
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
      <section id="doctor" className="section-padding bg-gray">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 text-center mx-auto">
              <div className="section-title">
                <h3>
                  Our<span> Specialities</span>
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
          <div className="row">
            {/* <div className="team-slider owl-carousel owl-theme">
              <div className="single-doctor single-doctor-warp">
                <img className="img-fluid" src="assets/images/team/1.jpg" alt="" />
                <div className="single-doctor-info">
                  <h4>Stevest Henry</h4>
                  <span>Ophthalmologist</span>
                </div>
                <div className="single-doctor-mask">
                  <div className="single-doctor-mask-inner">
                    <h5>About Doctor</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                    <ul>
                      <li><a href="#">Get Appointment</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="single-doctor single-doctor-warp">
                <img className="img-fluid" src="assets/images/team/2.jpg" alt="" />
                <div className="single-doctor-info">
                  <h4>Williums Kevins</h4>
                  <span>Dermatologist</span>
                </div>
                <div className="single-doctor-mask">
                  <div className="single-doctor-mask-inner">
                    <h5>About Doctor</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                    <ul>
                      <li><a href="#">Get Appointment</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="single-doctor single-doctor-warp">
                <img className="img-fluid" src="assets/images/team/3.jpg" alt="" />
                <div className="single-doctor-info">
                  <h4>Kewillues Jenifer</h4>
                  <span>Radiologist</span>
                </div>
                <div className="single-doctor-mask">
                  <div className="single-doctor-mask-inner">
                    <h5>About Doctor</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                    <ul>
                      <li><a href="#">Get Appointment</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="single-doctor single-doctor-warp">
                <img className="img-fluid" src="assets/images/team/4.jpg" alt="" />
                <div className="single-doctor-info">
                  <h4>Marquis Williums</h4>
                  <span>Urologist</span>
                </div>
                <div className="single-doctor-mask">
                  <div className="single-doctor-mask-inner">
                    <h5>About Doctor</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                    <ul>
                      <li><a href="#">Get Appointment</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="single-doctor single-doctor-warp">
                <img className="img-fluid" src="assets/images/team/5.jpg" alt="" />
                <div className="single-doctor-info">
                  <h4>Revenna Warner</h4>
                  <span>Neurologist</span>
                </div>
                <div className="single-doctor-mask">
                  <div className="single-doctor-mask-inner">
                    <h5>About Doctor</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                    <ul>
                      <li><a href="#">Get Appointment</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div> */}
            <OwlCarousel className="team-slider" {...options}>
              <div className="single-doctor single-doctor-warp">
                <img
                  className="img-fluid"
                  src="assets/images/team/1.jpg"
                  alt=""
                />
                <div className="single-doctor-info">
                  <h4>Stevest Henry</h4>
                  <span>Ophthalmologist</span>
                </div>
                <div className="single-doctor-mask">
                  <div className="single-doctor-mask-inner">
                    <h5>About Doctor</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor.
                    </p>
                    <ul>
                      <li>
                        <a href="#">Get Appointment</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="single-doctor single-doctor-warp">
                <img
                  className="img-fluid"
                  src="assets/images/team/2.jpg"
                  alt=""
                />
                <div className="single-doctor-info">
                  <h4>Williums Kevins</h4>
                  <span>Dermatologist</span>
                </div>
                <div className="single-doctor-mask">
                  <div className="single-doctor-mask-inner">
                    <h5>About Doctor</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor.
                    </p>
                    <ul>
                      <li>
                        <a href="#">Get Appointment</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="single-doctor single-doctor-warp">
                <img
                  className="img-fluid"
                  src="assets/images/team/3.jpg"
                  alt=""
                />
                <div className="single-doctor-info">
                  <h4>Kewillues Jenifer</h4>
                  <span>Radiologist</span>
                </div>
                <div className="single-doctor-mask">
                  <div className="single-doctor-mask-inner">
                    <h5>About Doctor</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor.
                    </p>
                    <ul>
                      <li>
                        <a href="#">Get Appointment</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="single-doctor single-doctor-warp">
                <img
                  className="img-fluid"
                  src="assets/images/team/4.jpg"
                  alt=""
                />
                <div className="single-doctor-info">
                  <h4>Marquis Williums</h4>
                  <span>Urologist</span>
                </div>
                <div className="single-doctor-mask">
                  <div className="single-doctor-mask-inner">
                    <h5>About Doctor</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor.
                    </p>
                    <ul>
                      <li>
                        <a href="#">Get Appointment</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="single-doctor single-doctor-warp">
                <img
                  className="img-fluid"
                  src="assets/images/team/5.jpg"
                  alt=""
                />
                <div className="single-doctor-info">
                  <h4>Revenna Warner</h4>
                  <span>Neurologist</span>
                </div>
                <div className="single-doctor-mask">
                  <div className="single-doctor-mask-inner">
                    <h5>About Doctor</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor.
                    </p>
                    <ul>
                      <li>
                        <a href="#">Get Appointment</a>
                      </li>
                    </ul>
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

export default Specialist_Slider;
