import React from "react";
import ImageItem from "./ImageItem";
import "./App.css";

function ImageList({ imagesPlaceholder }) {
  return (
    <div className="imagesDiv">
      {imagesPlaceholder.map((image, index) => {
        return <ImageItem imageElement={image} key={index} />;
      })}
    </div>
  );
}

export default ImageList;
