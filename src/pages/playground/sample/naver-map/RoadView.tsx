import { Panorama } from "@/components/NaverMap";
import { useRef } from "react";
import { useSearchParams } from "react-router-dom";

export default function RoadView() {
  const panoramaRef = useRef<naver.maps.Panorama>();
  const [searchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  return (
    <Panorama
      position={new naver.maps.LatLng(Number(lat), Number(lng))}
      flightSpot={false}
      onInit={(p) => {
        panoramaRef.current = p;
        console.log(p);
      }}
    />
  );
}
