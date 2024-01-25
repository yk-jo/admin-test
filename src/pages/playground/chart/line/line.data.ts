import { ChartFunction } from "@/types/chart";
import { alpha } from "@mui/material";
import { ChartOptions } from "chart.js";

const options: ChartOptions<"line"> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    tooltip: {
      xAlign: "center",
      yAlign: "top",
      caretSize: 0,
      caretPadding: 10,
      displayColors: false,
      callbacks: {
        title: () => "",
        label: (tooltipItem) => tooltipItem.formattedValue,
      },
    },
  },
  interaction: {
    intersect: false,
  },
  scales: {
    x: {
      display: true,
      grid: { display: false },
      title: {
        display: true,
      },
    },
    y: {
      display: true,
      grid: { display: false },
      title: {
        display: true,
        text: "Value",
      },
      suggestedMin: -10,
      suggestedMax: 200,
    },
  },
};

export const interpolationExample: ChartFunction<"line"> = () => {
  const labels = [];
  for (let i = 0; i < 12; ++i) {
    labels.push(i.toString());
  }
  const data = labels.map((_, index) =>
    index === 3 ? NaN : Math.random() * 200
  );
  return {
    options: {
      ...options,
    },
    data: {
      labels: labels,
      datasets: [
        {
          label: "Cubic interpolation (monotone)",
          data,
          borderColor: "#3688fc",
          fill: false,
          cubicInterpolationMode: "monotone",
          tension: 0.4,
        },
        {
          label: "Cubic interpolation",
          data,
          borderColor: "#42d29d",
          fill: false,
          tension: 0.4,
        },
        {
          label: "Linear interpolation (default)",
          data,
          borderColor: "#b3bdc6",
          fill: false,
        },
      ],
    },
  };
};
export const lineExample: ChartFunction<"line"> = () => {
  const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  return {
    options: {
      ...options,
      scales: {
        x: { grid: { display: false } },
        y: { grid: { display: false } },
      },
    },
    data: {
      labels: labels,
      datasets: [
        {
          label: "Fully Rounded",
          data: labels.map(() => Math.random() * 150),
          borderColor: "#3688fc",
          backgroundColor: alpha("#3688fc", 0.3),
          fill: true,
          tension: 0.3,
        },
        {
          label: "Small Radius",
          data: labels.map(() => Math.random() * 150),
          fill: false,
          borderColor: "#42d29d",
          borderDash: [5, 5],
          tension: 0.3,
        },
      ],
    },
  };
};
export const multiAxesExample: ChartFunction<"line"> = () => {
  const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  return {
    options: {
      ...options,
      scales: {
        y: {
          type: "linear",
          display: true,
          position: "left",
          grid: { display: false },
        },
        y1: {
          type: "linear",
          display: true,
          position: "right",

          // grid line settings
          grid: {
            display: false,
            drawOnChartArea: false, // only want the grid lines for one axis to show up
          },
        },
      },
    },
    data: {
      labels: labels,
      datasets: [
        {
          label: "Fully Rounded",
          data: labels.map(() => Math.random() * 150),
          borderColor: "#3688fc",
          tension: 0.3,
          yAxisID: "y",
        },
        {
          label: "Small Radius",
          data: labels.map(() => Math.random() * 150),
          borderColor: "#42d29d",
          borderDash: [5, 5],
          tension: 0.3,
          yAxisID: "y1",
        },
      ],
    },
  };
};
