import * as React from 'react'
import Layout from '../components/Layout'
import { aboutImage } from "../staticContent"

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me" sideImage={ aboutImage ? aboutImage : '' }>
      <p>About WaveHounds</p>
    </Layout>
  )
}

export default AboutPage