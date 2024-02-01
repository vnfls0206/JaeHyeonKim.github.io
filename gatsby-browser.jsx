import React from "react"
import  Layout  from "./src/components/layout/Layout"
import './src/style/global.css'
import AppContainer from "./src/app/AppContainer"

export const wrapPageElement = ({ element, props }) => {
  return <AppContainer {...props}>{element}</AppContainer>
}
