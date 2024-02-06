import { Nullable } from "@/types/common";
import { createContext, useContext } from "react";

const context = createContext<Nullable<naver.maps.Marker>>(null);

export const MarkerContextProvider = ({
  children,
  value,
}: {
  children?: JSX.Element | JSX.Element[];
  value: Nullable<naver.maps.Marker>;
}) => {
  return <context.Provider value={value}>{children}</context.Provider>;
};

export const useMarkerContext = () => {
  const marker = useContext(context);
  return marker;
};
