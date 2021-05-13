const config = require("platformsh-config").config();

var backend_route = "";
if (config.isValidPlatform()) {
  require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
  })
  backend_route = `http://${config.credentials("strapi")["host"]}`
} else {
  require("dotenv").config()
  backend_route = process.env.API_URL;
}


module.exports = {
  siteMetadata: {
    title: "kiddicolour",
    description: "thoughtfully designed colouring pages",
    author: "kiddicolour",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: backend_route,
        contentTypes: [
          // List of the Content Types you want to be able to request from Gatsby.
          "age",
          "tag",
          "theme",
          "type",
          "drawing",
          "download",
          "featured",
          "menu"
        ],
        singleTypes: ["global"],
        queryLimit: 1000,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "gatsby-starter-default",
        short_name: "starter",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
      },
    },
    "gatsby-plugin-offline",
  ],
}
