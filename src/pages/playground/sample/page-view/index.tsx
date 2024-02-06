import { DateRangePicker } from "@/components/Date";
import { Input } from "@/components/Input";
import RadioGroup from "@/components/RadioGroup";
import SearchFilter from "@/components/SearchFilter";
import { Box } from "@mui/material";
import PageHeader from "@/components/PageHeader";
import Table from "@/components/Table";
import { colType, columns } from "./page-view.data";
import dayjs from "dayjs";
import { useMemo, useState } from "react";
import { GridRenderCellParams } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import PathContants from "@/routers/pathConstants";
import { RangeDateType } from "@/types/date";

export default function PlaygroundSamplePageView() {
  const [page, setPage] = useState<number>(1);
  const [keyword, setKeyword] = useState<string>("");
  const [radio, setRadio] = useState<string>("all");
  const [range, setRange] = useState<RangeDateType>({ start: null, end: null });

  const rows: colType[] = [
    {
      id: 1,
      history: "asdasd",
      status: "enable",
      isSubscribe: true,
      createdAt: dayjs("2023-01-02").toISOString(),
    },
    {
      id: 2,
      history: "asdasd",
      status: "enable",
      isSubscribe: true,
      createdAt: dayjs("2023-01-02").toISOString(),
    },
    {
      id: 3,
      history: "asdasd",
      status: "enable",
      isSubscribe: true,
      createdAt: dayjs("2023-01-02").toISOString(),
    },
    {
      id: 4,
      history: "asdasd",
      status: "enable",
      isSubscribe: true,
      createdAt: dayjs("2023-01-02").toISOString(),
    },
    {
      id: 5,
      history: "asdasd",
      status: "enable",
      isSubscribe: true,
      createdAt: dayjs("2023-01-02").toISOString(),
    },
    {
      id: 6,
      history: "asdasd",
      status: "enable",
      isSubscribe: true,
      createdAt: dayjs("2023-01-02").toISOString(),
    },
  ];

  const _columns = useMemo(() => {
    return columns.map((c) => {
      if (c.field === "history") {
        return {
          ...c,
          renderCell: (params: GridRenderCellParams) => {
            return (
              <Link
                to={PathContants.PlaygroundSamplePageViewDetail.replace(
                  ":id",
                  params.row.id
                )}
              >
                {params.value}
              </Link>
            );
          },
        };
      } else return c;
    });
  }, []);

  return (
    <Box>
      <PageHeader
        title="페이지 관리"
        breadcrumbItems={[{ label: "Home" }, { label: "PageView" }]}
      />

      <SearchFilter>
        <SearchFilter.Row title="검색어">
          <Input
            placeholder="검색어를 입력하세요."
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </SearchFilter.Row>
        <SearchFilter.Row title="활성 상태">
          <RadioGroup
            items={[
              { label: "전체", value: "all" },
              { label: "활성", value: "enable" },
              { label: "비활성", value: "disable" },
            ]}
            value={radio}
            onChange={(e) => setRadio(e.target.value)}
          />
        </SearchFilter.Row>
        <SearchFilter.Row title="가입일">
          <DateRangePicker
            fullWidth
            start={range.start}
            end={range.end}
            onChange={(t, v) => {
              if (t === "all") setRange({ start: v, end: v });
              else setRange({ ...range, [t]: v });
            }}
          />
        </SearchFilter.Row>
      </SearchFilter>

      <Box height={24} />

      <Table
        columns={_columns}
        rows={rows}
        pagination
        page={page}
        total={121}
        limit={20}
        onChangePage={setPage}
        checkbox
      />
    </Box>
  );
}
