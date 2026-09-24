 

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function TestimonialAreaOne() {
  return (
    <>
      {/* <!-- Testimonial Section Start --> */}
      <section className="testimonial-section section-padding black-version fix">
        <div className="container">
          <div className="space-bottom">
            <div className="sponsor-wrap">
              <div className="sponsor_item">
                <img src="assets/img/sponsor/sponsor1.png" alt="img" />
              </div>
              <div className="sponsor_item">
                <img src="assets/img/sponsor/sponsor2.png" alt="img" />
              </div>
              <div className="sponsor_item">
                <img src="assets/img/sponsor/sponsor3.png" alt="img" />
              </div>
              <div className="sponsor_item">
                <img src="assets/img/sponsor/sponsor4.png" alt="img" />
              </div>
              <div className="sponsor_item">
                <img src="assets/img/sponsor/sponsor2.png" alt="img" />
              </div>
              <div className="sponsor_item">
                <img src="assets/img/sponsor/sponsor4.png" alt="img" />
              </div>
            </div>
          </div>
          <div className="serial-section-wrap d-flex align-items-center gap-3 mb-3">
            <div className="text-white opacity-75 fw-medium fs--18px">{"09"}</div>
            <div className="line w-100"></div>
            <div className="d-flex text-nowrap align-items-center gap-2 text-uppercase text-white fs--18px">
              <i className="fa-solid fa-circle"></i>
              Client Reviews
            </div>
          </div>
          <div className="section-title flex-sm-nowrap flex-wrap gap-2 section-title01 mb-48 mx-auto">
            <h2 className="white-clr fs-64px visible-slowly-bottom fw-bold d-block">
              Client Stories & Design Feedback
            </h2>
          </div>
          <div className="row g-4">
            <div className="col-xxl-2 col-lg-3">
              <div className="review-text-box d-center py-5 rounded-4 px-4 fs-32px text-white text-center">
                <div>
                  <span className="text-nowrap fs-32px">Rating</span> <br />
                  <span className="text-nowrap fs-32px">4.9 / 5 Average</span>
                  <div className="fs--18px mt-2">
                    ⭐⭐⭐⭐⭐
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-10 col-lg-9">
              <Swiper className="swiper testimonial-slider"

                modules={[Autoplay, Pagination, Navigation]}
                spaceBetween={22}
                speed={1500}
                loop={true}
                autoplay={{
                  delay: 1000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  el: ".dot",
                  clickable: true,
                }}
                navigation={{
                  nextEl: ".array-prev",
                  prevEl: ".array-next",
                }}
                breakpoints={{
                  1199: { slidesPerView: 2 },
                  767: { slidesPerView: 2 },
                  575: { slidesPerView: 1 },
                  0: { slidesPerView: 1 },
                }}

              >

                <SwiperSlide className="swiper-slide">
                  <div className="testimonial-items testimonial-items001">
                    <div
                      className="head-part bg-transparent p-0 pb-1 mb-3 w-100 d-flex align-items-center d-inline-flex gap-2 justify-content-between">
                      <div className="d-inline-flex align-items-center gap-xxl-3 gap-2">
                        <img src="assets/img/testimonial/testi-author.png" alt="img"
                          className="rounded-2" />
                        <div className="cont">
                          <div className="fs-20px text-white heading-font lh-1 fw-bold mb-1">
                            Ryan Anderson
                          </div>
                          <p className="fs-seven text-white opacity-75">
                            Creative Director
                          </p>
                        </div>
                      </div>
                      <img src="assets/img/testimonial/author-badge1.png" alt="img" className="quote" />
                    </div>
                    <div className="cont-box border black-bg p-xxl-4 p-3">
                      <p className="text-white mb-4">
                        “The team delivered a beautiful, thoughtful design that clearly reflects our
                        brand vision, values, and long-term goals.”
                      </p>
                      <div className="heading-font fs-seven fw-medium d-flex align-items-center gap-1">
                        <div className="d-flex gap-1">
                          <i className="fas fa-star ratting"></i>
                          <i className="fas fa-star ratting"></i>
                          <i className="fas fa-star ratting"></i>
                          <i className="fas fa-star ratting"></i>
                          <i className="fas fa-star ratting"></i>
                        </div>
                        <span className="text-white opacity-75">//05 Rating</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="testimonial-items testimonial-items001">
                    <div
                      className="head-part bg-transparent p-0 pb-1 mb-3 w-100 d-flex align-items-center d-inline-flex gap-2 justify-content-between">
                      <div className="d-inline-flex align-items-center gap-xxl-3 gap-2">
                        <img src="assets/img/testimonial/testi-author2.png" alt="img"
                          className="rounded-2" />
                        <div className="cont">
                          <div className="fs-20px text-white heading-font lh-1 fw-bold mb-1">
                            Michael Brown
                          </div>
                          <p className="fs-seven text-white opacity-75">
                            Creative Director
                          </p>
                        </div>
                      </div>
                      <img src="assets/img/testimonial/author-badge2.png" alt="img" className="quote" />
                    </div>
                    <div className="cont-box border black-bg p-xxl-4 p-3">
                      <p className="text-white mb-4">
                        “Clean, thoughtful design paired with clear communication and a smooth
                        creative process from concept.”
                      </p>
                      <div className="heading-font fs-seven fw-medium d-flex align-items-center gap-1">
                        <div className="d-flex gap-1">
                          <i className="fas fa-star ratting"></i>
                          <i className="fas fa-star ratting"></i>
                          <i className="fas fa-star ratting"></i>
                          <i className="fas fa-star ratting"></i>
                          <i className="fas fa-star ratting"></i>
                        </div>
                        <span className="text-white opacity-75">//05 Rating</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide className="swiper-slide">
                  <div className="testimonial-items testimonial-items001">
                    <div
                      className="head-part bg-transparent p-0 pb-1 mb-3 w-100 d-flex align-items-center d-inline-flex gap-2 justify-content-between">
                      <div className="d-inline-flex align-items-center gap-xxl-3 gap-2">
                        <img src="assets/img/testimonial/testi-author.png" alt="img"
                          className="rounded-2" />
                        <div className="cont">
                          <div className="fs-20px text-white heading-font lh-1 fw-bold mb-1">
                            Ryan Anderson
                          </div>
                          <p className="fs-seven text-white opacity-75">
                            Creative Director
                          </p>
                        </div>
                      </div>
                      <img src="assets/img/testimonial/author-badge1.png" alt="img" className="quote" />
                    </div>
                    <div className="cont-box border black-bg p-xxl-4 p-3">
                      <p className="text-white mb-4">
                        “The team delivered a beautiful, thoughtful design that clearly reflects our
                        brand vision, values, and long-term goals.”
                      </p>
                      <div className="heading-font fs-seven fw-medium d-flex align-items-center gap-1">
                        <div className="d-flex gap-1">
                          <i className="fas fa-star ratting"></i>
                          <i className="fas fa-star ratting"></i>
                          <i className="fas fa-star ratting"></i>
                          <i className="fas fa-star ratting"></i>
                          <i className="fas fa-star ratting"></i>
                        </div>
                        <span className="text-white opacity-75">//05 Rating</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="testimonial-items testimonial-items001">
                    <div
                      className="head-part bg-transparent p-0 pb-1 mb-3 w-100 d-flex align-items-center d-inline-flex gap-2 justify-content-between">
                      <div className="d-inline-flex align-items-center gap-xxl-3 gap-2">
                        <img src="assets/img/testimonial/testi-author2.png" alt="img"
                          className="rounded-2" />
                        <div className="cont">
                          <div className="fs-20px text-white heading-font lh-1 fw-bold mb-1">
                            Michael Brown
                          </div>
                          <p className="fs-seven text-white opacity-75">
                            Creative Director
                          </p>
                        </div>
                      </div>
                      <img src="assets/img/testimonial/author-badge2.png" alt="img" className="quote" />
                    </div>
                    <div className="cont-box border black-bg p-xxl-4 p-3">
                      <p className="text-white mb-4">
                        “Clean, thoughtful design paired with clear communication and a smooth
                        creative process from concept.”
                      </p>
                      <div className="heading-font fs-seven fw-medium d-flex align-items-center gap-1">
                        <div className="d-flex gap-1">
                          <i className="fas fa-star ratting"></i>
                          <i className="fas fa-star ratting"></i>
                          <i className="fas fa-star ratting"></i>
                          <i className="fas fa-star ratting"></i>
                          <i className="fas fa-star ratting"></i>
                        </div>
                        <span className="text-white opacity-75">//05 Rating</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
