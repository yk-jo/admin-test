import { ChartFunction } from "@/types/chart";
import { ChartData, ChartOptions } from "chart.js";

const options: ChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
};

export const doughnutExample: ChartFunction<"doughnut"> = () => {
  return {
    options: {
      ...(options as ChartOptions<"doughnut">),
      cutout: 75,
      plugins: { legend: { display: false } },
    },
    data: {
      labels: ["Direct", "Affilliate", "Sponsored", "E-mail"],
      datasets: [
        {
          data: [300, 135, 48, 154],
          backgroundColor: ["#3688fc", "#42d29d", "#b3bdc6", "#44bbdc"],
          borderColor: "transparent",
          borderWidth: 3,
        },
      ],
    },
  };
};

export const pieExample: ChartFunction<"pie"> = () => {
  return {
    options: {
      ...(options as ChartOptions<"pie">),
      plugins: { legend: { display: false } },
    },
    data: {
      labels: ["Jan", "Feb", "March", "April", "May"],
      datasets: [
        {
          label: "Fully Rounded",
          data: [12, 19, 14, 15, 40],
          backgroundColor: [
            "#3688fc",
            "#42d29d",
            "#b3bdc6",
            "#44bbdc",
            "#f9ba0d",
          ],
        },
      ],
    },
  };
};

export const stackedBarLineExample: ChartFunction<"line"> = () => {
  return {
    options: {
      ...(options as ChartOptions<"line">),
      scales: {
        x: { grid: { display: false } },
        y: { stacked: true, grid: { display: false } },
      },
    },
    data: {
      labels: ["Jan", "Feb", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "Dataset 1",
          data: [10, 20, 35, 18, 15, 25, 22],
          backgroundColor: "#3688fc",
          stack: "combined",
          type: "bar",
        },
        {
          label: "Dataset 2",
          data: [13, 23, 38, 22, 25, 30, 28],
          borderColor: "#42d29d",
          stack: "combined",
        },
      ],
    } as ChartData<"line">,
  };
};
