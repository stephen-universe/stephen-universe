import React, { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "gatsby";



const parallaxImages = [
  { src: "right-door.png", alt: "Right Door", initialX: "25%", initialY: "0%" },
  { src: "left-door.png", alt: "Left Door", initialX: "120%", initialY: "0%" },
];



// Date/Time Helper
function getCurrentDateTime() {
  const now = new Date();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return {
    dateString: `${days[now.getDay()]}, ${months[now.getMonth()]} ${now.getFullYear()}`,
    timeString: `${String(now.getHours()).padStart(2, "0")}:${String(
      now.getMinutes()
    ).padStart(2, "0")}:${String(now.getSeconds()).padStart(2, "0")}`,
  };
}



// Masked Intro Text
const MaskText = ({ dateString }) => {
  const [scrollDirection, setScrollDirection] = useState("down");

  // Detect scroll direction
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateDirection = () => {
      const currentY = window.scrollY;
      if (currentY > lastScrollY) {
        setScrollDirection("down");
      } else if (currentY < lastScrollY) {
        setScrollDirection("up");
      }
      lastScrollY = currentY;
    };

    window.addEventListener("scroll", updateDirection);
    return () => window.removeEventListener("scroll", updateDirection);
  }, []);

  const { ref, inView } = useInView({ threshold: 0.1 });

  const animationVariants = {
    initial: {
      y: scrollDirection === "down" ? "-100%" : "100%",
      opacity: 0,
    },
    animate: (i) => ({
      y: "0%",
      opacity: 1,
      transition: {
        duration: 0.75,
        ease: [0.33, 1, 0.68, 1],
        delay: 0.1 * i,
      },
    }),
    exit: {
      y: scrollDirection === "down" ? "100%" : "-100%",
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div
      ref={ref}
      className="text-animation-body"
    >
      <div
        className="vertical-text-container"
      >
        <p className="vertical-text">{dateString}</p>
      </div>

      <div className="lineMask" style={{ overflow: "hidden" }}>
        <div className="columns is-multiline is-12 is-desktop is-mobile">
          <div className="column is-6-desktop is-12-mobile is-6-tablet">
            <motion.p
              custom={0}
              initial="initial"
              animate={inView ? "animate" : ""}
              variants={animationVariants}
            >
              <span className="about-title">Hi</span> <br />
              <span className="about-subtitle">My name is</span>
              <br />
              <span className="about-title">Stephen A. Warren</span>
              <br />
              <span className="about-subtitle is-italic">
                A multi-disciplinary designer & developer.
              </span>
            </motion.p>
          </div>

<div className="rotating-text has-text-centered column is-5-desktop is-5-tablet is-12-mobile">
  <motion.p
    custom={1}
    initial="initial"
    animate={inView ? "animate" : ""}
    variants={animationVariants}
  >
    And I <RotatingWord inView={inView} />{" "}
    <span className="rotating-centered-text">experiences!</span>
  </motion.p>
</div>

<motion.div
  className="orb has-text-centered column is-3-desktop is-3-tablet is-0-mobile"
  role="presentation"
  aria-hidden="true"
  animate={{
    boxShadow: [
      '0 0 25px rgba(0, 174, 255, 0.4)',
      '0 0 35px rgba(0, 174, 255, 0.6)',
      '0 0 25px rgba(0, 174, 255, 0.4)'
    ]
  }}
  transition={{
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut"
  }}
>
  {/* Floating "moon" element */}

</motion.div>


        </div>
      </div>
    </div>
  );
};



// RotatingWords Component
const RotatingWord = ({ inView }) => {
  const words = [ "create", "design", "build"];
  const wordDuration = 1000;

  const wordVariants = {
    enter: {
      y: 20,
      opacity: 0,
      transition: { duration: 0.3 },
    },
    center: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.3 },
    },
    exit: {
      y: -20,
      opacity: 0,
      transition: { duration: 0.3 },
    },
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, wordDuration);
    return () => clearInterval(interval);
  }, [inView]);

  return (
    <span
      style={{
        position: "relative",
        display: "inline-block",
        width: "135px",
        verticalAlign: "bottom",
        height: "1.2em",
      }}
    >
      <AnimatePresence mode="wait">
        {inView && (
          <motion.span
            key={words[currentIndex]}
            initial="enter"
            animate="center"
            exit="exit"
            variants={wordVariants}
            style={{
              position: "absolute",
              left: 0,
              whiteSpace: "nowrap",
            }}
          >
            {words[currentIndex]}
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  );
};




const ParallaxImage = ({
  src,
  alt,
  initialX,
  initialY,
  index,
  containerRef,
}) => {
  const [ref, inView] = useInView({ threshold: 0.00, triggerOnce: false });
  const imageRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !imageRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const start = viewportHeight;
      const end = -containerRect.height;

      const progress = Math.min(
        Math.max((start - containerRect.top) / (start - end), 0),
        1
      );
      const maxMove = 250; // ← Increase this number to control how far doors open
      const moveAmount = maxMove * progress;


      const moveX =
        index === 0
          ? `calc(${initialX} + ${moveAmount}%)`
          : `calc(${initialX} - ${moveAmount}%)`;

      imageRef.current.style.transform = `translateX(${moveX}) translateY(${initialY})`;
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [initialX, initialY, containerRef, index]);

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
      style={{ willChange: "transform" }}
    />
  );
};




