import { Link } from "react-router-dom";

const projects = [
  {
    number: "01",
    image: "assets/img/imgs/bold.png",
    // image: "https://www.anacity.com/images/anacity/v2/logo.png",
    title: "Bold Potable",
    category: "Full-Stack Development",
    year: "2025",
    url: "https://boldsiterentals.com",
    column: "col-lg-7",
    delay: "0.5s",
  },
  {
    number: "02",
    // image: "https://www.sidehustl.ca/logo192.png",
    image: "assets/img/imgs/sidehustl.png",

    title: "Sidehustl",
    category: "Full-Stack Development",
    year: "2026",
    url: "https://www.sidehustl.ca",
    column: "col-lg-5",
    delay: "0.7s",
  },
  {
    number: "03",
    // image: "https://mylucidus.com/images/logo-mark.svg",
    image: "assets/img/imgs/mylucidus_logo.png",

    title: "Lucidus",
    category: "Full-Stack Development",
    year: "2026",
    url: "https://mylucidus.com",
    column: "col-lg-5",
    delay: "0.9s",
  },
  {
    number: "04",
    // image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeMjnBMEY3VC4GWpaepuQI83oF25zpnzvO1ZRnCTFtPw&s",
    image: "assets/img/imgs/we_bc.png",
   
    title: "WEBC",
    category: "Frontend & Backend",
    year: "2023",
    url: "https://we-bc.ca",
    column: "col-lg-7",
    delay: "0.5s",
  },
];

export default function WorkAreaTwo() {
  return (
    <section className="work-section-unique2 fix pb-sm-5 section-padding">
      <div className="container">
        <div className="d-flex flex-md-nowrap gap-2 flex-wrap align-items-end justify-content-between mb-48">
          <div className="section-header-unique d-flex justify-content-start gap-2">
            <div>
              <div className="head-one wow fadeInUp" data-wow-delay="0.5s">
                <span className="what fw-semibold">Selected</span>
                <span></span>
              </div>

              <div
                className="head-two d-flex gap-xxl-3 gap-lg-2 gap-1 flex-lg-nowrap flex-wrap wow fadeInUp"
                data-wow-delay="0.6s"
              >
                <span className="ab">
                  <img
                    src="assets/img/element/drive-theme.png"
                    alt="Work"
                    className="d-md-block d-none"
                  />
                  Work
                </span>

                <p>
                  We deliver strategic, creative, and performance-driven
                  marketing services focused on scaling brands and increasing
                  visibility.
                </p>
              </div>
            </div>
          </div>

          <div className="text-md-end">
            <div className="fs-32px mb-4 text-md-end fw-bold text-uppercase">
              MY impact
            </div>

            <Link
              to="/blog"
              className="common_btn common_btn-blacktheme text-nowrap"
            >
              view all projects
              <span className="icon_wrapper">
                <i className="fas fa-long-arrow-alt-right"></i>
              </span>
            </Link>
          </div>
        </div>

        <div className="row g-xxl-5 g-4">
          {projects.map((project) => (
           <div
  key={project.number}
  className={`${project.column} col-md-6 wow fadeInUp`}
  data-wow-delay={project.delay}
>
  <div className="wroking-service-item02 h-fix">
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="thumb"
    >
      <img
        src={project.image}
        alt={project.title}
        className="project-image"
      />

      <span className="fs-32px fw-semibold date-badge z-2">
        {project.number}
        <small className="fs--18px opacity-50 pra-clr fw-medium">
          /04
        </small>
      </span>
    </a>

                <div className="content d-flex align-items-center justify-content-between gap-2">
                  <div>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="title d-block fs-32px heading-font fw-bold text-dark text-uppercase mb-3"
                    >
                      {project.title}
                    </a>

                    <p className="fs--18px fw-medium text-dark opacity-75">
                      {project.category}
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
  );
}