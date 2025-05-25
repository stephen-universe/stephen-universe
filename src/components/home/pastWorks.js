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
            <div
        className="has-text-centered title"
        style={{  marginBottom: "3rem", marginTop: "1rem" }}
      >
        Featured Projects
      </div>
          <div className="columns is-multiline is-12 is-desktop is-mobile">
            <div className="column is-12-mobile is-6-tablet is-6-desktop has-text-centered">
              <TiltCard
                image="/Queendom-Farms-Home.jpg"
                link="/project/logofolio"
              />
            
            </div>
            <div className="column is-12-mobile is-6-tablet is-6-desktop has-text-centered">
              <TiltCard
                image="/CCS.png"
                link="/project/logofolio"
              />
            
            </div>
   
            <div className="column is-12-mobile is-6-tablet is-6-desktop has-text-centered">

              <TiltCard
                image="/Ana-Rose-home.jpg"
                link="/project/logofolio"
              />
            
            </div>
            <div className="column is-12-mobile is-6-tablet is-6-desktop has-text-centered">
              <TiltCard
  image="/perfectly-different.png"
  link="/project/logofolio"
/>
            
            </div>
            <div className="column is-12-mobile is-12-tablet is-12-deskto has-text-centered">
              <button className="button white is-link has-text-centered is-primary">
                <Link to="/projects">
                  View All Projects
                </Link>
              </button>
          </div>
          </div> 
        </div>  
      </div>
   </div>

    </>
  );
}
