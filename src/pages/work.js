import * as React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'

const WorkPage = ({ data }) => {
  return (
    <Layout pageTitle="My Work Posts">
      <p>My cool posts will go in here</p>
      {
        data.allFile.nodes.map(node => (
          <div key={node.name}>
            {node.name}
          </div>
        ))
      }
    </Layout>
  )
}

export const query = graphql`
query MyQuery {
    allFile {
      nodes {
        name
      }
    }
  }
`

export default WorkPage