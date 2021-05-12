import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

const Home = () => {
  return (
    <>
      <div className="Carousel">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="assets/images/slide_01.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h4>Best Offer</h4>
              <h2>New Arrivals On Sale</h2>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="assets/images/slide_02.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h4>Fresh Deals</h4>
              <h2>Get your best products</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="assets/images/slide_03.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h4>Last Minute</h4>
              <h2>Grab last minute deals</h2>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="latest-products">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-heading">
                <h2>Latest Products</h2>
                <Link to="/shop">
                  view all products <i className="fa fa-angle-right"></i>
                </Link>
              </div>
            </div>
            <div className="col-md-4">
              <div className="product-item">
                <Link to="#">
                  <img src="assets/images/product_01.jpg" alt="" />
                </Link>
                <div className="down-content">
                  <a to="#">
                    <h4>Tittle goes here</h4>
                  </a>
                  <h6>$25.75</h6>
                  <p>
                    Lorem ipsume dolor sit amet, adipisicing elite. Itaque,
                    corporis nulla aspernatur.
                  </p>
                  <ul className="stars">
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                  </ul>
                  <span>Reviews (24)</span>
                </div>
              </div>
            </div>

            <div className="best-features">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="section-heading">
                      <h2>About DooKart</h2>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="left-content">
                      <h4>Looking for the best products?</h4>
                      <p>
                        <Link
                          rel="nofollow"
                          to="https://templatemo.com/tm-546-sixteen-clothing"
                          target="_parent"
                        >
                          This template
                        </Link>{" "}
                        is free to use for your business websites. However, you
                        have no permission to redistribute the downloadable ZIP
                        file on any template collection website.{" "}
                        <Link
                          rel="nofollow"
                          to="https://templatemo.com/contact"
                        >
                          Contact us
                        </Link>{" "}
                        for more info.
                      </p>
                      <ul className="featured-list">
                        <li>
                          <Link to="#">Lorem ipsum dolor sit amet</Link>
                        </li>
                        <li>
                          <Link to="#">Consectetur an adipisicing elit</Link>
                        </li>
                        <li>
                          <Link to="#">It aquecorporis nulla aspernatur</Link>
                        </li>
                        <li>
                          <Link to="#">Corporis, omnis doloremque</Link>
                        </li>
                        <li>
                          <Link to="#">Non cum id reprehenderit</Link>
                        </li>
                      </ul>
                      <Link to="/about" className="filled-button">
                        Read More
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="right-image">
                      <img src="assets/images/feature-image.jpg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="call-to-action">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="inner-content">
                      <div className="row">
                        <div className="col-md-8">
                          <h4>
                            Creative &amp; Unique <em>DooKart</em> Products
                          </h4>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Itaque corporis amet elite author nulla.
                          </p>
                        </div>
                        <div className="col-md-4">
                          <Link to="/shop" className="filled-button">
                            Purchase Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <footer>
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="inner-content">
                      <p>
                        Copyright &copy; 2021 DooKart Co., Ltd.
                        {/* Design:{" "}
                        <a
                          rel="nofollow noopener"
                          to="https://templatemo.com"
                          target="_blank"
                        >
                          TemplateMo
                        </a> */}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
