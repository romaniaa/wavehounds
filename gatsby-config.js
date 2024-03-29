require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
module.exports = {
  siteMetadata: {
    siteUrl: "https://www.wavehounds.ca",
    title: "WaveHounds",
  },
  plugins: [
  {
    resolve: `gatsby-source-instagram-all`,
    options: { access_token: process.env.GATSBY_INS_TOKEN }
  },
  `gatsby-plugin-sass`,
  `gatsby-plugin-image`,
  `gatsby-plugin-sharp`,
  `gatsby-transformer-sharp`,
  `gatsby-plugin-mdx`,
  `gatsby-plugin-no-index`,
  ],
};
