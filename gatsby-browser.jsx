import React from "react"
import Layout from "./src/components/layout/Layout"
import "./src/style/global.css"
import AppContainer from "./src/app/AppContainer"
import ImmerContainer from "./src/app/ImmerContainer"

export const wrapPageElement = ({ element, props }) => {
  return (
    <ImmerContainer>
      <AppContainer pageData={props}>
        <Layout>
          {element}
        </Layout>
      </AppContainer>
    </ImmerContainer>
  )
}
