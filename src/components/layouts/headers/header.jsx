import { Link } from "gatsby";
import React, { useState } from "react";
import appData from "../../../../content/settings/setting.json";

export default function Index({ menuIsActive, setMenuIsActive }) {
  const navItems = [];

  appData.header.menu.forEach((item, index) => {
    let s_class1 = "";

    if (item.children != 0) {
      s_class1 = "menu-item-has-children";
    }
    let newobj = Object.assign({}, item, { classes: s_class1 });
    navItems.push(newobj);
  });

  const [desktopMenu, desktopMenuToggle] = useState(false);
  const [mobileMenu, mobileMenuToggle] = useState(false);

  const clickedDesktopMenu = (e) => {
    e.preventDefault();
    desktopMenuToggle(!desktopMenu);
    document.getElementsByClassName("desktop-menu")[0].classList.toggle("open");
  };

  const clickedMobileMenu = (e) => {
    e.preventDefault();
    mobileMenuToggle(!mobileMenu);
    document.getElementsByClassName("mobile-menu")[0].classList.toggle("open");
  };
  const clickedMobileMenuItemParent = (e) => {
    e.preventDefault();
    e.target.parentNode.classList.toggle("active");
  };

  return (
   <>
      <div className="desktop-nav" id="stickyHeader">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="d-flex-all justify-content-between">
                      <div className="nav-bar">
                        <div className="extras">
                          <div className="theme-color">
                            <Link to="/"
                              className="resume-link"
                              style={{ paddingTop: 15 + "px", float: "left" }}
                            >
                              <img src="/logo-icon.png" width={300} height={300} />
                            </Link>
      
                            <a
                              href="#"
                              id="mobile-menu"
                              className={
                                mobileMenu ? "menu-start open" : "menu-start"
                              }
                              onClick={(e) => clickedMobileMenu(e)}
                            >
                              <div onClick={() => {setMenuIsActive(!menuIsActive)}} 
                         className={`${"burger"} ${menuIsActive ? "burgerActive" : ""}`}></div>
                              <svg id="ham-menu" viewBox="0 0 100 100">
                                {" "}
                                <path
                                  className="line line1"
                                  d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
                                />{" "}
                                <path className="line line2" d="M 20,50 H 80" />{" "}
                                <path
                                  className="line line3"
                                  d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
                                />{" "}
                              </svg>
                            </a>
                            <a
                              href="#"
                              id="desktop-menu"
                              className={
                                desktopMenu ? "menu-start open" : "menu-start"
                              }
                              onClick={(e) => clickedDesktopMenu(e)}
                            >
                              <svg id="ham-menue" viewBox="0 0 100 100">
                                {" "}
                                <path
                                  className="line line1"
                                  d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
                                />{" "}
                                <path className="line line2" d="M 20,50 H 80" />{" "}
                                <path
                                  className="line line3"
                                  d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
                                />{" "}
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      
      
            <div className="mobile-nav mobile-menu" id="mobile-nav">
              
              <div className="res-log">
                <Link href="/">
                  <img
                    src={appData.companyLogo.logo.image}
                    alt={appData.companyLogo.logo.alt}
                  />
                </Link>
              </div>
      
              <ul>
                <Link to="/projects">
                  {" "}
                  <h1
                    className="has-text-centered white"
                    style={{ fontSize: 3 + "rem" }}
                  >
                    <span>
                      <h5
                        className="has-text-centered white is-12"
                        style={{ paddingTop: 25 + "px", fontSize: 1.5 + "rem", lineHeight: 0.1 + "rem" }}
                      >
                        Global
                      </h5>
                    </span>
                    Projects
                  </h1>
                </Link>
      
                <Link to="/contact">
                  {" "}
                  <h1
                    className="has-text-centered white"
                    style={{ fontSize: 3 + "rem" }}
                  >
                    <span>
                      <h5
                        className="has-text-centered white"
                        style={{ paddingTop: 45 + "px", fontSize: 1.5 + "rem", lineHeight: 0.1 + "rem" }}
                      >
                        Initialize
                      </h5>
                    </span>
                    Contact
                  </h1>
                </Link>
              </ul>


              <div className="blog-nav-link desktop-menu">
              <div className="blog-nav-text">
               <Link to='/contact'>Hire Me</Link>
              </div>
            </div>

            
              <a href="#" id="res-cross" onClick={(e) => clickedMobileMenu(e)}></a>
            </div>
      
            </>
  );
}
