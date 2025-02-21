import React from "react";

function Contact() {
  return (
    <div>
      {/* <div id="page-preloader">
        <div className="preloader-wrench"></div>
      </div> */}

      <section
        className="single-page-title-area"
        data-background="assets/images/heading.png"
      >
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-12 col-12">
              <div className="single-page-title">
                <h2>Contact Us Page</h2>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-12">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="#">
                    <span className="lnr lnr-home"></span>
                  </a>
                </li>
                <li className="breadcrumb-item">Pages</li>
                <li className="breadcrumb-item active">Contact</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <div className="gmap_canvas">
        <iframe
          id="gmap_canvas"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14473.974521836442!2d67.02231131504881!3d24.915248357041275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33fbd469d9bcd%3A0x749325c6e39952f3!2sNazimabad%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1722534870007!5m2!1sen!2s"
          width="600"
          height="450"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <section id="contact" className="section-padding">
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-12 col-12">
              <div className="contact-title">
                <h4>You Have Any question? Simply Send Us Message</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud.
                </p>
                <hr />
              </div>
              <div className="contact-form mt-4">
                <form
                  id="contact-form"
                  className="form"
                  name="enq"
                  method="POST"
                  action="send.php"
                >
                  <div className="row">
                    <div className="form-group col-lg-6">
                      <label>Name</label>
                      <span className="form-icon">
                        <i className="icofont icofont-user-alt-5"></i>
                      </span>
                      <input
                        name="name"
                        className="form-control form-controlb"
                        id="cname"
                        required="required"
                        type="text"
                      />
                    </div>
                    <div className="form-group col-lg-6">
                      <label>Email</label>
                      <span className="form-icon">
                        <i className="icofont icofont-envelope"></i>
                      </span>
                      <input
                        name="email"
                        className="form-control form-controlb"
                        id="cmail"
                        required="required"
                        type="email"
                      />
                    </div>
                    <div className="form-group col-lg-6">
                      <label>Number</label>
                      <span className="form-icon">
                        <i className="icofont icofont-telephone"></i>
                      </span>
                      <input
                        name="phone"
                        className="form-control form-controlb"
                        id="cnumber"
                        required="required"
                        type="text"
                      />
                    </div>
                    <div className="form-group col-lg-6">
                      <label>Subject</label>
                      <span className="form-icon">
                        <i className="icofont icofont-ui-email"></i>
                      </span>
                      <input
                        name="subject"
                        className="form-control form-controlb"
                        id="csubject"
                        required="required"
                        type="text"
                      />
                    </div>
                    <div className="form-group col-lg-12">
                      <label>Message</label>
                      <textarea
                        rows="6"
                        name="message"
                        className="form-control"
                        id="cmessage"
                        placeholder="Your Message Here..."
                        required="required"
                      ></textarea>
                    </div>
                    <div className="form-group col-lg-12 mb0">
                      <div className="actions">
                        <input
                          value="Submit Message"
                          name="submit"
                          id="submitButton"
                          className="btn btn-lg btn-contact-bg"
                          title="Click here to submit your message!"
                          type="submit"
                        />
                        <img
                          src="assets/images/ajax-loader.gif"
                          id="loader"
                          style={{ display: "none" }}
                          alt="loading"
                          width="16"
                          height="16"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-12 pl-lg-5 pl-md-5 pl-sm-2 pl-2 mt-lg-0 mt-md-0 mt-sm-3 mt-3">
              <div className="contact-title">
                <h4>Get In Touch</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, na
                  aliqua.
                </p>
                <hr />
              </div>
              <div className="address-box mt-4">
                <div className="single-address-box mb-3">
                  <span>Address:</span>
                  <p>
                    10004, Battery Park, <br /> New York, USA{" "}
                  </p>
                </div>
                <div className="single-address-box mb-3">
                  <span>Phone & Fax:</span>
                  <p>+88-675-128763 </p>
                  <p>+88-675-128763 </p>
                </div>
                <div className="single-address-box">
                  <span>Inquires:</span>
                  <p>info@your_site.com</p>
                  <p>info@your_site.com</p>
                </div>
              </div>
              <div className="free-quote-box mt-4">
                <h6>Ask question</h6>
                <h3>Support is ready</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy.{" "}
                </p>
                <a href="#">
                  Free quote <i className="icofont icofont-simple-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="single-doc-promo bg-theme mt-lg-5 mt-md-3 mt-sm-3 mt-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-12 col-12">
              <div className="single-doc-promo-box-img">
                <img
                  className="img-fluid"
                  src="assets/images/doc-promo.png"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-9 col-md-9 col-sm-12 col-12">
              <div className="single-doc-promo-box">
                <div className="row">
                  <div className="col-lg-9">
                    <div className="single-doc-promo-content">
                      <h5>If you need any home service</h5>
                      <p>Feel free to call us 24hr emergency number</p>
                      <a href="#">
                        <i className="icofont icofont-phone"></i>+88 315 67 39
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-3 mt-4">
                    <a
                      href="#"
                      className="single-doc-promo-btn fadeInUp animated"
                    >
                      Call Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
