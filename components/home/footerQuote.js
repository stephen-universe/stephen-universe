"use client"; // Required for Next.js 13+ when using client-side features

import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import VideoModal from "./videoModal";
import appData from "../../content/data/home.json";

export default function FooterQuote() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const lineVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.5,
        ease: [0.42, 0, 0.2, 1], // Dramatic easing
      },
    },
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className="quote-p bold has-text-centered"
      style={{ fontFamily: "Nostromo-Black" }}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      {appData.quote.lines.map((line, index) => (
        <motion.div key={index} variants={lineVariants}>
          {line}
          <br />
        </motion.div>
      ))}

      <motion.div className="has-text-centered nav-link" variants={lineVariants}>
        <br />
        {appData.quote.attribution.signature}
      </motion.div>

      <motion.div className="has-text-centered nav-link" variants={lineVariants}>
        {appData.quote.attribution.source}
      </motion.div>

      <VideoModal />
    </motion.div>
  );
}