import React from "react";
import "./Synonyms.css";
export default function Synonyms(props) {
  if (props.synonyms && props.synonyms.length > 0) {
    return (
      <ul className="Synonyms">
        <span className="SynonymsHeader">Synonyms</span>
        {props.synonyms.map(function (synonyms, index) {
          return <li key={index}>{synonyms}</li>;
        })}
      </ul>
    );
  } else {
    return null;
  }
}
