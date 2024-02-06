import { Box } from "@mui/material";
import dayjs, { Dayjs } from "dayjs";
import DatePicker from "./DatePicker";
import { ForwardedRef, forwardRef, useImperativeHandle, useRef } from "react";
import { InputRefType, Nullable } from "@/types/common";
import { DatePickerRefType } from "@/types/date";

interface DateRangePickerProps {
  start?: Nullable<Dayjs>;
  end?: Nullable<Dayjs>;
  fullWidth?: boolean;
  onChange?: (type: "all" | "start" | "end", value: Nullable<Dayjs>) => void;
}
export default forwardRef(function DateRangePicker(
  { start = null, end = null, fullWidth, onChange }: DateRangePickerProps,
  ref: ForwardedRef<InputRefType>
) {
  const startRef = useRef<DatePickerRefType>(null);
  const endRef = useRef<DatePickerRefType>(null);

  const handleStartChange = (value: Nullable<Dayjs>) => {
    onChange?.("start", value);
  };

  const handleEndChange = (value: Nullable<Dayjs>) => {
    onChange?.("end", value);
  };

  useImperativeHandle(ref, () => ({
    clear: () => {
      onChange?.("all", null);
    },
  }));

  return (
    <Box display={"flex"} alignItems={"center"} gap={1}>
      <DatePicker
        ref={startRef}
        value={start}
        shouldDisableDate={(day) => {
          if (!end) return false;
          return dayjs(day).isAfter(end);
        }}
        onChange={handleStartChange}
        onOpen={() => endRef.current?.closeDialog()}
        fullWidth={fullWidth}
      />
      <Box
        component={"span"}
        sx={(theme) => ({
          width: "10px",
          height: "2px",
          backgroundColor: theme.palette.grey[500],
        })}
      />
      <DatePicker
        ref={endRef}
        value={end}
        shouldDisableDate={(day) => {
          if (!start) return false;
          return dayjs(day).isBefore(start);
        }}
        onChange={handleEndChange}
        onOpen={() => startRef.current?.closeDialog()}
        fullWidth={fullWidth}
      />
    </Box>
  );
});
