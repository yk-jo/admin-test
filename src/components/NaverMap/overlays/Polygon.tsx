import {
  ForwardedRef,
  forwardRef,
  useImperativeHandle,
  useLayoutEffect,
  useState,
} from "react";
import { useMapContext } from "@/components/NaverMap/context";
import { Nullable } from "@/types/common";

interface PolygonProps extends Omit<naver.maps.PolygonOptions, "map"> {
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
export default forwardRef(function _Polygon(
  { ...rest }: PolygonProps,
  ref: ForwardedRef<naver.maps.Polygon>
) {
  const map = useMapContext();
  const [polygon, setPolygon] = useState<Nullable<naver.maps.Polygon>>(null);

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

  useImperativeHandle<
    Nullable<naver.maps.Polygon>,
    Nullable<naver.maps.Polygon>
  >(ref, () => polygon, [polygon]);

  useLayoutEffect(() => {
    const _polygon = new naver.maps.Polygon({ map, ...rest });

    setPolygon(_polygon);

    const listener: naver.maps.MapEventListener[] = [];
    if (rest.clickable) {
      Object.keys(events).forEach((event) => {
        const func = events[event];
        if (func) listener.push(_polygon.addListener(event, (e) => func(e)));
      });
    }

    return () => {
      if (listener.length) polygon?.removeListener(listener);
      polygon?.setMap(null);
      setPolygon(null);
    };
  }, []);

  return null;
});
