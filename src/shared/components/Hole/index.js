import React from "react";

import styles from "./styles.module.scss";

export const Hole = ({ type, count }) => {
  return type === "normal" ? (
    <div className={styles.hole}>{count}</div>
  ) : (
    <div className={styles.homeHole}>{count}</div>
  );
};
