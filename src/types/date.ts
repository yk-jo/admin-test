import { Dayjs } from "dayjs";

export type RangeDateType = {
  start: Dayjs | null;
  end: Dayjs | null;
};

export type DatePickerRefType = {
  closeDialog: () => void;
};
