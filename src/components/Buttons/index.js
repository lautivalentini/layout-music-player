import React from "react";

import style from "./style.module.scss";

const Buttons = () => {
  return (
    <div className={style.buttons}>
      <div className={style.repeat}></div>
      <div className={style.back}></div>
      <div className={style.elipse}>
        <div className={style.play}></div>
      </div>
      <div className={style.next}></div>
      <div className={style.shuffle}></div>
    </div>
  );
};

export default Buttons;
