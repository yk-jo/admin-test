import { Grid, GridSize } from "@mui/material";
import { Children, ReactElement } from "react";

interface GridSystemProps {
  children: ReactElement | ReactElement[];
}
function GridSystem({ children }: GridSystemProps) {
  Children.forEach(children, (child) => {
    if (typeof child !== "string" && child?.type !== GridItem) {
      throw new Error("Grid's children type was mismatch");
    }
  });

  return (
    <Grid
      container
      spacing={2}
      sx={(theme) => ({
        [theme.breakpoints.down("md")]: {
          flexDirection: "column",
        },
      })}
    >
      {children}
    </Grid>
  );
}

interface GridItemProps {
  children: ReactElement | ReactElement[];
  xs?: boolean | GridSize;
  sm?: boolean | GridSize;
  md?: boolean | GridSize;
  lg?: boolean | GridSize;
  xl?: boolean | GridSize;
}
function GridItem({ children, xs = 12, sm = 12, md, lg, xl }: GridItemProps) {
  return (
    <Grid
      item
      xs={xs}
      sm={sm}
      md={md}
      lg={lg}
      xl={xl}
      sx={(theme) => ({
        display: "flex",
        flexDirection: "column",
        gap: theme.spacing(2),
      })}
    >
      {children}
    </Grid>
  );
}

export default Object.assign(GridSystem, { Item: GridItem });
