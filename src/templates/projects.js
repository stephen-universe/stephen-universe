import React from "react"
import { graphql } from "gatsby"
import useProjectData from '../static_queries/useProjectData'
import ScrollApp, { GoBack } from "../components/buttons"
import Resume from "../components/resume"
import Footer from "../components/footer"
//this component handles the blur img & fade-ins

export default function Projects(props) {
  const data = props.data.markdownRemark
  const allProjectData = useProjectData()



  function getNextSlug(slug) {
    const allSlugs = allProjectData.map(project => {
      return project.node.fields.slug
    })
    const nextSlug = allSlugs[allSlugs.indexOf(slug) + 1]
    if(nextSlug !== undefined && nextSlug !== '') {
      return nextSlug
    } else {
      return allSlugs[0]
    }
  }




  return (
   <>
 <div className="header-top-color"> <Resume /> </div>
  <div className="section-divider"></div> 


   <section className="main-body-bg">
<div className="container">
<section className="section">
   <GoBack />
   </section>

   <section className="section">
        <div className= "title is-medium">
          <h1>{data.frontmatter.title}</h1></div> 
            <h3>Project Date: {data.frontmatter.date}</h3>
            <div className= "">
              <h2>Team: {data.frontmatter.author}</h2>
              <h2>Role: {data.frontmatter.role} </h2>
            </div>
            <div className="">
              <h2>Stack: {data.frontmatter.stack}</h2>
              <h2>Tools: {data.frontmatter.tools}<i></i></h2>
        </div>
         
        <div className="tile is-ancestor">
        <div className="tile is-2 "> </div>
        <div className="tile is-8">
         <div dangerouslySetInnerHTML={{__html: data.html}}></div>
         </div>
         </div>
         <div className="tile is-2 is-parent"> </div>

    <figure className= "">
        <img className="image" src={data.frontmatter.image} alt="" />
    </figure>
    </section>
    </div>
</section>
<Footer />
<ScrollApp />
  </>
    
  )
}

//dynamic page query, must occur within each post context
//$slug is made available by context from createPages call in gatsby-node.js
export const getPostData = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
      frontmatter {
        title
        author
        date(formatString: "MMMM Do, YYYY")
        role
        stack
        tools
      }
    }
  }
`
