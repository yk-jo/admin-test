import { InputRefType } from "@/types/common";
import { TextField } from "@mui/material";
import {
  ForwardedRef,
  HTMLInputTypeAttribute,
  forwardRef,
  useImperativeHandle,
} from "react";

interface InputProps {
  value?: string;
  placeholder?: string;
  multiline?: boolean;
  multilineRow?: number;
  disabled?: boolean;
  type?: HTMLInputTypeAttribute;
  errorText?: string;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}
export default forwardRef(function Input(
  {
    value,
    placeholder,
    onChange,
    multiline,
    multilineRow = 5,
    disabled,
    type = "text",
    errorText,
  }: InputProps,
  ref: ForwardedRef<InputRefType>
) {
  useImperativeHandle(ref, () => ({
    clear: () => onChange?.({ target: { value: "" } } as any),
  }));

  return (
    <TextField
      variant="outlined"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      fullWidth
      multiline={multiline}
      rows={multilineRow}
      disabled={disabled}
      error={Boolean(errorText)}
      helperText={errorText}
      sx={{ backgroundColor: "#fff" }}
    />
  );
});
