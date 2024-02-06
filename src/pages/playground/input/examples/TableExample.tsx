import Table from "@/components/Table";
import { Box } from "@mui/material";
import {
  GridColDef,
  GridRenderCellParams,
  GridValueGetterParams,
} from "@mui/x-data-grid";
import { useState } from "react";

type colType = "id" | "firstName" | "lastName" | "fullName" | "age";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", flex: 1 },
  {
    field: "firstName",
    headerName: "First name",
    flex: 2,
    renderCell: (params: GridRenderCellParams) => <Box>{params.value?.a}</Box>,
  },
  { field: "lastName", headerName: "Last name", flex: 2 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    flex: 1,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    flex: 4,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

const rows: { [k in colType]: any | undefined }[] = [
  {
    id: 1,
    lastName: "Snow",
    firstName: { a: "123" },
    age: 35,
    fullName: undefined,
  },
  {
    id: 2,
    lastName: "Lannister",
    firstName: "Cersei",
    age: 42,
    fullName: undefined,
  },
  {
    id: 3,
    lastName: "Lannister",
    firstName: "Jaime",
    age: 45,
    fullName: undefined,
  },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16, fullName: undefined },
  {
    id: 5,
    lastName: "Targaryen",
    firstName: "Daenerys",
    age: null,
    fullName: undefined,
  },
  {
    id: 6,
    lastName: "Melisandre",
    firstName: null,
    age: 150,
    fullName: undefined,
  },
  {
    id: 7,
    lastName: "Clifford",
    firstName: "Ferrara",
    age: 44,
    fullName: undefined,
  },
  {
    id: 8,
    lastName: "Frances",
    firstName: "Rossini",
    age: 36,
    fullName: undefined,
  },
  {
    id: 9,
    lastName: "Roxie",
    firstName: "Harvey",
    age: 65,
    fullName: undefined,
  },
];

export default function TableExample() {
  const [page, setPage] = useState<number>(1);
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"flex-start"}
      gap={1}
    >
      <Table
        columns={columns}
        rows={rows}
        pagination
        page={page}
        total={121}
        limit={20}
        onChangePage={setPage}
      />
      <Table
        columns={columns}
        columnGroupingModel={[
          {
            groupId: "group1",
            children: [{ field: "firstName" }, { field: "lastName" }],
            headerAlign: "center",
          },
        ]}
        rows={rows}
        pagination
        page={page}
        total={121}
        limit={20}
        onChangePage={setPage}
      />
    </Box>
  );
}
