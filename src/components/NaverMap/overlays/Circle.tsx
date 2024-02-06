import {
  ForwardedRef,
  forwardRef,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { useMapContext, useMarkerContext } from "@/components/NaverMap/context";
import { Nullable } from "@/types/common";

interface CircleProps extends Omit<naver.maps.CircleOptions, "map" | "center"> {
  // Marker 하위에 있을경우, center값 생략 가능
  center?: naver.maps.Coord | naver.maps.CoordLiteral;
  onCenterChanged?: (
    center: naver.maps.Point,
    circle: naver.maps.Circle
  ) => void;
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
export default forwardRef(function _Circle(
  { ...rest }: CircleProps,
  ref: ForwardedRef<naver.maps.Circle>
) {
  const map = useMapContext();
  const marker = useMarkerContext();
  const [circle, setCircle] = useState<Nullable<naver.maps.Circle>>(null);
  const firstEffectRef = useRef(false);

  const events: { [e: string]: Function | undefined } = {
    center_changed: rest.onCenterChanged,
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

  useImperativeHandle<Nullable<naver.maps.Circle>, Nullable<naver.maps.Circle>>(
    ref,
    () => circle,
    [circle]
  );

  useLayoutEffect(() => {
    const center = rest.center || marker?.getPosition();

    if (!center || firstEffectRef.current) return;
    firstEffectRef.current = true; // 최초한번만 핸들링

    const _circle = new naver.maps.Circle({
      map,
      center,
      ...rest,
    });

    setCircle(_circle);

    const listener: naver.maps.MapEventListener[] = [];
    if (rest.clickable) {
      Object.keys(events).forEach((event) => {
        const func = events[event];
        if (func) listener.push(_circle.addListener(event, (e) => func(e)));
      });
    }

    return () => {
      if (listener.length) circle?.removeListener(listener);
    };
  }, [marker]);

  return null;
});
