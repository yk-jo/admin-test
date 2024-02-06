import { DraggableProvided } from "react-beautiful-dnd";
import * as S from "./AutoCompleteList.style";
import { IconButton, ListItem, ListItemText } from "@mui/material";
import MdiIcon from "@/components/MdiIcon";
import { mdiClose } from "@mdi/js";
import { AutocompleteOption } from ".";

interface ListItemProps {
  provided: DraggableProvided;
  item: AutocompleteOption;
  onDelete?: (id: number) => void;
}
export default function DraggableItem({
  provided,
  item,
  onDelete,
}: ListItemProps) {
  return (
    <S.DraggableBox
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      draggablePropsStyle={provided.draggableProps.style}
    >
      <ListItem
        secondaryAction={
          <IconButton edge="end" onClick={() => onDelete?.(item.id)}>
            <MdiIcon path={mdiClose} />
          </IconButton>
        }
      >
        <ListItemText>{item.label}</ListItemText>
      </ListItem>
    </S.DraggableBox>
  );
}
