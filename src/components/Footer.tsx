import { copyright } from "@/config";
import { Box, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";

export default function Footer() {
  return (
    <Box
      component={"footer"}
      sx={(theme) => ({
        width: "100%",
        height: "60px",
        padding: "20px",
        borderTop: `1px solid ${alpha(theme.palette.common.black, 0.12)}`,
        backgroundColor: theme.palette.background.default,
      })}
    >
      <Typography variant="body2">{copyright}</Typography>
    </Box>
  );
}
