import { Link } from "gatsby";
import Fade from "react-reveal/Fade";
import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";

export default function InitializeContact() {
  return (
    <>
      <div className="container">
        <div
          className="has-text-centered title"
          style={{ marginTop: 15 + "rem", marginBottom: 3 + "rem" }}
        >
          My Creative Process:
        </div>

        <div className="has-text-centered" style={{ marginBottom: 3 + "rem" }}>
          Not all products are created equally. <br />
          In design, every project should solve a unique set of problems. <br />{" "}
          <br />
          To follow these guidelines I've generated a processs for constructing
          'user-centered' & responsive web design.
        </div>
        <div className="container">
        <div className="row">
          <div className="columns is-multiline is-12 is-mobile">
            <div className="column is-half is-6 has-text-centered">
          <TiltCard />
          </div>
            <div className="column is-half is-6 has-text-centered">
          <TiltCard2 />
        </div>
        </div>
        <div className="columns is-multiline is-12 is-mobile">
        <div className="column is-half is-6 has-text-centered">
          <TiltCard3 />
          </div>
          <div className="column is-half is-6 has-text-centered">
          <TiltCard4 />
          </div>
        </div>
        </div>
          </div>

     
      </div>
    </>
  );
}

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const TiltCard = () => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <>
      
              <motion.div
                ref={ref}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                  transformStyle: "preserve-3d",
                  transform,
                }}
                className="portfolio-box "
              >
                <div className="title">Discover</div>
                <img src="" />
                <div className="subtitle">Interview Both Owner & Customer </div>
                <div className="subtitle">Identify Any Pain Points </div>
                <div className="subtitle">Identify The Competition</div>
              </motion.div>
           
    </>
  );
};
const TiltCard2 = () => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <>
     
              <motion.div
                ref={ref}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                  transformStyle: "preserve-3d",
                  transform,
                }}
                className="portfolio-box "
              >
                <div className="title">Discover</div>
                <img src="" />
                <div className="subtitle">Interview Both Owner & Customer </div>
                <div className="subtitle">Identify Any Pain Points </div>
                <div className="subtitle">Identify The Competition</div>
              </motion.div>
      
    </>
  );
};
const TiltCard3 = () => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <>

              <motion.div
                ref={ref}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                  transformStyle: "preserve-3d",
                  transform,
                }}
                className="portfolio-box "
              >
                <div className="title">Discover</div>
                <img src="" />
                <div className="subtitle">Interview Both Owner & Customer </div>
                <div className="subtitle">Identify Any Pain Points </div>
                <div className="subtitle">Identify The Competition</div>
              </motion.div>
      
    </>
  );
};
const TiltCard4 = () => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <>
              <motion.div
                ref={ref}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                  transformStyle: "preserve-3d",
                  transform,
                }}
                className="portfolio-box "
              >
                <div className="title">Discover</div>
                <img src="" />
                <div className="subtitle">Interview Both Owner & Customer </div>
                <div className="subtitle">Identify Any Pain Points </div>
                <div className="subtitle">Identify The Competition</div>
              </motion.div>
    </>
  );
};
