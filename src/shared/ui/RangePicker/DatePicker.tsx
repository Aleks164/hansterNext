import React from "react";

interface Props {
  onDateChange: (date: string) => void;
  value?: string;
  min?: string;
  max?: string;
}

function DatePicker({ onDateChange, value, max, min }: Props) {
  return (
    <input
      type="date"
      value={value}
      min={min}
      max={max}
      onChange={(event) => onDateChange(event.target.value)}
    />
  );
}

export default DatePicker;
