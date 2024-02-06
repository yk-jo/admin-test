import { useMapContext } from "@/components/NaverMap/context";
import { ReactNode, useLayoutEffect, useRef } from "react";
import { createPortal } from "react-dom";

interface ControlBaseProps {
  position: naver.maps.Position;
  children: ReactNode;
}
export default function _ControlBase({ position,children }: ControlBaseProps) {
  const map = useMapContext();
  const el = useRef<HTMLDivElement>(document.createElement("div"));

  useLayoutEffect(() => {
    if (!map) return;

    (map.controls as any)[position].push(el.current);
  });

  return createPortal(children, el.current);
}
