import { Box, Typography, Card as MUICard } from "@mui/material";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  title?: string;
  action?: ReactNode;
  variant?: "elevation" | "outlined";
}
export default function Card({
  children,
  title,
  action,
  variant = "elevation",
}: CardProps) {
  return (
    <MUICard
      variant={variant}
      className="card"
      sx={(theme) => ({
        display: "flex",
        flexDirection: "column",
        width: "100%",
        borderRadius: theme.spacing(0.5),
        boxShadow:
          variant === "elevation"
            ? "0px 0px 35px 0px rgba(154, 161, 171, 0.15)"
            : undefined,
        backgroundColor: theme.palette.common.white,
      })}
    >
      {title && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "60px",
            px: "15px",
            py: "10px",
          }}
        >
          <Typography variant="h5" fontWeight={700}>
            {title}
          </Typography>
          {action}
        </Box>
      )}
      <Box
        sx={(theme) => ({
          padding: `${title ? 0 : "10px"} 15px 10px 15px`,
          display: "flex",
          flexDirection: "column",
          gap: theme.spacing(3),
          flexGrow: 1,
        })}
      >
        {children}
      </Box>
    </MUICard>
  );
}
