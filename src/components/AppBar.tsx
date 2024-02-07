import {
  Box,
  IconButton,
  AppBar as MUIAppBar,
  Toolbar,
  Typography,
} from "@mui/material";
import { publish } from "@/utils/events";
import MdiIcon from "./MdiIcon";
import { mdiLogout, mdiMenu } from "@mdi/js";

interface AppBarProps {
  title?: string;
  onClickLogout?: () => void;
}
export default function AppBar({ title, onClickLogout }: AppBarProps) {
  const open = () => {
    publish("onToggleSideBar");
  };

  return (
    <MUIAppBar position="static">
      <Toolbar>
        <IconButton
          onClick={open}
          sx={(theme) => ({
            color: theme.palette.appbar.appbarItemColor,
          })}
        >
          <MdiIcon path={mdiMenu} />
        </IconButton>
        {title && <Typography variant="h5">{title}</Typography>}
        <Box
          sx={(theme) => ({
            flexGrow: 1,
            color: theme.palette.appbar.appbarItemColor,
          })}
        />
        <IconButton
          onClick={onClickLogout}
          sx={(theme) => ({
            color: theme.palette.appbar.appbarItemColor,
          })}
        >
          <MdiIcon path={mdiLogout} />
        </IconButton>
      </Toolbar>
    </MUIAppBar>
  );
}
