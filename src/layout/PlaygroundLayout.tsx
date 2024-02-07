import AppBar from "@/components/AppBar";
import SideBar from "@/components/SideBar";
import PathContants from "@/routers/pathConstants";
import { useModalStoreClear } from "@/stores/modalStore";
import { useEffect, useMemo, useState } from "react";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import Logo from "@/assets/images/logo.png";
import LogoIcon from "@/assets/images/logo-icon.png";
import { PlaygroundSideMenu } from "@/config";
import { Box } from "@mui/material";
import Footer from "@/components/Footer";
import * as S from "./layout.style";

const isDev = true; //import.meta.env.DEV;

export default function PlaygroundLayout() {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const location = useLocation();
  const navigate = useNavigate();
  const clear = useModalStoreClear();

  useEffect(() => clear(), [location]);

  const isFull = useMemo(
    () => location.pathname === PathContants.PlaygroundNaverMap,
    [location]
  );
  const isHideAll = useMemo(
    () =>
      location.pathname === PathContants.PlaygroundNaverMap_RoadView ||
      location.pathname === PathContants.PlaygroundSampleLogin,
    [location]
  );

  // 개발환경에서만 UI 샘플을 확인할 수 있음
  return isDev ? (
    <Box component="main">
      {isHideAll ? (
        <Outlet />
      ) : (
        <>
          <SideBar
            src={{ logo: Logo, icon: LogoIcon }}
            menuItems={PlaygroundSideMenu}
            onOpen={setSidebarOpen}
            enableSubHeader
          >
            <S.PageWrapper
              display="flex"
              flexDirection="column"
              fold={!sidebarOpen}
            >
              <AppBar
                onClickLogout={() =>
                  navigate(PathContants.PlaygroundSampleLogin)
                }
              />
              <S.ContentWrapper full={isFull}>
                <Outlet />
              </S.ContentWrapper>
              {!isFull && <Footer />}
            </S.PageWrapper>
          </SideBar>
        </>
      )}
    </Box>
  ) : (
    <Navigate to={PathContants.Home} replace />
  );
}
