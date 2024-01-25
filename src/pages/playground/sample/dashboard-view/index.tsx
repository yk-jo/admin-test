import Card from "@/components/Card";
import MdiIcon from "@/components/MdiIcon";
import { mdiBell, mdiBookAlertOutline, mdiListBoxOutline } from "@mdi/js";
import { Box, Typography } from "@mui/material";
import { Doughnut, Line } from "react-chartjs-2";
import {
  doughnutExample,
  interpolationExample,
  tableColumns,
} from "./dashboard-view.data";
import { useMemo } from "react";
import Table from "@/components/Table";

export default function PlaygroundDashboardView() {
  const interpolation = useMemo(interpolationExample, []);
  const doughnut = useMemo(doughnutExample, []);
  return (
    <Box>
      <Box
        display={"grid"}
        gap={2}
        gridTemplateColumns={{
          lg: "repeat(4,1fr)",
          md: "1fr 1fr",
          sx: "1fr",
        }}
        sx={{ mb: 3 }}
      >
        <Card title="Sample1" action={<MdiIcon path={mdiBell} />}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Card>
        <Card title="Sample2">
          <Typography variant="h3">
            3,000 <span className="mdi mdi-currency-usd" />
          </Typography>
        </Card>
        <Card title="Sample3" action={<MdiIcon path={mdiBookAlertOutline} />}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Card>
        <Card>
          <Box sx={{ margin: "auto", textAlign: "center" }}>
            <MdiIcon path={mdiListBoxOutline} size={1.5} />
            <Typography variant="h3">33</Typography>
            <Typography variant="h5">Total</Typography>
          </Box>
        </Card>
      </Box>

      <Box
        display={"grid"}
        gridTemplateColumns={{ lg: "1fr 1fr", md: "1fr" }}
        gap={2}
        sx={{ mb: 3 }}
      >
        <Card title="통계">
          <Box height={320}>
            <Line options={interpolation.options} data={interpolation.data} />
          </Box>
        </Card>
        <Card title="Doughnut">
          <Box height={320}>
            <Doughnut options={doughnut.options} data={doughnut.data} />
          </Box>
        </Card>
      </Box>

      <Box>
        <Card>
          <Table
            columns={tableColumns}
            rows={[
              {
                id: 1,
                user: "asd",
                lead: 10,
                deal: 10,
                task: 30,
              },
              {
                id: 2,
                user: "test",
                lead: 13,
                deal: 103,
                task: 302,
              },
            ]}
            pagination
            page={1}
            limit={20}
            total={1100}
          />
        </Card>
      </Box>
    </Box>
  );
}
