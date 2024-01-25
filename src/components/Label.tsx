import { Box, Typography } from "@mui/material";
import { ReactNode } from "react";

interface LabelProps {
  text: string;
  description?: string;
  required?: boolean;
  children: ReactNode;
}
export default function Label({
  text,
  description,
  required,
  children,
}: LabelProps) {
  return (
    <Box>
      <Typography fontWeight={600} marginBottom={1}>
        {text}
        {required && (
          <Typography variant="caption" color="red">
            *
          </Typography>
        )}
        {description && (
          <Typography
            variant="caption"
            color="GrayText"
            fontSize={12}
            fontWeight={600}
          >
            {` ${description}`}
          </Typography>
        )}
      </Typography>
      {children}
    </Box>
  );
}
