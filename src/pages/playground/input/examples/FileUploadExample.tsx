import { ImageUpload } from "@/components/Upload";
import { Box } from "@mui/material";

export default function FileUploadExample() {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"flex-start"}
      gap={1}
    >
      <ImageUpload
        onChange={(e) => {
          console.log(e);
        }}
        onDrop={(e) => {
          console.log(e);
        }}
      />
      <ImageUpload
        width="100%"
        height="150px"
        onChange={(e) => {
          console.log(e);
        }}
        onDrop={(e) => {
          console.log(e);
        }}
      />
    </Box>
  );
}
