import React from "react";

function ImageItem({ imageUrl, description }) {
  return (
    <div>
      <img src={imageUrl} alt={description} className="imageItem" />
    </div>
  );
}

export default ImageItem;
