import WysiwygEditor from "@/components/WysiwygEditor";
import { Box } from "@mui/material";
import { useState } from "react";

export default function WysiwygExample() {
  const [content, setContent] = useState<string>("");

  const handleChange = (newContent: string) => {
    console.log(newContent);
    setContent(newContent);
  };

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"flex-start"}
      gap={1}
    >
      <WysiwygEditor content={content} onChange={handleChange} />
    </Box>
  );
}
