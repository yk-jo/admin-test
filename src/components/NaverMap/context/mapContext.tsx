import { Nullable } from "@/types/common";
import { ReactNode, createContext, useContext } from "react";

const context = createContext<Nullable<naver.maps.Map>>(null);

export const MapContextProvider = ({
  children,
  value,
}: {
  children: ReactNode;
  value: Nullable<naver.maps.Map>;
}) => {
  return <context.Provider value={value}>{children}</context.Provider>;
};

export const useMapContext = () => {
  const map = useContext(context);
  if (!map) throw new Error("map is not initialized.");

  return map;
};
