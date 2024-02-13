import React, { useMemo } from "react"
import { useStaticQuery, graphql, Link, navigate } from "gatsby"

import { Header } from "../header"


import { Box, MenuItem, styled } from "@mui/material"
import useSiteMetadata from "../../hook/useGetSiteMetaData"
import MenuLayout, { IMenuItem } from "../layout/menu/MenuLayout"

// import MenuLayout from "./menu/MenuLayout"

export interface IMdxData {
  title: string,
  slug: string,
  date: string,
  categories?: Array<string>,
  tag?: Array<string>
}

export interface IMdxQuery {
  allMdx: {
    edges: Array<{
      node: {
        frontmatter: IMdxData
      }
    }>,
    group: Array<{
      totalCount: number,
      filedValue: string
    }>
  }
}

export interface IPageData {
  id?: string,
  frontmatter?: IMdxData
}
export interface ILayout {
  children?: React.ReactNode;

}

const Layout = ({ children }: any) => {

  const query: IMdxQuery = useStaticQuery(graphql`
  query CategoryList {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      edges {
        node {
          frontmatter {
            title
            slug
            date(formatString: "YYYY.MM.DD")
            categories
            tag
          }
        }
      }
      group(field: { frontmatter: { categories: SELECT } }) {
        totalCount
        fieldValue
      }
      totalCount
    }
  }
`)



  // const pageData: IPageData = children.props.pageContext


  const mdx = useSiteMetadata()

  // console.log(query.allMdx.edges.at(0)?.node.frontmatter?.categories)
  //
  const linkArray = useMemo(() => {
    return query.allMdx.edges.map(value => ({
      list: value.node.frontmatter,
      menuName: value.node.frontmatter.categories?.at(-1) || ''

    }))

  }, [query])

  const onNav = (link: string) => {
    navigate(`${link}`, {})
  }

  console.log(query)

  return (
    <div className={'flex'}>

      <MenuLayout
        // currentPage={pageData}
        menu={query.allMdx.group}
        // menuOnClickHandler={}
      />
      <div
        className={'flex pt-[50px] flex-col w-full'}
        style={{
          margin: `0 auto`
        }}
      >
        {/*<DrawerHeader className={'min-h-[70px]'}/>*/}

        <Box className={'bg-[#f0f0f0]'} component="main" sx={{width: 1, height: '100vh', position: 'relative', overflow:'auto'}}>

          <main>{children}</main>

          <div className={"flex flex-col gap-y-2"}>
            {
              linkArray.map(value =>
                <button key={value.list.slug} onClick={onNav.bind(this, value.list.slug)}>
                  {value.list.slug}
                </button>
              )
            }
          </div>
        </Box>

        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </div>
  )
}

export default Layout