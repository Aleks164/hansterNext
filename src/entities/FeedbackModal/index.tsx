import { SearchParams } from "@/app/types";
import getFeedbacksById from "@/shared/lib/api/getFeedbacksById";
import React from "react";
import FeedbacksWrapper from "./FeedbacksWrapper";
import ProductCart from "./ProductCart";
import styles from "./styles.module.css";

interface Props {
  searchParams: SearchParams;
}

async function FeedbackModal({ searchParams }: Props) {
  const nmId = searchParams.feedbackId;
  // if (!nmId) return null;
  const feedbacks = await getFeedbacksById(nmId);
  if (!feedbacks) return null;
  console.log(123);
  return (
    <div className={styles.modal_container}>
      <ProductCart /> <FeedbacksWrapper feedbacks={feedbacks} />
    </div>
  );
}

export default FeedbackModal;
