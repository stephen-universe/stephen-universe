import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const phrases = [
  "It is a long established fact",
  "that a reader will be distracted",
  "by the readable content of a page",
  "when looking at its layout."
]

export default function About() {

  return (
    <div className='text-animation-container'>
      <MaskText/>
  
    </div>
  )
}

export function MaskText() {

  const animation = {
    initial: {y: "100%"},
    enter: i => ({y: "0", transition: {duration: 0.75, ease: [0.33, 1, 0.68, 1],  delay: 0.075 * i}})
  }

  const { ref, inView, entry } = useInView({
    threshold: 0.75,
    triggerOnce: true
  });

  return(
    <div ref={ref} className='text-animation-body'>
      {
        phrases.map( (phrase, index) => {
          return <div key={index} className='lineMask'>
            <motion.p custom={index} variants={animation} initial="initial" animate={inView ? "enter" : ""}>{phrase}</motion.p>
          </div>
        })
      }
    </div>
  )
}