import * as React from 'react'
import Layout from '../components/Layout'
import { aboutImage } from "../staticContent"

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me" sideImage={ aboutImage ? aboutImage : '' }>      
      <p>Introducing Wavehounds, the greatest illustration and web development team in the known universe.</p>

      <p>First off, let's talk illustration. Our artistic abilities are so impressive, that when Michelangelo saw one of our pieces, he said "I'm not sure if I should be impressed or terrified." But let's be real, he was probably just intimidated because he knew he couldn't compete.</p>

      <p>As for web development, we're like the Tony Stark of coding. Our websites are not only visually stunning, but they're also faster than a cheetah on a sugar rush. We're so good at it, that when Mark Zuckerberg saw one of our sites, he said "I wish I had thought of that." But let's be real, he's just jealous because we're way better at it than he is.</p>

      <p>But it's not just our skills that make us great, it's also our personalities. We're the life of the party, and we always know how to make a good time even better. We're like the Dos Equis man, but instead of being the most interesting man in the world, we're the most talented.</p>

      <p>So if you're in need of some top-notch illustration or web development, look no further than the Wavehounds. We'll blow your mind, and probably your socks off too.</p>

      <p>intro written by <a href="https://openai.com/blog/chatgpt/" target={'_blank'} rel="noreferrer"><span>chatgpt</span></a></p>

    </Layout>
  )
}

export default AboutPage