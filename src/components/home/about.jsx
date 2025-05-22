import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const phrases = [
  "It is a long established fact",
  "that a reader will be distracted",
  "by the readable content of a page",
  "when looking at its layout.",
];

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
  const dayName = days[now.getDay()];
  const monthName = months[now.getMonth()];
  const year = now.getFullYear();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  return {
    dateString: `${dayName}, ${monthName} ${year}`,
    timeString: `${hours}:${minutes}:${seconds}`,
  };
}



const MaskText = ({ dateString }) => {
  const animation = {
    initial: { y: "100%" },
    enter: (i) => ({
      y: "0",
      transition: {
        duration: 0.75,
        ease: [0.33, 1, 0.68, 1],
        delay: 0.075 * i,
      },
    }),
  };

  const { ref, inView } = useInView({
    threshold: 0.75,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className="text-animation-body"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        className="vertical-text-container"
        style={{
          writingMode: "vertical-rl",
          textOrientation: "mixed",
          marginRight: "2rem",
        }}
      >
        <p className="vertical-text">{dateString}</p>
      </div>

      <div>
        {phrases.map((phrase, index) => (
          <div key={index} className="lineMask">
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
    </div>
  );
};

export default function About() {
  const containerRef = useRef(null);

  const [dateTime, setDateTime] = useState(getCurrentDateTime());


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
        <i class="fa-solid fa-earth-americas"></i> {dateTime.timeString}
      </div>
      </div>
      <MaskText dateString={dateTime.dateString} />






      <div
        className="columns is-multiline is-12 is-desktop is-mobile has-text-centered"
        style={{ width: "100%", paddingTop: "10vw" }}
      >
        <div className="column is-full-mobile is-half-tablet is-half-desktop is-half-widescreen is-half-fullhd">
          <code>is-three-quarters-mobile</code>
          <br />
          <code>is-two-thirds-tablet</code>
          <br />
          <code>is-half-desktop</code>
          <br />
          <code>is-one-third-widescreen</code>
          <br />
          <code>is-one-quarter-fullhd</code>
        </div>
        <div className="text-animation-border-right"></div>
        <div className="column is-full-mobile is-half-tablet is-half-desktop is-half-widescreen is-half-fullhd">
          <code>is-three-quarters-mobile</code>
          <br />
          <code>is-two-thirds-tablet</code>
          <br />
          <code>is-half-desktop</code>
          <br />
          <code>is-one-third-widescreen</code>
          <br />
          <code>is-one-quarter-fullhd</code>
        </div>
      </div>


</div>


</>
  );
}
