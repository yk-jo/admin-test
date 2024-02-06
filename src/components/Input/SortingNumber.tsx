import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Input,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { ChangeEvent, useState } from "react";

interface SortingNumberProps {
  placeholder?: string;
  disabled?: boolean;
  errorText?: string;
  onSave?: (value: number) => void;
}
export default function SortingNumber({
  placeholder,
  disabled,
  errorText,
  onSave,
}: SortingNumberProps) {
  const [value, setValue] = useState<number>(0);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const num = Number(e.target.value);
    if (Number.isInteger(num) && num >= 0) {
      e.preventDefault();
      setValue(num);
    }
  };

  return (
    <Box display={"flex"} gap={1} alignItems={"flex-start"}>
      <FormControl error={Boolean(errorText)} sx={{ width: "100%" }}>
        <Box sx={{ display: "flex", gap: 1 }}>
          <OutlinedInput
            type="number"
            inputProps={{ inputMode: "numeric" }}
            onChange={handleChange}
            disabled={disabled}
            value={value}
            placeholder={placeholder}
            sx={{ maxWidth: 100 }}
          />
          <Button
            variant="contained"
            color="secondary"
            onClick={() => onSave?.(value)}
          >
            저장
          </Button>
        </Box>

        {Boolean(errorText) && <FormHelperText>{errorText}</FormHelperText>}
      </FormControl>
    </Box>
  );
}
