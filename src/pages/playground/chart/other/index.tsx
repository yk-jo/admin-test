import Card from "@/components/Card";
import GridSystem from "@/components/GridSystem";
import { Box } from "@mui/material";
import { Doughnut, Line, Pie } from "react-chartjs-2";
import {
  doughnutExample,
  pieExample,
  stackedBarLineExample,
} from "./other.data";

export default function PlaygroundChartOther() {
  const doughnut = doughnutExample();
  const pie = pieExample();
  const stackedBarLine = stackedBarLineExample();

  return (
    <Box>
      <GridSystem>
        <GridSystem.Item md={6}>
          <Card title="Doughnut">
            <Box height={320}>
              <Doughnut options={doughnut.options} data={doughnut.data} />
            </Box>
          </Card>
          <Card title="Stacked Bar/Line">
            <Box height={320}>
              <Line options={stackedBarLine.options} data={stackedBarLine.data} />
            </Box>
          </Card>
        </GridSystem.Item>
        <GridSystem.Item md={6}>
          <Card title="Pie">
            <Box height={320}>
              <Pie options={pie.options} data={pie.data} />
            </Box>
          </Card>
        </GridSystem.Item>
      </GridSystem>
    </Box>
  );
}
