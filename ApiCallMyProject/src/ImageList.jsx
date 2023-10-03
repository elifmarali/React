import React from "react";
import ImageItem from "./ImageItem";
import "./App.css";

function ImageList({ images }) {
  return (
    <div className="imageContainer">
      {images.map((image, index) => {
        return <ImageItem imageItem={image} key={index} />;
      })}
    </div>
  );
}

export default ImageList;
