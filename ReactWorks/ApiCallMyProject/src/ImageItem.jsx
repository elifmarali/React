import React from "react";
import "./App.css";
function ImageItem({ imageItem }) {
  console.log(imageItem);
  return (
    <div>
      <img
        className="imageItem"
        src={imageItem.urls.small_s3}
        alt={imageItem.alt_description}
      />
    </div>
  );
}

export default ImageItem;
