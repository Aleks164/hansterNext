import { Feedback } from "@/app/types";
import React from "react";
import styles from "./styles.module.css";

interface Props {
  product: any;
}

function ProductCart({ product }: Props) {
  return (
    <div className={styles.product_cart_container}>
      {/* <div className={styles.feedback_header_title}>
        <span>
          {feedback.productDetails.productName} {feedback.productDetails.size}
        </span>
        <br />
        <span>{feedback.productDetails.supplierArticle}</span>
        <br />
        <span>
          {"Поставщик: "}
          {feedback.productDetails.supplierName}{" "}
        </span>
      </div> */}
    </div>
  );
}

export default ProductCart;
