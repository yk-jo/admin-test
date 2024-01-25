import { ChartFunction } from "@/types/chart";
import { alpha } from "@mui/material";
import { ChartOptions } from "chart.js";

const options: ChartOptions<"bar"> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
      position: "top" as const,
    },
  },
  scales: {
    x: { grid: { display: false } },
    y: { grid: { display: false } },
  },
};

export const borderRadiusExample: ChartFunction<"bar"> = () => {
  const labels = ["January", "February", "March", "April", "May", "June"];
  return {
    options: {
      ...options,
    },
    data: {
      labels,
      datasets: [
        {
          label: "Fully Rounded",
          data: labels.map(() => Math.random() * 200 - 100),
          borderColor: "#3688fc",
          backgroundColor: alpha("#3688fc", 0.5),
          borderWidth: 2,
          borderRadius: Number.MAX_VALUE,
          borderSkipped: false,
        },
        {
          label: "Small Radius",
          data: labels.map(() => Math.random() * 200 - 100),
          borderColor: "#42d29d",
          backgroundColor: alpha("#42d29d", 0.5),
          borderWidth: 2,
          borderRadius: 5,
          borderSkipped: false,
        },
      ],
    },
  };
};
export const floatingExample: ChartFunction<"bar"> = () => {
  const labels = ["January", "February", "March", "April", "May", "June"];
  return {
    options: {
      ...options,
    },
    data: {
      labels,
      datasets: [
        {
          label: "Fully Rounded",
          data: labels.map(() => Math.random() * 200 - 100),
          backgroundColor: "#3688fc",
        },
        {
          label: "Small Radius",
          data: labels.map(() => Math.random() * 200 - 100),
          backgroundColor: "#42d29d",
        },
      ],
    },
  };
};
export const horizontalExample: ChartFunction<"bar"> = () => {
  const labels = ["January", "February", "March", "April", "May", "June"];
  return {
    options: {
      ...options,
      indexAxis: "y",
    },
    data: {
      labels,
      datasets: [
        {
          label: "Fully Rounded",
          data: labels.map(() => Math.random() * 200 - 100),
          backgroundColor: "#3688fc",
        },
        {
          label: "Small Radius",
          data: labels.map(() => Math.random() * 200 - 100),
          backgroundColor: "#42d29d",
        },
      ],
    },
  };
};
export const stackedExample: ChartFunction<"bar"> = () => {
  const labels = ["January", "February", "March", "April", "May", "June"];
  return {
    options: {
      ...options,
      scales: {
        x: {
          ...options.scales?.x,
          stacked: true,
        },
        y: {
          ...options.scales?.y,
          stacked: true,
        },
      },
    },
    data: {
      labels,
      datasets: [
        {
          label: "Fully Rounded",
          data: labels.map(() => Math.random() * 200 - 100),
          backgroundColor: "#3688fc",
        },
        {
          label: "Small Radius",
          data: labels.map(() => Math.random() * 200 - 100),
          backgroundColor: "#42d29d",
        },
        {
          label: "Small Radius",
          data: labels.map(() => Math.random() * 200 - 100),
          backgroundColor: "#b3bdc6",
        },
      ],
    },
  };
};
export const stackedWithGroupExample: ChartFunction<"bar"> = () => {
  const labels = ["January", "February", "March", "April", "May", "June"];
  return {
    options: {
      ...options,
      interaction: {
        intersect: false,
      },
      scales: {
        x: {
          ...options.scales?.x,
          stacked: true,
        },
        y: {
          ...options.scales?.y,
          stacked: true,
        },
      },
    },
    data: {
      labels,
      datasets: [
        {
          label: "Fully Rounded",
          data: labels.map(() => Math.random() * 200 - 100),
          backgroundColor: "#3688fc",
          stack: "Stack 0",
        },
        {
          label: "Small Radius",
          data: labels.map(() => Math.random() * 200 - 100),
          backgroundColor: "#42d29d",
          stack: "Stack 0",
        },
        {
          label: "Small Radius",
          data: labels.map(() => Math.random() * 200 - 100),
          backgroundColor: "#b3bdc6",
          stack: "Stack 1",
        },
      ],
    },
  };
};
