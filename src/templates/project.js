import * as React from "react";
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { navigate } from "gatsby";
import projectDetails from "../../content/data/projects.json";

export default function ProjectDetails({ pageContext }) {
  const { slug } = pageContext;
  // Access the project items from the JSON structure
  const content = projectDetails.projects[slug]?.project || [];

  const scrollRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showInstruction, setShowInstruction] = useState(true);
  const [isPortrait, setIsPortrait] = useState(false);

  useEffect(() => {
    const checkOrientation = () => {
      if (typeof window !== "undefined") {
        const portrait = window.innerHeight > window.innerWidth;
        setIsPortrait(portrait);
      }
    };

    checkOrientation();
    window.addEventListener("resize", checkOrientation);
    return () => window.removeEventListener("resize", checkOrientation);
  }, []);

  const goToSlide = (index) => {
    setShowInstruction(false);
    if (scrollRef.current && typeof window !== "undefined") {
      scrollRef.current.scrollTo({
        left: window.innerWidth * index,
        behavior: "smooth",
      });
    }
  };

  const nextSlide = () => {
    if (currentSlide < content.length - 1) {
      goToSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      goToSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container || typeof window === "undefined") return;

    const handleScroll = () => {
      const slideIndex = Math.round(container.scrollLeft / window.innerWidth);
      setCurrentSlide(slideIndex);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleWheel = (e) => {
      if (e.deltaY === 0) return;
      e.preventDefault();
      el.scrollLeft += e.deltaY;
    };

    el.addEventListener("wheel", handleWheel, { passive: false });
    return () => el.removeEventListener("wheel", handleWheel);
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      const originalBodyStyle = document.body.style.overflow;
      const originalHtmlStyle = document.documentElement.style.overflow;

      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";

      return () => {
        document.body.style.overflow = originalBodyStyle;
        document.documentElement.style.overflow = originalHtmlStyle;
      };
    }
  }, []);

  const goBack = () => {
    if (typeof window !== "undefined") {
      if (window.history.length > 1) {
        window.history.back();
      } else {
        navigate("/");
      }
    }
  };

  return (
    <div style={{ position: "relative", height: "100vh", width: "100vw" }}>
      {isPortrait && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0, 0, 0, 0.85)",
            color: "white",
            zIndex: 999,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            padding: "2rem",
          }}
        >
          <div>
            <h2 style={{ marginBottom: "1rem" }}>For A Better Viewing Experience</h2>
            <p>Please rotate your device to landscape mode.</p>
          </div>
        </div>
      )}

      {/* Back Button */}
      <button
        onClick={goBack}
        style={{
          position: "absolute",
          zIndex: 20,
          top: 20,
          left: 20,
          padding: "0.5rem 1rem",
          background: "#111",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        ← Back
      </button>

      {/* Prev Button */}
      {currentSlide > 0 && (
        <button
          onClick={prevSlide}
          style={{
            position: "absolute",
            zIndex: 15,
            top: "50%",
            left: "20px",
            transform: "translateY(-50%)",
            background: "rgba(0,0,0,0.1)",
            color: "#e84834",
            border: "none",
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            fontSize: "24px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
          }}
          aria-label="Previous slide"
        >
          ←
        </button>
      )}

      {/* Next Button */}
      {currentSlide < content.length - 1 && (
        <button
          onClick={nextSlide}
          style={{
            position: "absolute",
            zIndex: 15,
            top: "50%",
            right: "20px",
            transform: "translateY(-50%)",
            background: "rgba(0,0,0,0.1)",
            color: "#e84834",
            border: "none",
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            fontSize: "24px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
          }}
          aria-label="Next slide"
        >
          →
        </button>
      )}

      {/* Slides */}
      <motion.div
        ref={scrollRef}
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="project-slider"
        style={{
          display: "flex",
          overflowX: "scroll",
          overflowY: "hidden",
          scrollSnapType: "mandatory",
          height: "100vh",
          width: "100vw",
        }}
      >
        {content.map((section, i) => {
          const isLogofolio = slug === "logofolio";
          const hasImages = isLogofolio && section.images;
          const hasSingleImage = !isLogofolio && section.image;

          return (
            <section
              key={i}
              style={{
                flex: "0 0 100vw",
                height: "100vh",
                scrollSnapAlign: "start",
                background: "#f9f9f9",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "2rem",
                boxSizing: "border-box",
                gap: "2rem",
              }}
            >
              <div style={{ width: "20%", minWidth: "180px" }}>
                <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>{section.title}</h2>
                <p style={{ fontSize: "0.65rem", lineHeight: "1.5" }}>{section.description}</p>
              </div>

              {/* Media */}
              {section.video ? (
                <div style={{ width: "80%", height: "93vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <video
                    controls
                    muted
                    loop
                    playsInline
                    style={{
                      width: "100%",
                      height: "auto",
                      maxHeight: "100%",
                      borderRadius: "12px",
                      boxShadow: "0 4px 20px rgba(0,0,0,1)",
                      backgroundColor: "#000",
                    }}
                  >
                    <source src={section.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              ) : hasSingleImage ? (
                <div
                  style={{
                    width: "80%",
                    height: "93vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={section.image}
                    alt={section.title}
                    style={{
                      width: "100%",
                      height: "auto",
                      maxHeight: "100%",
                      objectFit: "cover",
                      borderRadius: "12px",
                      boxShadow: "0 4px 20px rgba(0,0,0,1)",
                      backgroundColor: "#fff",
                    }}
                  />
                </div>
              ) : hasImages ? (
                <>
                  {/* First image for logofolio */}
                  <div
                    style={{
                      width: "40%",
                      height: "75vh",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={section.images.white}
                      alt={`${section.title} (White)`}
                      style={{
                        width: "100%",
                        height: "auto",
                        maxHeight: "100%",
                        objectFit: "cover",
                        borderRadius: "12px",
                        boxShadow: "0 4px 20px rgba(0,0,0,1)",
                        backgroundColor: "#fff",
                      }}
                    />
                  </div>

                  {/* Second image for logofolio */}
                  <div
                    style={{
                      width: "40%",
                      height: "75vh",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={section.images.black}
                      alt={`${section.title} (Black)`}
                      style={{
                        width: "100%",
                        height: "auto",
                        maxHeight: "100%",
                        objectFit: "cover",
                        borderRadius: "12px",
                        boxShadow: "0 4px 20px rgba(0,0,0,1)",
                        backgroundColor: "#000",
                      }}
                    />
                  </div>
                </>
              ) : null}

              {/* Instruction Overlay */}
              {i === 0 && showInstruction && (
                <div
                  style={{
                    position: "absolute",
                    bottom: "20px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: "rgba(0,0,0,0.6)",
                    color: "white",
                    padding: "8px 16px",
                    borderRadius: "20px",
                    fontSize: "14px",
                    animation: "fadeIn 2s ease-in-out",
                  }}
                >
                  Click arrows or scroll horizontally →
                  <style>{`
                    @keyframes fadeIn {
                      0% { opacity: 0; }
                      100% { opacity: 1; }
                    }
                  `}</style>
                </div>
              )}
            </section>
          );
        })}
      </motion.div>
    </div>
  );
}