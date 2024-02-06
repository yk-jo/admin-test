import { useLayoutEffect } from "react";
import { useMapContext } from "../../context";
import { ClusterOptions, MarkerClustering } from "./MarkerClustering";

interface ClusterProps extends Omit<ClusterOptions, "map"> {}
export default function _Cluster({ ...rest }: ClusterProps) {
  const map = useMapContext();

  useLayoutEffect(() => {
    const cluster = new MarkerClustering({ map, ...rest });
  }, []);
  return null;
}
