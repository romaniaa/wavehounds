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
  {
    resolve: "gatsby-source-filesystem",
    options: {
      name: `work`,
      path: `${__dirname}/work`,
    }
  },
  ],
};
