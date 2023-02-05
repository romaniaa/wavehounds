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
                <img src={item.node.localFile.childImageSharp.gatsbyImageData.images.fallback.src} alt={item.node.caption}/>
            </div>
        ))}
    </div>
  )
}

export default InstaFeeds;