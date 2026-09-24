import { Link } from "react-router-dom";


export default function BlogAreaOne() {
  return (
    <>
      {/* <!-- News Section Start --> */}
      <section className="news-section blog-bg-image1 section-padding fix">
        <div className="container">
          <div className="serial-section-wrap d-flex align-items-center gap-3 mb-3">
            <div className="text-white opacity-75 fw-medium fs--18px">{"010"}</div>
            <div className="line w-100"></div>
            <div className="d-flex text-nowrap align-items-center gap-2 text-uppercase text-white fs--18px">
              <i className="fa-solid fa-circle"></i>
              LATEST INSIGHTS
            </div>
          </div>
          <div className="section-title flex-sm-nowrap flex-wrap gap-2 section-title01 mb-48 mx-auto">
            <h2 className="white-clr fs-64px visible-slowly-bottom fw-bold d-block">
              Insights, Tips & Creative Inspiration
            </h2>
            <div>
              <Link to="/blog" className="common_btn text-nowrap">
                VIEW ALL blog
                <span className="icon_wrapper">
                  <i className="fas fa-long-arrow-alt-right"></i>
                </span>
              </Link>
            </div>
          </div>
          <div className="news-wrapper">
            <div className="row justify-content-center g-4">
              <div className="col-xxl-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                <div className="news-single-items position-relative rounded-4 overflow-hidden">
                  <div className="news-thumb-area">
                    <Link to="/blog-details"
                      className="news-image image-box-effect position-relative overflow-hidden">
                      <img src="assets/img/blog/blog-1.png" alt="img" className="w-100 img" />
                      <img src="assets/img/blog/blog-1.png" alt="img" className="w-100 img" />
                      <img src="assets/img/blog/blog-1.png" alt="img" className="w-100" />
                    </Link>
                  </div>
                  <div className="news-content ab_ab p-4 m-xxl-3 position-absolute z-1 bottom-0 start-0">
                    <div className="user-cont d-flex align-items-center gap-xxl-4 gap-sm-3 gap-2 mb-2 pb-2">
                      <span className="text-white opacity-75 fs-seven">October 5, 2026</span>
                      <span className="tags-blog">Design Stories</span>
                    </div>
                    <div className="new-cont-title">
                      <Link to="/blog-details"
                        className="white fs-32px text-uppercase fw-semibold visible-slowly-bottom">
                        How to Build a Strong Brand Identity
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                <div className="news-single-items rounded-4 overflow-hidden">
                  <div className="news-thumb-area">
                    <Link to="/blog-details"
                      className="news-image image-box-effect position-relative overflow-hidden">
                      <img src="assets/img/blog/blog-2.png" alt="img" className="w-100 img" />
                      <img src="assets/img/blog/blog-2.png" alt="img" className="w-100 img" />
                      <img src="assets/img/blog/blog-2.png" alt="img" className="w-100" />
                    </Link>
                  </div>
                  <div className="news-content news-content1 rounded-bottom-4">
                    <div className="user-cont d-flex align-items-center gap-xxl-4 gap-sm-3 gap-2 mb-2 pb-2">
                      <span className="text-white opacity-75 fs-seven">October 5, 2026</span>
                      <span className="tags-blog">Creative Ideas</span>
                    </div>
                    <div className="new-cont-title mb-md-5 mb-4">
                      <Link to="/blog-details"
                        className="white fs-24px text-uppercase fw-semibold visible-slowly-bottom">
                        Top UI/UX Design Trends
                        for 2026
                      </Link>
                    </div>
                    <Link to="/blog-details"
                      className="read-more white fw-semibold text-uppercase heading-font text-decoration-underline d-flex align-items-center gap-2">
                      View details <img src="assets/img/icon/right-arrow.svg" alt="img" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 wow fadeInUp" data-wow-delay=".8s">
                <div className="news-single-items rounded-4 overflow-hidden">
                  <div className="news-thumb-area">
                    <Link to="/blog-details"
                      className="news-image image-box-effect position-relative overflow-hidden">
                      <img src="assets/img/blog/blog3.png" alt="img" className="w-100 img" />
                      <img src="assets/img/blog/blog3.png" alt="img" className="w-100 img" />
                      <img src="assets/img/blog/blog3.png" alt="img" className="w-100" />
                    </Link>
                  </div>
                  <div className="news-content news-content1 rounded-bottom-4">
                    <div className="user-cont d-flex align-items-center gap-xxl-4 gap-sm-3 gap-2 mb-2 pb-2">
                      <span className="text-white opacity-75 fs-seven">October 5, 2026</span>
                      <span className="tags-blog">Design Tips</span>
                    </div>
                    <div className="new-cont-title mb-md-5 mb-4">
                      <Link to="/blog-details"
                        className="white fs-24px text-uppercase fw-semibold visible-slowly-bottom">
                        Designing Intuitive Mobile App Interfaces
                      </Link>
                    </div>
                    <Link to="/blog-details"
                      className="read-more white fw-semibold text-uppercase heading-font text-decoration-underline d-flex align-items-center gap-2">
                      View details <img src="assets/img/icon/right-arrow.svg" alt="img" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
