import React, { useState } from 'react';
import Titles from './titles';
import Descriptions from './descriptions';


const data = [
    {
        title: "Logofolio",
        description: "Working on the Next-Generation HMI Experience without no driving experience.",
        speed: 0.5,
        url: "/project/logofolio"
    },
    {
        title: "Ana Rose",
        description: "Developed the Future of UFC Sports Ecosystem despite not being a sports fan.",
        speed: 0.5,
        url: "/project/ana-rose"
    },
    {
        title: "Queendom Farms",
        description: "Defined the visual concept and design language for the Lincoln Zephyr 2022 but never seen it in real life.",
        speed: 0.67,
        url: "/project/queendom-farms"
    },
    {
        title: "Purple Society",
        description: "I was just one person on a massive team that created an entire Royal Caribbean eco-system.",
        speed: 0.8,
        url: "/project/purple-society"
    },
    {
        title: "Consolidated Construction",
        description: "Designed a 1M+ users product utilizing my best personal experience: sleeping.",
        speed: 0.8,
        url: "/project/consolidated-construction-solutions"
    },
    {
        title: "Perfectly Different",
        description: "Explored the Future of Fantasy Football while being in a country where football means a total different sport.",
        speed: 0.8,
        url: "/project/perfectly-different"
    }
]

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null)
    return (
        <div className='container'>
            <Titles data={data} setSelectedProject={setSelectedProject}/>
            <Descriptions data={data} selectedProject={selectedProject}/>
        </div>
    )
}