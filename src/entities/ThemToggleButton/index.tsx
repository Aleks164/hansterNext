import React from "react";
import styles from "./styles.module.css";

function ThemToggleButton() {
  return (
    <div className={styles["toggle-switch"]}>
      <label>
        <input type="checkbox" />
        <span className={styles.slider}></span>
      </label>
    </div>
  );
}

export default ThemToggleButton;
