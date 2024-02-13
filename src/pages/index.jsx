import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout/Layout"

const IndexPage = () => {



  return (
    <div>
      <h1>MDX Example</h1>
      <p className={'text-red-500'}>Overview of MDX pages:</p>
      <ul>
        <li>
          <Link to="/chart-info/">
            Page created from src/pages/chart-info. It shows how to use React
            components from npm in MDX and how to use frontmatter in MDX directly
          </Link>
        </li>
        <li>
          <Link to="/blog-1/">
            Programmatically created page that doesn't use __contentFilePath and
            is only wrapped by src/components/layout.jsx
          </Link>
        </li>
        <li>
          <Link to="/blog-2/">
            Programmatically created page that does use __contentFilePath and is
            wrapped by src/components/layout.jsx and src/templates/posts.jsx. You
            see the difference to the page above because there is an h1 with the
            title
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default IndexPage

export const Head = () => <title>Index Page</title>
