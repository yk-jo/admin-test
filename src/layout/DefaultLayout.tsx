import AppBar from "@/components/AppBar";
import SideBar from "@/components/SideBar";
import PathContants from "@/routers/pathConstants";
import { useModalStoreClear } from "@/stores/modalStore";
import { Box } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import * as S from "./layout.style";
import { SidebarMenus } from "@/config";
import Footer from "@/components/Footer";
import { getMenuTitle } from "@/utils/config";
import Logo from "@/assets/images/mobble-logo.png";
import LogoIcon from "@/assets/images/mobble-logo-icon.png";

export default function DefaultLayout() {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const location = useLocation();
  const navigate = useNavigate();
  const clear = useModalStoreClear();

  useEffect(() => clear(), [location]);

  const isFull = useMemo(
    () => location.pathname === PathContants.RealTimeLocation,
    [location]
  );
  const isHideAll = useMemo(
    () => location.pathname === PathContants.PlaygroundSampleLogin,
    [location]
  );

  const isHome = useMemo(
    () => location.pathname === PathContants.Home,
    [location]
  );

  if (isHome) return <Navigate to={PathContants.RealTimeLocation} replace />;

  return (
    <Box component="main">
      {isHideAll ? (
        <Outlet />
      ) : (
        <>
          <SideBar
            src={{ logo: Logo, icon: LogoIcon }}
            menuItems={SidebarMenus}
            onOpen={setSidebarOpen}
            enableSubHeader
          >
            <S.PageWrapper
              display="flex"
              flexDirection="column"
              fold={!sidebarOpen}
            >
              <AppBar title={getMenuTitle(location.pathname)} />
              <S.ContentWrapper full={isFull}>
                <Outlet />
              </S.ContentWrapper>
              {!isFull && <Footer />}
            </S.PageWrapper>
          </SideBar>
        </>
      )}
    </Box>
  );
}
