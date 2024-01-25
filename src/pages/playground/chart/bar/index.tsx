import Card from "@/components/Card";
import GridSystem from "@/components/GridSystem";
import { Box } from "@mui/material";
import { Bar } from "react-chartjs-2";
import {
  borderRadiusExample,
  floatingExample,
  horizontalExample,
  stackedExample,
  stackedWithGroupExample,
} from "./bar.data";

export default function PlaygroundChartBar() {
  const borderRadius = borderRadiusExample();
  const floating = floatingExample();
  const horizontal = horizontalExample();
  const stacked = stackedExample();
  const stackedWithGroup = stackedWithGroupExample();
  return (
    <Box>
      <GridSystem>
        <GridSystem.Item md={6}>
          <Card title="Border Radius">
            <Box height={320}>
              <Bar options={borderRadius.options} data={borderRadius.data} />
            </Box>
          </Card>
          <Card title="Horizontal">
            <Box height={320}>
              <Bar options={horizontal.options} data={horizontal.data} />
            </Box>
          </Card>
          <Card title="Stacked With Groups">
            <Box height={320}>
              <Bar
                options={stackedWithGroup.options}
                data={stackedWithGroup.data}
              />
            </Box>
          </Card>
        </GridSystem.Item>
        <GridSystem.Item md={6}>
          <Card title="Floating">
            <Box height={320}>
              <Bar options={floating.options} data={floating.data} />
            </Box>
          </Card>
          <Card title="Stacked">
            <Box height={320}>
              <Bar options={stacked.options} data={stacked.data} />
            </Box>
          </Card>
        </GridSystem.Item>
      </GridSystem>
    </Box>
  );
}
