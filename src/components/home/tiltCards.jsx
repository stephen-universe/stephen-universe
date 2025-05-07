import React, { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { navigate } from "gatsby";

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;

export const TiltCard = ({ title, subtitles, image }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const ySpring = useSpring(y, { stiffness: 300, damping: 20 });

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const handleClick = () => {
    if (ref.current) {
      ref.current.style.transition = "transform 0.4s ease";
      ref.current.style.transform += " scale(1.15)";
    }

    setTimeout(() => {
      navigate("");
    }, 300); // Zoom effect duration
  };

  return (
    <motion.div
    ref={ref}
    onMouseMove={handleMouseMove}
    onMouseLeave={handleMouseLeave}
    style={{
      transformStyle: "preserve-3d",
      transform,
      cursor: "pointer",
      backgroundImage: `url(${image})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      borderRadius: "1rem",
      padding: "2rem",
      color: "#fff",
      minHeight: "300px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      boxShadow: "0 15px 30px rgba(0,0,0,0.2)",
      overflow: "hidden",
    }}
    className="portfolio-box"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    whileTap={{ scale: 1.05 }}
    whileHover={{ scale: 1.02 }}
  >
    <h2 className="title" style={{ fontSize: "1.8rem", marginBottom: "0.5rem" }}>{title}</h2>
    {subtitles.map((sub, index) => (
      <div key={index} className="subtitle" style={{ fontSize: "1rem", marginBottom: "0.3rem" }}>
        {sub}
      </div>
    ))}
  </motion.div>
  );
};

export default TiltCard;
