import React, { useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import { Link } from "gatsby"
import VideoModal from "./videoModal"

export default function FooterQuote() {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" }) // start before fully in view

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

const lineVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.5,
      ease: [0.42, 0, 0.2, 1] // Dramatic easing
    }
  }
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.4,
      delayChildren: 0.3,
    },
  },
}


  const lines = [
    `"But you, you're supposed to change.`,
    `You're never the same even moment to moment`,
    `You're allowed and expected to invent who you are.`,
    `What an incredible power -- the ability to 'grow up'."`,
  ]

  const signature = "--Rose Quartz"
  const source = "Steven Universe"

  return (
    <motion.div
      ref={ref}
      className="quote-p bold has-text-centered"
      style={{ fontFamily: "Nostromo-Black" }}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      {lines.map((line, index) => (
        <motion.div key={index} variants={lineVariants}>
          {line}
          <br />
        </motion.div>
      ))}

      <motion.div className="has-text-centered white" variants={lineVariants}>
        <br />
        {signature}
      </motion.div>

      <motion.div className="has-text-centered white" variants={lineVariants}>
        <br />
        {source}
      </motion.div>

      <VideoModal />
    </motion.div>
  )
}



    

