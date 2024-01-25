import { Box, Pagination } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import { useMemo } from "react";
import GridTable from "./GridTable";
import CardTable from "./CardTable";
import useResponsive from "@/hooks/useResponsive";

interface TableProps<ColType extends string | number | symbol> {
  type?: "grid" | "card";
  rows: Array<{ [k in ColType]: any | null } & { id: any }>;
  columns: GridColDef[];
  checkbox?: boolean;
  onRowSelection?: (ids: (string|number)[]) => void;
  //
  pagination?: boolean;
  page?: number;
  total?: number;
  limit?: number;
  onChangePage?: (page: number) => void;
}

export default function Table<ColType extends string | number | symbol>({
  type = "grid",
  rows,
  columns,
  checkbox,
  pagination,
  page = 1,
  total = 0,
  limit = 1,
  onChangePage,
  onRowSelection
}: TableProps<ColType>) {
  const { mediaQuery } = useResponsive();
  const idDownSm = mediaQuery("sm", "down");

  const handleRowSelection = (ids: (string | number)[]) => {
    onRowSelection?.(ids)
  };

  const pageCount = useMemo(
    () => Math.ceil(total / limit) || 0,
    [total, limit]
  );

  const isCardType = type === "card" || (type === "grid" && idDownSm);
  return (
    <Box
      width={"100%"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={2}
    >
      {isCardType ? (
        <CardTable
          {...{
            rows,
            columns: columns as any,
            checkbox,
            onRowSelection: handleRowSelection,
          }}
        />
      ) : (
        <GridTable
          {...{ rows, columns, checkbox, onRowSelection: handleRowSelection }}
        />
      )}

      {pagination && (
        <Pagination
          count={pageCount}
          page={page}
          onChange={(_, page) => onChangePage?.(page)}
          shape="rounded"
          size={isCardType ? "small" : undefined}
          showFirstButton
          showLastButton
        />
      )}
    </Box>
  );
}
