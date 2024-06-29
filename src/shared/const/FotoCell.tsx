import React from "react";
import styles from "./styles.module.css";

import getImgSrc from "../lib/getImageSrc";

function ProductImage({ id }: { id: number }) {
  return (
    <div className={styles.goods_info_container}>
      <div className={styles.goods_pictures_container}>
        <img
          className={styles.goods_pictures}
          src={getImgSrc(id)}
          alt={"Hanster"}
        />
      </div>
    </div>
  );
}

export default ProductImage;
