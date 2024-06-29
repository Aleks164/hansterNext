import React from "react";
import RangePicker from "@/shared/ui/RangePicker";
import Pagination from "@/shared/ui/Table/Pagination";
import { SearchParams } from "@/app/types";
import ChangeSizeSelector from "@/shared/ui/Table/Pagination/ChangeSizeSelector";
import styles from "./styles.module.css";

interface Props {
  searchParams: SearchParams;
  maxPage: number | undefined;
}

function ControlPanel({ searchParams, maxPage }: Props) {
  return (
    <div className={styles.control_panel_wrapper}>
      <RangePicker dateRange={searchParams.dateRange} />
      <Pagination
        maxPage={maxPage || 1}
        currentPage={searchParams.currentPage ? +searchParams.currentPage : 1}
      >
        <ChangeSizeSelector
          currentListSize={searchParams.size ? +searchParams.size : 1}
        />
      </Pagination>
    </div>
  );
}

export default ControlPanel;
