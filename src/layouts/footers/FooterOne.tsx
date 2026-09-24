import { Link } from "react-router-dom";


export default function FooterOne() {
  return (
    <>
      {/* <!--<< Footer Section Start >>--> */}
      <footer className="footer-section footer-section-main fix">
        <div className="container">
          <div className="row g-lg-0 g-4 justify-content-between">
            <div className="col-lg-7">
              <div className="left-side-footer">
                <div className="left-area">
                  <div className="serial text-nowrap wow fadeInLeft" data-wow-delay="0.3s">Footer {"011"} -</div>
                  <h2 className="visible-from-bottom">CreativeFlow Studio</h2>
                </div>
              </div>
              <div className="location-area-wrap">
                <div className="location-area-item">
                  <div className="text-location">Location</div>
                  <div className="text-name visible-from-bottom">
                    123 Creative St, Design <br /> City, USA
                  </div>
                </div>
                <div className="location-area-item">
                  <div className="text-location">CONTACT US</div>
                  <div className="text-name">
                    +1 234 567 890 <br /> info@arigoagency.com
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="right-side-footer">
                <h3 className="wow fadeInUp" data-wow-delay="0.3s">Quick Links</h3>
                <ul className="r-link wow fadeInUp" data-wow-delay="0.4s">
                  <li>
                    <Link to="/blog">
                      News & Articles
                    </Link>
                  </li>
                  <li>
                    <Link to="/service">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/project">
                      Recent Work
                    </Link>
                  </li>
                  <li>
                    <Link to="/about">
                      About Us
                    </Link>
                  </li>
                </ul>
                <Link to="/" className="footer-logo-big wow fadeInUp" data-wow-delay="0.5s">
                  <img src="assets/img/logo/logo-big.png" alt="img" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom py-4">
          <div className="container">
            <div className="justify-content-md-between justify-content-center d-flex flex-md-nowrap flex-wrap gap-3">
              <p className="text-white opacity-75 wow fadeInLeft body-font" data-wow-delay=".3s">
                &copy; {new Date().getFullYear()} <Link to="/" className="text-p1">Arigo.</Link> All Rights Reserved.
              </p>
              <div className="footer-bottom-link">
                <Link to="/contact">
                  Terms & Conditions
                </Link>
                <Link to="/contact">
                //
                </Link>
                <Link to="/contact">
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}