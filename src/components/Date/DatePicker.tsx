import { DatePickerRefType } from "@/types/date";
import { DatePicker as MUIDatePicker } from "@mui/x-date-pickers";
import { Dayjs } from "dayjs";
import { ForwardedRef, forwardRef, useImperativeHandle, useState } from "react";
import MdiIcon from "../MdiIcon";
import { mdiCalendar } from "@mdi/js";

export interface DatePickerProps {
  value?: Dayjs | null;
  fullWidth?: boolean;
  shouldDisableDate?: (day: Dayjs | null) => boolean;
  onChange?: (value: Dayjs | null) => void;
  onOpen?: () => void;
}
export default forwardRef(function DatePicker(
  {
    value = null,
    fullWidth,
    shouldDisableDate,
    onChange,
    onOpen,
  }: DatePickerProps,
  ref: ForwardedRef<DatePickerRefType>
) {
  const [open, setOpen] = useState<boolean>(false);

  const handleClear = () => {
    onChange?.(null);
  };
  const handleChange = (value: Dayjs | null) => {
    onChange?.(value);
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen((p) => {
      const _open = !p;
      if (_open) onOpen?.();
      return _open;
    });
  };

  useImperativeHandle(ref, () => ({
    closeDialog: () => setOpen(false),
  }));

  return (
    <MUIDatePicker
      format="YYYY-MM-DD"
      value={value}
      open={open}
      slotProps={{
        field: {
          clearable: true,
          onClear: handleClear,
          onKeyDown: (e) => e.preventDefault(),
        },
        textField: {
          onClick: handleOpen,
        },
      }}
      shouldDisableDate={shouldDisableDate}
      onChange={handleChange}
      sx={{
        width: fullWidth ? "100%" : "fit-content",
      }}
    />
  );
});
