import React, { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useMotionTemplate,
} from "framer-motion";
import { navigate } from "gatsby";

const ROTATION_RANGE = 30;

export const TiltCard = ({ title, subtitles, image }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Softer motion
  const xSpring = useSpring(x, { stiffness: 180, damping: 22 });
  const ySpring = useSpring(y, { stiffness: 180, damping: 22 });

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMove = (clientX, clientY) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const offsetX = clientX - rect.left;
    const offsetY = clientY - rect.top;

    const rX = ((offsetY / rect.height) - 0.5) * -ROTATION_RANGE;
    const rY = ((offsetX / rect.width) - 0.5) * ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseMove = (e) => handleMove(e.clientX, e.clientY);
  const handleTouchMove = (e) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX, e.touches[0].clientY);
    }
  };

  const resetTilt = () => {
    x.set(0);
    y.set(0);
  };

  const handleClick = () => {
    if (ref.current) {
      ref.current.style.transition = "transform 0.4s ease";
      ref.current.style.transform += " scale(1.15)";
    }

    setTimeout(() => {
      navigate(""); // update route
    }, 300);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onMouseLeave={resetTilt}
      onTouchEnd={resetTilt}
      onClick={handleClick}
      style={{ transform }}
      className="portfolio-box tilt-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileTap={{ scale: 1.05 }}
      whileHover={{ scale: 1.02 }}
   
    >
      <h2
        className="title"
        style={{ fontSize: "1.8rem", marginBottom: "0.5rem" }}
      >
        {title}
      </h2>
      {subtitles.map((sub, index) => (
        <div
          key={index}
          className="subtitle"
          style={{ fontSize: "1rem", marginBottom: "0.3rem" }}
        >
          {sub}
        </div>
      ))}
    </motion.div>
  );
};

export default TiltCard;
