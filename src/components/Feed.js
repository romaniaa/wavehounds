import React from 'react'

const Feed = (props) => {
    const { id, caption, media_type, media_url, permalink} = props.feed
    let post;

    switch (media_type) {
        case "VIDEO":
            post = (
              <a href={permalink} target={'_blank'}>
                <video
                    width='100%'
                    height='auto' 
                    src={media_url} 
                    type="video/mp4" 
                    controls playsinline>
                </video>
              </a>
            )
            break;
        case "CAROUSEL_ALBUM":
            post = (
              <a href={permalink} target={'_blank'} className="image carousel">
                <img 
                    width='100%'
                    height='auto'
                    id={id} 
                    src={media_url} 
                    alt={caption} 
                />
                {console.log(id.children)}
              </a>
            );
            break;
        default:
            post = (
              <a href={permalink} target={'_blank'} className="image">
                <img 
                    width='100%'
                    height='auto'
                    id={id} 
                    src={media_url} 
                    alt={caption} 
                />
              </a>
            );
    }       

    return (
        <React.Fragment>
            {post}
        </React.Fragment>
    );
}

export default Feed;