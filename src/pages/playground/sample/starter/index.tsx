import { Box } from "@mui/material";
import PageHeader from "@/components/PageHeader";

export default function PlaygroundSampleStarter() {
  return (
    <Box>
      <PageHeader
        title="Starter"
        breadcrumbItems={[{ label: "Home" }, { label: "Starter" }]}
      />
    </Box>
  );
}
