

export default function ContactArea() {
  return (
    <>
      {/* <!-- contact Section Start --> */}
      <section className="contact-main-section section-padding fix">
        <div className="container">
          <div className="row g-xxl-5 g-4">
            <div className="col-lg-6">
              <div className="contact-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52816169.558200695!2d-161.49265223136007!3d36.102185713814805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sbd!4v1777097225076!5m2!1sen!2sbd"
                  style={{ border: 0 }} allowFullScreen={true} loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact-submit-area rounded-4 wow fadeInUp" data-wow-delay=".5s">
                <h2 className="title pb-3 mb-4 fw-bold">Contact us</h2>
                <div className="row g-4 pt-2">
                  <div className="col-md-6">
                    <div className="cont-grp-info">
                      <input type="text" placeholder="Enter your name" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="cont-grp-info">
                      <input type="text" placeholder="Enter your email" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="cont-grp-info">
                      <textarea rows={4} placeholder="Type your message"></textarea>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <a href="javascript:void(0)"
                      className="common_btn gap-2 mt-2 w-100 py-3 rounded-pill d-center px-2 text-nowrap">
                      SEND MESSAGE
                      <img src="assets/img/icon/right-arrow.svg" alt="img" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-info_section space-bottom fix">
        <div className="container">
          <div className="contact-info-wrap">
            <div className="contact-info_item wow fadeInUp" data-wow-delay="0.3s">
              <h3>Addresss</h3>
              <p>221B Baker Street, London, NW1 6XE, <br /> United Kingdom</p>
            </div>
            <div className="border p-2 border-h-96 rounded"></div>
            <div className="contact-info_item wow fadeInUp" data-wow-delay="0.4s">
              <h3>Phone / MESSAGE</h3>
              <p>
                hello@arigoagencygmail.com <br />
                +44 20 7946 0123 , +44 7400 123456
              </p>
            </div>
            <div className="border p-2 border-h-96 rounded"></div>
            <div className="contact-info_item wow fadeInUp" data-wow-delay="0.5s">
              <h3>Phone / MESSAGE</h3>
              <p>Monday to Friday 09:00 to 19:20 <br /> Saturday 14:30</p>
            </div>
            <div className="border p-2 border-h-96 rounded"></div>
            <div className="contact-info_item wow fadeInUp" data-wow-delay="0.6s">
              <h3 className="mb-3">Social Media</h3>
              <div className="social-white gap-xl-3 gap-2 d-flex align-items-center">
                <a href="#" className="icon">
                  <i className="fa-brands fa-facebook"></i>
                </a>
                <a href="#" className="icon">
                  <i className="fa-brands fa-dribbble"></i>
                </a>
                <a href="#" className="icon">
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="#" className="icon">
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a href="#" className="icon">
                  <i className="fa-brands fa-vimeo-v"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
