import { Link } from "react-router-dom";
import projects from "./projects.js";

export default function WorkAreaTwo() {
  return (
    <>
      {/* <!-- work Section Start --> */}
      <section className="work-section-unique2 fix pb-sm-5 ">
        <div className="container">
          <div className="d-flex flex-md-nowrap gap-2 flex-wrap align-items-end justify-content-between gap-4 mb-48">
            <div className="section-header-unique d-flex justify-content-start gap-2">
              <div>
                <div className="head-one wow fadeInUp" data-wow-delay="0.5s">
                  <span className="what fw-semibold">All</span>
                  <span></span>
                </div>
                <div className="head-two d-flex gap-xxl-3 gap-lg-2 gap-1 flex-lg-nowrap flex-wrap wow fadeInUp"
                  data-wow-delay="0.6s">
                  <span className="ab"><img src="assets/img/element/drive-theme.png" alt="img"
                    className="d-md-block d-none" /> Projects</span>
                  <p>
                   A collection of MERN stack projects showcasing scalable web applications,
  clean UI, and full-stack development solutions.
                  </p>
                </div>
              </div>
            </div>
            <div className="text-md-end">
              <div className="fs-32px mb-4 text-md-end fw-bold text-uppercase">
                 MY impact
              </div>
              <Link to="/blog" className="common_btn common_btn-blacktheme text-nowrap">
                Back to home
                <span className="icon_wrapper">
                  <i className="fas fa-long-arrow-alt-right"></i>
                </span>
              </Link>
            </div>
          </div>
        <div className="row g-xxl-5 g-4">
  {projects.map((project, index) => (
    <div
      key={project.id}
      className={`${project.col} wow fadeInUp`}
      data-wow-delay={project.delay}
    >
      <div className="wroking-service-item02">
        <Link to={project.link} className="thumb">
          <img src={project.image} alt={project.name} />

          <span className="fs-32px fw-semibold date-badge z-2">
            {String(index + 1).padStart(2, "0")}
            <small className="fs--18px opacity-50 pra-clr fw-medium">
              /{String(projects.length).padStart(2, "0")}
            </small>
          </span>
        </Link>

        <div className="content d-flex align-items-center justify-content-between gap-2">
          <div>
            <Link
              to={project.link}
              className="title d-block fs-32px heading-font fw-bold text-dark text-uppercase mb-3"
            >
              {project.name}
            </Link>

            <p className="fs--18px fw-medium text-dark opacity-75">
              {project.position}
            </p>
          </div>

          <div className="fs-32px text-dark opacity-50 heading-font">
            {project.year}
          </div>
        </div>
      </div>
    </div>
  ))}
</div>
        </div>
      </section>
    </>
  )
}
