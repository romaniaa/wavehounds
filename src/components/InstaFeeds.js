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
                    permalink
                    localFile {
                        childImageSharp {
                        gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, width: 500, height: 500)
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
                <a href={item.node.permalink} target={'_blank'} rel={'noreferrer'}>
                    <img src={item.node.localFile.childImageSharp.gatsbyImageData.images.fallback.src} alt={item.node.caption}/>
                </a>
            </div>
        ))}
    </div>
  )
}

export default InstaFeeds;