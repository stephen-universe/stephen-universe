import React from 'react'


export default function Index({data, selectedProject}) {


    
    return (
        <div className='descriptions'>
            {
                data.map( (project, i) => {
                    const { title, description } = project;
                    return (
                    <div 
                        key={i} 
                        className='description'
                        style={{clipPath: selectedProject === i ? "inset(0 0 0)" : "inset(50% 0 50%"}}
                    >
                        <p>{title}</p>
                        <p>{description}</p>
                    </div>
                    )
                })
            }
        </div>
    )
}