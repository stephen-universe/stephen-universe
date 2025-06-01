import React, { useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useMotionTemplate,
} from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";

const generateStars = (count = 10) => {
  return Array.from({ length: count }).map((_, i) => {
    const top = Math.random() * 100;
    const left = Math.random() * 100;
    const duration = 1 + Math.random() * 2;
    const delay = Math.random() * 2;

    return (
      <div
        key={i}
        className="stars"
        style={{
          top: `${top}%`,
          left: `${left}%`,
          animationDuration: `${duration}s`,
          animationDelay: `${delay}s`,
        }}
      />
    );
  });
};

const ROTATION_RANGE = 30;

export const TiltCard = ({ title, subtitles, image, link }) => {
  const ref = useRef(null);
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xSpring = useSpring(x, { stiffness: 180, damping: 22 });
  const ySpring = useSpring(y, { stiffness: 180, damping: 22 });
  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMove = (clientX, clientY) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const offsetX = clientX - rect.left;
    const offsetY = clientY - rect.top;
    const rX = ((offsetY / rect.height) - 0.5) * ROTATION_RANGE;
    const rY = ((offsetX / rect.width) - 0.5) * -ROTATION_RANGE;
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
    if (!link) return;
    
    if (ref.current) {
      ref.current.style.transition = "transform 0.4s ease";
      ref.current.style.transform += " scale(1.15)";
    }

    setTimeout(() => {
      router.push(link);
    }, 300);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onMouseLeave={resetTilt}
      onTouchEnd={resetTilt}
      style={{ transform }}
      className="tilt-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileTap={{ scale: 1.05 }}
      whileHover={{ scale: 1.02 }}
      onClick={handleClick}
    >
      <div className="image-container" style={{ width: "100%" }}>
        {link ? (
          <Link href={link} passHref legacyBehavior>
            <a data-label="tilt card link">
              <img
                src={image}
                alt={title}
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "0.75rem",
                  objectFit: "cover",
                  display: loading ? "none" : "block",
                }}
                onLoad={() => setLoading(false)}
              />
            </a>
          </Link>
        ) : (
          <>
            {loading && <div className="image-fallback" />}
            <img
              src={image}
              alt={title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
                display: loading ? "none" : "block",
              }}
              onLoad={() => setLoading(false)}
            />
          </>
        )}
      </div>
      <div className="tilt-overlay">
        {generateStars(24)}
      </div>
    </motion.div>
  );
};

export default TiltCard;