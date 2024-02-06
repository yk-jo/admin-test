import {
  ForwardedRef,
  forwardRef,
  useImperativeHandle,
  useLayoutEffect,
  useState,
} from "react";
import {
  MarkerContextProvider,
  useMapContext,
} from "@/components/NaverMap/context";
import { Nullable } from "@/types/common";

interface MarkerProps extends Omit<naver.maps.MarkerOptions, "map"> {
  children?: JSX.Element | JSX.Element[];
  onClick?: (e: naver.maps.PointerEvent) => void;
  onIconLoaded?: (marker: naver.maps.Marker) => void;
}
export default forwardRef(function _Marker(
  { children, ...rest }: MarkerProps,
  ref: ForwardedRef<naver.maps.Marker>
) {
  const map = useMapContext();
  const [marker, setMarker] = useState<Nullable<naver.maps.Marker>>(null);

  const events: { [e: string]: Function | undefined } = {
    click: rest.onClick,
    icon_loaded: rest.onIconLoaded,
  };

  useImperativeHandle<Nullable<naver.maps.Marker>, Nullable<naver.maps.Marker>>(
    ref,
    () => marker,
    [marker]
  );

  useLayoutEffect(() => {
    const _marker = new naver.maps.Marker({ map, ...rest });
    setMarker(_marker);

    const listener: naver.maps.MapEventListener[] = [];
    Object.keys(events).forEach((event) => {
      const func = events[event];
      if (func) listener.push(_marker.addListener(event, (e) => func(e)));
    });

    return () => {
      if (listener.length) marker?.removeListener(listener);
      marker?.setMap(null);
      setMarker(null);
    };
  }, []);

  return (
    <MarkerContextProvider value={marker}>{children}</MarkerContextProvider>
  );
});
