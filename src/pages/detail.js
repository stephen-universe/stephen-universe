import * as React from "react";
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation } from "@reach/router";
import { navigate } from "gatsby";
const detailContent = {
  1: [
    {
      title: "Overview",
      text: "Before design begins, I gather context by learning about the business’s purpose, its target users, and its industry landscape.",
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
      text: "Competitor audits reveal what works, what doesn’t, and where we can stand out with superior UX and messaging.",
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
      text: "Personas distill user research into digestible guides that keep teams aligned around who we’re designing for.",
      image: "/images/define-personas.jpg",
    },
    {
      title: "Set Metrics for Success",
      text: "Before designing, we define what success looks like—whether it’s conversions, engagement, or user satisfaction.",
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
      text: "Wireframes act as blueprints for the site’s structure before adding color, style, and branding.",
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


// Drag-to-scroll hook
function useHorizontalScroll(ref) {
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Mouse wheel scroll to horizontal
    const handleWheel = (e) => {
      if (e.deltaY === 0) return;
      e.preventDefault();
      el.scrollLeft += e.deltaY;
    };

    // Optional: drag-to-scroll behavior
    let isDown = false;
    let startX;
    let scrollLeft;

    const handleMouseDown = (e) => {
      isDown = true;
      startX = e.pageX - el.offsetLeft;
      scrollLeft = el.scrollLeft;
    };
    const handleMouseUp = () => (isDown = false);
    const handleMouseLeave = () => (isDown = false);
    const handleMouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - el.offsetLeft;
      const walk = (x - startX) * 1.5;
      el.scrollLeft = scrollLeft - walk;
    };

    el.addEventListener("wheel", handleWheel, { passive: false });
    el.addEventListener("mousedown", handleMouseDown);
    el.addEventListener("mouseup", handleMouseUp);
    el.addEventListener("mouseleave", handleMouseLeave);
    el.addEventListener("mousemove", handleMouseMove);

    return () => {
      el.removeEventListener("wheel", handleWheel);
      el.removeEventListener("mousedown", handleMouseDown);
      el.removeEventListener("mouseup", handleMouseUp);
      el.removeEventListener("mouseleave", handleMouseLeave);
      el.removeEventListener("mousemove", handleMouseMove);
    };
  }, [ref]);
}

export default function DetailPage() {
  const scrollRef = useRef(null);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const cardId = searchParams.get("card") || "1";
  const sections = detailContent[cardId] || [];

  // Apply horizontal wheel scrolling + drag
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleWheel = (e) => {
      if (e.deltaY === 0) return;
      e.preventDefault();
      el.scrollLeft += e.deltaY;
    };

    let isDown = false;
    let startX;
    let scrollLeft;

    const onMouseDown = (e) => {
      isDown = true;
      startX = e.pageX - el.offsetLeft;
      scrollLeft = el.scrollLeft;
    };
    const onMouseUp = () => (isDown = false);
    const onMouseLeave = () => (isDown = false);
    const onMouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - el.offsetLeft;
      const walk = (x - startX) * 1.5;
      el.scrollLeft = scrollLeft - walk;
    };

    el.addEventListener("wheel", handleWheel, { passive: false });
    el.addEventListener("mousedown", onMouseDown);
    el.addEventListener("mouseup", onMouseUp);
    el.addEventListener("mouseleave", onMouseLeave);
    el.addEventListener("mousemove", onMouseMove);

    return () => {
      el.removeEventListener("wheel", handleWheel);
      el.removeEventListener("mousedown", onMouseDown);
      el.removeEventListener("mouseup", onMouseUp);
      el.removeEventListener("mouseleave", onMouseLeave);
      el.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  // Prevent global body styling interference
  useEffect(() => {
    const original = document.body.className;
    document.body.className = "";
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.body.className = original;
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, []);

  // Get query param
 
  const content = detailContent[cardId] || [
    { title: "Not Found", content: "No detail available." },
  ];

  const goBack = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      navigate("/"); // fallback if no history
    }
  };

  return (
    <div style={{ position: "relative", height: "100vh", width: "100vw" }}>
      <button
        onClick={goBack}
        style={{
          position: "absolute",
          zIndex: 10,
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

      <motion.div
  ref={scrollRef}
  initial={{ scale: 0.95, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  exit={{ scale: 0.9, opacity: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  style={{
    display: "flex",
    flexDirection: "row",
    overflowX: "scroll",
    overflowY: "hidden",
    height: "100vh",
    width: "100vw",
    scrollSnapType: "x mandatory",
    scrollBehavior: "smooth",
    WebkitOverflowScrolling: "touch", // Mobile smooth scrolling
  }}
>
  {content.map((section, i) => (
    <section
      key={i}
      style={{
        minWidth: "100vw",
        height: "100vh",
        scrollSnapAlign: "start",
        background: "#f9f9f9",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem",
        boxSizing: "border-box",
      }}
    >
      <h2 style={{ fontSize: "2.2rem", marginBottom: "1rem" }}>{section.title}</h2>
      <p style={{ maxWidth: "600px", textAlign: "center" }}>{section.content}</p>
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
    </section>
  ))}
</motion.div>
    </div>
  );
}