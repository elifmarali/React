import React from "react";
import ImageItem from "./ImageItem";

function ImageList({ imagesList }) {
  return (
    <div className="imagesList">
      {imagesList.map((image, index) => {
        return (
          <ImageItem
            imageUrl={image.urls.small}
            description={image.alt_description}
            key={index}
          />
        );
      })}
    </div>
  );
}

export default ImageList;
