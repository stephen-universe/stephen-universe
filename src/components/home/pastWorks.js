import React, { useRef, useEffect, useState } from "react";
import TiltCard from "./tiltCards"; // assuming it's saved separately
import { Link } from "gatsby";




export default function InitializeContact() {
  const containerRef = useRef(null);
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
        <div className="row">
        <div className="text-animation-border-top"></div>
        <div className="text-animation-text">
        <p>// Case Studies</p>
      </div>
      <div className="text-animation-clock">
      <i class="fa-solid fa-lightbulb" style={{paddingRight: "0.41rem"}}></i>    Discover <br/>
        <i class="fa-duotone fa-solid fa-magnifying-glass"style={{paddingRight: "0.21rem"}}></i>   Define <br/>
           <i class="fa-solid fa-pencil"style={{paddingRight: "0.21rem"}}></i>   Design <br/>
           <i class="fa-solid fa-cloud-arrow-up"></i> Deploy
        </div>

          <div className="project-spacing">
          <div className="columns is-multiline is-12 is-desktop is-mobile">
            <div className="column is-full-mobile is-half-tablet is-half-desktop is-half-widescreen is-half-fullhd has-text-centered">
            <Link to="/project/logofolio">
              <TiltCard
                image="/Queendom-Farms-Home.jpg"
              />
              </Link>
            </div>
            <div className="column is-full-mobile is-half-tablet is-half-desktop is-half-widescreen is-half-fullhd has-text-centered">
            <Link to="/project/logofolio">
              <TiltCard
                image="/CCS.png"
              />
              </Link>
            </div>
          </div>

          <div className="columns is-multiline is-12 is-desktop is-mobile">
            <div className="column is-full-mobile is-half-tablet is-half-desktop is-half-widescreen is-half-fullhd has-text-centered">
              <Link to="/project/logofolio">
              <TiltCard
                image="/Ana-Rose-home.jpg"
              />
              </Link>
            </div>
            <div className="column is-full-mobile is-half-tablet is-half-desktop is-half-widescreen is-half-fullhd has-text-centered">
            <Link to="/project/logofolio">
              <TiltCard
  image="/perfectly-different.png"
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
