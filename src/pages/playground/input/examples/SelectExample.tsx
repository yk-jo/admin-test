import { Box } from "@mui/material";
import { useState } from "react";
import Select from "@/components/Select";

const sample = [
  { label: "체크1", value: "1" },
  { label: "체크2", value: "2" },
  { label: "체크3", value: "3" },
];
export default function SelectExample() {
  const [select, setSelect] = useState<string>("2");

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"flex-start"}
      gap={1}
    >
      <Select
        items={sample}
        value={select}
        onChange={(e) => setSelect(e.target.value)}
      />
      <Select
        items={sample}
        value={select}
        onChange={(e) => setSelect(e.target.value)}
        fullWidth
      />
    </Box>
  );
}
