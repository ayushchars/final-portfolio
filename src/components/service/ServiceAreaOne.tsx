import { Link } from "react-router-dom";


export default function ServiceAreaOne() {
  return (
    <>
      {/* <!-- service Section Start --> */}
      <section className="service-section-unique black-version fix section-padding">
        <div className="container">
          <div className="serial-section-wrap d-flex align-items-center gap-3 mb-3">
            <div className="text-white opacity-75 fw-medium fs--18px">{"05"}</div>
            <div className="line w-100"></div>
            <div className="d-flex text-nowrap align-items-center gap-2 text-uppercase text-white fs--18px">
              <i className="fa-solid fa-circle"></i>
              Services
            </div>
          </div>
          <div className="section-title flex-sm-nowrap flex-wrap gap-2 section-title02 mb-48 mx-auto">
            <h2 className="white-clr fs-64px visible-slowly-bottom fw-bold d-block">
              Design Solutions Crafted <br /> to Elevate Brands
            </h2>
            <div>
              <Link to="/service" className="common_btn text-nowrap">
                VIEW ALL details
                <span className="icon_wrapper">
                  <i className="fas fa-long-arrow-alt-right"></i>
                </span>
              </Link>
            </div>
          </div>
          <div className="brand-wrapper d-flex flex-column gap-4">
            <div className="bran_items d-flex align-items-center justify-content-center gap-4">
              <div className="content d-flex align-items-center gap-3">
                <h3>
                  App
                </h3>
                <h4 className="fs--18px">
                  Interface <br /> Design
                </h4>
              </div>
              <Link to="/service-details" className="thumb rounded-4 d-block">
                <img src="assets/img/thumbnail/app-thumb.png" alt="img" className="rounded-4" />
              </Link>
            </div>
            <div className="bran_items items2 d-flex align-items-center justify-content-between gap-4">
              <Link to="/service-details" className="thumb rounded-4 d-block">
                <img src="assets/img/thumbnail/design-thumb.png" alt="img" className="rounded-4" />
              </Link>
              <div className="content d-flex flex-row-reverse align-items-center gap-3">
                <h3>
                  Design
                </h3>
                <h4 className="fs--18px">
                  Brand <br /> Identity
                </h4>
              </div>
              <div className="">

              </div>
            </div>
            <div className="bran_items items3 d-flex align-items-center justify-content-between gap-4">
              <div className="">

              </div>
              <div className="content d-flex align-items-center gap-3">
                <h3>
                  Visual &
                </h3>
                <h4 className="fs--18px">
                  Graphic <br /> Design
                </h4>
              </div>
              <Link to="/service-details" className="thumb rounded-4 d-block">
                <img src="assets/img/thumbnail/guide-thumb.png" alt="img" className="rounded-4" />
              </Link>
            </div>
            <div className="bran_items items4 d-flex align-items-center justify-content-between gap-4">
              <Link to="/service-details" className="thumb rounded-4 d-block">
                <img src="assets/img/thumbnail/visual-thumb.png" alt="img" className="rounded-4" />
              </Link>
              <div className="content d-flex flex-row-reverse align-items-center gap-3">
                <h3>
                  Guidelines
                </h3>
                <h4 className="fs--18px">
                  Design <br /> Systems &
                </h4>
              </div>
              <div className="">

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
