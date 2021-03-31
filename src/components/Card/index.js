import React from "react";

import Display from "../Display";
import Song from "../Song";

import style from "./style.module.scss";

const Card = () => {
  return (
    <div className={style.card}>
      <div className={style.cardContainer}>
        <Display />
        <Song />
      </div>
    </div>
  );
};

export default Card;
