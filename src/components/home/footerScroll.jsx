import { Link } from 'gatsby';
import React, { useRef, useEffect } from 'react';
import { Fade } from 'reactstrap';


export default function FooterScroll() {

  const stickyContainer = useRef(null);
  const stickyMask = useRef(null);

  const initialMaskSize = .8;
  const targetMaskSize = 30;
  const easing = 0.15;
  let easedScrollProgress = 0;

  useEffect( () => {
    requestAnimationFrame(animate)
  }, [])

  const animate = () => {
    const maskSizeProgress = targetMaskSize * getScrollProgress();
    stickyMask.current.style.webkitMaskSize = (initialMaskSize + maskSizeProgress) * 100 + "%";
    requestAnimationFrame(animate)
  }

  const getScrollProgress = () => {
    const scrollProgress = stickyMask.current.offsetTop / (stickyContainer.current.getBoundingClientRect().height - window.innerHeight)
    const delta = scrollProgress - easedScrollProgress;
    easedScrollProgress += delta * easing;
    return easedScrollProgress
  }

  return (
    <main className="sticky-main">
      <div ref={stickyContainer} className="stickyContainer">
        <div ref={stickyMask} className="stickyMask">
        <div
        className=" orange absolute bold has-text-centered"
        style={{ marginTop: 24.5 + "rem" }}
      >
        <div className="">
          <Fade cascade duration={2000} delay={600}>
            <span>Feel Free To Explore Around</span>
          </Fade>{" "}
          <br />
          <Fade cascade duration={2000} delay={1400}>
            <span style={{ fontSize: 2 + "rem" }}>And When Ready, </span>{" "}
          </Fade>{" "}
          <br />
          <Fade cascade duration={2000} delay={2250}>
            <span>
              {" "}
              <div className="button resume-link">
                <Link to="/contact">Intialize Contact!</Link>
              </div>
            </span>
          </Fade>
          <br />
          <br />
          <Fade cascade duration={2000} delay={2700}>
            <span>Safe Travels!</span>
          </Fade>
          <br />
          <Fade cascade duration={2000} delay={3200}>
            <span>As I Look Forward To Working Together.</span>
          </Fade>
          <br />
        </div>
      </div>
          <video autoPlay muted loop>
            <source src="/nature.mp4" type="video/mp4"/>
          </video>
        </div>
      </div>
    </main>
  )
}