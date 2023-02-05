import * as React from 'react'
import Layout from '../components/Layout'
import { indexImage } from "../staticContent"

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page" sideImage={indexImage}>
     <h2>Some really great things are on the way</h2>
    </Layout>
  )
}

export default IndexPage