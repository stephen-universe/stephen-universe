import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import TiltCard from "./tiltCards"; // assuming it's saved separately
import { Link } from "gatsby";

const parallaxImages = [
  { src: "right-door.png", alt: "Right Door", initialX: "95%", initialY: "0%" },
  { src: "left-door.png", alt: "Left Door", initialX: "50%", initialY: "0%" },
];

const ParallaxImage = ({
  src,
  alt,
  initialX,
  initialY,
  index,
  containerRef,
}) => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: false });
  const imageRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !imageRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const start = viewportHeight;
      const end = -containerRect.height;

      const progress = Math.min(
        Math.max((start - containerRect.top) / (start - end), 0),
        1
      );
      const moveAmount = 100 * progress;

      const moveX =
        index === 0
          ? `calc(${initialX} + ${moveAmount}%)`
          : `calc(${initialX} - ${moveAmount}%)`;

      imageRef.current.style.transform = `translateX(${moveX}) translateY(${initialY})`;
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [initialX, initialY, containerRef, index]);

  return (
    <motion.img
      ref={(el) => {
        ref(el);
        imageRef.current = el;
      }}
      src={src}
      alt={alt}
      className="parallax-door"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{ willChange: "transform" }}
    />
  );
};


export default function InitializeContact() {
  const containerRef = useRef(null);
  const wrapperRef = useRef(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const start = viewportHeight;
      const end = -containerRect.height;

      const progress = Math.min(
        Math.max((start - containerRect.top) / (start - end), 0),
        1
      );
      setScale(1 - progress * 0.2);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (      
  <>
  
  
    <div className="text-animation-container">
    <div className="text-animation-border-top"></div>
      <div className="text-animation-text">
        <p>// Process</p>
      </div>
      <div
        className="has-text-centered title"
        style={{  marginBottom: "3rem", marginTop: "5rem" }}
      >
        Take A Step <br /> Into My World
      </div>
      <div ref={containerRef} style={{ marginBottom: "3rem", position: "relative" }}/>


    
  <div
className="door-wrapper"
ref={wrapperRef}
style={{
  transform: `scale(${scale})`,
  transformOrigin: "center center",
}}
>
<div className="door-background" />
{parallaxImages.map((img, index) => (
  <ParallaxImage
    key={index}
    src={img.src}
    alt={img.alt}
    initialX={img.initialX}
    initialY={img.initialY}
    index={index}
    containerRef={containerRef}
  />
))}

</div>   
<div className="has-text-centered" style={{ marginTop: "3rem" }}>
        Not all products are created equally. <br />
        In design, every project should solve a unique set of problems. <br />
        <br />
        To follow these guidelines I've generated a process for constructing
        'user-centered' & responsive web design.
      </div>
 

        </div>

     
    
    <div className="text-animation-container">
        <div className="row">
        <div className="text-animation-border-top"></div>
        <div className="text-animation-text">
        <p>// Case Studies</p>
      </div>
      <div className="text-animation-clock">
      <i class="fa-duotone fa-solid fa-briefcase"></i> 0.001 - 0.004
      </div>
          <div className="project-spacing">
          <div className="columns is-multiline is-12 is-desktop is-mobile">
            <div className="column is-full-mobile is-half-tablet is-half-desktop is-half-widescreen is-half-fullhd has-text-centered">
            <Link to="/project/logofolio">
              <TiltCard
                title="Discover"
                subtitles={[
                  "Interview Both Owner & Customer",
                  "Identify Any Pain Points",
                  "Identify The Competition",
                ]}
                image="/images/discover-bg.jpg"
              />
              </Link>
            </div>
            <div className="column is-full-mobile is-half-tablet is-half-desktop is-half-widescreen is-half-fullhd has-text-centered">
            <Link to="/project/logofolio">
              <TiltCard
                title="Define"
                subtitles={[
                  "Create Problem Statements",
                  "Refine User Personas",
                  "Establish Success Metrics",
                ]}
                image="/images/discover-bg.jpg"
              />
              </Link>
            </div>
          </div>

          <div className="columns is-multiline is-12 is-desktop is-mobile">
            <div className="column is-full-mobile is-half-tablet is-half-desktop is-half-widescreen is-half-fullhd has-text-centered">
              <Link to="/project/logofolio">
              <TiltCard
                title="Design"
                subtitles={[
                  "Sketch Layouts & Components",
                  "Build Wireframes",
                  "Plan Interaction Patterns",
                ]}
                image="/images/discover-bg.jpg"
              />
              </Link>
            </div>
            <div className="column is-full-mobile is-half-tablet is-half-desktop is-half-widescreen is-half-fullhd has-text-centered">
            <Link to="/project/logofolio">
              <TiltCard
                title="Deploy"
                subtitles={[
                  "Develop & Test",
                  "Launch Responsively",
                  "Iterate Based on Feedback",
  ]}
  image="/images/discover-bg.jpg"
/>
              </Link>
            </div>
          </div>
          </div> 
        </div>  
      </div>
   

    </>
  );
}
