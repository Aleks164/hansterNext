import { Feedback } from "@/app/types";
import React from "react";
import styles from "./styles.module.css";
import dayjs from "dayjs";

interface Props {
  feedback: Feedback;
}

function FeedbackItem({ feedback }: Props) {
  return (
    <div className={styles.feedback_item}>
      <div className={styles.feedback_header}>
        {`${feedback.name} ${dayjs(feedback.date).format(
          "YYYY-MM-DD HH:mm"
        )} ⭐️ ${feedback.rating || "-"}`}
      </div>
      <div className={styles.feedback_body_text}>{feedback.description}</div>
    </div>
  );
}

export default FeedbackItem;
