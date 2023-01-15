import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import Feed from './Feed'

const InstaFeeds = ({token, ...props}) => {
    const [feeds, setFeedsData] = useState([])
    const tokenProp = useRef(token);
    tokenProp.current = token;

    useEffect(() => {
        // this is to avoid memory leaks
        const abortController = new AbortController();

        async function fetchInstagramPost () {
          try{
            axios
                .get(`https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption,permalink&limit=${props.limit}&access_token=${token}`)
                .then((resp) => {
                    setFeedsData(resp.data.data)
                })
          } catch (err) {
              console.log('error', err)
          }
        }
        
        // manually call the fecth function 
        fetchInstagramPost();
  
        return () => {
            abortController.abort(); 
        };
    }, [props.limit, props.token])

    return (
        <div className="ig-container">
            {feeds.map((feed) => (
                <Feed key={feed.id} feed={feed} />
            ))}
        </div>
    );
}

export default InstaFeeds;