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

       <section className="section is-medium">
        <div className="columns">
        <div className="column is-6">   <Img fluid={project.frontmatter.img_1.childImageSharp.fluid} /> </div>
         
          <div className="column is-6">   <Img fluid={project.frontmatter.img_2.childImageSharp.fluid} /> </div>
        </div>
      </section>


       <section className="section is-medium">
        <div className="columns">
          <div className="column is-6">   <Img fluid={project.frontmatter.img_3.childImageSharp.fluid} /> </div>
         
          <div className="column is-6">   <Img fluid={project.frontmatter.img_4.childImageSharp.fluid} /> </div>
        </div>
    </section>

       <section className="section is-medium">
           <div className="columns">
          <div className="column is-6">   <Img fluid={project.frontmatter.img_5.childImageSharp.fluid} /> </div>
         
          <div className="column is-6">   <Img fluid={project.frontmatter.img_6.childImageSharp.fluid} /> </div>
        </div>
    </section>

   <section className="section is-medium">
    <div className="columns">
           <div className="column is-6">   <Img fluid={project.frontmatter.img_7.childImageSharp.fluid} /> </div>
         
           <div className="column is-6">   <Img fluid={project.frontmatter.img_8.childImageSharp.fluid} /> </div>
        </div>
    </section>


   <section className="section is-medium">
    <div className="columns">
           <div className="column is-6">   <Img fluid={project.frontmatter.img_13.childImageSharp.fluid} /> </div>
         
           <div className="column is-6">   <Img fluid={project.frontmatter.img_14.childImageSharp.fluid} /> </div>
        </div>
    </section>

   <section className="section is-medium">
    <div className="columns">
           <div className="column is-6">   <Img fluid={project.frontmatter.img_15.childImageSharp.fluid} /> </div>
         
           <div className="column is-6">   <Img fluid={project.frontmatter.img_16.childImageSharp.fluid} /> </div>
        </div>
    </section>

   <section className="section is-medium">
    <div className="columns">
           <div className="column is-6">   <Img fluid={project.frontmatter.img17.childImageSharp.fluid} /> </div>
         
           <div className="column is-6">   <Img fluid={project.frontmatter.img18.childImageSharp.fluid} /> </div>
        </div>
    </section>

   <section className="section is-medium">
    <div className="columns">
           <div className="column is-6">   <Img fluid={project.frontmatter.img_19.childImageSharp.fluid} /> </div>
         
           <div className="column is-6">   <Img fluid={project.frontmatter.img_20.childImageSharp.fluid} /> </div>
        </div>
    </section>

   <section className="section is-medium">
    <div className="columns">
           <div className="column is-6">   <Img fluid={project.frontmatter.img_21.childImageSharp.fluid} /> </div>
         
           <div className="column is-6">   <Img fluid={project.frontmatter.img_22.childImageSharp.fluid} /> </div>
        </div>
    </section>

   <section className="section is-medium">
    <div className="columns">
           <div className="column is-6">   <Img fluid={project.frontmatter.img_23.childImageSharp.fluid} /> </div>
         
           <div className="column is-6">   <Img fluid={project.frontmatter.img_24.childImageSharp.fluid} /> </div>
        </div>
    </section>

   <section className="section is-medium">
    <div className="columns">
           <div className="column is-6">   <Img fluid={project.frontmatter.img_25.childImageSharp.fluid} /> </div>
         
           <div className="column is-6">   <Img fluid={project.frontmatter.img_26.childImageSharp.fluid} /> </div>
        </div>
    </section>

   <section className="section is-medium">
    <div className="columns">
           <div className="column is-6">   <Img fluid={project.frontmatter.img_27.childImageSharp.fluid} /> </div>
         
           <div className="column is-6">   <Img fluid={project.frontmatter.img_28.childImageSharp.fluid} /> </div>
        </div>
    </section>
        
   <section className="section is-medium">
    <div className="columns">
           <div className="column is-6">   <Img fluid={project.frontmatter.img_29.childImageSharp.fluid} /> </div>
         
           <div className="column is-6">   <Img fluid={project.frontmatter.img_30.childImageSharp.fluid} /> </div>
        </div>
    </section>

   <section className="section is-medium">
    <div className="columns">
           <div className="column is-6">   <Img fluid={project.frontmatter.img_31.childImageSharp.fluid} /> </div>
         
           <div className="column is-6">   <Img fluid={project.frontmatter.img_32.childImageSharp.fluid} /> </div>
        </div>
    </section>

   <section className="section is-medium">
    <div className="columns">
           <div className="column is-6">   <Img fluid={project.frontmatter.img_33.childImageSharp.fluid} /> </div>
         
           <div className="column is-6">   <Img fluid={project.frontmatter.img_34.childImageSharp.fluid} /> </div>
        </div>
    </section>

   <section className="section is-medium">
    <div className="columns">
           <div className="column is-6">   <Img fluid={project.frontmatter.img_35.childImageSharp.fluid} /> </div>
         
           <div className="column is-6">   <Img fluid={project.frontmatter.img_36.childImageSharp.fluid} /> </div>
        </div>
    </section>

   <section className="section is-medium">
    <div className="columns">
           <div className="column is-6">   <Img fluid={project.frontmatter.img_37.childImageSharp.fluid} /> </div>
         
           <div className="column is-6">   <Img fluid={project.frontmatter.img_38.childImageSharp.fluid} /> </div>
        </div>
    </section>

        
     

    </section> ))}
    </div>
</section>
  
<Footer />
<ScrollApp />

  </>

)}
  


//dynamic page query, must occur within each post context
//$slug is made available by context from createPages call in gatsby-node.js
export const query = graphql`
query logoFolio {
  allMarkdownRemark ( filter: {frontmatter: {id: {eq: "1"}}}) {
    nodes {
      frontmatter {
        title
        author
        date(formatString: "MMMM Do, YYYY")
        role
        stack
        tools
        highlights
        brief
        challenge
        company_goals
        pain_points
        solutions
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
        img_16 {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        img17 {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        img18 {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        img_19 {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        img_20 {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        img_21 {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        img_22 {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        img_23 {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        img_24 {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        img_25 {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        img_26 {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        img_27 {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        img_28 {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        img_29 {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        img_30 {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        img_31 {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        img_32 {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        img_33 {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        img_34 {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        img_35 {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        img_36 {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        img_37 {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        img_38 {
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
