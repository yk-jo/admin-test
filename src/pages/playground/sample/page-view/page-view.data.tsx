import { Chip } from "@mui/material";
import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";

export type colType = {
  id: number;
  status: "enable" | "disable";
  history: string;
  createdAt: string;
  isSubscribe: boolean;
};

export const columns: (GridColDef & { field: keyof colType })[] = [
  { field: "id", headerName: "ID", flex: 1 },
  {
    field: "status",
    headerName: "활성 상태",
    flex: 1,
    renderCell: (params: GridRenderCellParams) => {
      let color = "error";
      if (params.value === "enable") color = "success";

      return <Chip color={color as any} label={params.value} />;
    },
  },
  { field: "history", headerName: "최근 로그인 정보", width: 130, flex: 1 },
  {
    field: "createdAt",
    headerName: "가입일",
    flex: 1,
  },
  {
    field: "isSubscribe",
    headerName: "구독중 여부",
    flex: 1,
  },
];
