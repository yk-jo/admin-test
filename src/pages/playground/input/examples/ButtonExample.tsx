import { Box, Button, IconButton } from "@mui/material";
import { DownloadButton } from "@/components/Button";
import MdiIcon from "@/components/MdiIcon";
import { mdiFilePdfBox, mdiMenu } from "@mdi/js";

export default function ButtonExample() {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"flex-start"}
      gap={1}
    >
      Contained
      <Box display={"flex"} gap={1} flexWrap={"wrap"}>
        <Button variant="contained">primary</Button>
        <Button variant="contained" color="secondary">
          secondary
        </Button>
        <Button variant="contained" color="info">
          info
        </Button>
        <Button variant="contained" color="success">
          success
        </Button>
        <Button variant="contained" color="warning">
          warning
        </Button>
        <Button variant="contained" color="error">
          error
        </Button>
        <Button variant="contained" color="inherit">
          inherit
        </Button>
      </Box>
      <Box display={"flex"} gap={1} flexWrap={"wrap"}>
        <Button variant="contained" size="small">
          primary
        </Button>
        <Button variant="contained" color="secondary" size="small">
          secondary
        </Button>
        <Button variant="contained" color="info" size="small">
          info
        </Button>
        <Button variant="contained" color="success" size="small">
          success
        </Button>
        <Button variant="contained" color="warning" size="small">
          warning
        </Button>
        <Button variant="contained" color="error" size="small">
          error
        </Button>
        <Button variant="contained" color="inherit" size="small">
          inherit
        </Button>
      </Box>
      Outlined
      <Box display={"flex"} gap={1} flexWrap={"wrap"}>
        <Button variant="outlined">primary</Button>
        <Button variant="outlined" color="secondary">
          secondary
        </Button>
        <Button variant="outlined" color="info">
          info
        </Button>
        <Button variant="outlined" color="success">
          success
        </Button>
        <Button variant="outlined" color="warning">
          warning
        </Button>
        <Button variant="outlined" color="error">
          error
        </Button>
        <Button variant="outlined" color="inherit">
          inherit
        </Button>
      </Box>
      <Box display={"flex"} gap={1} flexWrap={"wrap"}>
        <Button variant="outlined" size="small">
          primary
        </Button>
        <Button variant="outlined" color="secondary" size="small">
          secondary
        </Button>
        <Button variant="outlined" color="info" size="small">
          info
        </Button>
        <Button variant="outlined" color="success" size="small">
          success
        </Button>
        <Button variant="outlined" color="warning" size="small">
          warning
        </Button>
        <Button variant="outlined" color="error" size="small">
          error
        </Button>
        <Button variant="outlined" color="inherit" size="small">
          inherit
        </Button>
      </Box>
      Download
      <Box display={"flex"} gap={1} flexWrap={"wrap"}>
        <DownloadButton />
      </Box>
      IconButton
      <Box display={"flex"} gap={1} flexWrap={"wrap"}>
        <IconButton>
          <MdiIcon path={mdiMenu} />
        </IconButton>
        <IconButton>
          <MdiIcon path={mdiFilePdfBox} />
        </IconButton>
      </Box>
    </Box>
  );
}
