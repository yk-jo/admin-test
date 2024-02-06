import { DateRangePicker } from "@/components/Date";
import { Input } from "@/components/Input";
import RadioGroup from "@/components/RadioGroup";
import SearchFilter from "@/components/SearchFilter";
import { Nullable } from "@/types/common";
import { Box } from "@mui/material";
import { Dayjs } from "dayjs";
import { useState } from "react";

export default function SearchFilterExample() {
  const [range, setRange] = useState<{
    start: Nullable<Dayjs>;
    end: Nullable<Dayjs>;
  }>({ start: null, end: null });
  const [range2, setRange2] = useState<{
    start: Nullable<Dayjs>;
    end: Nullable<Dayjs>;
  }>({ start: null, end: null });
  const [keyword, setKeyword] = useState<string>("");
  const [radio, setRadio] = useState<string>("all");

  const handleChange = (type: "all" | "start" | "end", value: Nullable<Dayjs>) => {
    if (type === "all") setRange({ ...range, start: value, end: value });
    else setRange({ ...range, [type]: value });
  };

  const handleChange2 = (
    type: "all" | "start" | "end",
    value: Nullable<Dayjs>
  ) => {
    if (type === "all") setRange2({ ...range2, start: value, end: value });
    else setRange2({ ...range2, [type]: value });
  };

  return (
    <Box>
      <SearchFilter>
        <SearchFilter.Row title="등록일시">
          <DateRangePicker
            start={range.start}
            end={range.end}
            onChange={handleChange}
            fullWidth
          />
        </SearchFilter.Row>
        <SearchFilter.Row title="검색어">
          <Input
            value={keyword}
            onChange={(e) => {
              setKeyword(e.target.value);
            }}
            placeholder="검색어를 입력하세요"
          />
        </SearchFilter.Row>
        <SearchFilter.Row title="노출 여부">
          <RadioGroup
            items={[
              { label: "전체", value: "all" },
              { label: "노출", value: "enable" },
              { label: "비노출", value: "disable" },
            ]}
            value={radio}
            onChange={(e) => setRadio(e.target.value)}
          />
        </SearchFilter.Row>
        <SearchFilter.Row title="노출기간">
          <DateRangePicker
            start={range2.start}
            end={range2.end}
            onChange={handleChange2}
            fullWidth
          />
        </SearchFilter.Row>
      </SearchFilter>
    </Box>
  );
}
