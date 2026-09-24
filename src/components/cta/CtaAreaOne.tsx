import { Link } from "react-router-dom";

export default function CtaAreaOne() {
  return (
    <>
      {/* <!-- together Section Start --> */}
      <section className="together-section section-padding fix">
        <div className="container container1285">
          <div className="together-wrapper">
            <div className="together-thumb-wrap mb-48">
              <div className="thumb1 wow fadeInLeft" data-wow-delay="0.5s">
                <img src="assets/img/thumbnail/together3.png" alt="img" />
              </div>
              <div className="thumb2 wow fadeInUp" data-wow-delay="0.7s">
                <img src="assets/img/thumbnail/together2.png" alt="img" />
              </div>
              <div className="thumb3 wow fadeInRight" data-wow-delay="0.6s">
                <img src="assets/img/thumbnail/together1.png" alt="img" />
              </div>
            </div>
            <div className="contents">
              <div className="section-title text-center">
                <h2 className="white-clr mb-4 fs-64px visible-slowly-bottom fw-bold d-block wow fadeInUp"
                  data-wow-delay="0.7s">
                  Let’s work together
                </h2>
                <div>
                  <Link to="/contact" className="common_btn common_btn-whitetheme text-nowrap wow fadeInUp"
                    data-wow-delay="0.9s">
                    CONTACT US NOW
                    <span className="icon_wrapper">
                      <i className="fas fa-long-arrow-alt-right"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
