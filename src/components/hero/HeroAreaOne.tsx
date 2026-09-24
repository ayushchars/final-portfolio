 
import { Swiper, SwiperSlide } from "swiper/react";
import Count from "../common/Count";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";


export default function HeroAreaOne() {
  return (
    <>
      {/* <!-- Banner Section Start --> */}
      <section className="banner-section fix position-relative">
        <div className="container">
          <div className="container z-1 position-relative">
            <div className="row g-4 justify-content-between">
              <div className="col-lg-12">
                <div className="banner-content">
                  <div
                    className="content-head mb-5 pb-xxl-1 d-flex flex-md-nowrap flex-wrap align-items-center justify-content-between gap-4">
                    <div>
                      <span className="hero-sub mb-3 fs-32px heading-font text-white wow fadeInUp"
                        data-wow-delay="0.6s">
                        Designing Brands That Stand
                        <span className="d-flex fs-32px heading-font text-white align-items-center gap-2">
                          Out and Connect
                          <img src="assets/img/banner/drive.png" alt="img" className="drive" />
                        </span>
                      </span>
                      <h1 className="h-title pt-lg-0 pt-2 white fw_700 visible-slowly-bottom"
                        data-wow-delay="0.7s">
                        <span>CREATIVE</span>
                        <span className="d-flex align-items-center">
                          <img src="assets/img/banner/hero-circle.png" alt="img"
                            className="text-circle cir36" />
                          DESIGN STUDIO
                        </span>
                      </h1>
                    </div>
                    <div className="h-ratting">
                      <div className="text-center">
                        <div className="d-flex justify-content-center mb-1 gap-1 align-items-center">
                          <i className="fas fa-star ratting"></i>
                          <i className="fas fa-star ratting"></i>
                          <i className="fas fa-star ratting"></i>
                          <i className="fas fa-star ratting"></i>
                          <i className="fas fa-star ratting"></i>
                        </div>
                        <div className="count-a mb-2 justify-content-center d-flex align-items-center">
                          <span className="count">
                            <Count number={99} text="+" />
                          </span>
                        </div>
                        <p className="fs-20px lh-base text-white opacity-75 fw-medium heading-font">
                          Client <br /> Satisfaction Rate
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="serial-section-wrap d-flex align-items-center gap-3 mb-4 pb-xl-2">
                    <div className="text-white opacity-75 fw-medium fs--18px">{"001"}</div>
                    <div className="line w-100"></div>
                    <div
                      className="d-flex text-nowrap align-items-center gap-2 text-uppercase text-white fs--18px">
                      <i className="fa-solid fa-circle"></i>
                      WHAT WE DO
                    </div>
                  </div>
                  <div className="hero-social-area">
                    <div className="">
                      <div className="fs--18px mb-3 fw-medium text-white">
                        Social Icon:
                      </div>
                      <div className="social-white gap-xl-3 gap-2 d-flex align-items-center">
                        <a href="javascript:void(0)" className="icon">
                          <i className="fa-brands fa-facebook"></i>
                        </a>
                        <a href="javascript:void(0)" className="icon">
                          <i className="fa-brands fa-dribbble"></i>
                        </a>
                        <a href="javascript:void(0)" className="icon">
                          <i className="fa-brands fa-instagram"></i>
                        </a>
                        <a href="javascript:void(0)" className="icon">
                          <i className="fa-brands fa-twitter"></i>
                        </a>
                      </div>
                    </div>
                    <div
                      className="d-flex flex-sm-nowrap flex-wrap align-items-center gap-xxl-5 gap-lg-4 gap-3">
                      <Link to="/project" className="common_btn text-nowrap">
                        Start a Project
                        <span className="icon_wrapper">
                          <i className="fas fa-long-arrow-alt-right"></i>
                        </span>
                      </Link>
                      <p className="pra-box opacity-75 fw-normal white fs-six wow fadeInUp"
                        data-wow-delay="0.8s">
                        We craft meaningful brand identities and digital experiences that inspire,
                        engage, and leave a lasting impression.We
                        craft meaningful brand identities and digital experiences
                      </p>
                    </div>
                  </div>
                </div>
                <div className="showcase-slider">
                  <Swiper 
                  loop={true}
                  slidesPerView={3}
                  spaceBetween={-120}
                  speed={1200}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  grabCursor={true}
                  modules={[Autoplay]}
                  breakpoints={{
                    0: {
                      spaceBetween: -40,
                    },

                    768: {
                      spaceBetween: -80,
                    },

                    1200: {
                      spaceBetween: -120,
                    },
                  }
                    }
                  className="swiper showcaseSwiper">
                    
                      <SwiperSlide className="swiper-slide">
                        <div className="slide-inner">
                          <img src="assets/img/banner/hero-sl1.png" alt="img" />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide">
                        <div className="slide-inner">
                          <img src="assets/img/banner/hero-sl2.png" alt="" />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide">
                        <div className="slide-inner">
                          <img src="assets/img/banner/hero-sl3.png" alt="" />
                        </div>
                      </SwiperSlide>
                    
                      <SwiperSlide className="swiper-slide">
                        <div className="slide-inner">
                          <img src="assets/img/banner/hero-sl1.png" alt="img" />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide">
                        <div className="slide-inner">
                          <img src="assets/img/banner/hero-sl2.png" alt="" />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide">
                        <div className="slide-inner">
                          <img src="assets/img/banner/hero-sl3.png" alt="" />
                        </div>
                      </SwiperSlide>
              
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Banner Section Start --> */}
    </>
  )
}

