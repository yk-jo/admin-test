import {
  ForwardedRef,
  forwardRef,
  useImperativeHandle,
  useLayoutEffect,
  useState,
} from "react";
import { useMapContext } from "@/components/NaverMap/context";
import { Nullable } from "@/types/common";

interface RectangleProps extends Omit<naver.maps.RectangleOptions, "map"> {
  onBoundsChanged?: (bounds: naver.maps.Bounds) => void;
  onClick?: (e: naver.maps.PointerEvent) => void;
  onClickableChanged?: (clickable: boolean) => void;
  onDblClick?: (e: naver.maps.PointerEvent) => void;
  onMouseDown?: (e: naver.maps.PointerEvent) => void;
  onMouseOut?: (e: naver.maps.PointerEvent) => void;
  onMouseOver?: (e: naver.maps.PointerEvent) => void;
  onMouseUp?: (e: naver.maps.PointerEvent) => void;
  onRadiusChanged?: (radius: number) => void;
  onVisibleChanged?: (visible: boolean) => void;
  onZIndexChanged?: (zIndex: number) => void;
}
export default forwardRef(function _Rectangle(
  { ...rest }: RectangleProps,
  ref: ForwardedRef<naver.maps.Rectangle>
) {
  const map = useMapContext();
  const [rectangle, setRectangle] = useState<Nullable<naver.maps.Rectangle>>(null);

  const events: { [e: string]: Function | undefined } = {
    bounds_changed: rest.onBoundsChanged,
    click: rest.onClick,
    clickable_changed: rest.onClickableChanged,
    dblclick: rest.onDblClick,
    mousedown: rest.onMouseDown,
    mouseout: rest.onMouseOut,
    mouseover: rest.onMouseOver,
    mouseup: rest.onMouseUp,
    radius_changed: rest.onRadiusChanged,
    visible_changed: rest.onVisibleChanged,
    zIndex_changed: rest.onZIndexChanged,
  };

  useImperativeHandle<Nullable<naver.maps.Rectangle>, Nullable<naver.maps.Rectangle>>(
    ref,
    () => rectangle,
    [rectangle]
  );

  useLayoutEffect(() => {
    const _rectangle = new naver.maps.Rectangle({ map, ...rest });
    setRectangle(_rectangle);

    const listener: naver.maps.MapEventListener[] = [];
    if (rest.clickable) {
      Object.keys(events).forEach((event) => {
        const func = events[event];
        if (func) listener.push(_rectangle.addListener(event, (e) => func(e)));
      });
    }

    return () => {
      if (listener.length) rectangle?.removeListener(listener);
      rectangle?.setMap(null);
      setRectangle(null);
    };
  }, []);

  return null;
});
