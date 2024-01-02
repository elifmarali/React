import React from "react";

function ImageItem({ imageElement }) {
  return (
    <div>
      <img
        className="imageElement"
        src={imageElement.urls.small}
        alt={imageElement.alt_description}
      />
    </div>
  );
}

export default ImageItem;
