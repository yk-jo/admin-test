import { Palette } from "@mui/material";
import { TypographyOptions } from "@mui/material/styles/createTypography";

const _typography:
  | TypographyOptions
  | ((palette: Palette) => TypographyOptions) = {
  h1: {
    fontSize: "34px",
  },
  h2: {
    fontSize: "30px",
  },
  h3: {
    fontSize: "24px",
  },
  h4: {
    fontSize: "20px",
  },
  h5: {
    fontSize: "18px",
  },
  h6: {
    fontSize: "16px",
  },
  body1: {
    fontSize: "12px",
  },
  fontFamily: "Nunito, 'Noto Sans KR'",
  fontSize: 12,
};

export default _typography;
