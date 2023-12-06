/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `personal_portfolio`,
    siteUrl: `https://www.grace-liu.netlify.app`
  },
  plugins: ["gatsby-plugin-postcss", "gatsby-plugin-image",
  "gatsby-plugin-sharp", 
      {
        resolve: `gatsby-omni-font-loader`,
        options: {
          enableListener: true,
          preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
          web: [
            {
              name: `Open Sans`,
              file: `https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap`,
            }
            ,
            {
              name: `Esteban`,
              file: `https://fonts.googleapis.com/css2?family=Esteban&display=swap`
            },
            {
              name:`Cormorant Garamond`,
              file:`https://fonts.googleapis.com/css2?family=Cormorant+Garamond&family=Esteban&display=swap`
            }
          ],
        },
      },
]
};