 
import { Link } from "react-router-dom";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function PortfolioAreaOne() {

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 767px)", () => {
      const sections = gsap.utils.toArray<HTMLElement>(".quiable-slide-in");

      gsap.set(sections, {
        scale: 1,
      });

      sections.forEach((section) => {
        gsap.to(section, {
          scale: 0.7,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            pin: true,
            scrub: 1,
            start: "top 10%",
            end: "bottom 60%",
            endTrigger: ".project-floting-wrap",
            pinSpacing: false,
            markers: false,
          },
        });
      });
    });

    return () => {
      mm.revert(); // cleanup
    };
  }, []);




	return (
		<>
			{/* <!-- work Section Start --> */}
			<section className="work-section-unique bg-black fix section-padding">
				<div className="container">
					<div className="serial-section-wrap d-flex align-items-center gap-3 mb-48">
						<div className="text-white opacity-75 fw-medium fs--18px">
							{"03"}
						</div>
						<div className="line w-100"></div>
						<div className="d-flex text-nowrap align-items-center gap-2 text-uppercase text-white fs--18px">
							<i className="fa-solid fa-circle"></i>
							Portfolio 2020 - 2026
						</div>
					</div>
					<div ref={containerRef} className="working-wrapper project-floting-wrap">
						<div className="working_inner quiable-slide-in mb-3 bg-black d-flex align-items-center justify-content-between gap-4">
							<div className="white-clr text-nowrap d-lg-block d-none heading-font text-uppercase fs-64px visible-slowly-bottom fw-bold d-block">
								Latest
							</div>
							<div className="wroking-service-card">
								<Link to="/project-details" className="thumb">
									<img src="assets/img/thumbnail/work1.png" alt="img" />
								</Link>
								<div className="content">
									<div className="mb-xxl-5 mb-4">
										<div className="title fs-32px heading-font fw-bold text-white text-uppercase mb-xxl-3 mb-2">
											Brand Identity for Creative Brands
										</div>
										<p className="fs-seven text-white opacity-50">
											Developed visual identities that reflect brand values and
											create strong.
										</p>
									</div>
									<div className="d-flex flex-column gap-2 mb-xxl-4 mb-3">
										<div className="d-flex text-white fs-six align-items-center gap-2">
											<span className="year opacity-50 fw-normal">Years:</span>
											2026
										</div>
										<div className="d-flex text-white fs-six align-items-center gap-2">
											<span className="year opacity-50 fw-normal">
												Category:
											</span>
											<div className="text-uppercase text-white fw-bold">
												drands
											</div>
										</div>
									</div>
									<div className="d-flex align-items-center justify-content-between gap-2 flex-wrap">
										<Link
											to="/project-details"
											className="common_btn common_btn-blurtheme text-nowrap ps-3 py-1 px-1"
										>
											VIEW ALL project
											<span className="icon_wrapper">
												<i className="fas fa-long-arrow-alt-right"></i>
											</span>
										</Link>
										<div className="fs-32px fw-bold text-white">01</div>
									</div>
								</div>
							</div>
							<div className="white-clr text-nowrap d-lg-block d-none heading-font text-uppercase fs-64px visible-slowly-bottom fw-bold d-block">
								Work
							</div>
						</div>
						<div className="working_inner quiable-slide-in mb-3 bg-black d-flex align-items-center justify-content-between gap-4">
							<div className="white-clr text-nowrap d-lg-block d-none heading-font text-uppercase fs-64px visible-slowly-bottom fw-bold d-block">
								Latest
							</div>
							<div className="wroking-service-card">
								<Link to="/project-details" className="thumb">
									<img src="assets/img/thumbnail/work2.png" alt="img" />
								</Link>
								<div className="content">
									<div className="mb-xxl-5 mb-4">
										<div className="title fs-32px heading-font fw-bold text-white text-uppercase mb-xxl-3 mb-2">
											Website Design & Development
										</div>
										<p className="fs-seven text-white opacity-50">
											Crafted modern, responsive websites that balance
											aesthetics,
										</p>
									</div>
									<div className="d-flex flex-column gap-2 mb-xxl-4 mb-3">
										<div className="d-flex text-white fs-six align-items-center gap-2">
											<span className="year opacity-50 fw-normal">Years:</span>
											2026
										</div>
										<div className="d-flex text-white fs-six align-items-center gap-2">
											<span className="year opacity-50 fw-normal">
												Category:
											</span>
											<div className="text-uppercase text-white fw-bold">
												drands
											</div>
										</div>
									</div>
									<div className="d-flex align-items-center justify-content-between gap-2 flex-wrap">
										<Link
											to="/project-details"
											className="common_btn common_btn-blurtheme text-nowrap ps-3 py-1 px-1"
										>
											VIEW ALL project
											<span className="icon_wrapper">
												<i className="fas fa-long-arrow-alt-right"></i>
											</span>
										</Link>
										<div className="fs-32px fw-bold text-white">02</div>
									</div>
								</div>
							</div>
							<div className="white-clr text-nowrap d-lg-block d-none heading-font text-uppercase fs-64px visible-slowly-bottom fw-bold d-block">
								Work
							</div>
						</div>
						<div className="working_inner quiable-slide-in mb-3 bg-black d-flex align-items-center justify-content-between gap-4">
							<div className="white-clr text-nowrap d-lg-block d-none heading-font text-uppercase fs-64px visible-slowly-bottom fw-bold d-block">
								Latest
							</div>
							<div className="wroking-service-card">
								<Link to="/project-details" className="thumb">
									<img src="assets/img/thumbnail/work23.png" alt="img" />
								</Link>
								<div className="content">
									<div className="mb-xxl-5 mb-4">
										<div className="title fs-32px heading-font fw-bold text-white text-uppercase mb-xxl-3 mb-2">
											Mobile App <br /> Interface Design
										</div>
										<p className="fs-seven text-white opacity-50">
											Created clean, user-friendly app interfaces that enhance,
										</p>
									</div>
									<div className="d-flex flex-column gap-2 mb-xxl-4 mb-3">
										<div className="d-flex text-white fs-six align-items-center gap-2">
											<span className="year opacity-50 fw-normal">Years:</span>
											2026
										</div>
										<div className="d-flex text-white fs-six align-items-center gap-2">
											<span className="year opacity-50 fw-normal">
												Category:
											</span>
											<div className="text-uppercase text-white fw-bold">
												drands
											</div>
										</div>
									</div>
									<div className="d-flex align-items-center justify-content-between gap-2 flex-wrap">
										<Link
											to="/project-details"
											className="common_btn common_btn-blurtheme text-nowrap ps-3 py-1 px-1"
										>
											VIEW ALL project
											<span className="icon_wrapper">
												<i className="fas fa-long-arrow-alt-right"></i>
											</span>
										</Link>
										<div className="fs-32px fw-bold text-white">03</div>
									</div>
								</div>
							</div>
							<div className="white-clr text-nowrap d-lg-block d-none heading-font text-uppercase fs-64px visible-slowly-bottom fw-bold d-block">
								Work
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
