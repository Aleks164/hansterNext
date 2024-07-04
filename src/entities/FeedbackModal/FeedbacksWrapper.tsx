import { Feedback } from "@/app/types";
import React from "react";
import FeedbackItem from "./FeedbackItem";
import styles from "./styles.module.css";

interface Props {
  feedbacks: Feedback[];
}

function FeedbacksWrapper({ feedbacks }: Props) {
  return (
    <div className={styles.feedbacks_wrapper}>
      {feedbacks.map((feedback) => (
        <FeedbackItem key={feedback.id} feedback={feedback} />
      ))}
    </div>
  );
}

export default FeedbacksWrapper;
