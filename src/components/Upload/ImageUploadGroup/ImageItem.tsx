import { MouseEvent, useMemo } from "react";
import { Box, Typography } from "@mui/material";
import { DraggableProvided, DraggableStateSnapshot } from "react-beautiful-dnd";
import * as S from "../Upload.style";
import MdiIcon from "@/components/MdiIcon";
import { mdiDeleteOutline } from "@mdi/js";

interface ImageItemProps {
  provided: DraggableProvided;
  item: File;
  index: number;
  onDelete?: (index: number) => void;
}
export default function ImageItem({
  provided,
  item,
  index,
  onDelete,
}: ImageItemProps) {
  const handleDelete = (e: MouseEvent<HTMLButtonElement>, index: number) => {
    e.preventDefault();
    onDelete?.(index);
  };

  const src = useMemo(() => URL.createObjectURL(item), [item]);

  return (
    <S.DraggableBox
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      draggablePropsStyle={provided.draggableProps.style}
    >
      <Box>
        <img alt="file-image" src={src} />
        <S.DeleteButton onClick={(e) => handleDelete(e, index)}>
          <MdiIcon path={mdiDeleteOutline} />
        </S.DeleteButton>
      </Box>
      <Typography>{item.name}</Typography>
    </S.DraggableBox>
  );
}
