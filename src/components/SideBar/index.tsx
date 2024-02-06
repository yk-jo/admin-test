import { List } from "@mui/material";
import { ReactNode, useEffect } from "react";
import { SideBarMenu } from "@/types/config";
import MenuItem from "./MenuItem";
import * as S from "./SideBar.style";
import useResponsive from "@/hooks/useResponsive";
import { subscribe, unsubscribe } from "@/utils/events";
import { useToggle } from "react-use";
import MdiIcon from "../MdiIcon";
import { mdiArrowLeft } from "@mdi/js";
import Logo from "./Logo";

interface SideBarProps {
  children: ReactNode;
  menuItems: SideBarMenu[];
  enableSubHeader?: boolean;
  src?: {
    logo: string;
    icon: string;
  };
  onOpen?: (open: boolean) => void;
}
export default function SideBar({
  children,
  menuItems,
  enableSubHeader,
  src,
  onOpen,
}: SideBarProps) {
  const [open, toggleOpen] = useToggle(false);

  const { isXs, mediaQuery } = useResponsive();
  const isUpMd = mediaQuery("md", "up");

  const handleToggleSideBar = (e: any) => {
    toggleOpen(e.detail);
  };

  useEffect(() => {
    subscribe("onToggleSideBar", handleToggleSideBar);
    return () => {
      unsubscribe("onToggleSideBar", handleToggleSideBar);
    };
  }, []);

  useEffect(() => {
    // 사이드바 펼쳐진 상태에서 화면이 줄어들면 사이드바 접기
    if (!isUpMd && open) toggleOpen();
  }, [isUpMd]);

  useEffect(() => onOpen?.(open), [open]);

  return (
    <S.SideBarContainer>
      <S.CustomDrawer variant={isXs ? "temporary" : "permanent"} open={open}>
        {isXs && (
          <S.CloseDrawerButton onClick={toggleOpen}>
            <MdiIcon path={mdiArrowLeft} />
          </S.CloseDrawerButton>
        )}
        <Logo full={open} srcLogo={src?.logo} srcLogoIcon={src?.icon} />
        {menuItems && (
          <List sx={{ padding: 0 }}>
            <MenuItem
              items={menuItems}
              rootBarOpen={open}
              enableSubHeader={enableSubHeader}
            />
          </List>
        )}
      </S.CustomDrawer>
      {children}
    </S.SideBarContainer>
  );
}
