
import UseSticky from "@/hooks/UseSticky";
import { useState } from "react";
import Offcanvas from "@/components/common/Offcanvas";
import SearchArea from "@/components/common/SearchArea";
import { Link } from "react-router-dom";



export default function HeaderOne() {
  const { sticky } = UseSticky()
  const [offCanvasOpen, setOffCanvasOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);


  return (
    <>
      {/* <!-- Header Section Start --> */}
      <header id="header-sticky" className={`header-section header--1 header-style1 ${sticky ? "sticky" : ""}`}>
        <div className="container">
          <div className="mega-menu-wrapper">
            <div className="header-main">
              <Link to="/" className="header-logo">
                <img src="assets/img/logo/logo.png" alt="logo-img" />
              </Link>
              <div className="mean__menu-wrapper d-lg-none d-block">
                <div className="main-menu">
                  <nav id="mobile-menu">
                    
                  </nav>
                </div>
              </div>
              <div className="header-right gap-xxl-5 gap-lg-4 gap-3 d-flex justify-content-end align-items-center">
                <div className="d-xxl-none d-block">
                  <a style={{cursor: "pointer"}} onClick={() => setSearchOpen(true)} className="search-trigger d-center rounded-circle search-icon">
                    <i className="fa-solid fa-magnifying-glass fs-6 text-white"></i>
                  </a>
                </div>
                <a href="#"
                  className="d-sm-flex d-none align-items-center gap-2 fs-seven fw-normal text-white opacity-75">
                  <img src="assets/img/icon/envelop.png" alt="img" />
                  arigo@mail.com
                </a>
                <div
                  className="header__hamburger d-flex align-items-center gap-2 fs-seven fw-semibold text-white heading-font my-auto">
                  <div className="sidebar__toggle" onClick={() => setOffCanvasOpen(true)}>
                    <img src="assets/img/icon/bars.png" alt="icon" className="filter-white" />
                  </div>
                  MENU
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <Offcanvas offCanvasOpen={offCanvasOpen} setOffCanvasOpen={setOffCanvasOpen} />
      <SearchArea setSearchOpen={setSearchOpen} searchOpen={searchOpen} />
    </>
  )
}
