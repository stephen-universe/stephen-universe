import Link from "next/link";
import { useState } from "react";
import appData from "../../../content/data/setting.json";
import navData from "../../../content/data/navigation.json";
import Image from "next/image";

export default function Index({ menuIsActive, setMenuIsActive }) {
  const navItems = [];

  const [desktopMenu, desktopMenuToggle] = useState(false);
  const [mobileMenu, mobileMenuToggle] = useState(false);

const clickedDesktopMenu = (e) => {
  e.preventDefault();
  desktopMenuToggle(!desktopMenu);

  if (typeof document !== 'undefined') {
    document.getElementsByClassName("desktop-menu")[0]?.classList.toggle("open");
  }
};
const clickedMobileMenu = (e) => {
  e.preventDefault();
  mobileMenuToggle(!mobileMenu);

  if (typeof document !== 'undefined') {
    document.getElementsByClassName("mobile-menu")[0]?.classList.toggle("open");
  }
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
                      <Link
                        href="/"
                        className="resume-link"
                        style={{ paddingTop: "15px", float: "left" }}
                      >
                        <Image 
                          src="/images/logo-icon.png" 
                          width={300} 
                          height={300} 
                          alt="Logo"
                        />
                      </Link>

                      <a
                        href="#"
                        id="mobile-menu"
                        className={
                          mobileMenu ? "menu-start open" : "menu-start"
                        }
                        onClick={(e) => clickedMobileMenu(e)}
                      >
                        <div
                          onClick={() => {
                            setMenuIsActive(!menuIsActive);
                          }}
                          className={`${"burger"} ${
                            menuIsActive ? "burgerActive" : ""
                          }`}
                        ></div>
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
                        <div
                          onClick={() => {
                            setMenuIsActive(!menuIsActive);
                          }}
                          className={`${"burger"} ${
                            menuIsActive ? "burgerActive" : ""
                          }`}
                        ></div>
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
            <Image
              src={appData.companyLogo.image}
              alt={appData.companyLogo.alt}
              width={300} // You should adjust these values
              height={100} // You should adjust these values
            />
          </Link>
        </div>

        <ul>
          {navData.navigationLinks.slice(0, 2).map((item, index) => (
            <li key={index}>
              <Link href={item.link}>
                <h1
                  className="has-text-centered nav-link"
                  style={{ fontSize: "3rem" }}
                >
                  <span>
                    <h5
                      className="has-text-centered nav-link is-12"
                      style={{
                        fontSize: "1.5rem",
                        lineHeight: "4rem",
                      }}
                    >
                      {item.heading.subText}
                    </h5>
                  </span>
                  {item.heading.mainText}
                </h1>
              </Link>
            </li>
          ))}
        </ul>

        <div className="blog-nav-link desktop-menu">
          <div className="blog-nav-text">
            <Link
              href={navData.navigationLinks[2].link}
              style={{ color: "#FFF" }}
            >
              {navData.navigationLinks[2].text}
            </Link>
          </div>
        </div>

        <a href="#" id="res-cross" onClick={(e) => clickedMobileMenu(e)}></a>
      </div>
    </>
  );
}