import { Box, Button, Stack, Typography } from "@mui/material";
import { useState } from "react";
import dayjs from "dayjs";

import { DateRangePicker } from "@/components/Date";
import PageHeader from "@/components/PageHeader";
import SearchFilter from "@/components/SearchFilter";
import Table from "@/components/Table";

import { RangeDateType } from "@/types/date";
import { columns } from "./notice.data";
import { colType } from "./notice.data";
import Select from "@/components/Select";
import { Input } from "@/components/Input";
import { useNavigate } from "react-router-dom";
import PathContants from "@/routers/pathConstants";

export default function Notice() {
  const [page, setPage] = useState<number>(1);
  const [searchByBusiness, setSearchByBusiness] = useState<string>("1");
  const [searchByCustomer, setSearchByCustomer] = useState<string>("1");
  const [searchType, setSearchType] = useState<string>("1");
  const [searchValue, setSearchValue] = useState<string>("");
  const [range, setRange] = useState<RangeDateType>({ start: null, end: null });

  const navigate = useNavigate();
  const rows: colType[] = [
    {
      id: 0,
      business: "계동사옥",
      customer: "-",
      type: "공지사항",
      title: "공지사항...",
      writer: "씨엘",
      files: 0,
      views: 1,
      createdAt: dayjs().format("YYYY.MM.DD"),
      modifiedAt: "-",
    },
    {
      id: 1,
      business: "계동사옥",
      customer: "-",
      type: "공지사항",
      title: "테스트 입니다",
      writer: "씨엘",
      files: 0,
      views: 3,
      createdAt: dayjs().format("YYYY.MM.DD"),
      modifiedAt: "-",
    },
    {
      id: 2,
      business: "마북연구단지",
      customer: "현대건설",
      type: "공지사항",
      title: "공지사항2",
      writer: "씨엘",
      files: 0,
      views: 10,
      createdAt: dayjs().format("YYYY.MM.DD"),
      modifiedAt: "-",
    },
    {
      id: 3,
      business: "계동사옥",
      customer: "기아자동차",
      type: "공지사항",
      title: "테스트 입니다 2",
      writer: "씨엘",
      files: 0,
      views: 8,
      createdAt: dayjs().format("YYYY.MM.DD"),
      modifiedAt: "-",
    },
    {
      id: 4,
      business: "계동사옥",
      customer: "기아자동차",
      type: "공지사항",
      title: "공지사항입니다만...",
      writer: "씨엘",
      files: 3,
      views: 5,
      createdAt: dayjs().format("YYYY.MM.DD"),
      modifiedAt: "-",
    },
    {
      id: 5,
      business: "계동사옥",
      customer: "현대자동차",
      type: "공지사항",
      title: "공지합니다",
      writer: "씨엘",
      files: 2,
      views: 10,
      createdAt: dayjs().format("YYYY.MM.DD"),
      modifiedAt: "-",
    },
  ];

  const selectOptions = [
    { label: "1111", value: "1" },
    { label: "2222", value: "2" },
    { label: "3333", value: "3" },
    { label: "4444", value: "4" },
    { label: "5555", value: "5" },
  ];

  return (
    <Box>
      <PageHeader
        title="공지 사항"
        breadcrumbItems={[{ label: "Home" }, { label: "PageView" }]}
      />

      <SearchFilter>
        <SearchFilter.Row title="검색 기준">
          <Stack direction="row" gap={1}>
            <Select
              items={selectOptions}
              value={searchByBusiness}
              onChange={(e) => setSearchByBusiness(e.target.value)}
            />
            <Select
              items={selectOptions}
              value={searchByCustomer}
              onChange={(e) => setSearchByCustomer(e.target.value)}
            />
          </Stack>
        </SearchFilter.Row>
        <SearchFilter.Row title="검색 정보">
          <Stack direction="row" gap={1}>
            <Select
              items={selectOptions}
              value={searchType}
              onChange={(e) => setSearchType(e.target.value)}
            />
            <Input
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </Stack>
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

      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ mt: 4, mb: 2 }}
      >
        <Typography>전체: {rows.length}</Typography>
        <Button
          variant="contained"
          size="small"
          onClick={() => navigate(PathContants.BoardNoticeCreate)}
        >
          신규등록
        </Button>
      </Stack>

      <Table
        columns={columns}
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
