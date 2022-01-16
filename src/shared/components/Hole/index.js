import React from "react";

import styles from "./styles.module.scss";

export const Hole = ({ type, count, onClick }) => {
  return type === "normal" ? (
    <button className={styles.hole} onClick={onClick}>
      {count}
    </button>
  ) : (
    <div className={styles.homeHole}>{count}</div>
  );
};
