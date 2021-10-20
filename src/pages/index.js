import * as React from 'react'
import Layout from '../components/Layout'

const IndexPage = ({children}) => {
  return (
    <Layout pageTitle="Home Page">
      {children}
      <p>hi</p>
    </Layout>
  )
}

export default IndexPage