// Starfield Animation
const Starfield = () => {
  const starCount = 20;
  const stars = Array.from({ length: starCount }).map((_, i) => {
    const style = {
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 2}s`,
      animationDuration: `${1 + Math.random() * 2}s`,
    };
    return <span key={i} className="star" style={style} />;
  });
  return <div className="starfield">{stars}</div>;
};

// StarCode Wrapper
const StarCode = ({ children }) => (
  <code className="my-process-text">
    {children}
    <Starfield />
  </code>
);







// Main About Component
export default function About() {
  const containerRef = useRef(null);
  const [dateTime, setDateTime] = useState(getCurrentDateTime());
  const wrapperRef = useRef(null);
  const [scale, setScale] = useState(1);

  
 useEffect(() => {
  const handleScroll = () => {
    if (!containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const start = viewportHeight;
    const end = -containerRect.height;

    const progress = Math.min(
      Math.max((start - containerRect.top) / (start - end), 0),
      1
    );

    // Start scaling *after* 75% progress
    const zoomOutStart = 0.05;

    if (progress < zoomOutStart) {
      setScale(0.6); // fully zoomed in
    } else {
      // progress between 0.75 and 1 maps to scale 1 → 0.6
      const adjustedProgress = (progress - zoomOutStart) / (0.6 - zoomOutStart);
      const minScale = 0.4;
      setScale(1 - adjustedProgress * (0.6 - minScale));
    }
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll();
  return () => window.removeEventListener("scroll", handleScroll);
}, []);


  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(getCurrentDateTime());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (

<>

 
 

    <div
      className="text-animation-container"
      ref={containerRef}
      style={{ position: "relative" }}
    >
      <div className="text-animation-border-top"></div>
      <div className="row">
        <div className="text-animation-text">
          <p>// About</p>
        </div>
        <div className="text-animation-clock">
          <i className="fa-solid fa-earth-americas"></i> {dateTime.timeString}
        </div>
      </div>

      <MaskText dateString={dateTime.dateString} />

      <div ref={containerRef} />


    
 <div
  className="door-wrapper"
  ref={wrapperRef}
  style={{
    transform: `scale(${scale})`,
    transformOrigin: "center center",
    position: "relative",
  }}
>
  {/* Background image */}
  <div className="door-background" style={{ zIndex: 0 }} />

  {/* Text behind doors */}
  <div
    className="door-text"
  >
    <p className="title">Take A Step</p>
    <p className="title">Into My World</p>
    <Link to="/contact">
    <button className="mission-start is-primary is-rounded">
      Start Mission
      </button>
      </Link>
  </div>

  {/* Doors */}
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


      <div
  className="columns is-multiline is-desktop is-mobile is-flex is-justify-content-center has-text-centered"
  style={{
    width: "100%",
    paddingTop: "3vw",
    position: "relative",
    zIndex: 1,
  }}
>
  <div className="column is-full-mobile is-5-tablet is-5-desktop">
    <h2 className="title" style={{ textShadow: "none" }}>🚀</h2>
    <h2 className="title">Core Systems</h2>
    <p className="my-process-p">
      These are the main modules I bring on every mission — from creative
      launches to technical deep space dives.
    </p>
    <StarCode>Graphic & Brand Design</StarCode><br />
    <StarCode>Product Research & Design</StarCode><br />
    <StarCode>Digital Marketing & Strategy</StarCode><br />
    <StarCode>Web Design & Development</StarCode><br />
    <StarCode>Video Editing & Production</StarCode>
  </div>

  <div className="text-animation-border-right"></div>

  <div className="column is-full-mobile is-5-tablet is-5-desktop">
    <h2 className="title" style={{ textShadow: "none" }}>👨🏾‍🚀</h2>
    <h2 className="title">Field Systems</h2>
    <p className="my-process-p">
      Specialized tools & skills deployed across terrain—strategic, technical, creative.
    </p>
    <StarCode>Creative Direction & Art Systems</StarCode><br />
    <StarCode>UI/UX & Design Systems</StarCode><br />
    <StarCode>Client-Facing Documentation</StarCode><br />
    <StarCode>Frontend Development</StarCode><br />
    <StarCode>Motion Design & Prototyping</StarCode>
  </div>
</div>

    </div>

    </>
  );
}
