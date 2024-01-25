import { Breadcrumbs, Link, Typography } from "@mui/material";

interface BreadcrumbProps {
  items: { label: string; isLink?: boolean; to?: string }[];
}
export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      {items.map((item, index) =>
        item.isLink ? (
          <Link key={index} underline="hover" color="inherit" href={item.to}>
            {item.label}
          </Link>
        ) : (
          <Typography key={index}>{item.label}</Typography>
        )
      )}
    </Breadcrumbs>
  );
}
