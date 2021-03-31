import React from "react";

import Buttons from "../Buttons";
import Line from "../Line";

import style from "./style.module.scss";

const Play = () => {
  return (
    <>
      <div className={style.playContainer}></div>
      <div className={style.buttonsPlay}>
        <Line />
        <Buttons />
      </div>
    </>
  );
};

export default Play;
