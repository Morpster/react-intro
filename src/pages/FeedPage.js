import { formatDistanceToNow } from 'date-fns';
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { getFeed } from '../server';


function FeedPage(props) {
  useTitle("Bekkstagram");
  
  const useFeed = () => {
    const [imagefeed, setImageFeed] = useState(null);
    useEffect(() => {
      getFeed().then((data) => setImageFeed(data));
    }, []);
    return imagefeed;
  }

  const imagefeed = useFeed();
  if (!imagefeed) {
    return null;
  };

  return (
    <div className="posts">
      {imagefeed.map((image) => (
        <Post
          key={image.id}
          author={image.username}
          timestamp={image.createdDate}
        >
          <Link to={`/post/${image.id}`}>
            <Image src={image.url} alt={image.description} />
          </Link>
        </Post>
      ))}
    </div>
  );
}

export function Image(props) {
  return <img src={props.src} alt={props.alt} className="image" />
}

export function Timestamp(props) {
  return (
    <div className="timestamp">{formatDistanceToNow(props.timestamp)} ago</div>
  )
}

export function Author(props) {
  return <div className="author">{props.children}</div>
}

export function useTitle(title) {
  React.useEffect(() => {
    document.title = title;
  }, [title] );
}

export function Post(props) {
  const [likes, setLikes] = useState(0);

  function addLike() {
    setLikes(prevLikes => prevLikes + 1)
  }

  return (
    <div className="post">
      <Author>{props.author}</Author>
      {props.children}
      <Timestamp timestamp={props.timestamp} />
      <button aria-label="Like" onClick={addLike}>👍🏻 {likes}</button>
    </div>
    )
}

export default FeedPage;