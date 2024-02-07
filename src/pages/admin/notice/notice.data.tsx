import PathContants from "@/routers/pathConstants";
import { Stack } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import { Link } from "react-router-dom";

export type colType = {
  id: number;
  business: string;
  customer: string;
  type: string;
  title: string;
  writer: string;
  files: number;
  views: number;
  createdAt: string;
  modifiedAt: string;
};

export const columns: (GridColDef & { field: keyof colType })[] = [
  {
    field: "business",
    headerName: "사업장",
    flex: 1,
    headerAlign: "center",
    renderCell: ({ value }) => (
      <Stack alignItems="center" sx={{ width: "100%" }}>
        {value}
      </Stack>
    ),
  },
  {
    field: "customer",
    headerName: "고객사",
    flex: 1,
    headerAlign: "center",
    renderCell: ({ value }) => (
      <Stack alignItems="center" sx={{ width: "100%" }}>
        {value}
      </Stack>
    ),
  },
  {
    field: "type",
    headerName: "분류",
    flex: 1,
    headerAlign: "center",
    renderCell: ({ value }) => (
      <Stack alignItems="center" sx={{ width: "100%" }}>
        {value}
      </Stack>
    ),
  },
  {
    field: "title",
    headerName: "제목",
    flex: 1,
    headerAlign: "center",
    renderCell: ({ value,id }) => (
      <Link to={PathContants.BoardNoticeDetail.replace(":id", id.toString())}>
        {value}
      </Link>
    ),
  },
  {
    field: "writer",
    headerName: "등록자",
    flex: 1,
    headerAlign: "center",
    renderCell: ({ value }) => (
      <Stack alignItems="center" sx={{ width: "100%" }}>
        {value}
      </Stack>
    ),
  },
  {
    field: "files",
    headerName: "파일수",
    flex: 1,
    headerAlign: "center",
    renderCell: ({ value }) => (
      <Stack alignItems="center" sx={{ width: "100%" }}>
        {value}
      </Stack>
    ),
  },
  {
    field: "views",
    headerName: "조회수",
    flex: 1,
    headerAlign: "center",
    renderCell: ({ value }) => (
      <Stack alignItems="center" sx={{ width: "100%" }}>
        {value}
      </Stack>
    ),
  },
  {
    field: "createdAt",
    headerName: "등록일자",
    flex: 1,
    headerAlign: "center",
    renderCell: ({ value }) => (
      <Stack alignItems="center" sx={{ width: "100%" }}>
        {value}
      </Stack>
    ),
  },
  {
    field: "modifiedAt",
    headerName: "수정일자",
    flex: 1,
    headerAlign: "center",
    renderCell: ({ value }) => (
      <Stack alignItems="center" sx={{ width: "100%" }}>
        {value}
      </Stack>
    ),
  },
];
