import * as React from 'react'
import Layout from '../components/Layout'
import { workImage } from "../staticContent"
import InstaFeeds from '../components/InstaFeeds'

const WorkPage = () => {
  return (
    <Layout pageTitle="My Work Posts" sideImage={workImage ? workImage : ''}>
      <p>A lot of important work happens at Wavehounds, below is some of the other stuff. </p>
      <div>
        <InstaFeeds/>
      </div>
      <p>If you're interested in working with Wavehounds - reach out.</p>
    </Layout>
  )
}

export default WorkPage