import React from "react";
import ImageItem from "./ImageItem";

function ImagesList({ imagesList }) {
  console.log(imagesList);
  return (
    <div className="imagesList">
      {imagesList.map((imageElement, index) => {
        return <ImageItem image={imageElement} key={index} />;
      })}
    </div>
  );
}

export default ImagesList;
