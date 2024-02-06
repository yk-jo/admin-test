import { ImageUpload, ImageUploadGroup } from "@/components/Upload";

import { Box } from "@mui/material";
import { useState } from "react";

export default function FileUploadExample() {
  const [images, setImages] = useState<File[]>([]);
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"flex-start"}
      gap={1}
    >
      <ImageUpload
        onChange={(e) => {
          console.log(e.target.files);
          if (e.target.files && e.target.files.length) {
            setImages([...images, e.target.files[0]]);
          }
        }}
        onDrop={(e) => {
          console.log(e);
        }}
      />
      <ImageUpload
        onChange={(e) => {
          console.log(e.target.files);
          if (e.target.files && e.target.files.length) {
            setImages([...images, e.target.files[0]]);
          }
        }}
        onDrop={(e) => {
          console.log(e);
        }}
        errorText="error text"
      />
      <Box height={20} />
      fullWidth
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
      <ImageUpload
        width="100%"
        height="150px"
        onChange={(e) => {
          console.log(e);
        }}
        onDrop={(e) => {
          console.log(e);
        }}
        errorText="error text"
      />
      <Box height={40} />
      이미지 그룹 (400px)
      <Box width={"100%"} maxWidth={400}>
        <ImageUploadGroup />
        <Box height={20} />
        <ImageUploadGroup errorText="error text" />
      </Box>
      이미지 그룹 (fullWidth)
      <ImageUploadGroup />
      <Box height={20} />
      <ImageUploadGroup errorText="error text" />
    </Box>
  );
}
