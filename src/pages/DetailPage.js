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
    useTitle(`📷 av ${image.username}`);
    return image;
  }

  const image = useImage(id);
  const { id } = useParams();

  return (
    <div className="detail">
      <Post author={image.username} timestamp={image.createdDate}>
        <Image key={image.id} src={image.url} alt={image.description} />
      </Post>
    </div>
  )
}

export default DetailPage;