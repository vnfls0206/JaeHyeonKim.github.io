import React, { useMemo } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Header } from "./header"


export const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  const result = useStaticQuery(graphql`
    query MyQuery {
      allMdx {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)

  const linkArray = useMemo(() => {
    return result.allMdx.edges.map(value => value.node.frontmatter.slug)

  }, [result])



  return (
    <div>
      <Header siteTitle={'김재현 개발자 블로그'} />
      <div
        style={{
          margin: `0 auto`,
        }}
      >
        <div className={'flex flex-col gap-y-2'}>
          {
            linkArray.map(value =>
              <Link key={value} to={value}>
                {value}
              </Link>
            )
          }
        </div>


        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </div>
  )
}
