import React from "react";
import "./heading.scss";
export default function Heading({ secondary, main }) {
  return (
    <div>
      <div className="about_me_heading">
        {main}
        <h2 className="upper_heading">{secondary}</h2>
      </div>
    </div>
  );
}
