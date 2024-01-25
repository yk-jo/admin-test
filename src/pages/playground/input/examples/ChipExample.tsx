import { Box, Chip } from "@mui/material";

export default function ChipExample() {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"flex-start"}
      gap={1}
    >
      <Box display={"flex"} gap={1} flexWrap={"wrap"}>
        <Chip color="primary" label="primary" />
        <Chip color="secondary" label="secondary" />
        <Chip color="info" label="info" />
        <Chip color="success" label="success" />
        <Chip color="error" label="error" />
        <Chip label="default" />
      </Box>
    </Box>
  );
}
