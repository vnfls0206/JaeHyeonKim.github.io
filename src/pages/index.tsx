import React, { useMemo, useState } from "react"

import { Tab, Tabs } from "@mui/material"
import { graphql, useStaticQuery } from "gatsby"
import { IMdxQuery } from "components/layout/Layout"
import PostCard from "@/shared/components/post/PostCard"
import PostTabsOption from "@/shared/components/ui/atom/props/PostTabsOption"
import TabIcon, { PostIconType } from "@/shared/components/ui/atom/TabIcon"
import PostTabOption from "@/shared/components/ui/atom/props/PostTabOption"

const IndexPage = () => {

    const [tab, setTab] = useState(PostIconType.All)
    //            filter: { frontmatter: {category: {eq: "React" } } }
    const NO_IMAGE_STR = "/image/no-image.png";


    const query: IMdxQuery = useStaticQuery(graphql`
        query MyQuery {
            allMdx(
            sort: { frontmatter: { date: DESC } }
            ) {
              edges {
                node {
                  frontmatter {
                    title
                    slug
                    date(formatString: "YYYY.MM.DD")
                    category
                    tag
                    image
                  }
                }
              }
              group(field: { frontmatter: { category: SELECT } }) {
                totalCount
                fieldValue
              }
              totalCount
            }
          }
    `)

    const linkArray = useMemo(() => {
        return query.allMdx.edges.map(value => ({
            list: value.node.frontmatter,
            menuName: value.node.frontmatter.category || "",
            image: value.node.frontmatter.image

        }))

    }, [query])


    const onTabChange = (e: React.SyntheticEvent, newValue: string) => {
        setTab(newValue)
    }

    const tabArray = [
        {
            fieldValue: "All",
            totalCount: `${query.allMdx.totalCount}`
        },
        ...query.allMdx.group
    ]

    const tabFilter = (category: string) => {
        if (tab === PostIconType.All) {
            return true
        } else if (tab === category) {
            return true
        }

        return false
    }


    return (
        <div>
            <Tabs
                value={tab}
                onChange={onTabChange}
                {...PostTabsOption}
            >
                {tabArray.map((item) => <Tab {...PostTabOption} key={item.fieldValue} value={item.fieldValue} label={item.fieldValue}
                                             icon={<TabIcon iconType={item.fieldValue}/>} />)}
            </Tabs>
            <div className={"flex flex-wrap w-full p-2 gap-3"}>
                {
                    linkArray.filter(value => tabFilter(value.menuName)).map(value =>
                        <PostCard
                            title={value.list.title}
                            link={value.list.slug}
                            image={value.list.image || NO_IMAGE_STR}
                        />
                    )
                }
            </div>
        </div>
    )
}

export default IndexPage

export const Head = () => <title>Index Page</title>
