/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const arcPage = path.resolve('src/components/arcPage.js');

  return graphql(`{
      allJavascriptFrontmatter {
        edges {
          node {
            frontmatter {
              error
              path
            }
          }
        }
      }
    }`)
    .then((res) => {
      if (res.errors) {
        return Promise.reject(res.errors);
      }
      const hash = {};
      res.data.allJavascriptFrontmatter.edges.forEach(({ node }) => {
        if (!hash[node.frontmatter.path]) {
          hash[node.frontmatter.path] = true;
          createPage({
            path: node.frontmatter.path,
            component: arcPage,
          });
        }
      });
    });
};
