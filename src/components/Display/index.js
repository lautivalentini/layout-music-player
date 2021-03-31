import React from "react";

import style from "./style.module.scss";

import Play from "../Play";

const Display = () => {
  return (
    <div className={style.displayContainer}>
      <Play />
    </div>
  );
};

export default Display;
