import {
  ForwardedRef,
  forwardRef,
  useImperativeHandle,
  useLayoutEffect,
  useState,
} from "react";
import { useMapContext } from "@/components/NaverMap/context";
import { Nullable } from "@/types/common";

interface PolylineProps extends Omit<naver.maps.PolylineOptions, "map"> {
  onClick?: (e: naver.maps.PointerEvent) => void;
  onClickableChanged?: (clickable: boolean) => void;
  onDblClick?: (e: naver.maps.PointerEvent) => void;
  onMouseDown?: (e: naver.maps.PointerEvent) => void;
  onMouseOut?: (e: naver.maps.PointerEvent) => void;
  onMouseOver?: (e: naver.maps.PointerEvent) => void;
  onMouseUp?: (e: naver.maps.PointerEvent) => void;
  onVisibleChanged?: (visible: boolean) => void;
  onZIndexChanged?: (zIndex: number) => void;
}
export default forwardRef(function _Polyline(
  { ...rest }: PolylineProps,
  ref: ForwardedRef<naver.maps.Polyline>
) {
  const map = useMapContext();
  const [polyline, setPolyline] = useState<Nullable<naver.maps.Polyline>>(null);

  const events: { [e: string]: Function | undefined } = {
    click: rest.onClick,
    clickable_changed: rest.onClickableChanged,
    dblclick: rest.onDblClick,
    mousedown: rest.onMouseDown,
    mouseout: rest.onMouseOut,
    mouseover: rest.onMouseOver,
    mouseup: rest.onMouseUp,
    visible_changed: rest.onVisibleChanged,
    zIndex_changed: rest.onZIndexChanged,
  };

  useImperativeHandle<Nullable<naver.maps.Polyline>, Nullable<naver.maps.Polyline>>(
    ref,
    () => polyline,
    [polyline]
  );
  useLayoutEffect(() => {
    const _polyline = new naver.maps.Polyline({ map, ...rest });

    setPolyline(_polyline);

    const listener: naver.maps.MapEventListener[] = [];
    if (rest.clickable) {
      Object.keys(events).forEach((event) => {
        const func = events[event];
        if (func) listener.push(_polyline.addListener(event, (e) => func(e)));
      });
    }

    return () => {
      if (listener.length) polyline?.removeListener(listener);
      polyline?.setMap(null);
      setPolyline(null);
    };
  }, []);

  return null;
});
