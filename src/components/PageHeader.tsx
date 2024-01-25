import { Box, Typography } from "@mui/material";
import Breadcrumb from "./Breadcrumb";

interface PageHeaderProps {
  title: string;
  breadcrumbItems: {
    label: string;
    isLink?: boolean;
    to?: string;
  }[];
}
export default function PageHeader({
  title,
  breadcrumbItems,
}: PageHeaderProps) {
  return (
    <Box
      sx={(theme) => ({
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: theme.spacing(3),
      })}
    >
      <Typography variant="h5" fontWeight={700}>
        {title}
      </Typography>
      <Breadcrumb items={breadcrumbItems} />
    </Box>
  );
}
