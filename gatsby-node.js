const path = require('path');
const { get } = require('request')
const { promisify } = require("util")
const getAsync = promisify(get)

const config = require('platformsh-config').config()

let backend_route = ''
if (config.isValidPlatform()) {
  require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
  })
  backend_route = `http://${config.credentials('strapi')['host']}`
} else {
  require('dotenv').config()
  backend_route = process.env.API_URL
}


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

  // fetch available languages from Strapi
  // requires the i18n/locales endpoint to be publicly accessible

  let languages

  const { statusCode, body } = await getAsync(`${backend_route}/i18n/locales`)

  if (statusCode !== 200) {
    langauages = ['nl']
  }
  languages = JSON.parse(body).map(lang => ({ label: lang.name, value: lang.code, default: lang.isDefault }))

  const result = await graphql(
    `
      {
        global: strapiGlobal {
          title
          description
          seo {
            meta {
              title
              description
              keywords {
                name
              }
            }
            shareImage {
              image {
                publicURL
              }
            }
          }
        }
        drawings: allStrapiDrawing {
          edges {
            node {
              strapiId
              slug
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

  try {

    const { global, drawings, ages, themes, types, downloads } = result.data

    // Create drawing pages.
    drawings.edges.forEach((drawing, index) => {
      createPage({
        path: `/kleurprent-kleurplaat/${drawing.node.slug}`,
        component: require.resolve("./src/templates/drawing/drawing.jsx"),
        context: {
          id: drawing.node.strapiId,
        },
      })
    })

    // Create age pages.
    ages.edges.forEach((age, index) => {
      createPage({
        path: `/leeftijd/${age.node.name.replace(/ /g, "-").toLowerCase()}`,
        component: require.resolve("./src/templates/age.js"),
        context: {
          id: age.node.strapiId,
        },
      })
    })

    // Create theme pages.
    themes.edges.forEach((theme, index) => {
      createPage({
        path: `/thema/${theme.node.name.replace(/ /g, "-").toLowerCase()}`,
        component: require.resolve("./src/templates/theme.js"),
        context: {
          id: theme.node.strapiId,
        },
      })
      // theme.node.strapiChildren.forEach((subtheme, index) => {
      //   createPage({
      //     path: `/thema/${theme.node.name.replace(/ /g, "-").toLowerCase()}/${subtheme.name.replace(/ /g, "-").toLowerCase()}`,
      //     component: require.resolve("./src/templates/theme.js"),
      //     context: {
      //       id: subtheme.id,
      //     },
      //   })
      // })
    })

    // Create type pages.
    types.edges.forEach((type, index) => {
      createPage({
        path: `/type/${type.node.name.replace(/ /g, "-").toLowerCase()}`,
        component: require.resolve("./src/templates/type.js"),
        context: {
          id: type.node.strapiId,
        },
      })
      // type.node.strapiChildren.forEach((subtype, index) => {
      //   createPage({
      //     path: `/type/${type.node.name.replace(/ /g, "-").toLowerCase()}/${subtype.name.replace(/ /g, "-").toLowerCase()}`,
      //     component: require.resolve("./src/templates/type.js"),
      //     context: {
      //       id: subtype.id,
      //     }
      //   })
      // })
    })

    // Create download pages.
    downloads.edges.forEach((download, index) => {
      createPage({
        path: `/download/${download.node.strapiId}`,
        component: require.resolve("./src/templates/download.js"),
        context: {
          id: download.node.strapiId,
        },
      })
    })
  } catch (e) {
    console.error(`Gatsby SSR error: ${e}`)
  }
}
