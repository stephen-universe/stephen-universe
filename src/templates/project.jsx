import * as React from "react";
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { navigate } from "gatsby";
import detailContent from "../data/detailContent"; // adjust if needed

export default function DetailPage({ pageContext }) {
  const { slug } = pageContext;
  const content = detailContent[slug] || [];

  const scrollRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showInstruction, setShowInstruction] = useState(true);

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
            boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
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
            boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
          }}
          aria-label="Next slide"
        >
          →
        </button>
      )}

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
          scrollSnapType: "x",
          height: "100vh",
          width: "100vw",
        }}
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
              position: "relative",
            }}
          >
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

            {i === 0 && showInstruction && (
              <div
                style={{
                  position: "absolute",
                  bottom: "30px",
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
        ))}
      </motion.div>
    </div>
  );
}
