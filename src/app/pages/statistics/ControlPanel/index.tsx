"use client";

import React, { useState } from "react";
import useCustomSearchParams from "@/app/share/hooks/useCustomSearchParams";
import RangePicker from "../../../components/RangePicker";
import { Pagination } from "../../../components/Table/Pagination";
import { SearchParams } from "@/app/types";

interface Props {
  searchParams: SearchParams;
  maxPage: number | undefined;
}

function ControlPanel({ searchParams, maxPage }: Props) {
  const { setSearchParams } = useCustomSearchParams();

  const onSetDateRange = (pickerDateRange: [string, string]) => {
    setSearchParams("dateRange", pickerDateRange.join("--"));
  };

  return (
    <div>
      <RangePicker
        onSetDateRange={onSetDateRange}
        setSearchParams={setSearchParams}
      />
      <Pagination
        maxPage={maxPage || 1}
        currentPage={searchParams.currentPage || 1}
        currentListSize={searchParams.currentPage || 1}
        onChange={setSearchParams}
      />
    </div>
  );
}

export default ControlPanel;
