 
import { Link } from "react-router-dom";
import UseSticky from "@/hooks/UseSticky";
import { useState } from "react";
import Offcanvas from "@/components/common/Offcanvas";

export default function HeaderTwo() {
  const { sticky } = UseSticky()
  const [offCanvasOpen, setOffCanvasOpen] = useState(false);

  return (
    <>

      {/* <!-- Header Section Start --> */}
      <header id="header-sticky" className={`header-section header--2 header-style1 ${sticky ? "sticky" : ""}`}>
        <div className="container">
          <div className="mega-menu-wrapper">
            <div className="header-main">
              <Link to="/" className="header-logo">
                <img src="assets/img/imgs/myname.png" alt="logo-img" />
              </Link>
              <div className="mean__menu-wrapper d-lg-none d-block">
                <div className="main-menu">
                  <nav id="mobile-menu">

                  </nav>
                </div>
              </div>
              <div className="social-white gap-xl-3 gap-2 d-md-flex d-none align-items-center">
                <a href="#" className="icon">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
                <a href="#" className="icon">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a href="#" className="icon">
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="#" className="icon">
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </div>
              <div className="header-right gap-xxl-4 gap-lg-4 gap-3 d-flex justify-content-end align-items-center">
               <div className="d-sm-block d-none">
  <button
    type="button"
    className="common_btn common_btn-blacktheme text-nowrap"
    onClick={() => {
      const link = document.createElement("a");
      link.href = "/assets/img/imgs/Ayush-Chaurasia.pdf";
      link.download = "Ayush-Chaurasia.pdf";
      link.click();
    }}
  >
    download cv
    <span className="icon_wrapper">
      <i className="fas fa-long-arrow-alt-right"></i>
    </span>
  </button>
</div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Offcanvas offCanvasOpen={offCanvasOpen} setOffCanvasOpen={setOffCanvasOpen} />


    </>
  )
}
