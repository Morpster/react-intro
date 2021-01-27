import React from 'react';
import { uploadImage } from "../server";

const AddPhoto = () => {

  return (
    <div>
      <p>Url:</p>
      <input></input>
      <p>Beskrivelse:</p>
      <input></input>
      <button>Upload!</button>
    </div>
  );
};

export default AddPhoto;