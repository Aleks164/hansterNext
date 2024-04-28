"use client";

import React, { useEffect, useState } from "react";
import DatePicker from "./DatePicker";
import { DateType } from "./types";
import useCustomSearchParams from "@/app/share/hooks/useCustomSearchParams";
import { ReadonlyURLSearchParams } from "next/navigation";
import styles from "./styles.module.css";

interface Props {
  searchParams: ReadonlyURLSearchParams;
  setSearchParams: (key: string, value: string) => void;
}

type ParamsDateRange = [string | undefined, string | undefined];

function RangePicker({ searchParams, setSearchParams }: Props) {
  const [pickerDateRange, setPickerDateRange] = useState<ParamsDateRange>([
    undefined,
    undefined,
  ]);
  const userDateRange = searchParams.get("dateRange") || undefined;

  const onDateChange = (date: string, type: DateType) => {
    if (type === "startDate") setPickerDateRange((prev) => [date, prev[1]]);
    else setPickerDateRange((prev) => [prev[0], date]);
  };

  useEffect(() => {
    if (!pickerDateRange.length && userDateRange) {
      const [startDate, endDate] = userDateRange.split("--");
      if (startDate && endDate) setPickerDateRange([startDate, endDate]);
    }
  }, [userDateRange]);

  const onSetDateRange = () => {
    setSearchParams("dateRange", pickerDateRange.join("--"));
  };

  return (
    <div className={styles.range_container}>
      <label>
        C
        <DatePicker
          value={pickerDateRange[0] || new Date().toLocaleString()}
          max={pickerDateRange[1]}
          onDateChange={(value) => onDateChange(value, "startDate")}
        />
      </label>
      <label>
        По
        <DatePicker
          value={pickerDateRange[1] || new Date().toLocaleString()}
          min={pickerDateRange[0]}
          onDateChange={(value) => onDateChange(value, "endDate")}
        />
      </label>
      <button
        className={styles.date_range_button}
        disabled={!pickerDateRange[0] || !pickerDateRange[1]}
        onClick={onSetDateRange}
      >
        OK
      </button>
    </div>
  );
}

export default RangePicker;
