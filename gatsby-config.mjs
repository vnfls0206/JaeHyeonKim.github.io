import remarkGfm from "remark-gfm"
import { dirname } from "path"
import { fileURLToPath } from "url"

const __dirname = dirname(fileURLToPath(import.meta.url))

/**
 * @type {import('gatsby').GatsbyConfig}
 */
const config = {
  pathPrefix: '/gitBlog', // GitHub Pages의 레포지토리 이름에 맞게 설정

  siteMetadata: {
    siteURL: 'https://vnfls0206.github.io',
    // pathPrefix: "/gitBlog", // GitHub Pages의 레포지토리 이름에 맞게 설정
    title: `Using MDX example`,
    description: `Kick off your next, great Gatsby project with MDX.`,
    author: `@pragmaticpat`,
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "src/images",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `@`,
        path: `${__dirname}/src/`, // 절대경로 설정
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/content/posts/`,
      },
    },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-use-query-params`,

    // {
    //   resolve: `gatsby-plugin-postcss`,
    //   options: {
    //     postCssPlugins: [require(`postcss-preset-env`)({ stage: 0 })],
    //   },
    // },
    'gatsby-plugin-image',
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`],
        mdxOptions: {
          remarkPlugins: [remarkGfm],
        },
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 690,
            },
          },
        ],
      },
    },
  ],
}

export default config
