import {
  Circle,
  ControlBase,
  Ellipse,
  InfoWindow,
  Map,
  Marker,
  Cluster,
  MarkerIcons,
  Polygon,
  Polyline,
  Rectangle,
} from "@/components/NaverMap";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useRef, useState } from "react";
import { useToggle } from "react-use";
import json from "./sample.json";
import PathContants from "@/routers/pathConstants";
import RadioGroup from "@/components/RadioGroup";
import {
  accidentDeath,
  htmlMarker1,
  htmlMarker2,
  htmlMarker3,
  htmlMarker4,
  htmlMarker5,
} from "./sample";

export default function PlaygroundNaverMap() {
  const [open, toggleOpen] = useToggle(false);
  const [testRadio, setTestRadio] = useState("1");
  const mapRef = useRef<naver.maps.Map>(null);
  const originMapSize = useRef<naver.maps.Size>();

  const clusterMarkers = useRef<naver.maps.Marker[]>([]);

  // =============================== Polyline
  const cacheSteps = useRef<any[]>();
  const drawLine = () => {
    if (cacheSteps.current) {
      return _drawPolyline(cacheSteps.current);
    }
    return _drawPolyline(json.routes[0].legs[0].steps);
  };
  function _drawPolyline(steps: any[]) {
    let allPaths: naver.maps.LatLng[][] = [];
    _filterAndCacheSteps(steps)?.forEach((step) => {
      allPaths = allPaths.concat(_getPaths(step.path));
    });

    return allPaths;
  }
  function _filterAndCacheSteps(steps: any[]) {
    cacheSteps.current = steps.filter((step) => !!step.path);

    return cacheSteps.current;
  }
  function _getPaths(path: any) {
    let paths: naver.maps.LatLng[] = [];
    let steps = path.split(" ");
    steps.map((step: any) => {
      var splitStep = step.split(",").map((point: string) => parseFloat(point)),
        latLng = new naver.maps.LatLng(splitStep[1], splitStep[0]);
      paths.push(latLng);
    });
    return paths;
  }
  // =============================== Polyline End

  const toggle = () => {
    if (originMapSize.current) {
      if (open) {
        mapRef.current?.setSize(originMapSize.current);
      } else {
        //펼치기
        mapRef.current?.setSize(
          new naver.maps.Size(
            originMapSize.current.width,
            originMapSize.current.height - 150
          )
        );
      }
    }

    toggleOpen();
  };

  return (
    <div>
      <Map
        ref={mapRef}
        center={new naver.maps.LatLng(37.3658036, 127.1222656)}
        zoomControl
        zoomControlOptions={{
          style: naver.maps.ZoomControlStyle.SMALL,
          position: naver.maps.Position.TOP_LEFT,
        }}
        onInit={(map) => {
          // 맵 초기화
          originMapSize.current = map.getSize();
          map.addListener("rightclick", (e) => {
            // 클릭한 지점 부드럽게 이동 (이걸로 마커 위치 실시간 체크)
            console.log(e.coord);
            map.panTo(e.coord);
          });
        }}
      >
        <ControlBase position={naver.maps.Position.TOP_LEFT}>
          <Button variant="contained" onClick={toggle}>
            토글
          </Button>
        </ControlBase>
        <ControlBase position={naver.maps.Position.TOP_LEFT}>
          <Button
            variant="contained"
            onClick={() => {
              console.log("asdasdsa");
            }}
          >
            !@#
          </Button>
        </ControlBase>

        <Polyline
          path={drawLine() as any}
          strokeColor={"#f91111"}
          strokeWeight={3}
        />

        <Ellipse
          {...{
            bounds: new naver.maps.LatLngBounds(
              new naver.maps.LatLng(37.1793196, 127.6795594),
              new naver.maps.LatLng(37.5398662, 128.4312422)
            ),
            strokeColor: "yellowgreen",
            strokeOpacity: 1,
            strokeWeight: 3,
            fillColor: "yellowgreen",
            fillOpacity: 0.3,
          }}
        />
        <Rectangle
          {...{
            bounds: new naver.maps.LatLngBounds(
              new naver.maps.LatLng(37.1793196, 125.8795594),
              new naver.maps.LatLng(37.5398662, 126.3312422)
            ),
          }}
        />
        <Polygon
          {...{
            paths: [
              [
                new naver.maps.LatLng(37.37544345085402, 127.11224555969238),
                new naver.maps.LatLng(37.37230584065902, 127.10791110992432),
                new naver.maps.LatLng(37.35975408751081, 127.10795402526855),
                new naver.maps.LatLng(37.359924641705476, 127.11576461791992),
                new naver.maps.LatLng(37.35931064479073, 127.12211608886719),
                new naver.maps.LatLng(37.36043630196386, 127.12293148040771),
                new naver.maps.LatLng(37.36354029942161, 127.12310314178465),
                new naver.maps.LatLng(37.365211629488016, 127.12456226348876),
                new naver.maps.LatLng(37.37544345085402, 127.11224555969238),
              ],
              [
                new naver.maps.LatLng(37.368485964153784, 127.10971355438232),
                new naver.maps.LatLng(37.368520071054576, 127.11464881896971),
                new naver.maps.LatLng(37.36350619025713, 127.11473464965819),
                new naver.maps.LatLng(37.363403862670665, 127.1097993850708),
                new naver.maps.LatLng(37.368485964153784, 127.10971355438232),
              ],
            ],
            fillColor: "#69F4F9",
            fillOpacity: 0.3,
            strokeColor: "#0072FF",
            strokeOpacity: 0.6,
            strokeWeight: 3,
            clickable: true,
          }}
        />

        <Marker
          position={new naver.maps.LatLng(37.3606904, 127.1061625)}
          onClick={() => {
            alert("aaaa");
          }}
        />

        <Marker
          position={new naver.maps.LatLng(37.3658036, 127.1222656)}
          icon={MarkerIcons.DefaultMarker}
        >
          <InfoWindow>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                padding: "20px",
              }}
            >
              <Button
                variant="contained"
                onClick={() => {
                  const center = mapRef.current?.getCenter();
                  window.open(
                    `${PathContants.PlaygroundNaverMap_RoadView}?lat=${center?.y}&lng=${center?.x}`,
                    "로드뷰",
                    "width=400px,height=600px"
                  );
                }}
              >
                로드뷰 테스트
              </Button>
              <Box>
                <Typography>구분</Typography>
                <RadioGroup
                  items={[
                    { label: "1", value: "1" },
                    { label: "2", value: "2" },
                  ]}
                  value={testRadio}
                  onChange={(e) => setTestRadio(e.target.value)}
                />
              </Box>

              <Box>
                <Typography>구분</Typography>
                <TextField variant="outlined" />
              </Box>
              <Box>
                <Button variant="outlined">버튼1</Button>
                <Button variant="outlined">버튼2</Button>
              </Box>
            </Box>
          </InfoWindow>
          <Circle
            // center={new naver.maps.LatLng(37.3658036, 127.1222656)}
            radius={200}
            fillColor="#f91111"
            strokeColor="#f91111"
            fillOpacity={0.3}
            clickable
            onClick={(e) => console.log(e)}
            onMouseOver={(e) => console.log(e)}
            onMouseOut={(e) => console.log(e)}
          />
        </Marker>

        <Marker
          position={new naver.maps.LatLng(37.3585229, 127.1010728)}
          icon={MarkerIcons.AlertMarker}
          onClick={(e) => console.log(e)}
          onIconLoaded={(e) => console.log(e)}
        >
          <InfoWindow openEvent="mouseover">
            <div>마우스 오버하면 나옴</div>
          </InfoWindow>
        </Marker>

        {/* 클러스터 관련 */}
        {accidentDeath.searchResult.accidentDeath?.map((item, idx) => {
          return (
            <Marker
              key={idx}
              position={
                new naver.maps.LatLng(Number(item.grd_la), Number(item.grd_lo))
              }
              onIconLoaded={(el) => (clusterMarkers.current[idx] = el!)}
            />
          );
        })}
        <Cluster
          {...{
            minClusterSize: 1,
            maxZoom: 8,
            markers: clusterMarkers.current,
            disableClickZoom: false,
            gridSize: 120,
            icons: [
              htmlMarker1,
              htmlMarker2,
              htmlMarker3,
              htmlMarker4,
              htmlMarker5,
            ],
            indexGenerator: [5, 10, 15, 20, 25],
            stylingFunction: function (clusterMarker: any, count: number) {
              clusterMarker
                .getElement()
                .querySelector("div:first-child").innerText = count;
            },
          }}
        />
      </Map>

      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          transition: "height 300ms",
          height: open ? "150px" : "0px",
          backgroundColor: "blue",
        }}
      ></Box>
    </div>
  );
}
