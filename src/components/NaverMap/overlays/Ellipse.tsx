import {
  ForwardedRef,
  forwardRef,
  useImperativeHandle,
  useLayoutEffect,
  useState,
} from "react";
import { useMapContext } from "@/components/NaverMap/context";
import { Nullable } from "@/types/common";

interface EllipseProps extends Omit<naver.maps.EllipseOptions, "map"> {
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
export default forwardRef(function _Ellipse(
  { ...rest }: EllipseProps,
  ref: ForwardedRef<naver.maps.Ellipse>
) {
  const map = useMapContext();
  const [ellipse, setEllipse] = useState<Nullable<naver.maps.Ellipse>>(null);

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

  useImperativeHandle<Nullable<naver.maps.Ellipse>, Nullable<naver.maps.Ellipse>>(
    ref,
    () => ellipse,
    [ellipse]
  );

  useLayoutEffect(() => {
    const _ellipse = new naver.maps.Ellipse({ map, ...rest });
    setEllipse(_ellipse);

    const listener: naver.maps.MapEventListener[] = [];
    if (rest.clickable) {
      Object.keys(events).forEach((event) => {
        const func = events[event];
        if (func) listener.push(_ellipse.addListener(event, (e) => func(e)));
      });
    }

    return () => {
      if (listener.length) ellipse?.removeListener(listener);
      ellipse?.setMap(null);
      setEllipse(null);
    };
  }, []);

  return null;
});
