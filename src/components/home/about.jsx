import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const phrases = [
  "It is a long established fact",
  "that a reader will be distracted",
  "by the readable content of a page",
  "when looking at its layout."
];

const parallaxImages = [
  { src: 'right-door.png', alt: 'Right Door', initialX: '90%', initialY: '0%' },
  { src: 'left-door.png', alt: 'Left Door', initialX: '55%', initialY: '0%' }
];

export default function About() {
  const containerRef = useRef(null);

  return (
    <div className='text-animation-container' ref={containerRef}>
      <div className='text-animation-border-top'></div>
      <MaskText />
      <div className='text-animation-border-bottom'></div>

      {/* DOOR SECTION (fixed height and background size) */}
      <div className="door-wrapper">
        <div className="door-background" />

        {parallaxImages.map((img, index) => (
          <ParallaxImage 
            key={index}
            src={img.src}
            alt={img.alt}
            initialX={img.initialX}
            initialY={img.initialY}
            index={index}
            containerRef={containerRef}
          />
        ))}
      </div>

      {/* Rest of your content */}
      <div className="columns is-desktop has-text-centered" style={{ width: '100%', paddingTop: '8vw' }}>
        <div className="column is-full-mobile is-full-tablet is-half-desktop is-half-widescreen is-half-fullhd">
          <code>is-three-quarters-mobile</code><br />
          <code>is-two-thirds-tablet</code><br />
          <code>is-half-desktop</code><br />
          <code>is-one-third-widescreen</code><br />
          <code>is-one-quarter-fullhd</code>
        </div>
        <div className='text-animation-border-right'></div>
        <div className="column is-full-mobile is-full-tablet is-half-desktop is-half-widescreen is-half-fullhd">
          <code>is-three-quarters-mobile</code><br />
          <code>is-two-thirds-tablet</code><br />
          <code>is-half-desktop</code><br />
          <code>is-one-third-widescreen</code><br />
          <code>is-one-quarter-fullhd</code>
        </div>
      </div>
    </div>
  );
}

const ParallaxImage = ({ src, alt, initialX, initialY, index, containerRef }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  const imageRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !imageRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const start = viewportHeight;
      const end = -containerRect.height;

      const progress = Math.min(Math.max((start - containerRect.top) / (start - end), 0), 3.5);

      const moveAmount = 100 * progress;

      const moveX = index === 0
      ? `calc(${initialX} + ${moveAmount}%)` // right door moves right
      : `calc(${initialX} - ${moveAmount}%)`; // left door moves left

      imageRef.current.style.transform = `translateX(${moveX}) translateY(${initialY})`;
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [initialX, initialY, containerRef]);

  return (
    <motion.img
      ref={(el) => {
        ref(el);
        imageRef.current = el;
      }}
      src={src}
      alt={alt}
      className="parallax-door"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    />
  );
};

export function MaskText() {
  const animation = {
    initial: { y: "100%" },
    enter: i => ({
      y: "0",
      transition: {
        duration: 0.75,
        ease: [0.33, 1, 0.68, 1],
        delay: 0.075 * i
      }
    })
  };

  const { ref, inView } = useInView({
    threshold: 0.75,
    triggerOnce: true
  });

  return (
    <div ref={ref} className='text-animation-body'>
      {phrases.map((phrase, index) => (
        <div key={index} className='lineMask'>
          <motion.p
            custom={index}
            variants={animation}
            initial="initial"
            animate={inView ? "enter" : ""}
          >
            {phrase}
          </motion.p>
        </div>
      ))}
    </div>
  );
}
