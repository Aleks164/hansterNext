import Image from "next/image";
import React from "react";
import getImgSrc from "./getImageSrc";
import styles from "./styles.module.css";

function ProductImage({ id }: { id: number }) {
  return (
    <>
      <button popovertarget="mypopover" className={styles.goods_info_container}>
        <div className={styles.goods_pictures_container}>
          <Image
            className={styles.goods_pictures}
            height={50}
            width={50}
            src={getImgSrc(id)}
            alt={"Hanster"}
          />
        </div>
      </button>
      <div
        id="mypopover"
        popover="auto"
        className={styles.goods_pictures_popover_container}
      >
        <Image height={350} width={350} src={getImgSrc(id)} alt={"Hanster"} />
      </div>
    </>
  );
}

export default ProductImage;
