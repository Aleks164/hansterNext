"use client";

import React from "react";
import { LIST_SIZES } from "../consts";
import useCustomSearchParams from "@/shared/hooks/useCustomSearchParams";

interface Props {
  currentListSize: number;
}

function ChangeSizeSelector({ currentListSize }: Props) {
  const { setSearchParams } = useCustomSearchParams();
  const onChangeSize = (size: string) => {
    console.log(size);
    setSearchParams("size", size);
    setSearchParams("currentPage", "1");
  };
  console.log(currentListSize);
  return (
    <select
      name="pageSize"
      value={currentListSize}
      onChange={(e) => onChangeSize(e.target.value)}
    >
      {LIST_SIZES.map((size) => (
        <option key={size} value={size}>
          {size}
        </option>
      ))}
    </select>
  );
}

export default ChangeSizeSelector;
