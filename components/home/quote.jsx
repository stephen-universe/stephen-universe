import { motion } from "framer-motion";
import Link from "next/link";
import appData from "../../content/data/home.json";

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
  // Convert the quoteParts object into an array of parts
  const quotePartsArray = Object.values(appData.timedQuote.quoteParts);
  const totalParts = quotePartsArray.length;

  return (
    <div className="quote-p bold has-text-justified">
      {quotePartsArray.map((part, index) => {
        const partNumber = index + 1;
        const isSecondToLast = index === totalParts - 2;
        const isLast = index === totalParts - 1;

        return (
          <motion.div
            key={`part-${partNumber}`}
            custom={part[`delay${partNumber}`]}
            variants={fadeVariant}
            initial="hidden"
            animate={shouldAnimate ? "visible" : "hidden"}
            className={`${isSecondToLast ? "has-text-right is-italic mt-4" : ""} ${
              isLast ? "has-text-right" : ""
            }`}
          >
            <span>{part[`text${partNumber}`]}</span>
            <br />
          </motion.div>
        );
      })}

      <CTA shouldAnimate={shouldAnimate} />
    </div>
  );
}

// CTA component remains the same
function CTA({ shouldAnimate }) {
  return (
    <motion.div
      custom={10.9 * 1000} // 10900ms
      variants={fadeVariant}
      initial="hidden"
      animate={shouldAnimate ? "visible" : "hidden"}
    >
      <Link href={appData.contact.link} data-label="lets talk CTA button">
        <div className={`button mt-4 ${appData.contact.className}`}>
          {appData.contact.buttonText}
        </div>
      </Link>
    </motion.div>
  );
}