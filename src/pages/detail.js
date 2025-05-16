import * as React from "react";
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLocation } from "@reach/router";
import { navigate } from "gatsby";

const detailContent = {
  1: [
    {
      title: "Overview",
      text: "Before design begins, I gather context by learning about the business's purpose, its target users, and its industry landscape.",
      image: "/images/discover-overview.jpg",
    },
    {
      title: "Interview Both Owner & Customer",
      text: "By speaking with both stakeholders and customers, we uncover real pain points, needs, and behaviors that shape the design strategy.",
      image: "/images/discover-interview.jpg",
    },
    {
      title: "Identify Pain Points",
      text: "We map user frustrations and inefficiencies across their current journey to find clear opportunities for improvement.",
      image: "/images/discover-painpoints.jpg",
    },
    {
      title: "Know the Competition",
      text: "Competitor audits reveal what works, what doesn't, and where we can stand out with superior UX and messaging.",
      image: "/images/discover-competition.jpg",
    },
  ],
  2: [
    {
      title: "Define Goals",
      text: "Each project begins with setting measurable goals that tie design decisions directly to business outcomes.",
      image: "/images/define-goals.jpg",
    },
    {
      title: "Create Problem Statements",
      text: "We reframe user needs into problem statements to focus design efforts around real challenges.",
      image: "/images/define-problems.jpg",
    },
    {
      title: "Refine User Personas",
      text: "Personas distill user research into digestible guides that keep teams aligned around who we're designing for.",
      image: "/images/define-personas.jpg",
    },
    {
      title: "Set Metrics for Success",
      text: "Before designing, we define what success looks like—whether it's conversions, engagement, or user satisfaction.",
      image: "/images/define-metrics.jpg",
    },
  ],
  3: [
    {
      title: "Design Layout",
      text: "Starting with low-fidelity layouts, we sketch out information flow and interaction points across screens.",
      image: "/images/design-layout.jpg",
    },
    {
      title: "Sketch Components",
      text: "Component-based design ensures consistency across the interface and speeds up development.",
      image: "/images/design-components.jpg",
    },
    {
      title: "Build Wireframes",
      text: "Wireframes act as blueprints for the site's structure before adding color, style, and branding.",
      image: "/images/design-wireframes.jpg",
    },
    {
      title: "Plan Interaction Patterns",
      text: "We define animations, transitions, and interactive behaviors that enhance usability and delight users.",
      image: "/images/design-interactions.jpg",
    },
  ],
  4: [
    {
      title: "Development",
      text: "Once approved, designs are translated into clean, scalable front-end code with performance in mind.",
      image: "/images/deploy-development.jpg",
    },
    {
      title: "Testing",
      text: "We rigorously test across devices and breakpoints to catch bugs, fix edge cases, and polish the experience.",
      image: "/images/deploy-testing.jpg",
    },
    {
      title: "Launch",
      text: "With quality and performance verified, we deploy and monitor the launch for a smooth go-live.",
      image: "/images/deploy-launch.jpg",
    },
    {
      title: "Iterate Based on Feedback",
      text: "Post-launch feedback is gathered and analyzed to guide updates that continually improve the product.",
      image: "/images/deploy-iterate.jpg",
    },
  ],
};

export default function DetailPage() {
  const scrollRef = useRef(null);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const cardId = searchParams.get("card") || "1";
  const content = detailContent[cardId] || [];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showInstruction, setShowInstruction] = useState(true);

  // Navigation functions
  const goToSlide = (index) => {
    setShowInstruction(false);
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: window.innerWidth * index,
        behavior: "smooth"
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

  // Track current slide
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

  // Horizontal scroll behavior
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

  // Prevent global scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const goBack = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      navigate("/");
    }
  };

  return (
    <div style={{ position: "relative", height: "100vh", width: "100vw" }}>
      {/* Back button */}
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

      {/* Navigation arrows */}
      {currentSlide > 0 && (
        <button
          onClick={prevSlide}
          style={{
            position: "absolute",
            zIndex: 15,
            top: "50%",
            left: "20px",
            transform: "translateY(-50%)",
            background: "rgba(0,0,0,0.7)",
            color: "white",
            border: "none",
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            fontSize: "24px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.2)"
          }}
          aria-label="Previous slide"
        >
          ←
        </button>
      )}

      {currentSlide < content.length - 1 && (
        <button
          onClick={nextSlide}
          style={{
            position: "absolute",
            zIndex: 15,
            top: "50%",
            right: "20px",
            transform: "translateY(-50%)",
            background: "rgba(0,0,0,0.7)",
            color: "white",
            border: "none",
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            fontSize: "24px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.2)"
          }}
          aria-label="Next slide"
        >
          →
        </button>
      )}

      {/* Slider container */}
      <motion.div
        ref={scrollRef}
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="project-slider"
      >
       {content.map((section, i) => (
          <section
            key={i}
            style={{
              flex: "0 0 100vw",
              height: "100vh",
              scrollSnapAlign: "start",
              background: "#f9f9f9",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "2rem",
              boxSizing: "border-box",
              position: "relative"
            }}
          >
            {/* Content */}
            <h2 style={{ fontSize: "2.2rem", marginBottom: "1rem" }}>{section.title}</h2>
            <p style={{ maxWidth: "600px", textAlign: "center" }}>{section.text}</p>
            {section.image && (
              <img
                src={section.image}
                alt={section.title}
                style={{
                  marginTop: "2rem",
                  maxWidth: "80%",
                  maxHeight: "50vh",
                  objectFit: "cover",
                  borderRadius: "12px",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
                }}
              />
            )}

            {/* Instruction note (only on first slide) */}
            {i === 0 && showInstruction && (
              <div style={{
                position: "absolute",
                bottom: "30px",
                left: "50%",
                transform: "translateX(-50%)",
                background: "rgba(0,0,0,0.6)",
                color: "white",
                padding: "8px 16px",
                borderRadius: "20px",
                fontSize: "14px",
                animation: "fadeIn 2s ease-in-out"
              }}>
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
        ))}
      </motion.div>
    </div>
  );
}