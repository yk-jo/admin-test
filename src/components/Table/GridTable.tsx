import { DataGrid, GridColDef } from "@mui/x-data-grid";

interface GridTableProps<ColType extends string | number | symbol> {
  rows: { [k in ColType]: any | null }[];
  columns: GridColDef[];
  checkbox?: boolean;
  onRowSelection: (ids: (string | number)[]) => void;
}

export default function GridTable<ColType extends string | number | symbol>({
  rows,
  columns,
  checkbox,
  onRowSelection,
}: GridTableProps<ColType>) {
  return (
    <DataGrid
      rows={rows}
      columns={columns}
      checkboxSelection={checkbox}
      hideFooter
      disableColumnMenu
      onRowSelectionModelChange={onRowSelection}
      sx={(theme) => ({
        width: "100%",
        backgroundColor: theme.palette.common.white,
        border: "none",
      })}
    />
  );
}
