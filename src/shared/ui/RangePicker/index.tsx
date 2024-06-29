"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import DatePicker from "./DatePicker";
import { DateType } from "./types";
import styles from "./styles.module.css";
import useCustomSearchParams from "@/shared/hooks/useCustomSearchParams";

type DateRange = [string, string];

interface Props {
  dateRange: string | undefined;
}

type ParamsDateRange = [string | undefined, string | undefined];

function RangePicker({ dateRange }: Props) {
  const { setSearchParams } = useCustomSearchParams();

  const [pickerDateRange, setPickerDateRange] = useState<ParamsDateRange>([
    undefined,
    undefined,
  ]);

  const savedRange = useMemo(() => {
    let newRange: { startDate: string; endDate: string } | null = null;
    if (dateRange) {
      const [startDate, endDate] = dateRange.split("--");
      newRange = { startDate, endDate };
    }
    return newRange;
  }, [dateRange]);

  const onSetDateRange = (pickerDateRange: [string, string]) => {
    setSearchParams("dateRange", pickerDateRange.join("--"));
  };

  const onDateChange = (date: string, type: DateType) => {
    if (type === "startDate") setPickerDateRange((prev) => [date, prev[1]]);
    else setPickerDateRange((prev) => [prev[0], date]);
  };

  useEffect(() => {
    if (pickerDateRange.every((date) => !date) && savedRange) {
      const { startDate, endDate } = savedRange;
      if (startDate && endDate) {
        setPickerDateRange([startDate, endDate]);
      }
    }
  }, [savedRange, pickerDateRange]);

  const onSubmitDateRange = () => {
    if (pickerDateRange[0] && pickerDateRange[1])
      onSetDateRange(pickerDateRange as DateRange);
  };

  const isOkEnabled = useMemo(() => {
    return (
      !!pickerDateRange[0] &&
      !!pickerDateRange[1] &&
      (!savedRange ||
        (savedRange &&
          (pickerDateRange[0] !== savedRange.startDate ||
            pickerDateRange[1] !== savedRange.endDate)))
    );
  }, [pickerDateRange, savedRange]);

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
        disabled={!isOkEnabled}
        onClick={onSubmitDateRange}
      >
        OK
      </button>
    </div>
  );
}

export default RangePicker;
