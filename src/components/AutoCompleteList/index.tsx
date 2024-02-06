// https://mui.com/material-ui/react-autocomplete/

import {
  Autocomplete,
  Box,
  FormControl,
  FormHelperText,
  TextField,
} from "@mui/material";
import { SyntheticEvent, useState } from "react";
import {
  DragDropContext,
  Draggable,
  Droppable,
  OnDragEndResponder,
} from "react-beautiful-dnd";
import DraggableItem from "./DraggableItem";
import * as S from "./AutoCompleteList.style";
import { reorder } from "@/utils/dnd";
import { Nullable } from "@/types/common";

export type AutocompleteOption = { label: string; id: number };
interface AutoCompleteListProps {
  options: AutocompleteOption[];
  errorText?: string;
  onChangeOrder?: (orderedItems: AutocompleteOption[]) => void;
}
export default function AutoCompleteList({
  options,
  errorText,
  onChangeOrder,
}: AutoCompleteListProps) {
  const [value, setValue] = useState<Nullable<AutocompleteOption>>(null);
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState<AutocompleteOption[]>([]);

  const handleDragEnd: OnDragEndResponder = (result) => {
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

  const handleSelectChange = (
    e: SyntheticEvent,
    value: Nullable<AutocompleteOption>
  ) => {
    setValue(value);

    if (value && !items.includes(value)) {
      setItems([...items, value]);
    }
  };

  const handleInputchange = (e: SyntheticEvent, value: string) => {
    setInputValue(value);
  };

  const getOptionDisabled = (option: AutocompleteOption) => {
    return items.includes(option);
  };

  const handleDelete = (id: number) => {
    setItems(items?.filter((item) => item.id !== id));
  };

  return (
    <Box sx={{ width: "100%" }}>
      <FormControl
        sx={(theme) => ({
          width: "100%",
          maxWidth: 400,
          mb: 1,
          ...(Boolean(errorText) && {
            ".MuiOutlinedInput-notchedOutline": {
              borderColor: theme.palette.error.main,
            },
          }),
        })}
        error={Boolean(errorText)}
      >
        <Autocomplete
          value={value}
          onChange={handleSelectChange}
          inputValue={inputValue}
          onInputChange={handleInputchange}
          getOptionDisabled={getOptionDisabled}
          options={options}
          renderInput={(params) => (
            <TextField {...params} placeholder="내용을 선택해주세요." />
          )}
        />
        {Boolean(errorText) && <FormHelperText>{errorText}</FormHelperText>}
      </FormControl>

      <DragDropContext onDragEnd={handleDragEnd}>
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
                      <DraggableItem
                        {...{ provided, item, onDelete: handleDelete }}
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
    </Box>
  );
}
