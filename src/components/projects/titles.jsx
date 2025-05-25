import React, { useRef } from 'react'
import { useScroll, motion, useTransform, useMotionTemplate } from 'framer-motion';
import { Link } from 'gatsby';

export default function Index({data, setSelectedProject}) {
  return (
    <div className='portfolio-spacing '>
        <div className='portfolio-titles'>
        {
            data.map( (project, i) => {
                return <Title key={i} data={{...project, i}} setSelectedProject={setSelectedProject}/>
            })
        }
    </div>
    </div>
  )
}

function Title({data, setSelectedProject}) {

    const { title, speed, i, url } = data;
    const container = useRef(null);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', `${25 / speed}vw end`]
    })

    const clipProgress = useTransform(scrollYProgress, [0,1], [100, 0]);
    const clip = useMotionTemplate`inset(0 ${clipProgress}% 0 0)`;
    
    return (
        <div ref={container} className='portfolio-title'>
            <div 
                className='wrapper'
                onMouseOver={() => {setSelectedProject(i)}}
                onMouseLeave={() => {setSelectedProject(null)}}
            >
                <motion.p style={{clipPath: clip}}>
               <Link to={url}>{title}</Link>
                </motion.p>
               <p>
                 {title}
                </p>
            </div>
        </div>
    )
}

