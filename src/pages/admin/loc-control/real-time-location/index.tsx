import { Map } from "@/components/NaverMap";
import { appBarHeight } from "@/config";
import { Box, Button, Typography } from "@mui/material";
import { useEffect, useRef } from "react";
import { useWindowSize } from "react-use";
import * as S from "./real-time.location.style";
import CustomSwipableDrawer from "@/components/CustomSwipableDrawer";
import TopBar from "./TopBar";
import Select from "@/components/Select";
import { Input } from "@/components/Input";
import MdiIcon from "@/components/MdiIcon";
import { mdiAlert } from "@mdi/js";
import CheckboxGroup from "@/components/CheckGroup";
import Table from "@/components/Table";

export default function RealTimeLocation() {
  const mapRef = useRef<naver.maps.Map>(null);
  const topBarRef = useRef<HTMLDivElement>(null);
  const { width, height } = useWindowSize();

  useEffect(() => {
    if (mapRef.current && topBarRef.current) {
      mapRef.current.setSize(
        new naver.maps.Size(
          width,
          height - appBarHeight - topBarRef.current.clientHeight
        )
      );
    }
  }, [width, height]);

  return (
    <Box>
      <TopBar ref={topBarRef} />
      <Box display={"flex"}>
        <Box>
          <CustomSwipableDrawer>
            {/* 검색필터 */}
            <Box
              sx={(theme) => ({
                backgroundColor: theme.palette.grey[100],
                p: 2,
              })}
            >
              <Typography variant="body2" fontWeight={600}>
                ※ 차량에 배차된 노선은 운행(배차)시간에 자동 적용되어 표시되며,
                노선검색은 해당 노선의 운행(배차) 시간에만 조회됩니다.
              </Typography>
              <Box
                sx={{ mt: 1, display: "flex", flexDirection: "column", gap: 1 }}
              >
                <S.LabelWithInput>
                  <Typography sx={{ width: 100 }}>근무구분</Typography>
                  <Select
                    items={[{ label: "근무구분 없음", value: "1" }]}
                    value="1"
                    fullWidth
                  />
                </S.LabelWithInput>
                <S.LabelWithInput>
                  <Typography sx={{ width: 100 }}>출퇴근 구분</Typography>
                  <Select
                    items={[{ label: "전체", value: "1" }]}
                    value="1"
                    fullWidth
                  />
                </S.LabelWithInput>
                <S.LabelWithInput>
                  <Typography sx={{ width: 100 }}>노선명</Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      width: "100%",
                    }}
                  >
                    <Input />
                    <Button variant="contained">검색</Button>
                  </Box>
                </S.LabelWithInput>
              </Box>
            </Box>
            {/* 리스트 필터 */}
            <Box
              sx={(theme) => ({
                padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
                display: "flex",
                justifyContent: "space-between",
              })}
            >
              <Button color="inherit">
                <MdiIcon path={mdiAlert} color="#f44336" />
                배차 0/0
              </Button>
              <Button color="inherit">
                <MdiIcon path={mdiAlert} color="#888888" />
                사고 0/0
              </Button>
              <Button color="inherit">
                <MdiIcon path={mdiAlert} color="#4caf50" />
                지연 0/0
              </Button>
              <Button color="inherit">
                <MdiIcon path={mdiAlert} color="#ffcd38" />
                통신두절 0/0
              </Button>
            </Box>
            <Box sx={(theme) => ({ padding: `0 ${theme.spacing(2)}` })}>
              <CheckboxGroup
                items={[
                  { label: "차량 선택", value: "selectCar" },
                  { label: "배차된 노선만 보기", value: "checkIsDispatched" },
                  { label: "전체 차량명 표시", value: "showCarLabel" },
                ]}
              />
            </Box>
            {/* 리스트 */}
            <Table
              density="compact"
              type="force-grid"
              columns={[
                { field: "id", headerName: "ID", flex: 1 },
                {
                  field: "data",
                  headerName: "데이터컬럼 예시",
                  flex: 1,
                },
              ]}
              rows={[{ id: 1, data: "123" }]}
            />
          </CustomSwipableDrawer>
        </Box>
        <Box
          sx={{
            width,
            height:
              height - appBarHeight - (topBarRef.current?.clientHeight || 0),
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h1" fontWeight={700}>
            지도 영역
          </Typography>
        </Box>
        {/* <Map
          ref={mapRef}
          center={new naver.maps.LatLng(37.3658036, 127.1222656)}
          zoomControl
          zoomControlOptions={{
            style: naver.maps.ZoomControlStyle.SMALL,
            position: naver.maps.Position.TOP_LEFT,
          }}
          onInit={(map) => {
            map.setSize(
              new naver.maps.Size(
                width,
                height - appBarHeight - (topBarRef.current?.clientHeight || 0)
              )
            );
          }}
        ></Map> */}
      </Box>
    </Box>
  );
}
