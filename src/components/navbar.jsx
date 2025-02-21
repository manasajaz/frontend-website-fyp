import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <header className="main-header header-1">
        <div className="top-area">
          <div className="auto-container">
            <div className="row">
              <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                <div className="header-social">
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
                    <li>
                      <a href="#">
                        <i className="icofont icofont-social-pinterest"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                <div className="info-menu">
                  <ul>
                    <li>
                      <Link to="/login">Login</Link>
                    </li>
                    <li>
                      <Link to="/register">Register</Link>

                      <a href="#"> </a>
                    </li>
                    <li>
                      <Link to="/profile">Profile</Link>

                      <a href="#"> </a>
                    </li>
                    <li>
                      <a href="#">Appoinmnet </a>
                    </li>
                    <li>
                      <a href="#">Contact </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="logo-area">
          <div className="auto-container">
            <div className="row">
              <div className="col-lg-3 col-md-3 col-sm-6 col-7 mx-md-auto mx-sm-auto mx-auto pl-0">
                <div className="logo">
                  <a href="index.html">
                    <img
                      className="img-fluid"
                      src="assets/images/logo.png"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div className="col-lg-9 col-md-12 col-sm-12 col-12">
                <div className="header-info-box">
                  <div className="header-info-icon">
                    <span className="lnr lnr-phone-handset"></span>
                  </div>
                  <p>Customer support & sales</p>
                  <h6>123-456-0975</h6>
                </div>
                <div className="header-info-box">
                  <div className="header-info-icon">
                    <span className="lnr lnr-map-marker"></span>
                  </div>
                  <p>Opening hours</p>
                  <h6>Mon - Sun : 09:00 - 18:00</h6>
                </div>
                <div className="header-info-box">
                  <a className="header-quote-btn" href="#">
                    Get a Quote <i className="icofont icofont-caret-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sticky-menu">
          <div className="mainmenu-area">
            <div className="auto-container">
              <div className="row">
                <div className="col-lg-9 d-lg-block d-md-none d-sm-none d-none ">
                  <nav className="navbar navbar-expand-lg justify-content-left">
                    <ul className="navbar-nav">
                      <li className="">
                        <Link to="/" className="nav-link">
                          Home
                        </Link>
                      </li>
                      <li className="dropdown">
                        <a href="services.php" className="nav-link">
                          Services
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a href="single-service.php">
                              Accident & Emergency
                            </a>
                          </li>
                          <li>
                            <a href="single-service.php">Health checks</a>
                          </li>
                          <li>
                            <a href="single-service.php">Home Care</a>
                          </li>
                          <li>
                            <a href="single-service.php">
                              Diabetes & Endocrinology
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="/gallery" className="nav-link">
                          Gallery
                        </Link>
                      </li>
                      <li className="dropdown">
                        <a href="#" className="nav-link">
                          Pages
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a href="doctors.php">Our Doctors</a>
                          </li>

                          <li>
                            <a href="appointment.php">Appointment</a>
                          </li>
                        </ul>
                      </li>

                      <li>
                        <Link to="/contact" className="nav-link">
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="col-lg-3 col-md-12 d-lg-block d-md-none d-none">
                  <nav className="navbar navbar-expand-lg justify-content-end">
                    <ul className="navbar-nav">
                      <li className="active dropdown quick-search">
                        <a href="#" className="nav-link">
                          I want To
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a href="#">
                              <i className="icofont icofont-doctor-alt"></i>{" "}
                              Find a Doctor
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="icofont icofont-ui-calendar"></i>{" "}
                              Request an Appointment
                            </a>
                          </li>

                          <li>
                            <a href="#">
                              <i className="icofont icofont-prescription"></i>{" "}
                              Access Lab Reports{" "}
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>

          <div className="mobile-menu-area d-lg-none d-md-block d-sm-block d-block">
            <div className="col-md-9">
              <div className="mobile-menu">
                <nav id="dropdown">
                  <ul className="navbar-nav">
                    <li>
                      <a href="index.php">Home</a>
                    </li>
                    <li>
                      <a href="services.php">Services</a>
                      <ul>
                        <li>
                          <a href="services.php">Our All Services</a>
                        </li>
                        <li>
                          <a href="single-service.php">Accident & Emergency</a>
                        </li>
                        <li>
                          <a href="single-service.php">Health checks</a>
                        </li>

                        <li>
                          <a href="single-service.php">
                            Diabetes & Endocrinology
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="gallery.php">Gallery</a>
                    </li>
                    <li>
                      <a href="#">Pages</a>
                      <ul>
                        <li>
                          <a href="about.php">About Sensiv</a>
                        </li>
                        <li>
                          <a href="doctors.php">Our Doctors</a>
                        </li>
                        <li>
                          <a href="single-doctor.php">Single doctor</a>
                        </li>
                        <li>
                          <a href="appointment.php">Appointment</a>
                        </li>

                        <li>
                          <a href="faq.php">Faq's</a>
                        </li>
                        <li>
                          <a href="reports.php">Lab Reports</a>
                        </li>
                      </ul>
                    </li>

                    {/* <li>
                      <a href="contact.html">Contact</a>
                    </li> */}
                    <Link to="/contact" className="nav-link">
                      Contact
                    </Link>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
