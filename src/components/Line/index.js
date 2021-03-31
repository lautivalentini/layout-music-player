import React from "react";
import style from "./style.module.scss";

const Line = () => {
  return (
    <div className={style.linePlay}>
      <div className={style.elipseButton}></div>
      <div className={style.lineReproduced}></div>
    </div>
  );
};

export default Line;
