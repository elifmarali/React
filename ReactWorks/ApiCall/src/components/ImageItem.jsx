import React from "react";

function ImageItem({ image }) {
  return (
    <div>
      <img class="img" src={image.urls.small} alt={image.alt_description} />
    </div>
  );
}

export default ImageItem;
