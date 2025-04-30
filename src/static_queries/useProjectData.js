import { graphql, useStaticQuery } from "gatsby"

export default function useProjectData() {
  const data = useStaticQuery(graphql`
    query getProjectData {
      allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
        edges {
          node {
            id
            frontmatter {
              date(formatString: "MMMM Do, YYYY")
              author
              title
            }
            excerpt(pruneLength: 200)
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  return data.allMarkdownRemark.edges
}