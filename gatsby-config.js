require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

const city = process.env.CITY || `TODO City`
const state = process.env.STATE || `TODO State`

module.exports = {
  siteMetadata: {
    title: `${city} Service Relief`,
    description: `A list of local service-industry businesses and their fundraisers to help them get through the local shutdowns.`,
    author: `@boborchard`,
    state,
    city,
    airtableEmbed: process.env.AIRTABLE_EMBED_ID // link to documentation
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.AIRTABLE_API_KEY,
        tables: [
          {
            baseId: process.env.AIRTABLE_BASE_ID || `appKKJX2Tz4Vq6hKl`, // TODO: make fake,
            tableName: process.env.AIRTABLE_TABLE_NAME || `tbl0agqWsFRYLgAnV` // TODO: make fake,
          }
        ]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/heart.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Bungee`
          }
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
