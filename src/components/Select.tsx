import {
  FormControl,
  FormHelperText,
  Select as MUISelect,
  MenuItem,
  SelectChangeEvent,
  SxProps,
  Theme,
} from "@mui/material";

interface SelectProps {
  value: string;
  disabled?: boolean;
  items: {
    label: string;
    value: string;
  }[];
  fullWidth?: boolean;
  errorText?: string;
  onChange?: (e: SelectChangeEvent) => void;
  sx?: SxProps<Theme>;
}
export default function Select({
  value,
  disabled,
  items,
  fullWidth,
  errorText,
  sx,
  onChange,
}: SelectProps) {
  return (
    <FormControl fullWidth={fullWidth} error={Boolean(errorText)} sx={sx}>
      <MUISelect
        value={value}
        onChange={onChange}
        disabled={disabled}
        sx={{
          width: fullWidth ? "auto" : "fit-content",
          backgroundColor: "#fff",
        }}
      >
        {items.map((item) => (
          <MenuItem key={item.value} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </MUISelect>
      {Boolean(errorText) && <FormHelperText>{errorText}</FormHelperText>}
    </FormControl>
  );
}
