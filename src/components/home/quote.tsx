import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
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
  { text: "That's what they are. Forever.", delay: 8400 },
];

export default function Quote() {
  return (
    <div
      className="quote-p bold has-text-justified"
      style={{
        fontFamily: "Nostromo-Oblique-Black",
        marginTop: "8rem",
        textAlign: "center",
      }}
    >
      {quoteLines.map(({ text, delay }, index) => {
        const [ref, inView] = useInView({
          triggerOnce: false,
          threshold: 0.2,
        });

        return (
          <motion.div
            ref={ref}
            key={index}
            custom={delay}
            variants={fadeVariant}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <span>{text}</span>
            <br />
          </motion.div>
        );
      })}

      {/* CTA Button */}
      <CTA />
    </div>
  );
}

function CTA() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      custom={10.9 * 1000} // 10900ms
      variants={fadeVariant}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <Link to="/contact">
        <div className="button mt-4">Let's Talk</div>
      </Link>
    </motion.div>
  );
}
