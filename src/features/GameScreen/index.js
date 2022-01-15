import React from "react";

import { MenuButton } from "shared/components/MenuButton";
import { Hole } from "shared/components/Hole";
import styles from "./styles.module.scss";

export const GameScreen = ({ game, playerId }) => {
  return (
    <div className={styles.cGameScreen}>
      <div className={styles.sidebar}>
        <div
          className={styles.playerCounter}
        >{`Players: ${game.players.length}/2`}</div>
        <MenuButton caption="Start game" />
        <MenuButton caption="Leave game" />
      </div>
      <div className={styles.mainContainer}>
        <div className={styles.gameBoard}>
          <Hole type="home" count={0} />
          <div className={styles.column}>
            <Hole type="normal" count={0} />
            <Hole type="normal" count={0} />
          </div>
          <div className={styles.column}>
            <Hole type="normal" count={0} />
            <Hole type="normal" count={0} />
          </div>
          <div className={styles.column}>
            <Hole type="normal" count={0} />
            <Hole type="normal" count={0} />
          </div>
          <div className={styles.column}>
            <Hole type="normal" count={0} />
            <Hole type="normal" count={0} />
          </div>
          <div className={styles.column}>
            <Hole type="normal" count={0} />
            <Hole type="normal" count={0} />
          </div>
          <div className={styles.column}>
            <Hole type="normal" count={0} />
            <Hole type="normal" count={0} />
          </div>
          <Hole type="home" count={0} />
        </div>
      </div>
    </div>
  );
};
