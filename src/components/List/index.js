import React from "react";

import style from "./style.module.scss";

const List = () => {
  return (
    <div className={style.bodySongsCard}>
      <ol className={style.listSongs}>
        <li>
          <p>01. Holy Grail (feat. Justin Timberlake)</p>
          <span>05:38</span>
        </li>
        <li className={style.selectedSong}>
          <p>02. Picasso Boy</p>
          <span>05:38</span>
          <div className={style.imageVol}></div>
        </li>
        <li>
          <p>03. Tom Ford</p>
          <span>04:06</span>
        </li>
        <li>
          <p>04. F*ckwithmeyouknowigotit</p>
          <span>03:09</span>
        </li>
        <li>
          <p>05. Oceans (feat. Frank Ocean)</p>
          <span>04:03</span>
        </li>
        <li>
          <p>06. F.U.T.W.</p>
          <span>05:30</span>
        </li>
        <li>
          <p>07. Somewhereinamerica</p>
          <span>03:45</span>
        </li>
        <li>
          <p>08. Crown</p>
          <span>04:20</span>
        </li>
        <li>
          <p>09. Heaven</p>
          <span>04:03</span>
        </li>
      </ol>
    </div>
  );
};

export default List;
