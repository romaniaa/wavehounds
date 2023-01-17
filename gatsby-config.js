require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "WaveHounds",
  },
  plugins: [
  `gatsby-plugin-sass`,
  `gatsby-plugin-image`,
  `gatsby-plugin-sharp`,
  `gatsby-transformer-sharp`,
  `gatsby-plugin-mdx`,
  `gatsby-plugin-no-index`,
  {
    resolve: `gatsby-source-instagram-all`,
    options: {
      access_token: process.env.GATSBY_INS_TOKEN
    }
  },
  ],
};
