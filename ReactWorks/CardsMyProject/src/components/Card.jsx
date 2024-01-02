import React from "react";

function Card({ title, description, image }) {
  //   const title = props.title;
  //   const description = props.description;
  //   const { title, description } = props; // props.title, props.description
  return (
    <div className="card">
      <img src={image} alt="" className="cardImage" />
      <div className="cardContents">
        <div className="cardHeader">{title}</div>
        <div className="cardDescription">{description}</div>
      </div>
    </div>
  );
}

export default Card;
