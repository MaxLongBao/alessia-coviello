import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = ({ location }) => {
  return (
    <Layout location={location}>
      
    </Layout>
  );
}

export const Head = () => <Seo title="Home" />

export default IndexPage
