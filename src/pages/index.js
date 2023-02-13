import * as React from 'react'
import Layout from '../components/Layout'
import { indexImage } from "../staticContent"
import InstaFeeds from '../components/InstaFeeds'


const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page" sideImage={indexImage}>
      <h2>Illustration & Branding | <a href={'https://overhaulmedia.com/about'} target={"_blank"}>Cool Websites</a>
      <a href={'https://www.google.com/search?q=laverne%27s+pies+tires+fixed+also&rlz=1C5CHFA_enCA936CA938&oq=laverns+pies&aqs=chrome.1.69i57j0i10i512l4j0i22i30j0i390l4.6409j1j7&sourceid=chrome&ie=UTF-8'}> also</a></h2>
      <p>Wavehounds is primarily the artwork of Roman Hermens. I focus on trying to give my clients/friends clever and relatable assets that express whatever they're looking to express. I also like dogs, and surfing, and think the idea of a wave-sniffing dog is pretty funny.</p>
     <InstaFeeds/>
    </Layout>
  )
}

export default IndexPage