import React from "react";
import "./Phonetics.css";
export default function Phonetic(props) {
  console.log(props.phonetic);
  return (
    <div className="PhoneticComponent">
      <a
        href={props.phonetic.audio}
        target="_blank"
        rel="noopener noreferrer"
        className="PhoneticsAudio"
      >
        Listen
      </a>
      <span className="PhoneticsText"> {props.phonetic.text}</span>
    </div>
  );
}
