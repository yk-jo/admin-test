import { ChartData, ChartOptions, ChartType } from "chart.js";

export type ChartFunction<T extends ChartType = ChartType> = () => {
  options: ChartOptions<T>;
  data: ChartData<T>;
};
