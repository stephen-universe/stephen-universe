import { graphql, useStaticQuery } from "gatsby"

export default function useProjectData() {
  const data = useStaticQuery(graphql`
  
 query getProjectData {
  projectOneData: allMarkdownRemark (filter: {frontmatter: {id: {eq: "1"}}}) {
    nodes {
        frontmatter {
        title 
        catSlug
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
  projectTwoData: allMarkdownRemark (filter: {frontmatter: {id: {eq: "2"}}}) {
    nodes {
        frontmatter {
        title 
        catSlug
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
  projectThreeData: allMarkdownRemark (filter: {frontmatter: {id: {eq: "3"}}}) {
    nodes {
        frontmatter {
        title 
        catSlug
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
  projectFourData: allMarkdownRemark (filter: {frontmatter: {id: {eq: "4"}}}) {
    nodes {
        frontmatter {
        title 
        catSlug
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
  projectFiveData: allMarkdownRemark (filter: {frontmatter: {id: {eq: "5"}}}) {
    nodes {
        frontmatter {
        title 
        catSlug
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
  projectSixData: allMarkdownRemark (filter: {frontmatter: {id: {eq: "6"}}}) {
    nodes {
        frontmatter {
        title 
        catSlug
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
  projectSevenData: allMarkdownRemark (filter: {frontmatter: {id: {eq: "7"}}}) {
    nodes {
        frontmatter {
        title 
        catSlug
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
  projectEightData: allMarkdownRemark (filter: {frontmatter: {id: {eq: "8"}}}) {
    nodes {
        frontmatter {
        title 
        catSlug
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
  projectNineData: allMarkdownRemark (filter: {frontmatter: {id: {eq: "9"}}}) {
    nodes {
        frontmatter {
        title 
        catSlug
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
}`)
      return data.projectOneData.nodes
      return data.projectTwoData.nodes
      return data.projectThreeData.nodes
      return data.projectFourData.nodes
      return data.projectFiveData.nodes
      return data.projectSixData.nodes
      return data.projectSevenData.nodes
      return data.projectEightData.nodes
      return data.projectNineData.nodes


    }
