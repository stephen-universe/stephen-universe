import React, { useRef } from 'react'
import { Link } from 'gatsby';
import { useScroll, motion, useTransform, useMotionTemplate } from 'framer-motion';

export default function Index({data, setSelectedProject}) {
  return (
    <div className='titles'>
        {
            data.map( (project, i) => {
                return <Title key={i} data={{...project, i}} setSelectedProject={setSelectedProject}/>
            })
        }
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
        <div ref={container} className='title'>
            <div 
                className='wrapper'
                onMouseOver={() => {setSelectedProject(i)}}
                onMouseLeave={() => {setSelectedProject(null)}}
            >
                <motion.p style={{clipPath: clip}}>
                <Link to={url} className='title-link'> {title}</Link>
                </motion.p>
                <p>
                <Link to={url} className='title-link'> {title}</Link>
                </p>
            </div>
        </div>
    )
}

