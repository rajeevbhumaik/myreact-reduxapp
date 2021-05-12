import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      {/* <!-- Banner Starts Here --> */}
      <div className="banner header-text">
        <div className="owl-banner owl-carousel">
          <div className="banner-item-01">
            <img src="assets/images/slide_01.jpg" alt="" />
            <div className="text-content">
              <h4>Best Offer</h4>
              <h2>New Arrivals On Sale</h2>
            </div>
          </div>
          <div className="banner-item-02">
            <div className="text-content">
              <h4>Flash Deals</h4>
              <h2>Get your best products</h2>
            </div>
          </div>
          <div className="banner-item-03">
            <div className="text-content">
              <h4>Last Minute</h4>
              <h2>Grab last minute deals</h2>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Banner Ends Here --> */}

      <div className="latest-products">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-heading">
                <h2>Latest Products</h2>
                <Link href="products.html">
                  view all products <i className="fa fa-angle-right"></i>
                </Link>
              </div>
            </div>
            <div className="col-md-4">
              <div className="product-item">
                <Link href="#">
                  <img src="assets/images/product_01.jpg" alt="" />
                </Link>
                <div className="down-content">
                  <a href="#">
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
                      <h2>About Sixteen Clothing</h2>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="left-content">
                      <h4>Looking for the best products?</h4>
                      <p>
                        <Link
                          rel="nofollow"
                          href="https://templatemo.com/tm-546-sixteen-clothing"
                          target="_parent"
                        >
                          This template
                        </Link>{" "}
                        is free to use for your business websites. However, you
                        have no permission to redistribute the downloadable ZIP
                        file on any template collection website.{" "}
                        <Link
                          rel="nofollow"
                          href="https://templatemo.com/contact"
                        >
                          Contact us
                        </Link>{" "}
                        for more info.
                      </p>
                      <ul className="featured-list">
                        <li>
                          <Link href="#">Lorem ipsum dolor sit amet</Link>
                        </li>
                        <li>
                          <Link href="#">Consectetur an adipisicing elit</Link>
                        </li>
                        <li>
                          <Link href="#">It aquecorporis nulla aspernatur</Link>
                        </li>
                        <li>
                          <Link href="#">Corporis, omnis doloremque</Link>
                        </li>
                        <li>
                          <Link href="#">Non cum id reprehenderit</Link>
                        </li>
                      </ul>
                      <Link href="about.html" className="filled-button">
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
                            Creative &amp; Unique <em>Sixteen</em> Products
                          </h4>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Itaque corporis amet elite author nulla.
                          </p>
                        </div>
                        <div className="col-md-4">
                          <a href="#" className="filled-button">
                            Purchase Now
                          </a>
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
                        Copyright &copy; 2020 Sixteen Clothing Co., Ltd. -
                        Design:{" "}
                        <a
                          rel="nofollow noopener"
                          href="https://templatemo.com"
                          target="_blank"
                        >
                          TemplateMo
                        </a>
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
