import { useParams } from  "react-router-dom";
import React, { useEffect } from 'react';
import { getImage } from "../server";
import { Post, Image, useTitle } from "./FeedPage";

function DetailPage()  {

  const useImage = (id) => {
    const [image, setImage] = React.useState(null);
    useEffect(() => {
      getImage(id).then((data) => setImage(data));
    }, [id]);
    return image;
  }
  
  const { id } = useParams();
  const image = useImage(id);
  if (!image) {
    return null;
  };

  // useTitle(`📷 av ${image.username}`); <- hooow
  
  return (
    <div className="detail">
      <Post author={image.username} timestamp={image.createdDate}>
        <Image key={image.id} src={image.url} alt={image.description} />
      </Post>
    </div>
  )
}

export default DetailPage;