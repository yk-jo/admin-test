import { useLayoutEffect, useRef } from "react";
import { Box, IconButton } from "@mui/material";
import MdiIcon from "@/components/MdiIcon";
import { useMapContext, useMarkerContext } from "@/components/NaverMap/context";
import { mdiClose } from "@mdi/js";
import { createPortal } from "react-dom";
import { Nullable } from "@/types/common";

interface InfoWindowProps
  extends Omit<naver.maps.InfoWindowOptions, "content"> {
  children: JSX.Element;
  openEvent?: "click" | "mouseover";
  closable?: boolean;
}
export default function _InfoWindow({
  children,
  openEvent = "click",
  closable,
  // InfoWindowOptions
  borderColor = "#333",
  backgroundColor = "#fff",
  ...rest
}: InfoWindowProps) {
  const map = useMapContext();
  const marker = useMarkerContext();
  const el = useRef<HTMLDivElement>(document.createElement("div"));
  const infoWindow = useRef<Nullable<naver.maps.InfoWindow>>(null);

  useLayoutEffect(() => {
    if (!map || !marker) return;

    if (!infoWindow.current) {
      infoWindow.current = new naver.maps.InfoWindow({
        content: el.current,
        borderColor,
        backgroundColor,
        ...rest,
      });
    }

    const listener: naver.maps.MapEventListener[] = [];

    if (openEvent === "click") {
      const _listener = marker.addListener("click", (e) => {
        if (infoWindow.current?.getMap()) {
          infoWindow.current?.close();
        } else {
          infoWindow.current?.open(map, marker);
        }
      });
      listener.push(_listener);
    } else if (openEvent === "mouseover") {
      const _listener = marker.addListener("mouseover", (e) => {
        if (!infoWindow.current?.getMap()) {
          infoWindow.current?.open(map, marker);
        }
      });
      listener.push(_listener);

      const _listener2 = marker.addListener("mouseout", (e) => {
        if (infoWindow.current?.getMap()) {
          infoWindow.current?.close();
        }
      });
      listener.push(_listener2);
    }

    return () => {
      if (listener.length) marker.removeListener(listener);
    };
  }, [marker, children]);

  return createPortal(
    <Box>
      {closable && (
        <IconButton onClick={() => infoWindow.current?.close()}>
          <MdiIcon path={mdiClose} />
        </IconButton>
      )}
      {children}
    </Box>,
    el.current
  );
}
