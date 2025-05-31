import React, { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import Image from "next/image";
import appData from "../../content/data/home.json";
import dynamic from "next/dynamic";

const Clock = dynamic(() => import("../clock"), { ssr: false });

const parallaxImages = [
  { src: "/right-door.png", alt: "Right Door", initialX: "-40.5%", initialY: "0%" },
  { src: "/left-door.png", alt: "Left Door", initialX: "100%", initialY: "0%" },
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
dateString: `${days[now.getDay()]}, ${months[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`,
    timeString: `${String(now.getHours()).padStart(2, "0")}:${String(
      now.getMinutes()
    ).padStart(2, "0")}:${String(now.getSeconds()).padStart(2, "0")}`,
  };
}

const MaskText = ({ dateString }) => {
  const [scrollDirection, setScrollDirection] = useState("down");

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
    <div ref={ref} className="text-animation-body">
      <div className="vertical-text-container">
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
              <span className="about-title">{appData.introLines.line1}</span> <br />
              <span className="about-subtitle">{appData.introLines.line2}</span>
              <br />
              <span className="about-title">{appData.introLines.line3}</span>
              <br />
              <span className="about-subtitle is-italic">
                {appData.introLines.line4}
              </span>
            </motion.p>
          </div>

          <div className="rotating-text has-text-centered column is-5-desktop is-5-tablet is-10-mobile">
            <motion.p
              custom={1}
              initial="initial"
              animate={inView ? "animate" : ""}
              variants={animationVariants}
            >
              {appData.combinedStatement.statement1} <RotatingWord inView={inView} />{" "}
              <span className="rotating-centered-text">
                {appData.combinedStatement.statement2}
              </span>
            </motion.p>
          </div>

          <motion.div
            className="orb has-text-centered column is-3-desktop is-3-tablet is-0-mobile"
            role="presentation"
            aria-hidden="true"
            animate={{
              boxShadow: [
                '0 0 25px rgba(0, 174, 255, 0.2)',
                '0 0 35px rgba(0, 174, 255, 0.2)',
                '0 0 25px rgba(0, 174, 255, 0.2)'
              ]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </div>
    </div>
  );
};

const RotatingWord = ({ inView }) => {
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
      setCurrentIndex((prev) => (prev + 1) % appData.rotatingWords.length);
    }, 1000);
    return () => clearInterval(interval);
  }, [inView]);

  return (
    <span className="rotating-word">
      <AnimatePresence mode="wait">
        {inView && (
          <motion.span
            key={appData.rotatingWords[currentIndex]}
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
            {appData.rotatingWords[currentIndex]}
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  );
};

const ParallaxImage = ({ src, alt, initialX, initialY, index, containerRef }) => {
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
      const maxMove = 200;
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
    <div
      ref={(el) => {
        ref(el);
        imageRef.current = el;
      }}
      className="parallax-door-container"
    >
      <Image
        src={src}
        alt={alt}
        width={500}
        height={800}
        className="parallax-door"
        style={{
          position: 'absolute',
          willChange: "transform",
        }}
      />
    </div>
  );
};

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

const StarCode = ({ children }) => (
  <code className="my-process-text">
    {children}
    <Starfield />
  </code>
);

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

      const zoomOutStart = 0.05;

      if (progress < zoomOutStart) {
        setScale(0.6);
      } else {
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
        <div className="text-animation-text">
          <p>// About</p>
        </div>
<Clock />

        <MaskText dateString={dateTime.dateString} />

        <div
          className="door-wrapper"
          ref={wrapperRef}
          style={{
            transform: `scale(${scale})`,
            transformOrigin: "center center",
            position: "relative",
          }}
        >
          <div className="door-background" style={{ zIndex: 0 }} />

          <div className="door-text">
            <p>{appData.doorMessages.message1}</p>
            <p>{appData.doorMessages.message2}</p>
            <Link href={appData.contact.link}>
              <button className="mission-start is-primary is-rounded">
                {appData.doorMessages.message3}
              </button>
            </Link>
          </div>

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
            paddingTop: "10vw",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div className="column is-full-mobile is-5-tablet is-5-desktop">
            <h2 className="emoji" style={{ textShadow: "none" }}>🚀</h2>
            <h2 className="title">{appData.coreSystems.title}</h2>
            <p className="my-process-p">
              {appData.coreSystems.desc}
            </p>
            {Object.values(appData.coreSystems.skills).map((skill, index) => (
              <React.Fragment key={index}>
                <StarCode>{skill}</StarCode><br />
              </React.Fragment>
            ))}
          </div>

          <div className="text-animation-border-right"></div>

          <div className="column is-full-mobile is-5-tablet is-5-desktop">
            <h2 className="emoji" style={{ textShadow: "none" }}>👨🏾‍🚀</h2>
            <h2 className="title">{appData.fieldSystems.title}</h2>
            <p className="my-process-p">
              {appData.fieldSystems.desc}
            </p>
            {Object.values(appData.fieldSystems.skills).map((skill, index) => (
              <React.Fragment key={index}>
                <StarCode>{skill}</StarCode><br />
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}