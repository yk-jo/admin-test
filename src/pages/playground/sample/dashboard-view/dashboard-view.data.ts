import { ChartFunction } from "@/types/chart";
import { GridColDef } from "@mui/x-data-grid";
import { ChartOptions } from "chart.js";
const options: ChartOptions<"line"> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    // tooltip: {
    //   xAlign: "center",
    //   yAlign: "top",
    //   caretSize: 0,
    //   caretPadding: 10,
    //   displayColors: false,
    //   callbacks: {
    //     title: () => "",
    //     label: (tooltipItem) => tooltipItem.formattedValue,
    //   },
    // },
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
          label: "1",
          data,
          borderColor: "#3688fc",
          fill: false,
          cubicInterpolationMode: "monotone",
          tension: 0.4,
        },
        {
          label: "2",
          data,
          borderColor: "#42d29d",
          fill: false,
          tension: 0.4,
        },
        {
          label: "3",
          data,
          borderColor: "#b3bdc6",
          fill: false,
        },
      ],
    },
  };
};

export const doughnutExample: ChartFunction<"doughnut"> = () => {
  return {
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: 75,
      plugins: { legend: { display: true, position: "right" } },
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

export type colType = {
    id: number;
    user: string;
    lead: number;
    deal: number;
    task:number;
  };

export const tableColumns:(GridColDef & { field: keyof colType })[] = [
    { field: "user", headerName: "User", flex: 1 },
    { field: "lead", headerName: "Leads", flex: 1 },
    { field: "deal", headerName: "Deals", flex: 1 },
    { field: "task", headerName: "Tasks", flex: 1 },
]