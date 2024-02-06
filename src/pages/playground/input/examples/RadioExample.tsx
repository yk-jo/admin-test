import { Box } from "@mui/material";
import { useState } from "react";
import RadioGroup from "@/components/RadioGroup";

const radioGroupSample = [
  { label: "전체", value: "all" },
  { label: "활성화", value: "enable" },
  { label: "비활성화", value: "disable" },
];

export default function RadioExample() {
  const [radio, setRadio] = useState<string>("all");

  return (
    <Box display={"flex"} flexDirection={"column"} gap={1}>
      Row
      <RadioGroup
        items={radioGroupSample}
        value={radio}
        onChange={(e) => setRadio(e.target.value)}
      />
      <RadioGroup
        items={radioGroupSample}
        value={radio}
        onChange={(e) => setRadio(e.target.value)}
        disabled
      />
      <RadioGroup
        items={radioGroupSample}
        value={radio}
        onChange={(e) => setRadio(e.target.value)}
        errorText="You can display an error"
      />
      Column
      <RadioGroup
        direction="column"
        items={radioGroupSample}
        value={radio}
        onChange={(e) => setRadio(e.target.value)}
      />
      <RadioGroup
        direction="column"
        items={radioGroupSample}
        value={radio}
        onChange={(e) => setRadio(e.target.value)}
        disabled
      />
      <RadioGroup
        direction="column"
        items={radioGroupSample}
        value={radio}
        onChange={(e) => setRadio(e.target.value)}
        errorText="You can display an error"
      />
    </Box>
  );
}
