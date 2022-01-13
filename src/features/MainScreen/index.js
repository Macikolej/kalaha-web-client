import React from "react";

import styles from "./styles.module.scss";

export const MainScreen = () => {
  return (
    <div className={styles.cMainScreen}>
      <div className={styles.menu}>
        <button>Join specific game</button>
        <button>Join random game</button>
        <button>Create game</button>
      </div>
    </div>
  );
};
