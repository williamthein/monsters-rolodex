import React from "react";

import "./card.styles.css";

export const Card = (props) => (
  <div className="card-container">
    <img
      alt="monster-name"
      src={`https://robohash.org/${props.monSter.id}?set=set2&size=180x180`}
    />
    <h2>{props.monSter.name}</h2>
    <p> {props.monSter.email}</p>
  </div>
);
