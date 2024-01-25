import {
  Box,
  Card,
  CardContent,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import { ReactNode, useState } from "react";

type CustomGridColDef = GridColDef & {
  renderCell: (params: {
    row: { [k: string]: any | null };
    value: any;
  }) => ReactNode;
};

interface CardTableProps<ColType extends string | number | symbol> {
  rows: Array<{ [k in ColType]: any | null } & { id: any }>;
  columns: CustomGridColDef[];
  checkbox?: boolean;
  onRowSelection: (ids: (string | number)[]) => void;
}

export default function CardTable<ColType extends string | number | symbol>({
  rows,
  columns,
  checkbox,
  onRowSelection,
}: CardTableProps<ColType>) {
  const [isSelectAll, setSelectAll] = useState<boolean>(false);
  const [selectedRows, setSelectedRows] = useState<string[]>([]);

  const handleChangeSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    const checkRows = checked ? rows.map((d) => String((d as any).id)) : [];

    setSelectedRows(checkRows);
    onRowSelection?.(checkRows);
    setSelectAll(checked);
  };

  const handleChangeSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, name } = e.target;
    if (checked)
      setSelectedRows((p) => {
        const p2 = [...p, name];
        if (p2.length === rows.length) setSelectAll(true);
        onRowSelection?.(p2);
        return p2;
      });
    else
      setSelectedRows((p) => {
        const p2 = p.filter((id) => name !== id);
        if (p2.length <= 0) setSelectAll(false);
        onRowSelection?.(p2);
        return p2;
      });
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      {checkbox && (
        <FormControlLabel
          control={
            <Checkbox name="select-all" onChange={handleChangeSelectAll} />
          }
          label={"전체선택"}
          checked={isSelectAll}
        />
      )}
      {rows.map((row, index) => {
        return (
          <Card key={`card-table-row-${index}`} elevation={0}>
            {checkbox && (
              <Checkbox
                checked={selectedRows.includes(String(row.id))}
                name={row.id}
                onChange={handleChangeSelect}
              />
            )}
            <CardContent>
              {Object.keys(row).map((k) => {
                const column = columns.filter((c) => c.field === k)?.[0];
                return (
                  <Box key={`card-table-cell-${k}`} sx={{ display: "flex" }}>
                    <Box sx={{ flex: 1 }}>{column?.headerName}</Box>
                    <Box sx={{ flex: 1 }}>
                      {column?.renderCell
                        ? column?.renderCell({ row, value: row[k as ColType] })
                        : row[k as ColType].toString()}
                    </Box>
                  </Box>
                );
              })}
            </CardContent>
          </Card>
        );
      })}
    </Box>
  );
}
