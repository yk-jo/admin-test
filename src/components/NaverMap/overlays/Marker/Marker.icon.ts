import MapMarker from "@/assets/icons/map-marker.png";
import AlertMarkerPng from "@/assets/icons/map-marker-alert-outline.png"

type MarkerIcon =
  | string
  | naver.maps.ImageIcon
  | naver.maps.SymbolIcon
  | naver.maps.HtmlIcon;

export const DefaultMarker: MarkerIcon = {
  url: MapMarker,
  anchor: new naver.maps.Point(24, 48),
  scaledSize: new naver.maps.Size(48, 48),
};

export const AlertMarker: MarkerIcon = {
    url: AlertMarkerPng,
    anchor: new naver.maps.Point(24, 48),
    scaledSize: new naver.maps.Size(48, 48),
  };
  