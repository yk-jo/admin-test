import {
  Select as MUISelect,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";

interface SelectProps {
  value: string;
  disabled?: boolean;
  items: {
    label: string;
    value: string;
  }[];
  fullWidth?: boolean;
  onChange?: (e: SelectChangeEvent) => void;
}
export default function Select({
  value,
  disabled,
  items,
  fullWidth,
  onChange,
}: SelectProps) {
  return (
    <MUISelect
      value={value}
      onChange={onChange}
      disabled={disabled}
      fullWidth={fullWidth}
    >
      {items.map((item) => (
        <MenuItem key={item.value} value={item.value}>
          {item.label}
        </MenuItem>
      ))}
    </MUISelect>
  );
}
