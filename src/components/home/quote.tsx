import React from "react";
import { motion } from "framer-motion";
import { Link } from "gatsby";
import appData from "../../../content/data/home.json";

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

export default function Quote({ shouldAnimate }) {
  return (
    <div className="quote-p bold has-text-justified">
      {appData.timedQuote.quoteParts.map((part, index) => {
        const isSecondToLast = index === appData.timedQuote.quoteParts.length - 2;
        const isLast = index === appData.timedQuote.quoteParts.length - 1;

        return (
          <motion.div
            key={index}
            custom={part[`delay${index + 1}`]}
            variants={fadeVariant}
            initial="hidden"
            animate={shouldAnimate ? "visible" : "hidden"}
            className={`${isSecondToLast ? "has-text-right is-italic mt-4" : ""} ${isLast ? "has-text-right" : ""}`}
          >
            <span>{part[`text${index + 1}`]}</span>
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
      <Link to={appData.contact.link}>
        <div className={`button mt-4 ${appData.contact.className}`}>
          {appData.contact.buttonText}
        </div>
      </Link>
    </motion.div>
  );
}