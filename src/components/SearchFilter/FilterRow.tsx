import { InputRefType } from "@/types/common";
import { Grid, Typography } from "@mui/material";
import {
  ForwardedRef,
  ReactElement,
  cloneElement,
  forwardRef,
  useImperativeHandle,
  useRef,
} from "react";

export type FilterRowRefType = { clear: () => void };

interface FilterRowProps {
  title: string;
  children: ReactElement;
}
function FilterRow(
  { title, children }: FilterRowProps,
  ref: ForwardedRef<FilterRowRefType>
) {
  const _ref = useRef<InputRefType>(null);

  useImperativeHandle(ref, () => ({
    clear: () => _ref.current?.clear(),
  }));

  return (
    <Grid container alignItems={"center"}>
      <Grid item xs={2}>
        <Typography>{title}</Typography>
      </Grid>
      <Grid item xs={10} sm={10} md={8} lg={6}>
        {cloneElement(children, { ref: _ref })}
      </Grid>
    </Grid>
  );
}
export default forwardRef(FilterRow);
