import { Dayjs } from "dayjs";
import { Nullable } from "./common";

export type RangeDateType = {
  start: Nullable<Dayjs>;
  end: Nullable<Dayjs>;
};

export type DatePickerRefType = {
  closeDialog: () => void;
};
