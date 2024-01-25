import { InputRefType } from "@/types/common";
import {
  FormControlLabel,
  RadioGroup as MUIRadioGroup,
  Radio,
} from "@mui/material";
import {
  ChangeEventHandler,
  ForwardedRef,
  forwardRef,
  useImperativeHandle,
} from "react";

interface RadioGroupProps {
  direction?: "row" | "column";
  items: { label: string; value: string }[];
  value: string;
  disabled?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}
export default forwardRef(function RadioGroup(
  { direction = "row", items, value, disabled, onChange }: RadioGroupProps,
  ref: ForwardedRef<InputRefType>
) {
  useImperativeHandle(ref, () => ({
    clear: () => onChange?.({ target: { value: items[0].value } } as any),
  }));

  return (
    <MUIRadioGroup row={direction === "row"} value={value} onChange={onChange}>
      {items.map((item) => (
        <FormControlLabel
          key={item.value}
          value={item.value}
          control={<Radio size="small" />}
          label={item.label}
          disabled={disabled}
        />
      ))}
    </MUIRadioGroup>
  );
});
