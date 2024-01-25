import { Box, Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";

export default function TabExample() {
  const [value, setValue] = useState<number>(0);
  const [value2, setValue2] = useState<number>(0);

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"flex-start"}
      gap={1}
    >
      기본 탭
      <Tabs value={value} onChange={(_, newValue) => setValue(newValue)}>
        <Tab label="Item 1" />
        <Tab label="Item 2" />
        <Tab label="Item 3" />
      </Tabs>
      <CustomTabPanel value={value} index={0}>
        Item One
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Item Two
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>
      기본 탭 (가운데 정렬)
      <Tabs
        value={value}
        onChange={(_, newValue) => setValue(newValue)}
        centered
      >
        <Tab label="Item 1" />
        <Tab label="Item 2" />
        <Tab label="Item 3" />
      </Tabs>
      <CustomTabPanel value={value} index={0}>
        Item One
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Item Two
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>
      스크롤 적용된 탭
      <Tabs
        value={value2}
        onChange={(_, newValue) => setValue2(newValue)}
        variant="scrollable"
        scrollButtons
      >
        {Array.from(Array(10)).map((_, index) => (
          <Tab key={index} label={`Item ${index + 1}`} />
        ))}
      </Tabs>
      {Array.from(Array(10)).map((_, index) => (
        <CustomTabPanel key={index} value={value2} index={index}>
          Item {index + 1}
        </CustomTabPanel>
      ))}
    </Box>
  );
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
function CustomTabPanel({ children, value, index }: TabPanelProps) {
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
