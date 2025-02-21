
import Portfolio_Slider from "../components/portfolio-slider";
import Service_Slider from "../components/service-slider";
import Specialist_Slider from "../components/specialist-slider";
import Logo_Slider from "../components/logo-slider";
import Main_Slider from "../components/main-slider";

function Home() {
  return (
    <div>
      {/* <div id="page-preloader">
        <div className="preloader-wrench"></div>
      </div> */}


      <Main_Slider />

      <section id="about" className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 text-center mx-auto">
              <div className="section-title">
                <h3>
                  Welcome to <span>Cleveland</span>
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
          <div className="row text-center">
            <div className="col-lg-3 col-md-6 col-sm-12 col-12 mb-lg-0 mb-md-4 mb-sm-4 mb-4">
              <div className="single-about">
                <div className="single-about-icon">
                  <img
                    className="img-fluid"
                    src="assets/images/icon-2.png"
                    alt=""
                  />
                </div>
                <h5>Our Mission</h5>
                <p>Lorem ipsum dolor sit consectetur adipiscing elit sed do.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 col-12 mb-lg-0 mb-md-4 mb-sm-4 mb-4">
              <div className="single-about">
                <div className="single-about-icon">
                  <img
                    className="img-fluid"
                    src="assets/images/icon-1.png"
                    alt=""
                  />
                </div>
                <h5>Our History</h5>
                <p>Lorem ipsum dolor sit consectetur adipiscing elit sed do.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 col-12 mb-lg-0 mb-md-4 mb-sm-4 mb-4">
              <div className="single-about">
                <div className="single-about-icon">
                  <img
                    className="img-fluid"
                    src="assets/images/icon-4.png"
                    alt=""
                  />
                </div>
                <h5>Our Vision</h5>
                <p>Lorem ipsum dolor sit consectetur adipiscing elit sed do.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 col-12 mb-lg-0 mb-md-4 mb-sm-4 mb-4">
              <div className="single-about">
                <div className="single-about-icon">
                  <img
                    className="img-fluid"
                    src="assets/images/icon-3.png"
                    alt=""
                  />
                </div>
                <h5>Our Success</h5>
                <p>Lorem ipsum dolor sit consectetur adipiscing elit sed do.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="service" className="section-padding bg-gray">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 text-center mx-auto">
              <div className="section-title">
                <h3>
                  Our <span>Facilities</span>
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
          <div className="service-tab">
            <div className="row">
              <div className="col-lg-3 col-md-12 c0l-sm-12 col-xs-12">
                <ul id="tabsJustified" className="nav nav-tabs text-center">
                  <li className="nav-item">
                    <a
                      href="#"
                      data-target="#one"
                      data-toggle="tab"
                      className="nav-link"
                    >
                      <h6>Dental Medicine </h6>
                      <span>Skill-95%</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="#"
                      data-target="#two"
                      data-toggle="tab"
                      className="nav-link active"
                    >
                      <h6>Organ Transplant</h6>
                      <span>Skill-85%</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="#"
                      data-target="#three"
                      data-toggle="tab"
                      className="nav-link"
                    >
                      <h6>Anaesthesiology </h6>
                      <span>Skill-90%</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="#"
                      data-target="#four"
                      data-toggle="tab"
                      className="nav-link"
                    >
                      <h6>Renal Sciences</h6>
                      <span>Skill-80%</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12">
                <div id="tabsJustifiedContent" className="tab-content">
                  <div id="one" className="tab-pane animated fadeInRight">
                    <div className="row">
                      <div className="col-lg-8 col-md-8 col-sm-12 col-12">
                        <h5>Treatment & Procedures</h5>
                        <p>
                          Pellentesque habitant morbi tristique senectus et
                          netus et malesuada fames ac turpis eges vestibulum
                          tortor quam, feugiat vitae, ultricies eget, tempor sit
                          amet, ante.
                        </p>
                        <div className="skill">
                          <div className="progress">
                            <div className="lead">Skill</div>
                            <div
                              className="progress-bar wow fadeInLeft"
                              data-wow-duration="0.5s"
                              data-wow-delay="0.5s"
                              data-progress="95%"
                              style={{ width: "95%" }}
                            ></div>
                            <span>95%</span>
                          </div>
                        </div>
                        <div className="service-tab-list">
                          <h5>Features List</h5>
                          <div className="row mt-3">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                              <ul>
                                <li>
                                  <i className="icofont icofont-simple-right"></i>{" "}
                                  Lorem Ipsum Dollar{" "}
                                </li>
                                <li>
                                  <i className="icofont icofont-simple-right"></i>{" "}
                                  Lorem Ipsum Dollar{" "}
                                </li>
                                <li>
                                  <i className="icofont icofont-simple-right"></i>{" "}
                                  Lorem Ipsum Dollar{" "}
                                </li>
                                <li>
                                  <i className="icofont icofont-simple-right"></i>{" "}
                                  Lorem Ipsum Dollar{" "}
                                </li>
                              </ul>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                              <ul>
                                <li>
                                  <i className="icofont icofont-simple-right"></i>{" "}
                                  Lorem Ipsum Dollar{" "}
                                </li>
                                <li>
                                  <i className="icofont icofont-simple-right"></i>{" "}
                                  Lorem Ipsum Dollar{" "}
                                </li>
                                <li>
                                  <i className="icofont icofont-simple-right"></i>{" "}
                                  Lorem Ipsum Dollar{" "}
                                </li>
                                <li>
                                  <i className="icofont icofont-simple-right"></i>{" "}
                                  Lorem Ipsum Dollar{" "}
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                        <div className="single-doctor single-doctor-warp">
                          <img
                            className="img-fluid"
                            src="assets/images/team/1.jpg"
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
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor.
                              </p>
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
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    id="two"
                    className="tab-pane animated fadeInRight active show"
                  >
                    <div className="row">
                      <div className="col-lg-8 col-md-8 col-sm-12 col-12">
                        <h5>Kidney Transplant Procedures</h5>
                        <p>
                          Pellentesque habitant morbi tristique senectus et
                          netus et malesuada fames ac turpis eges vestibulum
                          tortor quam, feugiat vitae, ultricies eget, tempor sit
                          amet, ante.
                        </p>
                        <div className="skill">
                          <div className="progress">
                            <div className="lead">Skill</div>
                            <div
                              className="progress-bar wow fadeInLeft"
                              data-wow-duration="0.5s"
                              data-wow-delay="0.5s"
                              data-progress="85%"
                              style={{ width: "85%" }}
                            ></div>
                            <span>85%</span>
                          </div>
                        </div>
                        <div className="service-tab-list">
                          <h5>Features List</h5>
                          <div className="row mt-3">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                              <ul>
                                <li>
                                  <i className="icofont icofont-simple-right"></i>{" "}
                                  Lorem Ipsum Dollar{" "}
                                </li>
                                <li>
                                  <i className="icofont icofont-simple-right"></i>{" "}
                                  Lorem Ipsum Dollar{" "}
                                </li>
                                <li>
                                  <i className="icofont icofont-simple-right"></i>{" "}
                                  Lorem Ipsum Dollar{" "}
                                </li>
                                <li>
                                  <i className="icofont icofont-simple-right"></i>{" "}
                                  Lorem Ipsum Dollar{" "}
                                </li>
                              </ul>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                              <ul>
                                <li>
                                  <i className="icofont icofont-simple-right"></i>{" "}
                                  Lorem Ipsum Dollar{" "}
                                </li>
                                <li>
                                  <i className="icofont icofont-simple-right"></i>{" "}
                                  Lorem Ipsum Dollar{" "}
                                </li>
                                <li>
                                  <i className="icofont icofont-simple-right"></i>{" "}
                                  Lorem Ipsum Dollar{" "}
                                </li>
                                <li>
                                  <i className="icofont icofont-simple-right"></i>{" "}
                                  Lorem Ipsum Dollar{" "}
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                        <div className="single-doctor single-doctor-warp">
                          <img
                            className="img-fluid"
                            src="assets/images/team/2.jpg"
                            alt=""
                          />
                          <div className="single-doctor-info">
                            <h4>Williums Kevins</h4>
                            <span>Urologist</span>
                          </div>
                          <div className="single-doctor-mask">
                            <div className="single-doctor-mask-inner">
                              <h5>About Doctor</h5>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor.
                              </p>
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
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="three" className="tab-pane animated fadeInRight">
                    <div className="row">
                      <div className="col-lg-8 col-md-8 col-sm-12 col-12">
                        <h5>Department of Anesthesiology</h5>
                        <p>
                          Pellentesque habitant morbi tristique senectus et
                          netus et malesuada fames ac turpis eges vestibulum
                          tortor quam, feugiat vitae, ultricies eget, tempor sit
                          amet, ante.
                        </p>
                        <div className="skill">
                          <div className="progress">
                            <div className="lead">Skill</div>
                            <div
                              className="progress-bar wow fadeInLeft"
                              data-wow-duration="0.5s"
                              data-wow-delay="0.5s"
                              data-progress="90%"
                              style={{ width: "90%" }}
                            ></div>
                            <span>90%</span>
                          </div>
                        </div>
                        <div className="service-tab-list">
                          <h5>Features List</h5>
                          <div className="row mt-3">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                              <ul>
                                <li>
                                  <i className="icofont icofont-simple-right"></i>{" "}
                                  Lorem Ipsum Dollar{" "}
                                </li>
                                <li>
                                  <i className="icofont icofont-simple-right"></i>{" "}
                                  Lorem Ipsum Dollar{" "}
                                </li>
                                <li>
                                  <i className="icofont icofont-simple-right"></i>{" "}
                                  Lorem Ipsum Dollar{" "}
                                </li>
                                <li>
                                  <i className="icofont icofont-simple-right"></i>{" "}
                                  Lorem Ipsum Dollar{" "}
                                </li>
                              </ul>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                              <ul>
                                <li>
                                  <i className="icofont icofont-simple-right"></i>{" "}
                                  Lorem Ipsum Dollar{" "}
                                </li>
                                <li>
                                  <i className="icofont icofont-simple-right"></i>{" "}
                                  Lorem Ipsum Dollar{" "}
                                </li>
                                <li>
                                  <i className="icofont icofont-simple-right"></i>{" "}
                                  Lorem Ipsum Dollar{" "}
                                </li>
                                <li>
                                  <i className="icofont icofont-simple-right"></i>{" "}
                                  Lorem Ipsum Dollar{" "}
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                        <div className="single-doctor single-doctor-warp">
                          <img
                            className="img-fluid"
                            src="assets/images/team/3.jpg"
                            alt=""
                          />
                          <div className="single-doctor-info">
                            <h4>Williums Kevins</h4>
                            <span>Anaesthesiologist</span>
                          </div>
                          <div className="single-doctor-mask">
                            <div className="single-doctor-mask-inner">
                              <h5>About Doctor</h5>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor.
                              </p>
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
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="four" className="tab-pane animated fadeInRight">
                    <div className="row">
                      <div className="col-lg-8 col-md-8 col-sm-12 col-12">
                        <h5>Institute of Nephrology & Urology:</h5>
                        <p>
                          Pellentesque habitant morbi tristique senectus et
                          netus et malesuada fames ac turpis eges vestibulum
                          tortor quam, feugiat vitae, ultricies eget, tempor sit
                          amet, ante.
                        </p>
                        <div className="skill">
                          <div className="progress">
                            <div className="lead">Skill</div>
                            <div
                              className="progress-bar wow fadeInLeft"
                              data-wow-duration="0.5s"
                              data-wow-delay="0.5s"
                              data-progress="80%"
                              style={{ width: "80%" }}
                            ></div>
                            <span>80%</span>
                          </div>
                        </div>
                        <div className="service-tab-list">
                          <h5>Features List</h5>
                          <div className="row mt-3">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                              <ul>
                                <li>
                                  <i className="icofont icofont-simple-right"></i>{" "}
                                  Lorem Ipsum Dollar{" "}
                                </li>
                                <li>
                                  <i className="icofont icofont-simple-right"></i>{" "}
                                  Lorem Ipsum Dollar{" "}
                                </li>
                                <li>
                                  <i className="icofont icofont-simple-right"></i>{" "}
                                  Lorem Ipsum Dollar{" "}
                                </li>
                                <li>
                                  <i className="icofont icofont-simple-right"></i>{" "}
                                  Lorem Ipsum Dollar{" "}
                                </li>
                              </ul>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                              <ul>
                                <li>
                                  <i className="icofont icofont-simple-right"></i>{" "}
                                  Lorem Ipsum Dollar{" "}
                                </li>
                                <li>
                                  <i className="icofont icofont-simple-right"></i>{" "}
                                  Lorem Ipsum Dollar{" "}
                                </li>
                                <li>
                                  <i className="icofont icofont-simple-right"></i>{" "}
                                  Lorem Ipsum Dollar{" "}
                                </li>
                                <li>
                                  <i className="icofont icofont-simple-right"></i>{" "}
                                  Lorem Ipsum Dollar{" "}
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                        <div className="single-doctor single-doctor-warp">
                          <img
                            className="img-fluid"
                            src="assets/images/team/4.jpg"
                            alt=""
                          />
                          <div className="single-doctor-info">
                            <h4>Williums Kevins</h4>
                            <span>Nephrologist</span>
                          </div>
                          <div className="single-doctor-mask">
                            <div className="single-doctor-mask-inner">
                              <h5>About Doctor</h5>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor.
                              </p>
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
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Portfolio_Slider />

      <section
        id="counter"
        className="counter-section overlay section-back-image"
        data-background="assets/images/counter-bg.jpg"
        style={{ backgroundImage: "url(assets/images/counter-bg.jpg)" }}
      >
        <div className="container">
          <div className="row wow fadeInDown">
            <div className="col-lg-3 col-md-6 col-sm-12 col-12 mb-lg-0 mb-md-4 mb-sm-4 mb-4">
              <div className="single-counter">
                <div className="single-counter-icon">
                  <i className="icofont icofont-users-alt-2"></i>
                </div>
                <div className="single-counter-text">
                  <h5 className="timer">1250</h5>
                  <p>Happy Patients</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 col-12 mb-lg-0 mb-md-4 mb-sm-4 mb-4">
              <div className="single-counter">
                <div className="single-counter-icon">
                  <i className="icofont icofont-nurse-alt"></i>
                </div>
                <div className="single-counter-text">
                  <h5 className="timer">1350</h5>
                  <p>Medical Workers</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 col-12 mb-lg-0 mb-md-4 mb-sm-4 mb-4">
              <div className="single-counter">
                <div className="single-counter-icon">
                  <i className="icofont icofont-doctor-alt"></i>
                </div>
                <div className="single-counter-text">
                  <h5 className="timer">1560</h5>
                  <p>Total Doctors</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 col-12 mb-lg-0 mb-md-4 mb-sm-4 mb-4">
              <div className="single-counter">
                <div className="single-counter-icon">
                  <i className="icofont icofont-hat-alt"></i>
                </div>
                <div className="single-counter-text">
                  <h5 className="timer">1670</h5>
                  <p>Medical Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Service_Slider />

      <Specialist_Slider />

      <section id="appointment" className="appointment-section section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3 d-lg-block d-md-block d-sm-none d-none">
              <div className="appointment-image">
                <img src="assets/images/single-doc3.png" alt="" />
              </div>
            </div>
            <div className="col-lg-9 col-md-9 col-sm-12 col-12">
              <div className="row">
                <div className="col-lg-5 col-md-5 col-sm-12 col-12 pr-5">
                  <h4>Book Appointment</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit sed.
                  </p>
                  <div className="single-quote">
                    <i className="icofont icofont-paralysis-disability"></i>
                    <h5>Health Check</h5>
                    <p>
                      Lorem ipsum dolor consectetur adipiscing elit sed do
                      eiusmod tempor incididunt.
                    </p>
                  </div>
                  <div className="single-quote">
                    <i className="icofont icofont-stethoscope"></i>
                    <h5>Get Directions</h5>
                    <p>
                      Lorem ipsum dolor consectetur adipiscing elit sed do
                      eiusmod tempor incididunt.
                    </p>
                  </div>
                </div>
                <div className="col-lg-7 col-md-7 col-sm-12 col-12">
                  <h4>Send Us Message</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit sed
                    do eiusmod tempor incididunt.
                  </p>
                  <div className="appointment-form">
                    <form action="send.php">
                      <div className="row">
                        <div className="form-group col-lg-6">
                          <input
                            name="aname"
                            className="form-control"
                            id="afirst-name"
                            placeholder="Your Name"
                            required="required"
                            type="text"
                          />
                        </div>
                        <div className="form-group col-lg-6">
                          <input
                            name="aemail"
                            className="form-control"
                            id="aemail"
                            placeholder="Your Email"
                            required="required"
                            type="email"
                          />
                        </div>
                        <div className="form-group col-lg-12">
                          <textarea
                            rows="6"
                            name="rmessage"
                            className="form-control"
                            id="adescription"
                            placeholder="Your Message Here..."
                            required="required"
                          ></textarea>
                        </div>
                        <div className="form-group col-lg-6">
                          <a
                            title="Click here to submit your message!"
                            className="btn btn-lg btn-app-form"
                          >
                            Send Message
                          </a>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="calltoaction"
        className="section-padding overlay section-back-image"
        data-background="assets/images/promo-bg.jpg"
        style={{ backgroundImage: "url(assets/images/promo-bg.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="calltoaction-wrap">
                <h4>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do
                  <br></br>incididunt ut labore et dolore{" "}
                  <span>magna aliqua</span>
                </h4>
                <a
                  href="https://www.youtube.com/watch?v=U6tSjIAGaTU"
                  className="venobox vbox-item promo-icon"
                  data-autoplay="true"
                  data-title="PROMO YOUTUBE VIDEO"
                  data-vbtype="youtube"
                  data-gall="gallpromo"
                >
                  <i className="icofont icofont-play"></i>
                </a>
                <a className="wow fadeInDown promo-rmbtn" href="#">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonialfaq" className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12 pr-lg-5 pr-md-5 pr-sm-0 pr-0 mb-lg-0 mb-md-0 mb-sm-5 mb-5">
              <div className="text-left">
                <div className="section-title section-title-left">
                  <h3>
                    Frequently <span>Asked Question</span>
                  </h3>
                  <span className="line"></span>
                </div>
              </div>
              <div className="panel-group faq-home-accor" id="accordion">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h5 className="panel-title">
                      <i className="icofont icofont-thin-down"></i>{" "}
                      <a
                        className="accordion-toggle"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#panel1"
                      >
                        What are the lab charges ?
                      </a>
                    </h5>
                  </div>
                  <div id="panel1" className="panel-collapse collapse show">
                    <div className="panel-body">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua Ut enim ad minim veniam, quis nostrud.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h5 className="panel-title">
                      <i className="icofont icofont-thin-right"></i>{" "}
                      <a
                        className="accordion-toggle collapsed"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#panel2"
                      >
                        How to get appointment?
                      </a>
                    </h5>
                  </div>
                  <div id="panel2" className="panel-collapse collapse">
                    <div className="panel-body">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua Ut enim ad minim veniam, quis nostrud.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h5 className="panel-title">
                      <i className="icofont icofont-thin-right"></i>{" "}
                      <a
                        className="accordion-toggle collapsed"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#panel3"
                      >
                        How to book health check?
                      </a>
                    </h5>
                  </div>
                  <div id="panel3" className="panel-collapse collapse">
                    <div className="panel-body">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua Ut enim ad minim veniam, quis nostrud.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="text-left">
                <div className="section-title section-title-left">
                  <h3>
                    What Our <span>Patients Says </span>
                  </h3>
                  <span className="line"></span>
                </div>
              </div>
              <div className="single-testimonial mb-4">
                <div className="single-testimonial-img">
                  <img
                    className="img-fluid"
                    src="assets/images/team/tes1.jpg"
                    alt=""
                  />
                </div>
                <div className="single-testimonial-text-warp">
                  <div className="single-testimonial-text-inner">
                    <p>
                      Lorem ipsum dolor sit amet consectetured adipiscing elit,
                      sed do eiusmod temporinci incididunt ut labore et dolore
                      magna aliqua.
                    </p>
                    <footer className="blockquote-footer">
                      Jone Doee , <cite title="Source Title">Hash Theme</cite>
                    </footer>
                  </div>
                  <div className="single-testimonial-text-icon">
                    <i className="icofont icofont-quote-left"></i>
                  </div>
                </div>
              </div>
              <div className="single-testimonial">
                <div className="single-testimonial-img">
                  <img
                    className="img-fluid"
                    src="assets/images/team/tes2.jpg"
                    alt=""
                  />
                </div>
                <div className="single-testimonial-text-warp">
                  <div className="single-testimonial-text-inner">
                    <p>
                      Lorem ipsum dolor sit amet consectetured adipiscing elit,
                      sed do eiusmod temporinci incididunt ut labore et dolore
                      magna aliqua.
                    </p>
                    <footer className="blockquote-footer">
                      Mark Doee , <cite title="Source Title">Hash Theme</cite>
                    </footer>
                  </div>
                  <div className="single-testimonial-text-icon">
                    <i className="icofont icofont-quote-left"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="blog" className="section-padding pt-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 text-center mx-auto">
              <div className="section-title">
                <h3>
                  Today's<span> News</span>
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
            <div className="col-lg-4 col-md-6 col-sm-12 col-12 mb-lg-0 mb-md-4 mb-sm-4 mb-4">
              <div className="single-blog-home">
                <div className="single-blog-home-img">
                  <a href="#">
                    <img
                      className="img-fluid"
                      src="assets/images/blog/1.jpg"
                      alt=""
                    />
                  </a>
                  <div className="single-blog-home-meta">
                    <span className="post-date">
                      <i className="lnr lnr-calendar-full"></i> 15 Dec
                    </span>
                    <span className="post-user">
                      <i className="lnr lnr-user"></i> Admin
                    </span>
                    <span className="post-comment">
                      <i className="lnr lnr-bubble"></i> 5 comments
                    </span>
                  </div>
                </div>
                <a href="#">
                  <h5>Digital Bariatric Surgery</h5>
                </a>
                <p>
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis eges vestibulum tortor quam, feugiat
                  vitae, ultricies eget, tempor sit amet, ante.
                </p>
                <a href="#" className="blog-home-rmbtn">
                  Continue <i className="icofont icofont-long-arrow-right"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-12 mb-lg-0 mb-md-4 mb-sm-4 mb-4">
              <div className="single-blog-home">
                <div className="single-blog-home-img">
                  <a href="#">
                    <img
                      className="img-fluid"
                      src="assets/images/blog/3.jpg"
                      alt=""
                    />
                  </a>
                  <div className="single-blog-home-meta">
                    <span className="post-date">
                      <i className="lnr lnr-calendar-full"></i> 16 Dec
                    </span>
                    <span className="post-user">
                      <i className="lnr lnr-user"></i> Jone
                    </span>
                    <span className="post-comment">
                      <i className="lnr lnr-bubble"></i> 6 comments
                    </span>
                  </div>
                </div>
                <a href="#">
                  <h5>Obesity: A Growing Epidemic</h5>
                </a>
                <p>
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis eges vestibulum tortor quam, feugiat
                  vitae, ultricies eget, tempor sit amet, ante.
                </p>
                <a href="#" className="blog-home-rmbtn">
                  Continue <i className="icofont icofont-long-arrow-right"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="single-blog-home">
                <div className="single-blog-home-img">
                  <a href="#">
                    <img
                      className="img-fluid"
                      src="assets/images/blog/2.jpg"
                      alt=""
                    />
                  </a>
                  <div className="single-blog-home-meta">
                    <span className="post-date">
                      <i className="lnr lnr-calendar-full"></i> 17 Dec
                    </span>
                    <span className="post-user">
                      <i className="lnr lnr-user"></i> Admin
                    </span>
                    <span className="post-comment">
                      <i className="lnr lnr-bubble"></i> 7 comments
                    </span>
                  </div>
                </div>
                <a href="#">
                  <h5>After Surgery Bed Rest</h5>
                </a>
                <p>
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis eges vestibulum tortor quam, feugiat
                  vitae, ultricies eget, tempor sit amet, ante.
                </p>
                <a href="#" className="blog-home-rmbtn">
                  Continue <i className="icofont icofont-long-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Logo_Slider />
    </div>
  );
}

export default Home;
