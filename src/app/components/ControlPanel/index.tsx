"use client";

import React, { useEffect, useState } from "react";
import useCustomSearchParams from "@/app/share/hooks/useCustomSearchParams";
import RangePicker from "../RangePicker";
import { Pagination } from "../Table/Pagination";
import getStatistics from "@/app/lib/getStatistics";

function ControlPanel() {
  const { searchParams, setSearchParams } = useCustomSearchParams();
  const [paginationParams, setPaginationParams] = useState({
    maxPage: 1,
    currentPage: 1,
    currentListSize: 1,
  });

  useEffect(() => {
    let isActual = true;
    async function getDate() {
      const tableParams = await getStatistics(searchParams);
      if (isActual && tableParams) {
        const { size, currentPage } = tableParams;
        const newParams = {
          maxPage: 1,
          currentPage: 1,
          currentListSize: 1,
        };
        setPaginationParams(newParams);
      }
    }

    getDate();
    return () => {
      isActual = false;
    };
  }, [searchParams]);
  return (
    <div>
      <RangePicker
        searchParams={searchParams}
        setSearchParams={setSearchParams}
      />
      <Pagination
        maxPage={0}
        currentPage={0}
        currentListSize={0}
        onChange={setSearchParams}
      />
    </div>
  );
}

export default ControlPanel;
