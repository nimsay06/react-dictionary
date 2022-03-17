import React from "react";
import "./Photos.css";
export default function Photos(props) {

  if (props.photos) {
    return (
      <section className="Photos">
        {props.photos.map(function (photo, index) {
          return (
            <span key={index}>
              <a href={photo.src.original} target="_blank" rel="noreferrer">
                <img src={photo.src.tiny} alt={photo.src.photographer} />
              </a>
            </span>
          );
        })}
      </section>
    );
  } else {
    return null;
  }
}
