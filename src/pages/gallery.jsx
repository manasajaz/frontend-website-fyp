import React from "react";

function Gallery() {
  return (
    <div>
      {/* <div id="page-preloader">
        <div className="preloader-wrench"></div>
      </div> */}

      <section
        className="single-page-title-area"
        data-background="assets/images/heading.png"
        style={{ backgroundImage: "url(assets/images/heading.png)" }}
      >
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-12 col-12">
              <div className="single-page-title">
                <h2>Image Gallery</h2>
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
                <li className="breadcrumb-item active">Gallery</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section id="doctor" className="section-padding doctor-page">
        <div className="auto-container">
          <div className="row mb-5">
            <div className="col-lg-12">
              <div className="portfolio-filter-menu wow fadeInUp">
                <ul>
                  <li className="filter active" data-filter="all">
                    <i className="icofont icofont-listine-dots"></i>
                    Show All Image
                  </li>
                  <li className="filter" data-filter=".one">
                    <i className="icofont icofont-paralysis-disability"></i>
                    Home Care
                  </li>
                  <li className="filter" data-filter=".two">
                    <i className="icofont icofont-pills"></i>
                    Diabetes Solution
                  </li>
                  <li className="filter" data-filter=".three">
                    <i className="icofont icofont-surgeon"></i>
                    Bariatric Surgery
                  </li>
                  <li className="filter" data-filter=".four">
                    <i className="icofont icofont-paralysis-disability"></i>
                    Dental Medicine
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="portfolio-items">
            <div className="row text-center">
              <div className="col-lg-3 col-md-3 col-sm-12 col-12 mix one two">
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
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing.
                        </p>
                        <a href="#" className="info">
                          <i className="icofont icofont-link"></i>
                        </a>
                        <a
                          href="assets/images/gallery/6.jpg"
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
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 col-12 mix two">
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
                        <p>
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
              </div>
              <div className="col-lg-5 col-md-5 col-sm-12 col-12 mix two">
                <div className="single-gallery-item">
                  <div className="single-gallery single-gallery-first">
                    <img
                      className="img-fluid"
                      src="assets/images/gallery/8.jpg"
                      alt=""
                    />
                    <div className="single-gallery">
                      <div className="single-gallery-inner">
                        <h5>Gallery Title</h5>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing.
                        </p>
                        <a href="#" className="info">
                          <i className="icofont icofont-link"></i>
                        </a>
                        <a
                          href="assets/images/gallery/8.jpg"
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
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 col-12 mix one three">
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
                        <p>
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
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 col-12 mix one three">
                <div className="single-gallery-item">
                  <div className="single-gallery single-gallery-first">
                    <img
                      className="img-fluid"
                      src="assets/images/gallery/3.jpg"
                      alt=""
                    />
                    <div className="single-gallery">
                      <div className="single-gallery-inner">
                        <h5>Gallery Title</h5>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing.
                        </p>
                        <a href="#" className="info">
                          <i className="icofont icofont-link"></i>
                        </a>
                        <a
                          href="assets/images/gallery/3.jpg"
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
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 col-12 mix one three">
                <div className="single-gallery-item">
                  <div className="single-gallery single-gallery-first">
                    <img
                      className="img-fluid"
                      src="assets/images/gallery/4.jpg"
                      alt=""
                    />
                    <div className="single-gallery">
                      <div className="single-gallery-inner">
                        <h5>Gallery Title</h5>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing.
                        </p>
                        <a href="#" className="info">
                          <i className="icofont icofont-link"></i>
                        </a>
                        <a
                          href="assets/images/gallery/4.jpg"
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
              </div>
              <div className="col-lg-5 col-md-5 col-sm-12 col-12 mix two three four">
                <div className="single-gallery-item">
                  <div className="single-gallery single-gallery-first">
                    <img
                      className="img-fluid"
                      src="assets/images/gallery/7.jpg"
                      alt=""
                    />
                    <div className="single-gallery">
                      <div className="single-gallery-inner">
                        <h5>Gallery Title</h5>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing.
                        </p>
                        <a href="#" className="info">
                          <i className="icofont icofont-link"></i>
                        </a>
                        <a
                          href="assets/images/gallery/7.jpg"
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
              </div>
              <div className="col-lg-3 col-md-3 col-sm-12 col-12 mix one two four">
                <div className="single-gallery-item">
                  <div className="single-gallery single-gallery-first">
                    <img
                      className="img-fluid"
                      src="assets/images/gallery/9.jpg"
                      alt=""
                    />
                    <div className="single-gallery">
                      <div className="single-gallery-inner">
                        <h5>Gallery Title</h5>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing.
                        </p>
                        <a href="#" className="info">
                          <i className="icofont icofont-link"></i>
                        </a>
                        <a
                          href="assets/images/gallery/9.jpg"
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
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 col-12 mix one two three four">
                <div className="single-gallery-item">
                  <div className="single-gallery single-gallery-first">
                    <img
                      className="img-fluid"
                      src="assets/images/gallery/10.jpg"
                      alt=""
                    />
                    <div className="single-gallery">
                      <div className="single-gallery-inner">
                        <h5>Gallery Title</h5>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing.
                        </p>
                        <a href="#" className="info">
                          <i className="icofont icofont-link"></i>
                        </a>
                        <a
                          href="assets/images/gallery/10.jpg"
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
              </div>
            </div>
          </div>
          <div className="row wow fadeInDown">
            <div className="col-lg-12 mt-5">
              <div className="theme-pagination">
                <nav className="navbar justify-content-center">
                  <ul className="pagination">
                    <li className="page-item">
                      <a className="page-link" href="#">
                        PREV
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li className="page-item active">
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        4
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        NEXT
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Gallery;
