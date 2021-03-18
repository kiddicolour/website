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
            }
          }
        }
        themes: allStrapiTheme {
          edges {
            node {
              strapiId
            }
          }
        }
        types: allStrapiType {
          edges {
            node {
              strapiId
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
      path: `/age/${age.node.strapiId}`,
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
      path: `/theme/${theme.node.strapiId}`,
      component: require.resolve("./src/templates/theme.js"),
      context: {
        id: theme.node.strapiId,
      },
    })
  })

  // Create type pages.
  const types = result.data.types.edges
  types.forEach((type, index) => {
    createPage({
      path: `/type/${type.node.strapiId}`,
      component: require.resolve("./src/templates/type.js"),
      context: {
        id: type.node.strapiId,
      },
    })
  })
}
