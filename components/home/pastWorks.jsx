import { useRef, useEffect, useState } from "react";
import TiltCard from "./tiltCards";
import Link from "next/link";
import appData from "../../content/data/home.json";

export default function InitializeContact() {
  const containerRef = useRef(null); // Remove TypeScript's HTMLDivElement if not needed
  const [scale, setScale] = useState(1);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Component is now in the browser
    if (!isMounted) return; // Skip if not mounted

    const handleScroll = () => {
      if (!containerRef.current) return;
      const containerRect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const start = viewportHeight;
      const end = -containerRect.height;

      const progress = Math.min(
        Math.max((viewportHeight - containerRect.top) / (viewportHeight + containerRect.height), 0),
        1
      );
      setScale(1 - progress * 0.2);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMounted]);

  if (!isMounted) return null; // Optional: Return a loader here if needed

  return (      
    <>
      <div className="text-animation-container" ref={containerRef}>
        <div className="row">
          <div className="text-animation-border-top"></div>
          <div className="text-animation-text">
            <p>// Case Studies</p>
          </div>
          <div className="text-animation-clock">
            <i className="fa-solid fa-lightbulb" style={{paddingRight: "0.41rem"}}></i>    Discover <br/>
            <i className="fa-duotone fa-solid fa-magnifying-glass" style={{paddingRight: "0.21rem"}}></i>   Define <br/>
            <i className="fa-solid fa-pencil" style={{paddingRight: "0.21rem"}}></i>   Design <br/>
            <i className="fa-solid fa-cloud-arrow-up"></i> Deploy
          </div>

          <div className="project-spacing">
            <div className="has-text-centered title" style={{ marginBottom: "3rem", marginTop: "3rem" }}>
              {appData.projectSection.title}
            </div>
            <div className="columns is-multiline is-12 is-desktop is-mobile">
              {appData.projectSection.projects.map((project, index) => (
                <div key={index} className="column is-12-mobile is-6-tablet is-6-desktop has-text-centered">
                  <TiltCard
                    image={project[`image${index + 1}`]}
                    link={project[`url${index + 1}`]}
                  />
                </div>
              ))}
              <div className="column is-12-mobile is-12-tablet is-12-deskto has-text-centered">
                <button className="button white is-link has-text-centered is-primary">
                  <Link href={appData.projectSection.viewAllLink.url}>
                    {appData.projectSection.viewAllLink.text}
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