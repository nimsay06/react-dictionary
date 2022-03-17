import React from "react";
import "./Photos.css";
export default function Photos(props) {
  console.log(props.photos);
  if (props.photos) {
    return (
      <section className="Photos">
        {props.photos.map(function (photo, index) {
          return (
            <a href={photo.src.original} target="_blank" rel="noreferrer">
              <img
                key={index}
                src={photo.src.tiny}
                className="img-fluid"
                alt={photo.src.photographer}
              />
            </a>
          );
        })}
      </section>
    );
  } else {
    return null;
  }
}
