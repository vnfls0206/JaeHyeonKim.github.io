import React, { createContext } from "react"
import loadable from "@loadable/component"
import Loader from "../components/layout/Loader"
import { QueryParamProvider } from "use-query-params"
import { ReachAdapter } from 'use-query-params/adapters/reach';


const TailwindContainer = loadable(() => import("./TailwindContainer"), { fallback: <Loader /> })

export const pageContext = createContext<IPageContext>({} as IPageContext)

export interface IPageContext {
  title: string,
  slug: string,
  date: string,
  category?: string,
  tag?: Array<string>
}

export interface IAppContainerProps {
  children?: React.ReactNode,
  pageData: {

    pageContext: {
      frontmatter: IPageContext,
      id: string
    }

  }
}

const AppContainer = (
  {
    children,
    pageData
  }: IAppContainerProps
) => {

  console.log(pageData.pageContext);

  return (
    <pageContext.Provider value={pageData.pageContext.frontmatter}>
      <TailwindContainer>
        <QueryParamProvider adapter={ReachAdapter}>
        {children}
        </QueryParamProvider>
      </TailwindContainer>
    </pageContext.Provider>
  )
}

export default AppContainer