const path = require("path")
const projectDetails = require("./content/data/projects.json")

exports.createPages = async ({ actions }) => {
  const { createPage } = actions;

  // Access the projects object from your JSON structure
  Object.keys(projectDetails.projects).forEach((slug) => {
    createPage({
      path: `/project/${slug}`,
      component: path.resolve("./src/templates/project.js"),
      context: { 
        slug,
        // You can also pass the entire project data if needed
        projectData: projectDetails.projects[slug]
      },
    });
  });
};

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === "MarkdownRemark") {
    const slug = path.basename(node.fileAbsolutePath, ".md")
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
    }
    type Frontmatter {
      source: [String!]!
    }
  `
  createTypes(typeDefs)
}
