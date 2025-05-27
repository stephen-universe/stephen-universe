import React, { useRef, useState } from 'react'
import { useScroll, motion, useTransform, useMotionTemplate } from 'framer-motion'
import { Link } from 'gatsby'

export default function Titles({ data, setSelectedProject, selectedProject }) {
  return (
    <div className='portfolio-spacing'>
      <div className='portfolio-titles'>
        {data.map((project, i) => (
          <Title
            key={i}
            data={{ ...project, i }}
            setSelectedProject={setSelectedProject}
            selectedProject={selectedProject}
          />
        ))}
      </div>
    </div>
  );
}

function Title({ data, setSelectedProject, selectedProject }) {
  const { title, speed, i, url, description } = data;
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', `${75 / speed}vw end`],
  });

  const clipProgress = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const clip = useMotionTemplate`inset(0 ${clipProgress}% 0 0)`;

  return (
    <div ref={container} className='portfolio-title'>
      <div
        className='wrapper'
        onMouseOver={() => setSelectedProject(i)}
        onMouseLeave={() => setSelectedProject(null)}
      >
        <div className='title-container'>
          <motion.p style={{ clipPath: clip }}>
           {title}
          </motion.p>
          <p className='background-title'>{title}</p>
        </div>

        {/* Description overlay positioned absolutely within the title */}
        <div className='descriptions'>
          <div
            className='description'
            style={{
              clipPath: selectedProject === i
                ? 'inset(0 0 0 0)'
                : 'inset(50% 0 50% 0)',
            }}
          >
            <p className='description-title'> <Link to={url}>{title}</Link></p>
            <p className='description-p'>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
