import { FormControl, FormHelperText, Typography } from "@mui/material";
import { ChangeEvent, DragEvent, MouseEvent, useMemo, useState } from "react";
import * as S from "./Upload.style";
import MdiIcon from "../MdiIcon";
import { mdiCloudUpload, mdiDeleteOutline } from "@mdi/js";

interface ImageUploadProps {
  accept?: string;
  hoverLabel?: string;
  dropLabel?: string;
  width?: string;
  height?: string;
  image?: File | null;
  errorText?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onDrop: (event: DragEvent<HTMLElement>) => void;
}
export default function ImageUpload({
  accept = "image/*",
  hoverLabel = "Click or drag to upload file",
  dropLabel = "Drop file here",
  width = "100px",
  height = "100px",
  image: _image = null,
  errorText,
  onChange,
  onDrop,
}: ImageUploadProps) {
  const [image, setImage] = useState<File | null>(_image);
  const [labelText, setLabelText] = useState<string>(hoverLabel);
  const [isDragOver, setIsDragOver] = useState<boolean>(false);
  const [isMouseOver, setIsMouseOver] = useState<boolean>(false);

  const dragEvents = {
    onMouseEnter: () => setIsMouseOver(true),
    onMouseLeave: () => setIsMouseOver(false),
    onDragEnter: (e: DragEvent) => {
      e.stopPropagation();
      e.preventDefault();
      setIsDragOver(true);
      setLabelText(dropLabel);
    },
    onDragLeave: (e: DragEvent) => {
      e.stopPropagation();
      e.preventDefault();
      setIsDragOver(false);
      setLabelText(hoverLabel);
    },
    onDragOver: (e: DragEvent) => {
      e.stopPropagation();
      e.preventDefault();
    },
    onDrop: (e: DragEvent<HTMLElement>) => {
      e.stopPropagation();
      e.preventDefault();
      setLabelText(hoverLabel);
      setIsDragOver(false);
      if (e.dataTransfer.files[0]) {
        setImage(e.dataTransfer.files[0]);
      }
      onDrop(e);
    },
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
      onChange(e);
    }

    e.target.value = "";
  };

  const handleDelete = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setImage(null);
  };

  const fileId = useMemo(() => Math.random().toString(36), []);

  return (
    <FormControl sx={{ width }} error={Boolean(errorText)}>
      <S.FileUploadInput
        onChange={handleChange}
        accept={accept}
        id={fileId}
        type="file"
      />

      <S.FileUploadLabel
        htmlFor={fileId}
        {...dragEvents}
        isDragOver={isDragOver}
      >
        {image ? (
          <S.ImageBox
            isOver={isDragOver || isMouseOver}
            error={Boolean(errorText)}
            sx={{ width, height }}
          >
            <img alt="file-image" src={URL.createObjectURL(image)} />
            <S.DeleteButton onClick={handleDelete}>
              <MdiIcon path={mdiDeleteOutline} />
            </S.DeleteButton>
          </S.ImageBox>
        ) : (
          <S.NoMouseEvent sx={{ width, height }}>
            <S.IconTextBox
              isOver={isDragOver || isMouseOver}
              error={Boolean(errorText)}
              sx={{ width, height }}
            >
              <MdiIcon path={mdiCloudUpload} size={1.5} />
              <Typography>{labelText}</Typography>
            </S.IconTextBox>
          </S.NoMouseEvent>
        )}
      </S.FileUploadLabel>
      {Boolean(errorText) && <FormHelperText>{errorText}</FormHelperText>}
    </FormControl>
  );
}
