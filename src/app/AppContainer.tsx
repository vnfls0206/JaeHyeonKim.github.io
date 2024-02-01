import React from "react"
import loadable from "@loadable/component"
import Loader from "../components/layout/Loader"

const TailwindContainer = loadable(() => import('./TailwindContainer'), {fallback: <Loader/>});

export interface IAppContainerProps {
  children?: React.ReactNode,
}

const AppContainer = (
  {
    children
  }: IAppContainerProps
) => {

  return (
    <TailwindContainer>
      {children}
    </TailwindContainer>
  )
}

export default AppContainer