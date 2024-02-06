import { Nullable } from "@/types/common";
import { Box } from "@mui/material";
import {
  ForwardedRef,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { useWindowSize } from "react-use";

interface PanoramaProps extends naver.maps.PanoramaOptions {
  onInit?: (panorama: naver.maps.Panorama) => void;
}
export default forwardRef(function _Panorama(
  { onInit, ...rest }: PanoramaProps,
  ref: ForwardedRef<naver.maps.Panorama>
) {
  const firstEffectRef = useRef(false);
  const [panorama, setPanorama] = useState<Nullable<naver.maps.Panorama>>(null);
  const { width, height } = useWindowSize();

  useImperativeHandle<
    Nullable<naver.maps.Panorama>,
    Nullable<naver.maps.Panorama>
  >(ref, () => panorama!, [panorama]);

  useLayoutEffect(() => {
    if (firstEffectRef.current) return;
    firstEffectRef.current = true; // 최초한번만 핸들링

    const listener: naver.maps.MapEventListener[] = [];

    naver.maps.onJSContentLoaded = () => {
      const _panorama = new naver.maps.Panorama("naver-panorama", { ...rest });
      const _listener = _panorama.addListener("init", () => {
        onInit?.(_panorama);
      });
      listener.push(_listener);
      setPanorama(_panorama);
    };

    return () => {
      if (firstEffectRef.current) {
        firstEffectRef.current = false;
        return;
      }
      if (listener.length) panorama?.removeListener(listener);
    };
  }, []);

  useEffect(() => {
    if (panorama) {
      const newSize = new naver.maps.Size(width, height);

      if (!panorama?.getSize().equals(newSize)) {
        panorama?.setSize(new naver.maps.Size(width, height));
      }
    }
  }, [width, height]);

  return <Box id="naver-panorama" sx={{ width: "100%", height: "100vh" }} />;
});
