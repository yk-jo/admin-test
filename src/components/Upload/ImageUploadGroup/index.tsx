import { ChangeEvent, useEffect, useMemo, useState } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  OnDragEndResponder,
} from "react-beautiful-dnd";
import * as S from "../Upload.style";
import ImageItem from "./ImageItem";
import { Button, FormControl, FormHelperText } from "@mui/material";
import { reorder } from "@/utils/dnd";

interface ImageUploadGroupProps {
  accept?: string;
  errorText?: string;
  onDelete?: (index: number) => void;
  onChangeOrder?: (orderedItems: File[]) => void;
}
export default function ImageUploadGroup({
  accept = "image/*",
  errorText,
  onDelete,
  onChangeOrder,
}: ImageUploadGroupProps) {
  const [items, setItems] = useState<File[]>([]);

  const onDragEnd: OnDragEndResponder = (result) => {
    if (!result.destination) {
      return;
    }

    const _items = reorder(
      items,
      result.source.index,
      result.destination.index
    );

    setItems(_items);
    onChangeOrder?.(_items);
  };

  const handleDelete = (index: number) => {
    items.splice(index, 1);
    setItems([...items]);
    onDelete?.(index);
  };

  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setItems([...items, e.target.files[0]]);
    }

    e.target.value = "";
  };

  const fileId = useMemo(() => Math.random().toString(36), []);

  return (
    <FormControl sx={{ width: "100%" }} error={Boolean(errorText)}>
      <S.FileUploadInput
        onChange={handleFileUpload}
        accept={accept}
        id={fileId}
        type="file"
      />

      <S.FileUploadLabel htmlFor={fileId}>
        <S.NoMouseEvent>
          <Button variant="contained" sx={{ mb: 1 }}>
            추가하기
          </Button>
        </S.NoMouseEvent>
        {Boolean(errorText) && <FormHelperText>{errorText}</FormHelperText>}
      </S.FileUploadLabel>
      <DragDropContext onDragEnd={onDragEnd} >
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <S.DroppableBox
              {...provided.droppableProps}
              ref={provided.innerRef}
              error={Boolean(errorText)}
              isDraggingOver={snapshot.isDraggingOver}
            >
              {items?.map((item, index) => {
                const itemId = `image-${index}`;
                return (
                  <Draggable key={itemId} draggableId={itemId} index={index}>
                    {(provided) => (
                      <ImageItem
                        {...{
                          provided,
                          item,
                          index,
                          onDelete: handleDelete,
                        }}
                      />
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </S.DroppableBox>
          )}
        </Droppable>
      </DragDropContext>
    </FormControl>
  );
}
