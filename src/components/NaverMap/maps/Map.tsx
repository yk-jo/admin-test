import {
  ForwardedRef,
  PropsWithChildren,
  forwardRef,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { Box } from "@mui/material";
import { appBarHeight } from "@/config";
import { MapContextProvider } from "@/components/NaverMap/context";
import { Nullable } from "@/types/common";

interface MapProps extends naver.maps.MapOptions, PropsWithChildren {
  onInit?: (map: naver.maps.Map) => void;
}

export default forwardRef(function _Map(
  { children, onInit, ...rest }: MapProps,
  ref: ForwardedRef<naver.maps.Map>
) {
  const firstEffectRef = useRef(false);
  const [map, setMap] = useState<Nullable<naver.maps.Map>>(null);
  const [init, setInit] = useState(false);

  useImperativeHandle<Nullable<naver.maps.Map>, Nullable<naver.maps.Map>>(
    ref,
    () => map,
    [map]
  );

  useLayoutEffect(() => {
    if (firstEffectRef.current) return;
    firstEffectRef.current = true; // 최초한번만 핸들링

    const _map = new naver.maps.Map("naver-map", { ...rest });
    const listener = _map.addListener("init", () => {
      setInit(true);
      onInit?.(_map);
    });
    setMap(_map);

    return () => {
      if (firstEffectRef.current) {
        firstEffectRef.current = false;
        return;
      }
      map?.removeListener(listener);
      map?.destroy();
    };
  }, []);

  return (
    <Box
      id="naver-map"
      sx={{
        position: "relative",
        width: "100%",
        transition: "height 300ms",
        height: `calc(100vh - ${appBarHeight}px)`,
      }}
    >
      <MapContextProvider value={map}>
        {init && map && children}
      </MapContextProvider>
    </Box>
  );
});
