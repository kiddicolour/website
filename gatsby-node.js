const path = require('path');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  });
};

/* exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type StrapiGlobalDefaultSeo {
      keywords: String
    }
    type StrapiFeature implements Node {
      description: String
    }
  `
  createTypes(typeDefs)
} */

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(
    `
      {
        drawings: allStrapiDrawing {
          edges {
            node {
              strapiId
            }
          }
        }
        ages: allStrapiAge {
          edges {
            node {
              strapiId
              name
            }
          }
        }
        themes: allStrapiTheme {
          edges {
            node {
              strapiId
              name
              strapiChildren {
                name
                id
              }
            }
          }
        }
        types: allStrapiType {
          edges {
            node {
              strapiId
              name
              strapiChildren {
                name
                id
              }
            }
          }
        }
        tags: allStrapiTag {
          edges {
            node {
              strapiId
              name
            }
          }
        }
        downloads: allStrapiDownload {
          edges {
            node {
              strapiId
              title
            }
          }
        }
        featured: allStrapiFeatured {
          edges {
            node {
              strapiId
              title
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create drawing pages.
  const drawings = result.data.drawings.edges
  drawings.forEach((drawing, index) => {
    createPage({
      path: `/coloring-page/${drawing.node.strapiId}`,
      component: require.resolve("./src/templates/drawing.js"),
      context: {
        id: drawing.node.strapiId,
      },
    })
  })

  // Create age pages.
  const ages = result.data.ages.edges
  ages.forEach((age, index) => {
    createPage({
      path: `/leeftijd/${age.node.name.replace(/ /g, "-").toLowerCase()}`,
      component: require.resolve("./src/templates/age.js"),
      context: {
        id: age.node.strapiId,
      },
    })
  })

  // Create theme pages.
  const themes = result.data.themes.edges
  themes.forEach((theme, index) => {
    createPage({
      path: `/thema/${theme.node.name.replace(/ /g, "-").toLowerCase()}`,
      component: require.resolve("./src/templates/theme.js"),
      context: {
        id: theme.node.strapiId,
      },
    })
    theme.node.strapiChildren.forEach((subtheme, index) => {
      createPage({
        path: `/thema/${theme.node.name.replace(/ /g, "-").toLowerCase()}/${subtheme.name.replace(/ /g, "-").toLowerCase()}`,
        component: require.resolve("./src/templates/theme.js"),
        context: {
          id: subtheme.id,
        },
      })
    })
  })

  // Create type pages.
  const types = result.data.types.edges
  types.forEach((type, index) => {
    createPage({
      path: `/type/${type.node.name.replace(/ /g, "-").toLowerCase()}`,
      component: require.resolve("./src/templates/type.js"),
      context: {
        id: type.node.strapiId,
      },
    })
    type.node.strapiChildren.forEach((subtype, index) => {
      createPage({
        path: `/type/${type.node.name.replace(/ /g, "-").toLowerCase()}/${subtype.name.replace(/ /g, "-").toLowerCase()}`,
        component: require.resolve("./src/templates/type.js"),
        context: {
          id: subtype.id,
        }
      })
    })
  })

  // Create download pages.
  const downloads = result.data.downloads.edges
  downloads.forEach((download, index) => {
    createPage({
      path: `/download/${download.node.strapiId}`,
      component: require.resolve("./src/templates/download.js"),
      context: {
        id: download.node.strapiId,
      },
    })
  })
}
