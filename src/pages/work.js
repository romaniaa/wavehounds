import * as React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import { workImage } from "../staticContent"

const WorkPage = ({ data }) => {
  return (
    <Layout pageTitle="My Work Posts" sideImage={workImage ? workImage : ''}>
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