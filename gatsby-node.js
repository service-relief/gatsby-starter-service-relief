const slugify = require("limax")

// including this code in the theme wont run it on the airtable nodes
// is there something i'm forgetting about themes here?
// this should be in the theme instead of the starter...
exports.onCreateNode = function onCreateNode({ actions, getNode, node }) {
  if (node.internal.type === `Airtable` && node.data.Category) {
    const category = node.data.Category[0]
    actions.createNodeField({
      node,
      name: `slug`,
      value: slugify(category),
    })
  }
}
