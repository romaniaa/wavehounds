import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import _get from "lodash/get";

const InstaFeeds = () => {

    const data = useStaticQuery(graphql`
        query InstagramQuery {
            allInstagramContent {
                edges {
                    node {
                    caption
                    media_url
                    localFile {
                        childImageSharp {
                        gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
                        }
                    }
                    album {
                        localFile {
                        childImageSharp {
                            gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
                        }
                        }
                    }
                    }
                }
            }
        }
    `)
  
  let arrayOfInstaImages = _get(data, 'allInstagramContent.edges')

  return (
    <div className={'ig-container'}>
        {arrayOfInstaImages.map((item, i) => (
            <div key={i} className={'image'}>
                {/* {console.log(item.node.localFile.childImageSharp.gatsbyImageData.images)}
                <StaticImage 
                    style={{ width: "200px", height: "200px" }}
                    src={item.node.localFile.childImageSharp.gatsbyImageData.images.fallback.src} 
                    // srcSet={item.node.localFile.childImageSharp.gatsbyImageData.images.sources[0].srcSet} 
                    objectFit="cover" 
                    alt={item.node.caption}
                /> */}
                <img src={item.node.localFile.childImageSharp.gatsbyImageData.images.fallback.src} alt={item.node.caption}/>
            </div>
        ))}
        {console.log(arrayOfInstaImages)}
    </div>
  )
}

export default InstaFeeds;