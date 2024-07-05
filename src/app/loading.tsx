import React from "react";

import styles from "./page.module.css";

function Loading() {
  return (
    <div className={styles.loader_wrapper}>
      <span className={styles.loader}></span>
    </div>
  );
}

export default Loading;
