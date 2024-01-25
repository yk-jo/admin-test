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
  disabled?: boolean;
  type?: HTMLInputTypeAttribute;
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
    disabled,
    type = "text",
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
      rows={multiline ? 5 : undefined}
      disabled={disabled}
    />
  );
});
