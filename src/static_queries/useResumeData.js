import { graphql, useStaticQuery } from "gatsby"

export default function useSiteMetadata() {
  const data = useStaticQuery(graphql`
    query getResumeData {
      site {
        siteMetadata {
          infoData {
            contact {
              email
              github
            }
            title
            author
            introduction
            skill {
              one
              two 
              three
              four 
              five 
              six
              seven
              eight
              nine
              ten
              eleven
              twelve
              thirteen
              fourteen
              fifteen
              sixteen
              seventeen
            }
            education {
            educationOne {
                  school
                  location
                  degree
                  year
                }
            educationTwo {
                  school
                  location
                  degree
                  year
                }
              }
            employer {
            jobOne {
                title
                location
                position
                date
                descriptionOne
                descriptionTwo
                descriptionThree
                descriptionFour
                descriptionFive
              }
            }
            certification {
            certificationOne {
                title
                completion
              }
            certificationTwo {
                title
                completion
              }
            certificationThree {
                title
                completion
              }
            }
            toolbox {
                one
                two 
                three
                four 
                five 
                six
                seven
                eight
                nine
                ten
                eleven
                twelve
                thirteen
                fourteen
                fifteen
                sixteen
            }
            hobby {
                one
                two 
                three
                four 
                five
                six 
            }
 
          }
        }
      }
    }
  `)
  return data.site.siteMetadata
}