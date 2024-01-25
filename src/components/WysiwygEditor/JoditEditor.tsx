import JoditReact, { Jodit } from "jodit-react";
import { useMemo, useRef } from "react";
import { WysiwygProps } from ".";
import { Box } from "@mui/material";

export default function JoditEditor({
  placeholder,
  content,
  onBlur,
  onChange,
}: WysiwygProps) {
  const editor = useRef<Jodit>(null);

  const config = useMemo(
    () => ({
      readonly: false,
      tabIndex: 1,
      placeholder: placeholder || "내용을 입력하세요",
      height: 500,
      toolbarAdaptive: false,
      uploader: {
        insertImageAsBase64URI: true,
      },
      language: "ko",
      buttons: [
        "fullsize",
        "bold",
        "italic",
        "underline",
        "strikethrough",
        "subscript",
        "superscript",
        "|",
        "font",
        "fontsize",
        "brush",
        "paragraph",
        "left",
        "ol",
        "ul",
        "indent",
        "outdent",
        "|",
        "link",
        "image",
        "video",
        "file",
        "table",
        "|",
        "symbols",
        "hr",
        "selectall",
        "eraser",
        "print",
        "source",
        "undo",
        "redo",
      ],
    }),
    []
  );
  return (
    <Box sx={{ width: "100%" }}>
      <JoditReact
        ref={editor}
        value={content}
        config={config}
        onBlur={onBlur}
        onChange={onChange}
      />
    </Box>
  );
}
