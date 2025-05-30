const path = require("path")


const projectDetails = require("./content/data/projects.json");

exports.createPages = async ({ actions }) => {
  const { createPage } = actions;

  Object.keys(projectDetails).forEach((slug) => {
    createPage({
      path: `/project/${slug}`,
      component: path.resolve("./src/templates/project.js"),
      context: { slug },
    });
  });
};


module.exports.onCreateNode = ({ node, actions }) => {
  // Transform the new node here and create a new node or
  // create a new node field.
  const { createNodeField } = actions
  if (node.internal.type === "MarkdownRemark") {
    const slug = path.basename(node.fileAbsolutePath, ".md")
    createNodeField({
      //same as node: node
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

