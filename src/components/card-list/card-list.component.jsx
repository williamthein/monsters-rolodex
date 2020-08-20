import React from "react";

import { Card } from "../card/card.component";

import "./card-list.styles.css";

export const CardList = (props) => (
  <div className="card-list">
    {props.monSters.map((monSter) => (
      <Card key={monSter.id} monSter={monSter} />
    ))}
  </div>
);
