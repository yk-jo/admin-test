import { Box } from "@mui/material";
import { useState } from "react";
import CheckboxGroup from "@/components/CheckGroup";

const checkboxGroupSample = [
  { label: "체크1", value: "1" },
  { label: "체크2", value: "2" },
  { label: "체크3", value: "3" },
];
export default function CheckExample() {
  const [selectedRows, setSelectedRows] = useState<string[]>(["2"]);

  return (
    <Box display={"flex"} flexDirection={"column"} gap={1}>
      Row
      <CheckboxGroup
        items={checkboxGroupSample}
        selectedRows={selectedRows}
        onChange={setSelectedRows}
      />
      <CheckboxGroup items={checkboxGroupSample} disabled />
      Column
      <CheckboxGroup
        direction="column"
        items={checkboxGroupSample}
        selectedRows={selectedRows}
        onChange={setSelectedRows}
      />
      <CheckboxGroup direction="column" items={checkboxGroupSample} disabled />
    </Box>
  );
}
