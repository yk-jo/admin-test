import GridSystem from "@/components/GridSystem";
import { Box } from "@mui/material";
import { Line } from "react-chartjs-2";
import {
  interpolationExample,
  lineExample,
  multiAxesExample,
} from "./line.data";
import Card from "@/components/Card";

export default function PlaygroundChartLine() {
  const interpolation = interpolationExample();
  const line = lineExample();
  const multi = multiAxesExample();

  return (
    <Box>
      <GridSystem>
        <GridSystem.Item md={6}>
          <Card title="Interpolation">
            <Box height={320}>
              <Line options={interpolation.options} data={interpolation.data} />
            </Box>
          </Card>
          <Card title="Multi-Axes">
            <Box height={320}>
              <Line options={multi.options} data={multi.data} />
            </Box>
          </Card>
        </GridSystem.Item>
        <GridSystem.Item md={6}>
          <Card title="Floating">
            <Box height={320}>
              <Line options={line.options} data={line.data} />
            </Box>
          </Card>
        </GridSystem.Item>
      </GridSystem>
    </Box>
  );
}
