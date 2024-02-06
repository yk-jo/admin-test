import { DatePicker, DateRangePicker } from "@/components/Date";
import { Box } from "@mui/material";
import dayjs, { Dayjs } from "dayjs";
import { useEffect, useState } from "react";

export default function DateExample() {
  const [date, setDate] = useState<Dayjs | null>(dayjs("2024-01-02"));
  const [range, setRange] = useState<{
    start: Dayjs | null;
    end: Dayjs | null;
  }>({ start: null, end: null });

  const handleChange = (type: "all" | "start" | "end", value: Dayjs | null) => {
    if (type === "all") setRange({ ...range, start: value, end: value });
    else setRange({ ...range, [type]: value });
  };

  useEffect(() => {
    console.log("DatePicker:", date);
  }, [date]);

  useEffect(() => {
    console.log("DateRangePicker:", range);
  }, [range]);

  return (
    <Box display={"flex"} flexDirection={"column"} gap={1}>
      <DatePicker value={date} onChange={setDate} />
      <DatePicker value={date} onChange={setDate} fullWidth />
      <DateRangePicker
        start={range.start}
        end={range.end}
        onChange={handleChange}
      />
      <DateRangePicker
        start={range.start}
        end={range.end}
        onChange={handleChange}
        fullWidth
      />
    </Box>
  );
}
