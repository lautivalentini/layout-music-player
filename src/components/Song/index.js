import React from "react";

import style from "./style.module.scss";

import List from "../List";

const Song = () => {
  return (
    <div className={style.songsCard}>
      <div className={style.navbarSongsCard}>
        <div>
          <p className={style.title}>Jay Z</p>
          <p className={style.subtitle}>Magna Carta Holy Grail</p>
        </div>
        <div className={style.imageFav}></div>
      </div>
      <List />
    </div>
  );
};

export default Song;
