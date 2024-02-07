import { Box, Button, Checkbox, Typography } from "@mui/material";
import * as S from "./real-time.location.style";
import Select from "@/components/Select";
import MdiIcon from "@/components/MdiIcon";
import { mdiMagnify } from "@mdi/js";
import { ForwardedRef, forwardRef } from "react";

interface TopBarProps {}
export default forwardRef(function TopBar(
  {}: TopBarProps,
  ref: ForwardedRef<HTMLDivElement>
) {
  return (
    <Box
      ref={ref}
      sx={(theme) => ({
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        gap: theme.spacing(3),
        padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
        backgroundColor: theme.palette.common.white,
      })}
    >
      <S.LabelWithInput>
        <Typography>사업장</Typography>
        <Select items={[{ label: "전체 선택", value: "1" }]} value="1" />
        <Typography>운행사</Typography>
        <Select items={[{ label: "전체 선택", value: "1" }]} value="1" />
        <Button variant="contained">조회</Button>
      </S.LabelWithInput>
      <S.LabelWithInput>
        <Typography>선택차량 자동추적</Typography>
        <Select items={[{ label: "사용안함", value: "1" }]} value="1" />
      </S.LabelWithInput>
      <S.LabelWithInput>
        <Typography>위치갱신주기 설정</Typography>
        <Select items={[{ label: "5초", value: "1" }]} value="1" />
        <Checkbox checked size="small" sx={{ padding: 0 }} />
        <Typography>운행시간 외 차량보기</Typography>
      </S.LabelWithInput>
      <S.LabelWithInput>
        <Checkbox checked size="small" sx={{ padding: 0 }} />
        <Typography>정거장 표시</Typography>
      </S.LabelWithInput>
      <Button
        variant="contained"
        color="inherit"
        sx={{ display: "flex", gap: 0.5 }}
      >
        <MdiIcon path={mdiMagnify} />
        새창띄우기
      </Button>
    </Box>
  );
});
