import React from "react"
import Link from "gatsby"
import useProjectData from "../static_queries/useProjectData"


export default function ProjectList() {
  const projectData = useProjectData()
  function renderProjectData() {
    return (
      <div>
        {projectData
          .filter(project => project.node.frontmatter.title !== "")
          .map(project => {
            return (
              <Link to={`/project/${project.node.fields.slug}`} key={project.node.id}>
                <li className="" key={project.node.fields.slug}>
                  <div className= "">
                  
                  </div>
                  <div className= "">
                    <h2>{project.node.frontmatter.title}</h2>
                    <h3>{project.node.frontmatter.date}</h3>
                    <p>{project.node.excerpt}</p>
                  </div>
                </li>
              </Link>
            )
          })}
      </div>
    )
  }
  return (
    <section>
      <ul className="">{renderProjectData()}</ul>
    </section>
  )
}

