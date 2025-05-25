import React from "react";
import { motion } from "framer-motion";
import { Link } from "gatsby";

const fadeVariant = {
  hidden: { opacity: 0, y: 10 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.5,
      delay: delay / 1000, // convert ms to seconds
    },
  }),
};

const quoteLines = [
  { text: "When a Gem is made, it's for a reason.", delay: 200 },
  { text: "They burst out of the ground", delay: 2400 },
  { text: "already knowing what they're supposed to be,", delay: 4600 },
  { text: "And then...", delay: 6900 },
  { text: "That's what they are... Forever.", delay: 8400 },
  { text: "--Rose Quartz", delay: 10000 },
  { text: "Steven Universe", delay: 10000 },
];

export default function Quote({ shouldAnimate }) {
  return (
    <div className="quote-p bold has-text-justified">
      {quoteLines.map(({ text, delay }, index) => {
        const isSecondToLast = index === quoteLines.length - 2;
        const isLast = index === quoteLines.length - 1;

        return (
          <motion.div
            key={index}
            custom={delay}
            variants={fadeVariant}
            initial="hidden"
            animate={shouldAnimate ? "visible" : "hidden"}
            className={`${isSecondToLast ? "has-text-right is-italic mt-4" : ""} ${isLast ? "has-text-right" : ""}`}
          >
            <span>{text}</span>
            <br />
          </motion.div>
        );
      })}

      <CTA shouldAnimate={shouldAnimate} />
    </div>
  );
}

function CTA({ shouldAnimate }) {
  return (
    <motion.div
      custom={10.9 * 1000} // 10900ms
      variants={fadeVariant}
      initial="hidden"
      animate={shouldAnimate ? "visible" : "hidden"}
    >
      <Link to="/contact">
        <div className="button mt-4">Let's Talk</div>
      </Link>
    </motion.div>
  );
}
