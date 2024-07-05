import React from "react";
import styles from "./styles.module.css";
import SortButton from "@/shared/ui/Table/SortButton";
import { SearchParams } from "@/app/types";
import FeedbackTypeSelector from "./FeedbackTypeSelector";

interface Props {
  searchParams: SearchParams;
}

function SortControlPanel({ searchParams }: Props) {
  return (
    <div className={styles.modal_sort_control_panel}>
      <FeedbackTypeSelector />
      <SortButton
        sortFiledName={"feedbackSortType"}
        sortParams={searchParams.feedbacksSort}
        sortKey="feedbacksSort"
      />
    </div>
  );
}

export default SortControlPanel;
