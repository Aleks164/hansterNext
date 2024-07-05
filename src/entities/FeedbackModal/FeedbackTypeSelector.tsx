"use client";

import React from "react";
import useCustomSearchParams from "@/shared/hooks/useCustomSearchParams";
import { FEEDBACK_SORT_TYPES } from "@/shared/ui/Table/consts";

interface Props {
  currentListSize: number;
}

function FeedbackTypeSelector() {
  const { searchParams, setSearchParams } = useCustomSearchParams();
  const currentSortType = searchParams.get("feedbacksSort");
  const [_, sortColumKey] = currentSortType?.split(",") || [, "rating"];

  const onChangeSize = (type: string) => {
    setSearchParams("feedbackSortType", type);
  };

  return (
    <select
      name="feedbackSortType"
      value={sortColumKey}
      onChange={(e) => onChangeSize(e.target.value)}
    >
      {FEEDBACK_SORT_TYPES.map((type) => (
        <option key={type.value} value={type.value}>
          {type.title}
        </option>
      ))}
    </select>
  );
}

export default FeedbackTypeSelector;
