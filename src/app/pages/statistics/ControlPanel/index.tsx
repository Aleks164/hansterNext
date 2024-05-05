"use client";

import React from "react";
import useCustomSearchParams from "@/app/share/hooks/useCustomSearchParams";
import Pagination from "@/app/components/Table/Pagination";
import RangePicker from "@/app/components/RangePicker";
import { SearchParams } from "@/app/types";
import styles from "./styles.module.css";

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
    <div className={styles.control_panel_wrapper}>
      <RangePicker
        onSetDateRange={onSetDateRange}
        dateRange={searchParams.currentPage}
      />
      <Pagination
        maxPage={maxPage || 1}
        currentPage={searchParams.currentPage ? +searchParams.currentPage : 1}
        currentListSize={searchParams.size ? +searchParams.size : 1}
        onChange={setSearchParams}
      />
    </div>
  );
}

export default ControlPanel;
