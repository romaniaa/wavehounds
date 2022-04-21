import * as React from 'react'
import Layout from '../components/Layout'
import { indexImage } from "../staticContent"

// import Insta from '../components/Instagram'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page" sideImage={indexImage}>
     <h2>Some really great things are on the way</h2>
    {/* <Insta>

    </Insta> */}
    </Layout>
  )
}

export default IndexPage