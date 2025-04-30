import React from "react"
import Layout from "../../components/Layout"
import { graphql, Link} from "gatsby";
import Img from 'gatsby-image';
import ScrollApp, { GoBack } from "../../components/buttons"
import Resume from "../../components/resume"
import Footer from "../../components/footer"


export default function Projects({ data }) {
console.log(data)


const projects = data.allMarkdownRemark.nodes






return ( 
  <>
<div className="header-top-color"> <Resume /> </div>
  <div className="section-divider"></div> 


   <section className="main-body-bg">
<div className="container">
<section className="section">
   <GoBack />
   </section>
   {projects.map( project => ( 
   <section className="section">
        <div className= "title is-medium">
          <h1>{project.frontmatter.title}</h1></div> 
            <h3>Project Date: {project.frontmatter.date}</h3>
            <div className= "">
              <h2>Team: {project.frontmatter.author}</h2>
              <h2>Role: {project.frontmatter.role} </h2>
            </div>
            <div className="">
              <h2>Stack: {project.frontmatter.stack}</h2>
              <h2>Tools: {project.frontmatter.tools}<i></i></h2>
        </div>
        <br/>
        <br/>
        <Img fluid={project.frontmatter.img_1.childImageSharp.fluid} />
        <Img fluid={project.frontmatter.img_2.childImageSharp.fluid} />
        <Img fluid={project.frontmatter.img_3.childImageSharp.fluid} />
        <Img fluid={project.frontmatter.img_4.childImageSharp.fluid} />
        <Img fluid={project.frontmatter.img_5.childImageSharp.fluid} />
        <Img fluid={project.frontmatter.img_6.childImageSharp.fluid} />
        <Img fluid={project.frontmatter.img_7.childImageSharp.fluid} />
        <Img fluid={project.frontmatter.img_8.childImageSharp.fluid} />
        <Img fluid={project.frontmatter.img_9.childImageSharp.fluid} />
        <Img fluid={project.frontmatter.img_10.childImageSharp.fluid} />
        <Img fluid={project.frontmatter.img_11.childImageSharp.fluid} />
        <Img fluid={project.frontmatter.img_12.childImageSharp.fluid} />
        <Img fluid={project.frontmatter.img_13.childImageSharp.fluid} />
        <Img fluid={project.frontmatter.img_14.childImageSharp.fluid} />
        <Img fluid={project.frontmatter.img_15.childImageSharp.fluid} />
      
       

     

    </section> ))}
    </div>
</section>
  
<Footer />
<ScrollApp />

  </>

)}

export const query = graphql`
query CKCharacters {
 allMarkdownRemark (filter: {frontmatter: {id: {eq: "3"}}}) {
    nodes {
      frontmatter {
        title
        author
        date(formatString: "MMMM Do, YYYY")
        role
        stack
        tools
        img_1 {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        img_2 {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        img_3 {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        img_4 {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        img_5 {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        img_6 {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        img_7 {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        img_8 {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        img_9 {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        img_10 {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        img_11 {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        img_12 {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        img_13 {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        img_14 {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        img_15 {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
}
`  
