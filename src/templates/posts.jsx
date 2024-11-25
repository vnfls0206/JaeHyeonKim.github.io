import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { components } from "../components/shortcodes"
import CodeBlock from "./components/CodeBlock"

const PostsTemplate = ({ data, children }) => {
  return (
    <div className={"flex flex-col items-center pt-5"}>
      <div className={"max-w-[960px] prose"}>
        <MDXProvider components={{
          ...components,
          pre: CodeBlock
        }}>
          {children}</MDXProvider>
        {/*<h1>{data.mdx.frontmatter.title}</h1>*/}
      </div>
    </div>
  )
}

export default PostsTemplate

export const Head = ({ data }) => <title>{data.mdx.frontmatter.title}</title>

export const query = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
      }
    }
  }
`
