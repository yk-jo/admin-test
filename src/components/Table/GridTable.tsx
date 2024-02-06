import { Nullable } from "@/types/common";
import {
  DataGrid,
  GridColDef,
  GridColumnGroupingModel,
} from "@mui/x-data-grid";

interface GridTableProps<ColType extends string | number | symbol> {
  rows: { [k in ColType]: Nullable<any> }[];
  columns: GridColDef[];
  columnGroupingModel?: GridColumnGroupingModel;
  checkbox?: boolean;
  onRowSelection: (ids: (string | number)[]) => void;
}

export default function GridTable<ColType extends string | number | symbol>({
  rows,
  columns,
  columnGroupingModel,
  checkbox,
  onRowSelection,
}: GridTableProps<ColType>) {
  console.log(columns);
  return (
    <DataGrid
      rows={rows}
      columns={columns}
      columnGroupingModel={columnGroupingModel}
      experimentalFeatures={{
        columnGrouping: columnGroupingModel ? true : false,
      }}
      checkboxSelection={checkbox}
      hideFooter
      disableColumnMenu
      onRowSelectionModelChange={onRowSelection}
      sx={(theme) => ({
        width: "100%",
        backgroundColor: theme.palette.common.white,
      })}
    />
  );
}
