import { useStaticQuery, graphql } from "gatsby"

const useSiteMetadata = () => {


  const data = useStaticQuery(graphql`
    query ($title: String) {
     allMdx(filter: {frontmatter: {title: {eq: $title}}}) {
    nodes {
      frontmatter {
        title
      }
    }
  }
  }
  `)


  // MDX 데이터에서 원하는 정보를 반환합니다.
  return data
}

export default useSiteMetadata