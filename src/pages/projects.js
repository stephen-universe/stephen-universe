import React from "react"
import Layout from "../components/Layout"
import { graphql, Link} from "gatsby";
import Img from 'gatsby-image';




export default function Projects({ data }) {
console.log(data)

const projectOne = data.projectOneData.nodes
const projectTwo = data.projectTwoData.nodes
const projectThree = data.projectThreeData.nodes
const projectFour = data.projectFourData.nodes
const projectFive = data.projectFiveData.nodes
const projectSix = data.projectSixData.nodes
const projectSeven = data.projectSevenData.nodes
const projectEight = data.projectEightData.nodes
const projectNine = data.projectNineData.nodes






return ( 
<section className="body-bg">
<Layout>



<>
 
{projectOne.map( project => (    
    <div className="tile is-ancestor">
        <div className="tile is-12 is-parent">
            <div className="tile is-child box">
                
           
                <p className="title">{project.frontmatter.title}</p>
                  <Link to={"/project/" + project.fields.slug}> 

              <div className="relative">
                  <div className="test">
                    <Img fluid={project.frontmatter.pixel.childImageSharp.fluid} /> 
                  </div>
                  <div className="test-hover">
                  <Img fluid={project.frontmatter.thumb.childImageSharp.fluid} />
                  </div>
              </div>

                  </Link>
                <div className="column is-1 is-pulled-right">
                    <Link to={"/project/" + project.fields.slug}>
                          <div className="buttons  has-addons is-right">
                              <button className="button">View</button>
                                    </div>
                                </Link>
                </div>
            </div>
        </div>
        </div>
         ))}
        
               
             
        
            <div className="tile is-ancestor">

        {projectTwo.map( project => (  

                <div className="tile is-4">
                    <div className="tile">
                        <div className="tile is-parent">
                            <div className="tile is-child box">
                                <p className="title">{project.frontmatter.title}</p>
                                <Link to={"/project/" + project.fields.slug}> 
                                  <div className="relative">
                                    <div className="test">
                                      <Img fluid={project.frontmatter.pixel.childImageSharp.fluid} /> 
                                    </div>
                                    <div className="test-hover">
                                      <Img fluid={project.frontmatter.thumb.childImageSharp.fluid} />
                                    </div>
                                  </div>
                                </Link>
                                
                                <div className="column is-1 is-pulled-right">
                                <Link to={"/project/" + project.fields.slug}>
                                    <div className="buttons  has-addons is-right">
                                      <button className="button">View</button>
                                    </div>
                                </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}


    {projectThree.map( project => (       

                <div className="tile is-8">
                    <div className="tile">
                        <div className="tile is-parent">
                            <div className="tile is-child box">
                                <p className="title">{project.frontmatter.title}</p>
                                <Link to={"/project/" + project.fields.slug}> 
                                <div className="relative">
                                    <div className="test">
                                      <Img fluid={project.frontmatter.pixel.childImageSharp.fluid} /> 
                                    </div>
                                    <div className="test-hover">
                                      <Img fluid={project.frontmatter.thumb.childImageSharp.fluid} />
                                    </div>
                                  </div>
                                </Link>
                                
                                 <div className="column is-1 is-pulled-right">
                                 <Link to={"/project/" + project.fields.slug}>
                                    <div className="buttons  has-addons is-right">
                                      <button className="button">View</button>
                                    </div>
                                </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            </div>



 
        
        <div className="tile is-ancestor">
            
            {projectFour.map( project => (  
                <div className="tile is-9">
                    <div className="tile">
                        <div className="tile is-parent">
                            <div className="tile is-child box">
                                <p className="title">{project.frontmatter.title}</p>
                                <Link to={"/project/" + project.fields.slug}> 
                                <div className="relative">
                                    <div className="test">
                                      <Img fluid={project.frontmatter.pixel.childImageSharp.fluid} /> 
                                    </div>
                                    <div className="test-hover">
                                      <Img fluid={project.frontmatter.thumb.childImageSharp.fluid} />
                                    </div>
                                  </div>
                                </Link>
                                
                                 <div className="column is-1 is-pulled-right">
                                 <Link to={"/project/" + project.fields.slug}>
                                    <div className="buttons  has-addons is-right">
                                      <button className="button">View</button>
                                    </div>
                                </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        ))}


        {projectFive.map( project => (  

                <div className="tile is-3">
                    <div className="tile">
                        <div className="tile is-parent">
                            <div className="tile is-child box">
                                <p className="title">{project.frontmatter.title}</p>
                                <Link to={"/project/" + project.fields.slug}> 
                                <div className="relative">
                                    <div className="test">
                                      <Img fluid={project.frontmatter.pixel.childImageSharp.fluid} /> 
                                    </div>
                                    <div className="test-hover">
                                      <Img fluid={project.frontmatter.thumb.childImageSharp.fluid} />
                                    </div>
                                  </div>
                                </Link>
                                
                                 <div className="column is-1 is-pulled-right">
                                 <Link to={"/project/" + project.fields.slug}>
                                    <div className="buttons  has-addons is-right">
                                      <button className="button">View</button>
                                    </div>
                                </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        ))}
            </div>
        
        
            <div className="tile is-ancestor">
                <div className="tile is-8 is-vertical">
                    <div className="tile">

                    {projectSix.map( project => (  

                        <div className="tile is-parent">
                            <div className="tile is-child box">
                                <p className="title">{project.frontmatter.title}</p>
                                <Link to={"/project/" + project.fields.slug}> 
                                <div className="relative">
                                    <div className="test">
                                      <Img fluid={project.frontmatter.pixel.childImageSharp.fluid} /> 
                                    </div>
                                    <div className="test-hover">
                                      <Img fluid={project.frontmatter.thumb.childImageSharp.fluid} />
                                    </div>
                                  </div>
                                </Link>
                                
                                 <div className="column is-1 is-pulled-right">
                                 <Link to={"/project/" + project.fields.slug}>
                                    <div className="buttons  has-addons is-right">
                                      <button className="button">View</button>
                                    </div>
                                </Link>
                                </div>
                            </div>
                        </div>
                    ))}

                {projectSeven.map( project => (  

                        <div className="tile is-parent">
                            <div className="tile is-child box">
                                <p className="title">{project.frontmatter.title}</p>
                                <Link to={"/project/" + project.fields.slug}> 
                                <div className="relative">
                                    <div className="test">
                                      <Img fluid={project.frontmatter.pixel.childImageSharp.fluid} /> 
                                    </div>
                                    <div className="test-hover">
                                      <Img fluid={project.frontmatter.thumb.childImageSharp.fluid} />
                                    </div>
                                  </div>
                                </Link>
                                
                                 <div className="column is-1 is-pulled-right">
                                 <Link to={"/project/" + project.fields.slug}>
                                    <div className="buttons  has-addons is-right">
                                      <button className="button">View</button>
                                    </div>
                                </Link>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                
                    {projectEight.map( project => (  

                        <div className="tile is-parent">
                            <div className="tile is-child box">
                                <p className="title">{project.frontmatter.title}</p>
                                <Link to={"/project/" + project.fields.slug}> 
                                <div className="relative">
                                    <div className="test">
                                      <Img fluid={project.frontmatter.pixel.childImageSharp.fluid} /> 
                                    </div>
                                    <div className="test-hover">
                                      <Img fluid={project.frontmatter.thumb.childImageSharp.fluid} />
                                    </div>
                                  </div>
                                </Link>
                                
                                 <div className="column is-1 is-pulled-right">
                                 <Link to={"/project/" + project.fields.slug}>
                                    <div className="buttons  has-addons is-right">
                                      <button className="button">View</button>
                                    </div>
                                </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
        
                {projectNine.map( project => (  

                <div className="tile is-4 ">
                    <div className="tile">
                        <div className="tile is-parent">
                            <div className="tile is-child box">
                                <p className="title">{project.frontmatter.title}</p>
                                <Link to={"/project/" + project.fields.slug}> 
                                <div className="relative">
                                    <div className="test">
                                      <Img fluid={project.frontmatter.pixel.childImageSharp.fluid} /> 
                                    </div>
                                    <div className="test-hover">
                                      <Img fluid={project.frontmatter.thumb.childImageSharp.fluid} />
                                    </div>
                                  </div>
                                </Link>
                                
                                 <div className="column is-1 is-pulled-right">
                                 <Link to={"/project/" + project.fields.slug}>
                                    <div className="buttons  has-addons is-right">
                                      <button className="button">View</button>
                                    </div>
                                </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                ))}
            </div>

        <div className="padding-top-bottom"></div>    
     
  </>
 

   </Layout>
    </section>
)}

export const query = graphql`
query myQuery {
  projectOneData: allMarkdownRemark(filter: {frontmatter: {id: {eq: 1}}}) {
    nodes {
      frontmatter {
        title 
        thumb {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        pixel {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      fields {
        slug
      }
    }
  }
  projectTwoData: allMarkdownRemark(filter: {frontmatter: {id: {eq: 2}}}) {
    nodes {
      frontmatter {
        title 
        thumb {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        pixel {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      fields {
        slug
      }
    }
  }
  projectThreeData: allMarkdownRemark(filter: {frontmatter: {id: {eq: 3}}}) {
    nodes {
      frontmatter {
        title 
        thumb {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        pixel {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      fields {
        slug
      }
    }
  }
  projectFourData: allMarkdownRemark(filter: {frontmatter: {id: {eq: 4}}}) {
    nodes {
      frontmatter {
        title 
        thumb {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        pixel {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      fields {
        slug
      }
    }
  }
  projectFiveData: allMarkdownRemark(filter: {frontmatter: {id: {eq: 5}}}) {
    nodes {
      frontmatter {
        title 
        thumb {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        pixel {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      fields {
        slug
      }
    }
  }
  projectSixData: allMarkdownRemark(filter: {frontmatter: {id: {eq: 6}}}) {
    nodes {
      frontmatter {
        title 
        thumb {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        pixel {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      fields {
        slug
      }
    }
  }
  projectSevenData: allMarkdownRemark(filter: {frontmatter: {id: {eq: 7}}}) {
    nodes {
      frontmatter {
        title 
        thumb {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        pixel {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        pixel {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      fields {
        slug
      }
    }
  }
  projectEightData: allMarkdownRemark(filter: {frontmatter: {id: {eq: 8}}}) {
    nodes {
      frontmatter {
        title 
        thumb {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        pixel {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      fields {
        slug
      }
    }
  }
  projectNineData: allMarkdownRemark(filter: {frontmatter: {id: {eq: 9}}}) {
    nodes {
      frontmatter {
        title 
        thumb {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        pixel {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      fields {
        slug
      }
    }
  }
}
`  
