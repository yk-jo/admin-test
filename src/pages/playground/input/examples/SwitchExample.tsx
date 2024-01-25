import { Box, Switch } from "@mui/material";

export default function SwitchExample() {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"flex-start"}
      gap={1}
    >
      <Box>
        <Switch defaultChecked />
        <Switch color="secondary" defaultChecked />
        <Switch color="info" defaultChecked />
        <Switch color="success" defaultChecked />
        <Switch color="error" defaultChecked />
        <Switch color="default" defaultChecked />
      </Box>
      <Box>
        <Switch size="small" defaultChecked />
        <Switch size="small" color="secondary" defaultChecked />
        <Switch size="small" color="info" defaultChecked />
        <Switch size="small" color="success" defaultChecked />
        <Switch size="small" color="error" defaultChecked />
        <Switch size="small" color="default" defaultChecked />
      </Box>
    </Box>
  );
}
