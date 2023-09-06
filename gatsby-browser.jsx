import React from "react"
import { Layout } from "./src/components/layout"
import './src/style/global.css'

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}
