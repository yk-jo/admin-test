import { Box, IconButton, AppBar as MUIAppBar, Toolbar } from "@mui/material";
import { publish } from "@/utils/events";
import useResponsive from "@/hooks/useResponsive";
import MdiIcon from "./MdiIcon";
import { mdiLogout, mdiMenu } from "@mdi/js";

interface AppBarProps {
  onClickLogout?: () => void;
}
export default function AppBar({ onClickLogout }: AppBarProps) {
  const { isXs, isSm } = useResponsive();

  const open = () => {
    publish("onToggleSideBar");
  };

  return (
    <MUIAppBar position="static">
      <Toolbar>
        {(isSm || isXs) && (
          <IconButton
            onClick={open}
            sx={(theme) => ({
              color: theme.palette.appbar.appbarItemColor,
            })}
          >
            <MdiIcon path={mdiMenu} />
          </IconButton>
        )}
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
