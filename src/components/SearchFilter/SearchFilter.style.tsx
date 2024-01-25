import { IconButton, IconButtonTypeMap } from "@mui/material";
import { styled } from "@mui/material/styles";
import { DefaultComponentProps } from "@mui/material/OverridableComponent";
import MdiIcon from "../MdiIcon";
import { mdiRefresh } from "@mdi/js";

export const RenewIconButton = styled(
  (props: DefaultComponentProps<IconButtonTypeMap>) => (
    <IconButton {...props}>
      <MdiIcon path={mdiRefresh} />
    </IconButton>
  )
)(({ theme }) => ({
  padding: theme.spacing(0.5),
}));
