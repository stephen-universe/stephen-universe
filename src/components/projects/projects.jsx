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
        url: "/project/anaRose"
    },
    {
        title: "Queendom Farms",
        description: "Defined the visual concept and design language for the Lincoln Zephyr 2022 but never seen it in real life.",
        speed: 0.67,
        url: "/project/queendomFarms"
    },
    {
        title: "Purple Society",
        description: "I was just one person on a massive team that created an entire Royal Caribbean eco-system.",
        speed: 0.8,
        url: "/project/purpleSociety"
    },
    {
        title: "Consolidated Construction",
        description: "Designed a 1M+ users product utilizing my best personal experience: sleeping.",
        speed: 0.8,
        url: "/project/consolidatedConstructionSolutions"
    },
    {
        title: "Perfectly Different",
        description: "Explored the Future of Fantasy Football while being in a country where football means a total different sport.",
        speed: 1.2,
        url: "/project/perfectlyDifferent"
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