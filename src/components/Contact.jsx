import logo from "../logo/logo.png";
//import "./bootstrap.css";
//import "./coctact_css/bootstrap.css";
// import "./coctact_css/bootstrap.min.css";
// import "./coctact_css/bootstrappage.css";
// import "./coctact_css/bootstrap-responsive.css";
// import "./coctact_css/bootstrap-responsive.min.css";
// import "./coctact_css/flexslider.css";
// import "./coctact_css/main.css";
// import "./coctact_css/style.css";
const Contact = () => {
  return (
    <>
      <section className="header_text sub">
        {/* <img className="pageBanner" src={logo} alt="New products" /> */}
        <h3>
          <span>Contact Us</span>
        </h3>
      </section>
      <section className="main-content">
        <div className="row">
          <div className="span5">
            <div>
              <h5>ADDITIONAL INFORMATION</h5>
              <p>
                <strong>Phone:</strong>&nbsp;(123) 456-7890
                <br />
                <strong>Fax:</strong>&nbsp;+04 (123) 456-7890
                <br />
                <strong>Email:</strong>&nbsp;
                <a href="#">vietcuong_it@yahoo.com</a>
              </p>
              <br />
              <h5>SECONDARY OFFICE IN VIETNAM</h5>
              <p>
                <strong>Phone:</strong>&nbsp;(113) 023-1125
                <br />
                <strong>Fax:</strong>&nbsp;+04 (113) 023-1145
                <br />
                <strong>Email:</strong>&nbsp;
                <a href="#">vietcuong_it@yahoo.com</a>
              </p>
            </div>
          </div>
          <div className="span7">
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
            <form method="post" action="#">
              <fieldset>
                <div className="clearfix">
                  <label for="name">
                    <span>Name:</span>
                  </label>
                  <div className="input">
                    <input
                      tabindex="1"
                      size="18"
                      id="name"
                      name="name"
                      type="text"
                      value=""
                      className="input-xlarge"
                      placeholder="Name"
                    />
                  </div>
                </div>

                <div className="clearfix">
                  <label for="email">
                    <span>Email:</span>
                  </label>
                  <div className="input">
                    <input
                      tabindex="2"
                      size="25"
                      id="email"
                      name="email"
                      type="text"
                      value=""
                      className="input-xlarge"
                      placeholder="Email Address"
                    />
                  </div>
                </div>

                <div className="clearfix">
                  <label for="message">
                    <span>Message:</span>
                  </label>
                  <div className="input">
                    <textarea
                      tabindex="3"
                      className="input-xlarge"
                      id="message"
                      name="body"
                      rows="7"
                      placeholder="Message"
                    ></textarea>
                  </div>
                </div>

                <div className="actions">
                  <button
                    tabindex="3"
                    type="submit"
                    className="btn btn-inverse"
                  >
                    Send message
                  </button>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
