import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router"; // Changed from next/navigation
import projectDetails from "../../../content/data/projects.json";

export default function ProjectDetails({ projectData }) {
  // Changed props
  const router = useRouter();
  const { slug } = router.query; // Get slug from router
  const content = projectData?.project || []; // Use projectData from props

  const scrollRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showInstruction, setShowInstruction] = useState(true);
  const [isPortrait, setIsPortrait] = useState(false);

  // Check device orientation
  useEffect(() => {
    const checkOrientation = () => {
      const portrait = window.innerHeight > window.innerWidth;
      setIsPortrait(portrait);
    };

    if (typeof window !== "undefined") {
      checkOrientation();
      window.addEventListener("resize", checkOrientation);
      return () => window.removeEventListener("resize", checkOrientation);
    }
  }, []);

  // Navigation functions
  const goToSlide = (index) => {
    setShowInstruction(false);
    if (scrollRef.current) {
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

  // Scroll handling
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      const slideIndex = Math.round(container.scrollLeft / window.innerWidth);
      setCurrentSlide(slideIndex);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  // Wheel handling for horizontal scroll
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

  // Prevent body scroll
  useEffect(() => {
    const originalBodyStyle = document.body.style.overflow;
    const originalHtmlStyle = document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalBodyStyle;
      document.documentElement.style.overflow = originalHtmlStyle;
    };
  }, []);

  const goBack = () => {
    router.back();
  };

  return (
    <div style={{ position: "relative", height: "100vh", width: "100vw" }}>
      {/* Portrait mode warning */}
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
            <h2 style={{ marginBottom: "1rem" }}>
              For A Better Viewing Experience
            </h2>
            <p>Please rotate your device to landscape mode.</p>
          </div>
        </div>
      )}

      {/* Back Button */}
      <button
        onClick={goBack}
        className="backButton"
        aria-label="Back to previous page"
      >
        Back
      </button>

      {/* Navigation Arrows */}
      {currentSlide > 0 && (
        <button
          onClick={prevSlide}
          className="navArrow leftArrow"
          aria-label="Previous slide"
        >
          ←
        </button>
      )}

      {currentSlide < content.length - 1 && (
        <button
          onClick={nextSlide}
          className="navArrow rightArrow"
          aria-label="Next slide"
        >
          →
        </button>
      )}

      {/* Slides Container */}
      <motion.div
        ref={scrollRef}
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
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
          const isFirstSlide = i === 0 && !isLogofolio; // Only first slide and not logofolio

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
              {/* Text Content - width changes based on conditions */}
              <div
                style={{
                  width: isFirstSlide ? "45%" : isLogofolio ? "20%" : "20%",
                  minWidth: isFirstSlide ? "275px" : "180px",
                }}
              >
                <h2
                  style={{
                    color: "#e84834",
                    fontSize: "1.5rem",
                    marginBottom: "1rem",
                  }}
                >
                  {section.title}
                </h2>
                <p
                  style={{
                    color: "#040c28",
                    fontSize: "0.8rem",
                    lineHeight: "1.5",
                  }}
                >
                  {section.description}
                </p>

                {/* Goals/Challenges/Solutions - only for first slide */}
                {isFirstSlide &&
                  (section.goals ||
                    section.challenges ||
                    section.solutions) && (
                    <div style={{ fontSize: "0.7rem", color: "#7c7c7c" }}>
                      {section.goals && (
                        <>
                          <p
                            style={{
                              fontSize: "0.75rem",
                              color: "#040c28",
                              display: "block",
                              marginTop: "0.5rem",
                            }}
                          >
                            Goals:
                          </p>
                          {section.goals}
                        </>
                      )}
                      {section.challenges && (
                        <>
                          <p
                            style={{
                              fontSize: "0.75rem",
                              color: "#040c28",
                              display: "block",
                              marginTop: "0.5rem",
                            }}
                          >
                            Challenges:
                          </p>
                          {section.challenges}
                        </>
                      )}
                      {section.solutions && (
                        <>
                          <p
                            style={{
                              fontSize: "0.75rem",
                              color: "#040c28",
                              display: "block",
                              marginTop: "0.5rem",
                            }}
                          >
                            Solutions:
                          </p>
                          {section.solutions}
                        </>
                      )}
                    </div>
                  )}
              </div>

              {/* Media Content */}
              {section.video ? (
                <div
                  style={{
                    width: isFirstSlide ? "45%" : "80%", // Adjusted for first slide
                    height: "93vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <video
                    controls
                    muted
                    loop
                    autoPlay
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
                    width: isFirstSlide ? "45%" : "80%", // Adjusted for first slide
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

              {/* Rest of your code remains the same */}
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

export async function getStaticPaths() {
  const projects = projectDetails.projects || {};
  const paths = Object.keys(projects).map((slug) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: false, // Consider 'blocking' if you add new projects later
  };
}

export async function getStaticProps({ params }) {
  const projectData = projectDetails.projects?.[params.slug] || null;

  if (!projectData) {
    return {
      notFound: true, // Returns 404 if project doesn't exist
    };
  }

  return {
    props: {
      projectData, // Pass data directly as prop
    },
  };
}
